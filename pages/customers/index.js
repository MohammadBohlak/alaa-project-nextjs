import { ValidationError, useForm } from "@formspree/react";
import axios from "axios";
import Link from "next/link";
import { useState, useEffect } from "react";
// import { useForm, ValidationError } from "@formspree/react";
// import { useForm, ValidationError } from '@formspree/react';

// let x = true ;
export const url = "https://alaa-project-nextjs-9hhq.vercel.app"

///////////
// export const url = "http://localhost:3000";
export const getPrice = (value) => value * 1.25;
export const getCost = (value) => value * 1.043;
export default function Customer() {
  const [state, handleSubmit] = useForm("mqazogok");
  if (state.succeeded) {
    alert("تم الارسال بنجاح");
  }
  const [data, setData] = useState([]);
  const fetchData = () => {
    axios.get(`${url}/api/posts`).then((res) => {
      let dataOrdered = res.data.sort((a, b) => {
        let nameA = a.name.toUpperCase();
        let nameB = b.name.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
      setData(dataOrdered);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);
  async function deleteCustomer(e) {
    let x = window.confirm(`هل أنت متأكد من حذف بيانات ${e.name}  ؟`);
    if (x) {
      axios.delete(`${url}/api/posts/${e._id}`).then(() => {
        fetchData();
      });
    }
  }
  let total = data.reduce((acc, curr) => {
    if (!acc[curr.name]) {
      acc[curr.name] = {
        name: curr.name,
        value: curr.value,
        price: curr.price,
        cost: curr.cost,
      };
    } else {
      acc[curr.name].value += curr.value;
      acc[curr.name].price += curr.price;
      acc[curr.name].cost += curr.cost;
    }
    return acc;
  }, {});
  let uniqueTotal = Object.values(total); 
  let dataCompleteSend = ""
  let dataComplete = data.map((e)=>{
    let item = `
    الاسم : ${e.name} 
    قيمة الرصيد : ${e.value} 
    السعر: ${e.price}
    التاريخ : ${e.date}
    `
    dataCompleteSend+= item + '\n'
    return e
  })
    
    let dataNotCompleteSend = ""
    let dataNotComplete = uniqueTotal.map((e)=>{
        let item = `
        الاسم : ${e.name} 
        المبلغ الكلي: ${e.price}
        `
        dataNotCompleteSend+= item + '\n'
        return e
      })
      
  const [textAreaData , setTextAreaData] = useState("")
  const [email , setEmail] = useState('abuomarcom4@gmail.com')
  function sendGmail(isComplete){
    if(isComplete){
        setTextAreaData(dataCompleteSend)
        // setEmail('abuomarcom4@gmail.com')
    }
    else {
        setTextAreaData(dataNotCompleteSend)
        // setEmail('abuomarcom4@gmail.com')
    }
  }
  return (

    <div>

          
          
 
      <div className="add-customer">
        <Link href="/customers/addcustomer">
          <button>إضافة زبون</button>
        </Link>
      </div>
      <table className="table-customers" dir="rtl">
        <thead>
          <tr>
            <th>الاسم</th>
            <th>قيمة الرصيد</th>
            <th>السعر</th>
            <th>التكلفة</th>
            <th>التاريخ</th>
            <th>الحدث المراد</th>
          </tr>
        </thead>
        <tbody>
           {data.map((e) => {
            return (
              <tr key={e._id}>
                <td>{e.name}</td>
                <td>{e.value}</td>
                <td>{e.price.toFixed(0)}</td>
                <td>{e.cost.toFixed(0)}</td>
                <td>{e.date}</td>
                <td className="actions-buttons">
                  <button
                    onClick={() => {
                      deleteCustomer(e);
                    }}
                    className="del-btn"
                  >
                    حذف
                  </button>
                  <Link href={`/customers/edit/${e._id}`}>
                    <button className="edit-btn">تعديل</button>
                  </Link>
                  <Link href={`/customers/add/${e._id}`}>
                    <button className="add-btn">إضافة رصيد</button>
                  </Link>
                  <Link href={`/customers/addcost/${e._id}`}>
                    <button className="add-cost-btn">إضافة مبلغ</button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <h3 style={{ marginTop: "30px" }}>جدول الإحصائيات</h3>
      <table className="table-customers" dir="rtl">
        <thead>
          <tr>
            <th>الاسم</th>
            <th>قيمة الرصيد</th>
            <th>السعر</th>
            <th>التكلفة</th>
          </tr>
        </thead>
        <tbody>
          {uniqueTotal.map((e, index) => {
            return (
              <tr key={index}>
                <td>{e.name}</td>
                <td>{e.value}</td>
                <td>{Number(e.price).toFixed(0)}</td>
                <td>{Number(e.cost).toFixed(0)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <form onSubmit={handleSubmit} className="gmail-form">
          <div className="desc-buttons">
          <button type="button" onClick={()=>{
            sendGmail(true)
          }}>
            إرسال كامل البيانات
          </button>
          <button type="button" onClick={()=>{
            sendGmail(false)
          }}>
            إرسال البيانات الإحصائية فقط
          </button>
          </div>
            <div style={{position:'absolute' , visibility:"hidden"}}>
            <label htmlFor="email">Email Address</label>
            <input id="email" type="email" name="email" value = {email} onChange={()=>{}} />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>
            <div className="cotainer-textarea">
            <textarea id="message" name="message" value = {textAreaData} onChange={
                (e)=>{
                    setTextAreaData(e.target.value)
                }
            } />
            </div>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <div className="container-submit-btn">
           <button id="submitGmailBtn" type="submit" disabled={state.submitting}>
              إرسال
            </button>
           </div>
          
          </form>

      
    </div>
  );
}

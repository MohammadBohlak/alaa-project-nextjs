import axios from "axios"
import Link from "next/link";
import { useState , useEffect } from "react"

let x = true ; 
export const url = "https://alaa-project-nextjs-9hhq.vercel.app/api/posts"
export default function Customer(){
    const [data,setData] = useState([])
    const fetchData= ()=>{
        axios.get(`${url}/api/posts`)
        .then((res)=>{
            setData(res.data)})
    }
    console.log(data)

    useEffect(()=>{
        fetchData()
    },[])
    async function deleteCustomer(e){

        let x = window.confirm(`هل أنت متأكد من حذف بيانات ${e.name}  ؟`)
        if(x){
            axios.delete(`${url}/api/posts/${e._id}`)
        .then(()=>{
            fetchData()
        })
        }
        
    }
    
    return (
        
        <div>
            <div className="add-customer">
                <Link href = "/customers/addcustomer">
                    <button>
                        إضافة زبون
                    </button>
                </Link>
            </div>
            <table className="table-customers" dir="rtl">
                <thead>
                    <tr>
                        <th>الاسم</th>
                        <th>قيمة الرصيد</th>
                        <th>السعر</th>
                        <th>التكلفة</th>
                        <th>الحدث المراد</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((e)=>{
                        return (
                            <tr key={e._id}>
                                <td>{e.name}</td>
                                <td>{e.value}</td>
                                <td>{e.price}</td>
                                <td>{e.cost}</td>
                                <td className="actions-buttons">
                                    <button onClick={()=>{
                                        deleteCustomer(e)
                                    }} className="del-btn">حذف</button>
                                    <Link href={`/customers/edit/${e._id}`}>
                                        <button className="edit-btn" >تعديل</button>
                                    </Link>
                                    <Link href={`/customers/add/${e._id}`}>
                                        <button className="add-btn">إضافة</button>
                                    </Link>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
           
        </div>
    )
}


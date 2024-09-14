import axios from "axios"
import Link from "next/link";
import { useState , useEffect } from "react"

let x = true ; 
const url = "http://localhost:3000"
export default function Customer(){
    const [data,setData] = useState([])
    const fetchData= ()=>{
        axios.get("http://localhost:3000/api/posts")
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
    function editCustomer(e){
        console.log(e)
    }
    return (
        
        <div>
            <table className="table" dir="rtl">
                <thead>
                    <tr>
                        <td>الاسم</td>
                        <td>قيمة الرصيد</td>
                        <td>السعر</td>
                        <td>التكلفة</td>
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
                                <td>
                                    <button onClick={()=>{
                                        deleteCustomer(e)
                                    }}>حذف</button>
                                    <Link href="/customers/edit">
                                        <button onClick={()=>{
                                            editCustomer(e)
                                        }}>تعديل</button>
                                    </Link>
                                    <button>إضافة</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
           
        </div>
    )
}


import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { url } from '../index'


export default function Add(){
    const [customer , setCustomer] = useState({})
    const [value,setValue] = useState(0)
    const router = useRouter()
    const { id } = router.query
    useEffect(()=>{
        axios.get(`${url}/api/posts/${id}`)
        .then((res)=>{
            // setValue(0)
            setCustomer(res.data) 
        })
    },[])
    function addValue(){
        let newValue =  customer.value + Number(value)
        
        axios.put(`${url}/api/posts/${id}`,{
            name : customer.name ,
            value : newValue
        }).then((res)=>{
            router.push('/customers')
        })
    }
    return(
        <div>   
        <form className="edit-modal" onSubmit={(e)=>{
            e.preventDefault()
        }}>
            <div style={{
                display:'flex', 
                flexDirection:'column',
                justifyContent:'center'
            }}>
                
                <label style={{marginBottom:'5px'}}>
                    أدخل القيمة المراد إضافتها
                </label>
                <input type="text" value = {value} onChange={(e)=>{
                    setValue(e.target.value)
                }} />
            </div>
            <div className='buttons'>
            <button onClick={()=>{
                addValue()
            }} className='ok'>تم</button>
            <Link href="/customers">
            <button className='back'>تراجع</button>
            </Link>
            </div>
        </form>
</div>
    )
}
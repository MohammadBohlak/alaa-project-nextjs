
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { url } from '../index'
// console.log(url)
export default function EditId(){
  
    let currentDate = new Date();
    let day = currentDate.getDate();
    let month = currentDate.getMonth() + 1
    let year = currentDate.getFullYear();
    const date = `${day}/${month}/${year}`

    const router = useRouter()
    const [name , setName] = useState('')
    const [value , setValue] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
      };

      function addCustomer(id){
        axios.post(`${url}/api/posts`,{
            name:name,
            value : Number(value), 
            date : date
        }).then(()=>{
            router.push('/customers');
        })
    }
    return (
        <div>   
        <form className="edit-modal" onSubmit={handleSubmit}>
            <div>
                <label>
                    name
                </label>
                <input type="text" value = {name} onChange={(e)=>{
                    setName(e.target.value)
                }} />
            </div>
            <div>
                <label>
                    value
                </label>
                <input type="text" value = {value} onChange={(e)=>{
                    setValue(e.target.value)
                }} />
            </div>
            <div className='buttons'>
            <button onClick={()=>{
                addCustomer()   
            }} className='ok'>تم</button>
            <Link href="/customers">
            <button className='back'>تراجع</button>
            </Link>
            </div>
        </form>
</div>
    )
}
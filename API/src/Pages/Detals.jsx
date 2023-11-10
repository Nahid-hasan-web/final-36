import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Detals = () => {
    const params = useParams()
    console.log(params)

   
    
    const [user , setUser] = useState([])
    console.log(user)
    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/users/${params.id}`

        fetch(url)
        .then(res => res.json())
        .then(data => setUser(data))
    },[])


  return (
    <>
    
    <div className="main w-100 h-[600px] bg-[#FBF0B2] p-5"  >
        <div className="one w-fit p-5 bg-indigo-400 border-2 border-black rounded-[5px]">
            
        <h1 className='text-[30px] font-bold text-[#F6F1F1]'> <span className='text-black'>Name: </span> {user.name}</h1>
        <h1 className='text-[25px] font-bold text-[#F6F1F1]'> <span className='text-black'>User Name: </span> {user.username}</h1>
        <h1 className='text-[20px] font-bold text-[#F6F1F1]'> <span className='text-black'>Email: </span> {user.email}</h1>
    
        </div>
    </div>  
    </>
  )
}

export default Detals
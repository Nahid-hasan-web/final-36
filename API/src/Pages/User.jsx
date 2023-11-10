import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const User = () => {
const [user ,setUser] = useState([])

console.log(user)
useEffect(()=>{
    const url = 'https://jsonplaceholder.typicode.com/users'

    fetch(url)
    .then(res => res.json())
    .then(data => setUser(data))
},[])

  return (
    <div className="main w-100 py-[200px] bg-[#742DD2] flex justify-center gap-5 flex-wrap items-center"  >
            {
             
                user.map((item)=>{
               return(
                <div key={item.id} className="items w-[450px] p-5 h-[250px] bg-[#D3D5FD] border-2 border-black rounded-2xl">
                    <h1 className='text-[30px] font-bold text-[#2B3595]'> <span className='text-black'>ID : </span>{item.id}</h1>
                    <h1 className='text-[25px] font-bold text-[#2B3595]'> <span className='text-black'>name : </span>{item.name}</h1>
                    <h1 className='text-[20px] font-bold text-[#2B3595]'> <span className='text-black'>Email : </span>{item.email}</h1>
                    <Link to={`/User/${item.id}`} className='inline-block w-[150px] text-bold h-[50px] flex items-center justify-center bg-[#2B3595] rounded-md text-white font-bold mt-5'>MORE</Link>
            </div>
               )
                } )
             
            }
    </div>
  )
}

export default User
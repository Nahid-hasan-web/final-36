import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <nav className='w-100 h-[60px] bg-[#00ff00] flex justify-center items-center'>
        <ul className='flex gap-5'>
            <li><NavLink to='/' className={({isActive})=> isActive? ' text-xxl text-black font-bold' : 'text-xxl text-white font-bold'}> Home</NavLink> </li>
            <li><NavLink to='/About' className={({isActive})=> isActive? ' text-xxl text-black font-bold' : 'text-xxl text-white font-bold'}> About</NavLink> </li>
            <li><NavLink to='/User' className={({isActive})=> isActive? ' text-xxl text-black font-bold' : 'text-xxl text-white font-bold'}> User</NavLink> </li>
        </ul>

        </nav>
    </>
  )
}

export default Navbar
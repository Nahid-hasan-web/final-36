import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import User from './Pages/User'
import Navbar from './Components/Navbar'
import Detals from './Pages/Detals'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
<Navbar/>

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/User' element={<User/>}/>
      <Route path='/User/:id' element={<Detals/>}/>
      </Routes>


    </>
  )
}

export default App

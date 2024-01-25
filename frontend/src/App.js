import React from 'react'
import HomePage from './components/HomePage/HomePage'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import Signup from './components/HomePage/SignupPage/Signup'
import Myprofile from './components/Myprofile/Myprofile'

const App = () => {
  return (
    <div>
         
      <Routes>
          <Route path="/" element ={<HomePage/>}></Route>         
          <Route path="/home" element ={<Home/>}></Route>
          <Route path='/signup'element={<Signup/>}></Route>
          <Route path='/myprofile'element={<Myprofile/>}></Route>
          {/* <Route path="/" element ={<NewQuotes/>}></Route> */}
        </Routes>
    </div>
  )
}
export default App
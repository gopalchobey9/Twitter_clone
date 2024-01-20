import React from 'react'
import "./HomePage.css"
import { Link, useNavigate } from 'react-router-dom'

const HomePage = () => {
  let navigate = useNavigate();
  function homePageHandler(){
    navigate('/home')
  }
  return (
    <div className='Login-MainDiv'>
      <h2>Sign in to X</h2>
      <button>Sign in with Google</button>
      <button>Sign in with Apple</button>
      <hr />
      {/* <br /> */}
      <input type="text" placeholder='enter your email adress' />
     <button onClick={homePageHandler}> next</button>
      <button>Forgot Password</button>
      <span>dont have account <Link to='/signup' >Signup</Link></span>
    </div>
  )
}

export default HomePage
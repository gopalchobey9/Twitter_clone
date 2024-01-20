import React, { useContext, useRef } from 'react'
import "./HomePage.css"
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"
import { AppContext } from '../../context/AppContext'


const HomePage = () => {
  let {userDetails,updateUserDetails}=useContext(AppContext);

  let navigate = useNavigate();
  const userRef= useRef();
  const passwordRef =useRef();
  function homePageHandler(){
    navigate('/home')
  }
   const  loginInfoHandler= async (e)=>{
    e.preventDefault();
    const username=userRef.current.value;
    const password=passwordRef.current.value;
    try {
      const response = await axios.post(
        "http://localhost:8080/login",
        { username, password },

        // { withCredentials: true }
      );

     
      if (response.data) {
        console.log(response.data.user.username);
        updateUserDetails(response.data.user.username)
        navigate('/home'); 
      } 
      else {
        console.error(response.data.message);
      }
    } catch (error) {
      console.error("Error during login:", error);
      // Handle the error, show an error message, or log it
    }
  }
  return (
    <div className='Login-MainDiv'>
      <h2>Sign in to X</h2>
      <button>Sign in with Google</button>
      <button>Sign in with Apple</button>
      <hr />
      {/* <br /> */}
     <form onSubmit={loginInfoHandler} className='form-c' >
     <input type="text" placeholder='enter your email adress' name='username' id='username' ref={userRef} />
      <input type="text" placeholder='password' name='password' is='password' ref={passwordRef} />
      <button>Login</button>
     </form>
     <span>Or</span>
     <button onClick={homePageHandler}> next</button>
      <button>Forgot Password</button>
      <span>dont have account <Link to='/signup' >Signup</Link></span>
    </div>
  )
}

export default HomePage
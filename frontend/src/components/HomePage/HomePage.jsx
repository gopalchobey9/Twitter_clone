import React, { useContext, useEffect, useRef } from 'react'
import "./HomePage.css"
import { Link, json, useNavigate } from 'react-router-dom'
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
  useEffect(()=>{
        const getusername = localStorage.getItem('username');
        console.log(getusername);
        updateUserDetails(getusername);

  },[updateUserDetails])
  
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
        const username = response.data.user.username;
        updateUserDetails(response.data.user.username)
        localStorage.setItem('username', JSON.stringify(username));
        console.log(userDetails);
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
    <div className='main-div'>
      <div className='homepage'>
      <h2 className='signin-heading'>Sign in to X</h2>
      <button className='signin-google-button'>Sign in with Google</button>
      <button className='signin-google-button'>Sign in with Apple</button>
      <hr />
      {/* <br /> */}
     <div className='signin-section'>
     <form onSubmit={loginInfoHandler} className='signin-form' >
     <input type="text" placeholder='username' name='username' id='username' ref={userRef} />
      <input type="text" placeholder='password' name='password' is='password' ref={passwordRef} />
      <button className='signin-button'>Login</button>
     </form>
     </div>
     <span>Or</span>
     <button onClick={homePageHandler} className='signin-button'> next</button>
      <button className='signin-button'>Forgot Password</button>
      <span>dont have account? <Link to='/signup' >SignUp</Link></span>
    </div>
    </div>
  )
}

export default HomePage
import React, { useRef, useState } from 'react'
import "./Signup.css"
import axios from 'axios'

const Signup = () => {


  // const [formdata,setFormData]=useState({
  //   email:"",
  //   username:"",
  //   password:"",
  // })
  // const submitHandler=(e)=>{
  //   e.preventDefault();
  //   console.log(e.target.name)
  //   const {value,name}= e.target;
  //   setFormData((prev)=>{
  //     return { ...prev,[name]:value}
  //   });
  //   console.log('submit')
  // }

  const emailRef =useRef();
  const usernameRef =useRef();
  const passwordRef =useRef();
   async function submitHandler(e){
    e.preventDefault();
    const email=emailRef.current.value;
    const username=usernameRef.current.value;
    const password=passwordRef.current.value;
    await axios.post("http://localhost:8080/signup",{email:email,username:username,password:password})


  }
  return (
    <div className='form-div'>
        <form onSubmit={submitHandler}>
          <div>
          <label htmlFor="email">Email : </label>
          <input type="email" name='email' placeholder='email' id='email' ref={emailRef} />
          </div>
          <div>
          <label htmlFor="username">Username</label>
          <input type="text" name='username' placeholder='username' ref={usernameRef}/>          
          </div>
          <div>
          <label htmlFor="password">Password</label>
          <input type="text" name='password' placeholder='password' ref={passwordRef}  />
          </div>
          <button className='signup-btn'>submit</button>
        </form>
    </div>
  )
}

export default Signup
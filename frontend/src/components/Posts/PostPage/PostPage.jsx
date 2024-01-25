import axios from 'axios'
import React, { useContext, useEffect, useRef } from 'react'
import "./PostPage.css"
import { AppContext } from '../../../context/AppContext'


const PostPage = () => {
     const {userDetails,updateIsPosted} = useContext(AppContext);

  const textDataRef =  useRef();
  async function  postdataHandler(e){
    e.preventDefault();
    const textData=textDataRef.current.value;
    const res = await axios.post("http://localhost:8080/posts",{textData,userDetails});
    if(res.data){
      console.log(res.data.message);
      updateIsPosted();
      textDataRef.current.value =""
    }
    else{
      console.log(res.data.message);
    }
  }
  return (
    <div className='PostPage'>
        <form onSubmit={postdataHandler} >
        <textarea type="text" placeholder='what Happeninng?' name='textdata' id='textdata' ref={textDataRef}  />
        <br />
        <hr />
       <div> 
        <button>Post</button>
        </div>
        </form>

    </div>
  )
}

export default PostPage
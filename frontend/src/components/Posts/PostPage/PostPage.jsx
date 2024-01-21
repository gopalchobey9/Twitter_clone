import axios from 'axios'
import React, { useEffect, useRef } from 'react'

const PostPage = () => {
  const textDataRef =  useRef();
  async function  postdataHandler(e){
    e.preventDefault();
    const textData=textDataRef.current.value;
    const res = await axios.post("http://localhost:8080/posts",{textData});
    if(res.data){
      console.log(res.data.message);
      textDataRef.current.value =""
    }
    else{
      console.log(res.data.message);
    }
  }
  return (
    <div>
        <form onSubmit={postdataHandler} >
        <input type="text" placeholder='what Happeninng?' name='textdata' id='textdata' ref={textDataRef}  />
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
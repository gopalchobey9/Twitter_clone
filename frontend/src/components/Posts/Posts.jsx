import axios from 'axios';
import React, { useEffect,useState } from 'react'
import "./Post.css"

const Posts = () => {
  const [postdata,setPostdata] = useState([])
  useEffect(() =>{
    getPost();
  })
  async function  getPost(){
    const posts = await axios.get("http://localhost:8080/posts")
    setPostdata(posts.data);
    // console.log(JSON.stringify(posts));
  
  }

  return (
    <h2 className='post-title'>Here  Are all the Posts
      <div className='all-posts'>
       { 
       postdata.map((data,index)=>{
        return(
         <>
         <hr />
         <div key={index} className='post-content' >
            <h3>{data.textData}</h3>
            {/* <p>{data.date}</p> */}
          </div>
         </>
        )
       })
       }
      </div>
    </h2>
  )
}

export default Posts
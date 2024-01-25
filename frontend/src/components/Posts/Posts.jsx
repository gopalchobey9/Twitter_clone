import axios from 'axios';
import React, { useContext, useEffect,useState } from 'react'
import "./Post.css"
import { AppContext } from '../../context/AppContext';

const Posts = () => {
  const [postdata,setPostdata] = useState([]);
  const {updateIsPosted,isposted} = useContext(AppContext);
  useEffect(() =>{
    getPost();
    // eslint-disable-next-line
  },[isposted,updateIsPosted]);
  async function  getPost(){
    const posts = await axios.get("http://localhost:8080/posts")
    setPostdata(posts.data);
    console.log(postdata +" postdatA")
    // console.log(JSON.stringify(posts));
  
  }

  return (
    <h2 className='post-title'>Here  Are all the Posts
      <div className='all-posts'>
       { 
       postdata.map((data,index)=>{
        return(
        
         <div 
         key={index}
          className='post-content' >
            <h1 className='post-div-perticular'>{data.author}</h1>
            <p className='text-data'>{data.textData}</p>
            
            {/* <p>{data.date}</p> */}
          </div>
      
        )
       })
       }
      </div>
    </h2>
  )
}

export default Posts
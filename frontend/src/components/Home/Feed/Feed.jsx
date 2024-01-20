import React from 'react'
import "./Feed.css"
import Post from './Posts/Post'
const Feed = () => {
  return (
    <div>
      <div className='feed-head'>
        <div>For you</div>
        <div>Following</div>
      </div>
      <div className='feed-post'>
        <div>
          <img src="" alt="img" />
          <form action="">
          <div>
            <textarea name="" id="" cols="30" rows="5" placeholder='What is happerning?'></textarea>
          </div>
          <button>Post</button>
          </form>
        </div>
    </div>
    <Post 
    text= {"A spectacular start to the Khelo India Youth Games in Chennai, a city known for a great sporting culture. My best wishes to all the athletes taking part."}
    userName={"Me_gopal99"}
    userImage={"gopal.jpg"}
    />
    </div>
  )
}

export default Feed
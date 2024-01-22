import React from 'react'
import "./Feed.css"
import PostPage from '../../Posts/PostPage/PostPage'
import Posts from '../../Posts/Posts'
const Feed = () => {
  return (
    <div className='feed'>
      <div className='feed-head'>
        <div>For you</div>
        <div>Following</div>
      </div>
      <div className='feed-post'>
        
          <img src="" alt="img" />
          <PostPage/>
    </div>
          <div className='posts-section'>
            <Posts/>
          </div>
        </div>
  )
}

export default Feed
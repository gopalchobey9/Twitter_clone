import React from 'react'
import "./Feed.css"
import PostPage from '../../Posts/PostPage/PostPage'
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
          <PostPage/>
        </div>
    </div>
    </div>
  )
}

export default Feed
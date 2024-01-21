import React from 'react'
import "./Feed.css"
import PostPage from '../../Posts/PostPage/PostPage'
import Posts from '../../Posts/Posts'
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
          <br />
          <hr />
          <div>
            <Posts/>
          </div>
        </div>
    </div>
    </div>
  )
}

export default Feed
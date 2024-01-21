import React from 'react'

const PostPage = () => {
  function  postdataHandler(){

  }
  return (
    <div>
        <form onSubmit={postdataHandler} >
        <input type="text" placeholder='what Happeninng?' name='textdata' id='textdata'  />
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
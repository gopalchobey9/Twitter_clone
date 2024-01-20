import React from 'react'

const Post = (props) => {
    let {text,image,userName, userImage,userEmail} = props;
  return (
    <div>
        <div><img src={userImage} alt="img " />{userName}
        </div>
        <div>{text}</div>

    </div>
  )
}
export default Post
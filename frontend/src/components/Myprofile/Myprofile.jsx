import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
const Myprofile = () => {
  const {userDetails}  = useContext(AppContext);
  const email = localStorage.getItem('email');
  const createdAt = localStorage.getItem('createdAt');
  const createTime = new Date(createdAt).toDateString();
  return (
    <div className='myprofile-container'>
      <h1>My Profile</h1>
        <div>
          <img src="background.jpg" alt="background img" />

        </div>
        <div> 
          <img src="profile.img.jpg" alt="profile img" />
        </div>
        <div>
             {userDetails}
        </div>
        <div>
          {email}
        </div>
        <div>
          {createTime}
        </div>
    </div>
  )
}

export default Myprofile
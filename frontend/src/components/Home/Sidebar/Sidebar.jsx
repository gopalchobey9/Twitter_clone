import React, { useContext } from 'react'
import SidebarOption from './SidebarOption/SidebarOption'
import "./Sidebar.css"
import { AppContext } from '../../../context/AppContext'
import { useNavigate } from 'react-router-dom'
const Sidebar = () => {
  let navigate = useNavigate();
  const {userDetails} = useContext(AppContext);
  function moveToProfileHandler(){
    navigate("/myprofile");
  }
  return (
    <div className='sidebar'>
     <span onClick={moveToProfileHandler} className='profile-name-sidebar'>
      Name:  {userDetails}
      </span>
      <SidebarOption name={"Home"}/>
      <SidebarOption name={"Explore"}/>
      <SidebarOption name={"Notification"}/>
      <SidebarOption name={"Message"}/>
      <SidebarOption name={"Grok"}/>
      <SidebarOption name={"Premium"}/>
      <SidebarOption name={"Lists"}/>
      <SidebarOption name={"kuch bhi"}/>
      <SidebarOption name={"More"}/>
      <button>Post</button>
    </div>
  )
}

export default Sidebar
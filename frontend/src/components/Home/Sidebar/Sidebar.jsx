import React, { useContext } from 'react'
import SidebarOption from './SidebarOption/SidebarOption'
import "./Sidebar.css"
import { AppContext } from '../../../context/AppContext'



const Sidebar = () => {
  const {userDetails} = useContext(AppContext);
  return (
    <div className='sidebar'>
     <span>
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
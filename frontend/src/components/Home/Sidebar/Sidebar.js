import React from 'react'
import SidebarOption from './SidebarOption/SidebarOption'
import "./Sidebar.css"

const Sidebar = () => {
  return (
    <div>
      <SidebarOption name={"Home"}/>
      <SidebarOption name={"Explore"}/>
      <SidebarOption name={"Notification"}/>
      <SidebarOption name={"Message"}/>
      <SidebarOption name={"Grok"}/>
      <SidebarOption name={"Premium"}/>
      <SidebarOption name={"Lists"}/>
      <SidebarOption name={"Profile"}/>
      <SidebarOption name={"More"}/>
      <button>Post</button>
    </div>
  )
}

export default Sidebar
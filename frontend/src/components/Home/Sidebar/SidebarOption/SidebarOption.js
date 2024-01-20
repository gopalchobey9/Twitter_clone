import React from 'react'
import "./SideBarOption.css"

const SidebarOption = (props) => {
    const {url, name} = props;
  return (
    <div className='option'>
        <img src={url} alt="" />
        {name}

    </div>
  )
}

export default SidebarOption
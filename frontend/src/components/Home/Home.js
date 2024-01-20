import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Sidebar from './Sidebar/Sidebar'
import Feed from './Feed/Feed'
import Widget from './Widget/Widget'
import "./Home.css"


const Home = (props) => {
  return (
    <div className='home'>
            <div><Sidebar/></div>
            <div><Feed/></div>
            <div><Widget/></div>
    </div>
  )
}

export default Home
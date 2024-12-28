import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <div >
      
      <div className="header">
      <h1>Welcome To Brijesh Jethava</h1>
        <ul>
            <li ><Link to={'/'}>Home</Link></li>
            <li><Link to={'/AboutUs'}>About Us</Link></li>
            <li><Link to={'/Course'}>Course</Link></li>
            <li><Link to={'/Blogs'}>blog</Link></li>
        </ul>
      </div>
    </div>
  )
}

import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
         <div className="navbar">
            <img src="logo.png.webp"  />
          <ul>
            <li>Home</li>
            <li>Shops</li>
            <li>Pages</li>
            <li>Blog</li>
            <li>Content</li>
          </ul>
          <Link to={'/admin'} className='admin'><button className="admin">Admin</button></Link>
        
        </div>
        
    </div>
  )
}

export default Home
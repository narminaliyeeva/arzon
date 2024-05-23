import React from 'react'
import { Link } from 'react-router-dom'

function Admin() {



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
        
        </div>
        <div>
            <table border={"1px"}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Content</th>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
            <Link to={'/add'} className='add'><button className="add">Add</button></Link>
        </div>
    </div>
  )
}

export default Admin
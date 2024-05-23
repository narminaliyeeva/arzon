import React from 'react'
import React, { useEffect, useState } from 'react'
function Admin() {
const [first, setfirst] = useState(second)

  return (
    <div>
        <div className="navbar">
            <img src="logo.png.webp"  />
          <ul>
            <li>Home</li>
            <li>Shops</li>gi
            <li>Pages</li>
            <li>Blog</li>
            <li>Content</li>
          </ul>
        <button className="admin">Admin</button>
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
        </div>
    </div>
  )
}

export default Admin
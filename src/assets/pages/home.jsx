import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Home() {
 
 const [data, setdata] = useState([])
 useEffect(() => {
   axios.get("http://localhost:8000/posts")
   .then(res=>setdata(res.data))
 }, [])
 
 
    return (
    <>
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

        <div className="container">
                <div className="main">
                    <div className="text">
                        <h1>Wood & Clooth Sofa </h1>
                        <p>Incididunt ut labore et dolore magna aliqua quis ipsum
                        suspendisse ultrices gravida. Risus commodo viverra</p>
                        <button className="buy">Buy Now</button>
                    </div>
                    <div><img src="banner.png" alt="" /></div>
                </div>
            </div>

            <section>
                <h1>Featured Category</h1>
            <div className="category">
                
                <div className="sofa">
                    <div>
                    <p>Premium quality</p>
                    <h1>Latest foam Sofa</h1>
                    </div>
                    <div className="sekil"><img src="feature.png" alt="" /></div>
                    
                </div>
                <div className="sofa">
                    <div>
                    <p>Premium quality</p>
                    <h1>Latest foam Sofa</h1>
                    </div>
                    <div className="sekil"><img src="feature2.png" alt="" /></div>
                </div>
            </div>
            </section>
    </div>
 </>
 )
}

export default Home
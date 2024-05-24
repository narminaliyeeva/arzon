import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { TiShoppingCart } from "react-icons/ti";
import { CiHeart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { GoChevronDown } from "react-icons/go";
import axios from 'axios';


function Home() {
  const [data, setdata] = useState([])
  useEffect(() => {
    axios.get("http://localhost:3000/users")
    .then(res=>setdata(res.data))
  }, [])
  


  return (
    <div>
      <div className="navbar">
        <img src="logo.png.webp" />
        <ul>
          <li>Home</li>
          <li>Shops
            <ul className='dropdown'>
              {/* <li>Shop Category</li>
              <li>Product Details</li> */}
            </ul>
          </li>
          <li>Pages</li>
          <li>Blog</li>
          <li>Content</li>
        </ul>
        <div className="nav-icons">
              <CiSearch /><CiHeart /><TiShoppingCart />
            </div>
        <Link to={'/admin'} className='admin'><button className="admin">Admin</button></Link>

      </div>
      <section className='banner'>
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className='one'>
                <h1>Cloth & Wood Sofa </h1>
                <p>Incididunt ut labore et dolore magna aliqua quis ipsum
                  suspendisse ultrices gravida. Risus commodo viverra</p>
                <button className='buynow'>Buy now</button>
              </div>
            </div>
            <div className="col-lg-8"> <div className='one'>
              <img src="banner.png" alt="" /></div></div>

          </div>
        </div>
      </section>

      <section className='category'>
        <div className="container">
          <div className="row">
            <h1 className='featured'>Featured Category</h1>
            <div className="col-lg-7"> <div className="two">
              <div className="row bir "><div className="col-lg-6">
                <p>Premium Quality</p>
                <h1>Latest foam Sofa</h1></div>
                <div className="col-lg-6"><img src="category1.png" alt="" /></div></div>
            </div></div>
            <div className="col-lg-5"> <div className="two">
              <div className="row twoo "><div className="col-lg-6">
                <p>Premium Quality</p>
                <h1>Latest foam Sofa</h1></div>
                <div className="col-lg-6"><img src="category2.png" alt="" /></div></div>
            </div></div>
            <div className="col-lg-5"> <div className="two">
              <div className="row three"><div className="col-lg-6">
                <p>Premium Quality</p>
                <h1>Latest foam Sofa</h1></div>
                <img src="category3.png"  alt="" /></div>
            </div></div>
            <div className="col-lg-7"> <div className="two">
              <div className="row four"><div className="col-lg-6">
                <p>Premium Quality</p>
                <h1>Latest foam Sofa</h1></div>
               <img src="category4.png" alt="" /></div>
            </div></div>
            
            </div>
          </div>
      </section>


      <section className='awesome'>
        <div className="container">
        <h3 className='awasome-head'>Awasome</h3>
          <div className="row">
{/*----MAP-----*/
              data.map(item => {
                return (
                  <div className="col-lg-3 " key={item.id}>
                    <div className='photo'> <img src={item.file} alt="" /></div>
                    <h4 className='col-lg-3 '>{item.name}</h4>
                    <span className='awasome-span'>${item.cost}</span>
                  </div>
                )
              }
              )}
            
          
          </div>
        </div>
      </section>
      <section className='sale'>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img src="offer.png" alt="" />
            </div>
            <div className="col-lg-6">
              <h1>Weekly Sale on 60% Off All Products</h1>
              <input type="text" name="" id="" className='inp' />
              <button className='subscribe'>BOOK NOW</button>
            </div>
          </div>
        </div>

      </section>


      <section className='bestsellers'>
        <div className="container">
          <div className="row">
            <h1>Best sellers</h1>
            <div className="col-lg-3">
              <img src="product_5.png.webp" alt="" />
              <h6>Quartiz Best Sellers</h6>
              <p>$1500</p>
            </div>
            <div className="col-lg-3">
              <img src="product_3.png.webp" alt="" />
              <h6>Quartiz Best Sellers</h6>
              <p>$1500</p>
            </div>
            <div className="col-lg-3">
              <img src="product_2.png.webp" alt="" />
              <h6>Quartiz Best Sellers</h6>
              <p>$1500</p>
            </div>
            <div className="col-lg-3">
              <img src="product_1.png.webp" alt="" />
              <h6>Quartiz Best Sellers</h6>
              <p>$1500</p>
            </div>
          </div>
        </div>
      </section>
      <section className="aranoz">
        <div className="container">
          <div className="row">
            <div className="sekil">
            <div className="col-lg-12 txt"> 
             <span>JOIN OUR NEWSLETTER</span>
              <h1>Subscribe to get Updated with new offers</h1>
              <input type="text" name="" id="" placeholder='Enter Email Addres' className='email' /><button className='subscribe'>Subscribe now</button></div>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}

export default Home
import React from 'react'
import { Link } from 'react-router-dom'


function Home() {
  return (
    <div>
      <div className="navbar">
        <img src="logo.png.webp" />
        <ul>
          <li>Home</li>
          <li>Shops</li>
          <li>Pages</li>
          <li>Blog</li>
          <li>Content</li>
        </ul>
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
                <button>Buy now</button>
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
              <div className="row"><div className="col-lg-6">
                <p>Premium Quality</p>
                <h1>Latest foam Sofa</h1></div>
              <div className="col-lg-6"><img src="category1.png" alt="" /></div></div>
            </div></div>

            <div className="col-lg-5"> <div className="three">
             <div className="row"> <div className="col-lg-6"> <p>Premium Quality</p>
                <h1>Latest foam Sofa</h1></div>
              <div className="col-lg-6"> <img src="category2.png" alt="" /></div></div>
            </div></div>

            <div className="col-lg-5"> <div className="four">
              <p>Premium Quality</p>
              <h1>Latest foam Sofa</h1>
              <img src="category3.png" alt="" />
            </div></div>

            <div className="col-lg-7"> <div className="five">
              <p>Premium Quality</p>
              <h1>Latest foam Sofa</h1>
              <img src="category4.png" alt="" />
            </div></div>
          </div>
        </div>
      </section>
      
      <section className='awesome'>
          <div className="container">
            <div className="row">
            <h1 className='awesome'>Awesome</h1>
              <div className="col-lg-3"> <div className="card">
                <img src="product_1.png.webp" alt="" />
                <div className="col-lg-3"></div>
              <div className="col-lg-3"></div>
              <div className="col-lg-3"></div>
              <div className="col-lg-3"></div>
              <h4>Quartz Belt Watch</h4>
              <h3>$150.00</h3>
                </div></div>
              <div className="col-lg-3"> <div className="card">
                <img src="product_2.png.webp" alt="" />
                <div className="col-lg-3"></div>
              <div className="col-lg-3"></div>
              <div className="col-lg-3"></div>
              <div className="col-lg-3"></div>
              <h4>Quartz Belt Watch</h4>
              <h3>$150.00</h3>
                </div></div>
              <div className="col-lg-3"> <div className="card">
                <img src="product_3.png.webp" alt="" />
                <div className="col-lg-3"></div>
              <div className="col-lg-3"></div>
              <div className="col-lg-3"></div>
              <div className="col-lg-3"></div>
              <h4>Quartz Belt Watch</h4>
              <h3>$150.00</h3>
                </div></div>
              <div className="col-lg-3"> <div className="card">
                <img src="product_4.png.webp" alt="" />
                <div className="col-lg-3"></div>
              <div className="col-lg-3"></div>
              <div className="col-lg-3"></div>
              <div className="col-lg-3"></div>
              <h4>Quartz Belt Watch</h4>
              <h3>$150.00</h3>
                </div></div>
              <div className="col-lg-3"> <div className="card">
                <img src="product_5.png.webp" alt="" />
                <div className="col-lg-3"></div>
              <div className="col-lg-3"></div>
              <div className="col-lg-3"></div>
              <div className="col-lg-3"></div>
              <h4>Quartz Belt Watch</h4>
              <h3>$150.00</h3>
                </div></div>
              <div className="col-lg-3"> <div className="card">
                <img src="product_6.png.webp" alt="" />
                <div className="col-lg-3"></div>
              <div className="col-lg-3"></div>
              <div className="col-lg-3"></div>
              <div className="col-lg-3"></div>
              <h4>Quartz Belt Watch</h4>
              <h3>$150.00</h3>
                </div></div>
              <div className="col-lg-3"> <div className="card">
                <img src="product_7.png.webp" alt="" />
                <div className="col-lg-3"></div>
              <div className="col-lg-3"></div>
              <div className="col-lg-3"></div>
              <div className="col-lg-3"></div>
              <h4>Quartz Belt Watch</h4>
              <h3>$150.00</h3>
                </div></div>
              <div className="col-lg-3"> <div className="card">
                <img src="product_8.png.webp" alt="" />
                <div className="col-lg-3"></div>
              <div className="col-lg-3"></div>
              <div className="col-lg-3"></div>
              <div className="col-lg-3"></div>
              <h4>Quartz Belt Watch</h4>
              <h3>$150.00</h3>
                </div></div>
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
              <input type="text" name="" id="" />
              <button>BOOK NOW</button>
            </div>
          </div>
        </div>

      </section>

    </div>
  )
}

export default Home
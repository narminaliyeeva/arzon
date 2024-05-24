import React, { useEffect, useState } from 'react'
import { TiShoppingCart } from "react-icons/ti";
import { CiHeart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { GoChevronDown } from "react-icons/go";
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function admin() {
  const [data, setdata] = useState([])
  const [search, setsearch] = useState("")
  const [selectValue, setSelectValue] = useState("normal")

  useEffect(() => {
    axios.get("http://localhost:3000/users")
      .then(res => setdata(res.data))
  }, [])
  const deleteData = function (id) {
    axios.delete(`http://localhost:3000/users/` + id)
      .then(res => console.log(res.data))
  }
  const sortData = function () {
    if(selectValue=='a-z'){
     return data.toSorted((a,b)=>a.name.localeCompare(b.name))
    }
    else if(selectValue=='z-a'){
     return data.toSorted((a,b)=>b.name.localeCompare(a.name))
    }
    else{
     return[...data]
    }
   }
   let sortedData=sortData()
 
  
   const filteredData =sortedData.filter(item => {
     return item.name.toLowerCase().startsWith(search.toLowerCase()
   )
   });
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
        <div className="icons">
          <CiSearch /><CiHeart /><TiShoppingCart />
        </div>
        <Link to={'/add'} className='add'><button className="add">Add</button></Link>

      </div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>File</th>
            <th>Name</th>
            <th>Cost</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {
            filteredData.map(item => {
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td><img src={item.file} alt="" /></td>
                  <td>{item.name}</td>
                  <td>{item.cost}</td>
                  <td><button className='btn' onClick={() => deleteData(item.id)}>Delete</button></td>
                </tr>
              )
            })}
        </tbody>
      </table>
    </div>
  )
}

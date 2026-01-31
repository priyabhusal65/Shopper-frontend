import React, { useState } from 'react'
import "./Navbar.css"
import logo from "../Assets/online-shopping.png"
import cart from "../Assets/shopping-cart .png"
import { Link } from 'react-router-dom'

const Navbar = () => {


  const [menu,setMenu] = useState("shop"); 
  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt="" style={{ height: "50px" }} />
            <p>SHOPPER</p>
        </div>
        <ul className='nav-menu'>
            <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none',color: 'inherit' }} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("men")}}><Link style={{textDecoration:'none',color: 'inherit' }} to='/men'>Men</Link>{menu==="men"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("women")}}><Link style={{textDecoration:'none',color: 'inherit' }} to='/women'>Women</Link>{menu==="women"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:'none',color: 'inherit' }} to='/kids'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
        </ul>
        <div className='nav-login-cart'>
          <Link to='/login'><button>Login</button></Link>
          <Link to='/cart'><img src={cart} alt="" style={{ height: "30px" }}/></Link>
          <div className="nav-cart-count">0</div>
        </div>
      
    </div>
  )
}

export default Navbar

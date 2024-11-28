import React from 'react'
import {Link} from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import {useAuth} from './auth'

const Navbar = () => {
    const auth= useAuth()
  return (
    <div>
        <nav className='nav1'>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/service">Service</NavLink>
        <NavLink to="/product">Product</NavLink>
        <NavLink to="/profile">Profile</NavLink>
        {!auth.user &&
        <NavLink to="/login">Login</NavLink> }


        </nav>
      
    </div>
  )
}

export default Navbar
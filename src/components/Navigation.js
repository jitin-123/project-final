import React from 'react'
import { Link } from 'react-router-dom'
export default function Navigation() {
  return (
    <div>
        <Link to="/">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/product">Product</Link>
    </div>
  )
}

import React, { Component } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Login from './components/Login'
import Register from './components/Register'
import Products from './components/Products'

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navigation/>
          <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/product" element={<Products/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

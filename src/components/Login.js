import React, { Component } from 'react'
import axios from 'axios'

export default class Login extends Component {
  state={
    username:"",
    password:""
  }
  handleChange=(e)=>{
    this.setState({
        [e.target.name]:e.target.value
    })
  }
  send=()=>{
    axios.post("https://backendapi-vecc.onrender.com/store",{username:this.state.username,password:this.state.password})
        .then((res)=>{
            console.log(res)
        })
    // fetch("https://backend-bbcw.onrender.com/add",{
    //     method:"POST",
    //     headers:{
    //         "Content-Type":"application/json"
    //     },
    //     body:JSON.stringify({username:this.state.username,password:this.state.password})
    // })
  }
  render() {
    return (
      <div>
        <p><input placeholder='Username' onChange={this.handleChange} name="username"/></p>
        <p><input placeholder='Password' onChange={this.handleChange} name="password"/></p>
        <button onClick={this.send}>Login</button>
      </div>
    )
  }
}

import React, { Component } from 'react'
import axios from 'axios'

export default class Register extends Component {
  state={
    users:[]
  }
  componentDidMount(){
    axios.get("https://backendapi-vecc.onrender.com/users")
      .then((res)=>{
        console.log(res.data)
        this.setState({
          users:res.data
        })
      })
  }
  render() {
    return (
      <div>
        {
          this.state.users.map((usr)=>(
            <div key={usr._id}>
              <p>name:{usr.username}</p>
              <p>password:{usr.password}</p>
            </div>
          ))
        }
      </div>
    )
  }
}

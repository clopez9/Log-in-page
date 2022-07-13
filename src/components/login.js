import React, {Component} from 'react';
import {Link} from "react-router-dom";

export default class Login extends Component {
    constructor(props) {
        
        super(props);
         this.state = {
            username: "",
            password: ""
         }
         this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

   
    }
    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }
    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }
    onSubmit(e) {
        //prevents submission of default values
        e.preventDefault();
        const user = {
            username: this.state.username,
            password: this.state.password
        }
        console.log(user);
 
        }
  
    componentDidMount() {
        this.setState({
            username: "newUser",
            password: "newPass"

        })
    }
    render() {
        return (
<form onSubmit = {this.onSubmit}>
<div class="container">
  <div class="mb-3">
    <label for="exampleInputusername" class="form-label">Username</label>
    <input value={this.state.username} onChange={this.onChangeUsername} class="form-control" id="exampleInputUsername" aria-describedby="emailHelp"></input>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input value={this.state.password} onChange={this.onChangePassword}  type="password" class="form-control" id="exampleInputPassword1"></input>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
  </div>
</form>


        );
    }
}

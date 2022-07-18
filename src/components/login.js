import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './sign-up.css';

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
        console.log("submitted!")
        e.preventDefault();
        const user = {
            username: this.state.username,
            password: this.state.password
        }
        console.log(user);
        axios.post('http://localhost:5000',user).then(res => console.log(res.data));
 
    }
  
    componentDidMount() {
        this.setState({
            username: "",
            password: ""
        });
    }
    render() {
        return (
            <form onSubmit = {this.onSubmit}>
                <div class="holder">
                    <div className="container">
                        <h2>SIGN-UP</h2>

                            <div className="field">
                                <label htmlFor="exampleInputusername" className="form-label">USERNAME</label>
                                <input value={this.state.username} onChange={this.onChangeUsername} className="form-control" id="exampleInputUsername" aria-describedby="emailHelp"></input>
                            </div>
                            <div className="field">
                                <label htmlFor="exampleInputPassword1" className="form-label">PASSWORD</label>
                                <input value={this.state.password} onChange={this.onChangePassword}  type="password" className="form-control" id="exampleInputPassword1"></input>
                            </div>
                        <button type="submit" className="btn-sub">Sign-Up</button>
                        <p>Already have an account? <Link to ="/signin">sign in</Link></p>
                        <p><Link to="/dashboard">Dashboard</Link></p>
                    </div>
                </div>
            </form>


        );
    }
}

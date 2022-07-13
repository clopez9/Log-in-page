import React, {Component} from 'react';
import {Link} from "react-router-dom";

export default class Login extends Component {
    constructor(props) {
        super(props);
         this.state = {
            username: "",
            password: ""
         }
    }
    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }
    onChangeUsername(e) {
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
    render() {
        console.log("working");
        return (
        <div>
            <h1>Hello</h1>
        </div>

        );
    }
}
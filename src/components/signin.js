import React, {Component} from 'react';
import axios from 'axios';

export default class Signin extends Component {

    state = {
        username: '',
        password: '',
        users: []
    };

    componentDidMount = () => {
        this.getUserData();
    }

    getUserData = () => {
        axios.get('http://localhost:5000/')
            .then((response) => {
                const data = response.data;
                this.setState({ users: data });
                console.log(data);
                // console.log(this.state.users);
            })
            .catch(() => {
                alert('Error retrieving data!!!')
            });
    }

    render() {
        return (
            <form onSubmit = {this.onSubmit}>
                <div class="holder">
                    <div className="container">
                        <h2>LOGIN</h2>

                            <div className="field">
                                <label htmlFor="exampleInputusername" className="form-label">USERNAME</label>
                                <input value={this.state.username} onChange={this.onChangeUsername} className="form-control" id="exampleInputUsername" aria-describedby="emailHelp"></input>
                            </div>
                            <div className="field">
                                <label htmlFor="exampleInputPassword1" className="form-label">PASSWORD</label>
                                <input value={this.state.password} onChange={this.onChangePassword}  type="password" className="form-control" id="exampleInputPassword1"></input>
                            </div>
                        <button type="submit" className="btn-sub">login</button>
                    </div>
                </div>
            </form>

        );
    }
}
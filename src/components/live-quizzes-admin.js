import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Admin from "./admin";
import axios from 'axios';

export default class LiveQuiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quizArray : [],
            listItems: []
        }
        this.componentDidMount = this.componentDidMount.bind(this);
    }
 
 
    async componentDidMount () {
        const resData = []
        await axios.get("http://localhost:5000/admin/quiz").then(function (response) {
            resData.push(response.data);
        
          })
          .catch(function (error) {
            console.log(error);
          })
          this.setState({
            quizArray: resData
        });

        const listItems = this.state.quizArray.map((quiz) => 
        <li>{quiz}</li>);
        console.log(listItems);
        this.setState({
            listItems: listItems
        }, () => console.log(this.state.listItems))

        

    }
    render () {
        return (
        <div>
            <h1>Live Quizzes</h1>
            <ul>{this.state.listItems}</ul>
            
        </div>)
        
    }
}

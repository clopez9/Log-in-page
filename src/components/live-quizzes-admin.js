import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Admin from "./admin";
import axios from 'axios';

function Items(props) {
    const numbers = props.numbers;
    console.log("numbers");
    console.log(numbers);
    const listItems = numbers.map((number) =>    
    <div><h4>{number}</h4>
        <button>Delete</button>
        <button>Edit</button></div>  );  return (
      <div>{listItems}</div>  );
  }
        

export default class LiveQuiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quizArray : []
        }
        this.componentDidMount = this.componentDidMount.bind(this);
    }
 
 
    async componentDidMount () {
        let resData;
        await axios.get("http://localhost:5000/admin/quiz").then(function (response) {
            resData = response.data;
        
          })
          .catch(function (error) {
            console.log(error);
          })
          this.setState({
            quizArray: resData
        });

        // const listItems = this.state.quizArray.map((quiz) => 
        // <li>{quiz}</li>);
        // console.log(listItems);
        // this.setState({
        //     listItems: listItems
        // }, () => console.log(this.state.listItems))

        

    }
    render () {
        return (
        <div>
            <h1>Live Quizzes</h1>
            <Items numbers = {this.state.quizArray}/>
            
        </div>)
        
    }
}

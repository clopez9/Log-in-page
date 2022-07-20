import React, {Component} from 'react';
import {Link} from "react-router-dom";
import "./live-quizzes-admin.css";
import axios from 'axios';

function deleteQuiz(props) {

    console.log("trash");
    axios.post("http://localhost:5000/admin/quiz/delete").then(function (response) {
        
          })
          .catch(function (error) {
            console.log(error);
          })

}
function editQuiz() {
    console.log("edit");
}
function Items(props) {
    const titles = props.quizTitle;
    const listItems = titles.map((number) =>    
    <div><h4>{number}</h4>
        <i onClick = {deleteQuiz} class="fa-solid fa-trash-can"></i>
        <i onClick = {editQuiz}class="fa-solid fa-pen"></i>
    </div>  );  return (
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
    }
    render () {
        return (
        <div>
            <h1>Live Quizzes</h1>
            <Items quizTitle = {this.state.quizArray}/>
            
        </div>)
        
    }
}

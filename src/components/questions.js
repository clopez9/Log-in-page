import React, { useState, useEffect } from "react";
import axios from "axios";

export default function GetQuestions() {
    const [questionArr, setQuestionArr] = useState([]);
    const [qSize, setQSize] = useState([]);
    const [questions, setQuestions] = useState([{
        name: '',
        questions: [{
            question: '',
            answerChoices: [],
            indexOfAnswer: '',
        }]
    }])

    const getQuestions = async () => {
        try {
            console.log("2");
            await axios.get("http://localhost:5000/questionss").then(function (response) {
                console.log(response.data)
                setQuestions(response.data);
                console.log(questions)
              }).catch(function (error) {
                console.log(error);
              })

        } catch (err) {
            console.log(err.message);
        }
    };

    useEffect(()=> {
        console.log("1");
        if(questions[0].name === "") {
            console.log("rendered");
            getQuestions()
            console.log("3");
            setQSize(random(10));

        }    
        if (questions[0].name !== "") {
            console.log("4");
            let arr = []
            for(let i=0; i < qSize.length; i++) {
                console.log(questions[0])
                arr.push(questions[0].questions[qSize[i]].question)
    
            }
            console.log(arr);
            const w = arr.map((q) => <li>{q}</li>);
            console.log(w)
            setQuestionArr(arr.map((q) => <li>{q}</li>));
            console.log(questionArr);
        }
        
    },[questions]);

    function random(size) {
        const ran = Array.from({length:size}, () => Math.floor(Math.random() * 100));
        return ran;
    }

    //let qSize = random(10);

    return (
        <div className="app">
            <h1>Quiz Titles</h1>
            <ul>
                <ul>{questionArr}</ul>
            </ul>
        </div>
    );
}
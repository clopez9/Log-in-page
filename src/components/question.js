import React, {Component} from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
//import './quiz.css';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './question.css';

export default class Question extends Component {

    constructor(props) {

        super(props);
        this.state = {
            score: 0,
            showScore: false,
            ran: [],
            quizData: [{
                name: "",
                questions:[{question: '',
                            answerChoices: [],
                            indexOfAnswer: '',}]
            }],
        }
        this.componentDidMount = this.componentDidMount.bind(this);

    }

    async componentDidMount () {
        let resData;
        await axios.get("http://localhost:5000/questions", 'First Quiz').then(function (response) {
            resData = response.data; 
          })
          .catch(function (error) {
            console.log(error);
          })
          this.setState({
            quizData: resData
        });
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('update');
        //conditional statement
        if(this.state.quizData.length !== 10) {
            console.log('we are here');
            this.setState({quizData: this.props.quizData});
        }
    }

    // const [currentQuestion, setCurrentQuestion] = useState(0);


    // <body>
    //     <h1>Question #</h1>
    //     <ProgressBar striped variant="info" now={50} />
    //     <i class="bi bi-alarm-fill text-warning" style={{ fontSize: 50 }}></i>
    // </body>

    render() {

        function random(size) {
            const ran = Array.from({length:size}, () => Math.floor(Math.random() * 100));
            return ran;
        }

        let qSize = random(10);

        console.log(qSize);

        const questions = qSize.map((number) => this.state.quizData[0].questions[number].question);
    
        console.log(questions);

        

        // let questions = [
        //     {
        //         questionText: this.state.quizData[0].questions[0].question,
        //         answerOptions: [
        //             { answerText: this.state.quizData[0].questions[0].answerChoices[0], isCorrect: false },
        //             { answerText: this.state.quizData[0].questions[0].answerChoices[1], isCorrect: false },
        //             { answerText: this.state.quizData[0].questions[0].answerChoices[2], isCorrect: true },
        //             { answerText: this.state.quizData[0].questions[0].answerChoices[3], isCorrect: false },
        //         ],
        //     },
        // ];

        const handleAnswerButtonClick = (isCorrect) => {
            if (isCorrect) {
                this.setState({score: this.state.score + 1});
                console.log(this.state.score);
            }
    
            let nextQuestion = this.state.currentQuestion + 1;
            if (nextQuestion < this.state.ran.length) {
                this.setState({currentQuestion: nextQuestion});
            } else {
                this.setState({showScore: true});
            }
        };

        return (
            <div className='app'>
			{this.state.showScore ? (
				<div className='score-section'>
					You scored {this.state.score} out of {qSize.length}
				</div>
			) : (
				<>
					<div className='question-section'>
                        <div className='question-count'>
                            <span>Question {this.state.currentQuestion + 1}</span>/{qSize.length}
                        </div>

						{/* <div className='question-text'>{this.state.ran[this.state.currentQuestion].questionText}</div> */}
					</div>
					{/* <div className='answer-section'>
	                    {this.state.ran[this.state.currentQuestion].answerOptions.map((answerOption, index) => (
		                <button onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
	                    ))}
                    </div> */}
				</>
			)}
		</div>
        );
    }
}
import React, {Component} from 'react';
import './dashboard.css';

export default class Dashboard extends Component {
    render() {
        return (
            <div className='container'>
                <div class='jumbo'>
                    <h1>Dashboard</h1>
                </div>
                <div className='quiz-card'>
                    <h2>Quiz</h2>
                </div>
                <div className='score-card'>
                    <h2>Scores</h2>
                </div>
            </div>
        );
    }
}
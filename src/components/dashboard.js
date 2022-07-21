import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './dashboard.css';

export default class Dashboard extends Component {

    render() {
        return (
            <div className='container'>
                <div class="jumbo">
                    <h1>Welcome { localStorage.getItem('currentUser') }</h1>
                </div>
                <Link to="/quiz"><div className='quiz-card'>
                    <h2>Quiz</h2>
                </div></Link>
                <div className='score-card'>
                    <h2>Scores</h2>
                </div>
            </div>
        );
    }
}
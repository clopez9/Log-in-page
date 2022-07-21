import React, {Component} from 'react';
import './quiz.css';

export default class Quiz extends Component {
    render() {
        return (
            <body id='quiz'>
                <div class='main'>
                    <img class="image" src="../contentc.png" alt="LSSimage" width='auto' height='auto' />
                    <h1>LSS Quiz!!!!</h1>
                    <select id='drop-down'>
                        <option>lss-quiz</option>
                    </select>
                    <button type='button'>Submit</button>
                </div>
            </body>
        );
    }
}
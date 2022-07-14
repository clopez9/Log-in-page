import React, {Component} from 'react';
import axios from 'axios';

export default class Admin extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);

    }
   
    onChange(e) {
        console.log(e);
        var file = e.target.files[0];
        var reader = new FileReader();
        reader.onload = function(e) {
            // The file's text will be printed here
            console.log(e.target.result)
          };
        reader.readAsText(file)
        // axios.post('http://localhost:5000/admin').then(res => console.log(res.data)).catch(err => console.log(err));
        // console.log(e);
    }
    render () {
        return (
            <form>
            <div className="container">
                <input onChange= {this.onChange}type="file"></input>
                <button type="submit">Submit</button>
            </div>
            </form>
        )
    }
}
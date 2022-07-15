import React, {Component} from 'react';
import axios from 'axios';

export default class Admin extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);

    }
    onSubmit(e) {
        
    }
   
    onChange(e) {
        console.log(e);
        var file = e.target.files[0];
        var reader = new FileReader();
        reader.onload = function(e) {
            // The file's text will be printed here
            console.log(e.target.result)
            const csv = {
                fileContent: e.target.result
            }
            axios.post('http://localhost:5000/admin', csv).then(res => console.log(res.data)).catch(err => console.log(err));
          };
        reader.readAsText(file)
       
        // console.log(e);
    }
    render () {
        return (
            <form onSubmit = {this.onSubmit}>
            <div className="container">
                <input onChange= {this.onChange}type="file"></input>
                <button type="submit">Submit</button>
            </div>
            </form>
        )
    }
}
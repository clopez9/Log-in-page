import React, {Component} from 'react';
import axios from 'axios';

export default class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fileContent: ""
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }
    onSubmit(e) {
        e.preventDefault();
        const csv = this.state.fileContent
            axios.post('http://localhost:5000/admin', csv).then(res => console.log(res.data)).catch(err => console.log(err));
        
    }
   
    onChange(e) {
        var file = e.target.files[0];
        var reader = new FileReader();
        reader.onload = function(e) {
            // The file's text will be printed here
            const csv = {
                fileContent: e.target.result
            }
            this.setState({
                fileContent: csv
            })
          }.bind(this);
        reader.readAsText(file)
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
import React, { Component } from 'react';

class InputTextarea extends Component {
    constructor(props){
        super(props);
        this.state = {value:''};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }
    handleSubmit(){
        alert('Inputextarea submitted: ' + this.state.value);
    }
    handleChange(e){
        this.setState({value:e.target.value,});
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                Essay:
                <textarea value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default InputTextarea;
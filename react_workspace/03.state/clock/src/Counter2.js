import React, { Component } from 'react';
class Counter2 extends Component {
    constructor(props){ // 처음 한번만 불려진다. props를 계속 관리할 수 없다.
        super(props);
        this.state ={
            count: 1 + this.props.count2,
        }
    }
    onIncrease=()=>{
        this.setState({
            count: this.props.count2+this.state.count+1,
        });
    }
    onDecrease=()=>{
        this.setState({
            count: this.props.count2+this.state.count-1,
        });
    }
    render() {   
        return (
            <div>
                <h1>Count2</h1>
                <div>{this.state.count}</div>
                <button onClick={this.onIncrease}>+</button>
                <button onClick={this.onDecrease}>-</button>
                <hr></hr>
            </div>
        );
    }
}

export default Counter2;
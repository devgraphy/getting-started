import React, { Component } from 'react';

class Counter extends Component {
    render() {
        const {increase, decrease, count} = this.props;
        return (
            <div>
                <h1>Count</h1>
                <div>{count}</div>
                <button onClick={increase}>+</button>
                <button onClick={decrease}>-</button>
                <hr></hr>
            </div>
        );
    }
}

export default Counter;
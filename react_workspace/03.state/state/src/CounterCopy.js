import React, { Component } from 'react';

class CounterCopy extends Component {
    render() {
        const {count, increase, decrease} = this.props;     // 코드 반복 줄이기
        return (
            <div>
                <h1>Count: {count}</h1>
                <button onClick={increase}> + </button> 
                <button onClick={decrease}> - </button>
            </div>
        );
    }
}  

export default CounterCopy;
import React, { Component } from 'react';

class LocalCounter extends Component {
    constructor(props){
        super(props);
        this.state = {
            localCount : 0,
        }
    }

    onIncrease = () => {
        this.setState(
            {
                localCount : this.state.localCount + 1,
            }
        )
    }
    onDecrease = () => {
        this.setState(
            {
                localCount : this.state.localCount - 1,
            }
        )
    }

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

export default LocalCounter;
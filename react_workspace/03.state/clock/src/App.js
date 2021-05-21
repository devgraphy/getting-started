import React, { Component } from 'react';
import Counter from './Counter';
import Counter2 from './Counter2';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0,
    }
    //this.onIncrease = this.onIncrease.bind(this);
    //this.onDecrease = this.onDecrease.bind(this);

  }
  onIncrease(){
    alert("up");
    this.setState({count:this.state.count+1,
                  });
  }
  onDecrease(){
    alert("down");
    this.setState({count:this.state.count-1,
                  }); 
  }
  render() {
    return (
      <div>
        <Counter count = {this.state.count} increase ={this.onIncrease} decrease={this.onDecrease}/>
        <Counter2 count2 = {this.state.count} />
      </div>
    );
  }
}

export default App;
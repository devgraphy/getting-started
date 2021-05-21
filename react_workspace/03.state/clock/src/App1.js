import React, { Component } from 'react';
import Counter from './Counter';
import Counter2 from './Counter2';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0,
  
    }
  }
  onIncrease = () => {
    this.setState({count:this.state.count+1,
                  });
  }
  onDecrease = () => {
    this.setState({count:this.state.count-1,
                  }); 
  }
  render() {
    return (
      <div>
        <Counter count = {this.state.count} increase ={()=>{this.setState({count:this.state.count+1})}} decrease={()=>{this.setState({count:this.state.count-1})}}/>
        <Counter2 count2 = {this.state.count} />
      </div>
    );
  }
}

export default App;
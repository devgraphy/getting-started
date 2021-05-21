import Counter from "./Counter";
import React, {Component} from 'react';

class App extends Component {
  // 변경 데이터는 state를 사용
  // 변경 데이터 state 초기화 - constructor
  constructor(props){
    super(props);
    this.state = {
      count : 0,
    }
  }
  onIncrease = () => {
    // this.state.count+=1; // (X) 직접 값 변화는 할 수 없다 -> setState사용
    this.setState(
      {
        count : this.state.count+1,
      }
    );
  }
  onDecrease = () => {
    this.setState(
      {
        count : this.state.count-1,
      }
    );
  }

  render(){
    return(
      <div>
      <Counter count={this.state.count}
      increase={this.onIncrease}
      decrease={this.onDecrease} />
    </div>
    )
  }
  
}

export default App;

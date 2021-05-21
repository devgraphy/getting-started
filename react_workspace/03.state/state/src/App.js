// import React, { Component } from 'react';
import Counter from './Counter';
import Result from './Result';
import React, {useState} from 'react'

// State hook을 사용한 function component
function App(){
  // 변경데이터 state 선언
  const [count, setCount] = useState(0);  
  return(
    <div>
        Counter1 : <Counter count={count}
          increase={()=>setCount(count+1)}
          decrease={()=>setCount(count-1)} />
        0 ~ {count} 합: <Result count={count}/> 
    </div>
  );

}






// class App extends Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       count : 0,
//     }
//   }
//   onIncrease = () => {
//     // this.state.count+=1; // (X) 직접 값 변화는 할 수 없다 -> setState사용
//     this.setState(
//       {
//         count : this.state.count+1,
//       }
//     );
//   }
//   onDecrease = () => {
//     this.setState(
//       {
//         count : this.state.count-1,
//       }
//     );
//   }
//   render() { {/* Component 오버라이딩 */}
//     return (
//       <div>  // 렌더링되는 부분
//         Counter1 : <Counter count={this.state.count}
//       increase={this.onIncrease}
//       decrease={this.onDecrease} />
//         0 ~ {this.state.count} 합: <Result count={this.state.count}/> 
//       </div>
//     );
//   }
// }

export default App;
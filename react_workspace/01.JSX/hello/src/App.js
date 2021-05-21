// 1. react 컴포넌트를 function으로 생성하는 방법

// function App() {
//   return (
//    <div>
//      <h1>hello world!</h1>
//    </div>
//   );
// }

// export default App;


// 2. react 컴포넌트를 class로 생성하는 방법 - 재사용성과 가독성 좋음
// 단축키 rcc
import React, { Component } from 'react';
class App extends Component{
  render(){
    const name = "React";
    const type = "class";
    return(
      //JSX
      <div>
        <h1>Hello {name} Component. - {type}</h1>
      </div>
    )
  }
}

export default App;


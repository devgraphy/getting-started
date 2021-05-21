import React, { Component } from 'react';

class App extends Component {
  formatName(user){
    return user.firstName+' ' + user.lastName;
  }
  
  render() {  // override: Componenet에 render 호출이 약속됨
    // function formatName(user){
    //   return user.firstName+' ' + user.lastName;
    // }
    const user={
      firstName : 'React',
      lastName : 'Component',
    }
    const type = "class"
    // JSX- camelcase 표현식 background-color ==> backgroundColor
    // class ==> className
    const style = {
      backgroundColor : 'black',
      color : 'aqua',
      fontSize : '50px',
      fontWeight : 'bold',
      padding : 6,
    }
    return (
      <div> 
        {/*JSX 문법 주석 */}
        {/* 
        JSX - HTML cod, {javascript 표현식} 
        전체를 감싸는 element가 존재해야 한다. 디폴트로 div가 생성. 가장 많이 쓰임
        Fragment가 쓰이기도 함(import 필요)
        
        */}
        <div style = {style}> Hello {this.formatName(user)}. - {type}</div>
      </div>
    );
  }
}

export default App; //다른 모듈에서 사용하기 위해서 항상 export 해야한다.
// export default 된 것은 {} 없이 참조
// default X 된 것은 {}로 참조
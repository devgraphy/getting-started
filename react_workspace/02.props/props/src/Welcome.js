
//React Component 선언 : function(lambda function), Class
// 부모 엘리먼트(호출하는 쪽)
// <부모element name='value'>content</부모element>
// ex)Welcome name = 'React' />
// 부모 element로부터 전달된 attribute 값이나 content는 props에 저장 전달
// 자식element에선 function에서: 인자로 전달된 props 사용
//                class에서: 상속받은 React component의 this.props 사용
// props는 read only

// import React from 'react';
// 람다 함수 형식으로 익명함수로 작성. 인자없으면 괄호x, 하나면 괄호 없이 가능, 여러 인자 전달 가능 이땐 props 대신 인자명 사용
// const Welcome = (props) => {
//     return (
//         <div>
//             <h1>Hello, {props.name}</h1>
//         </div>
//     );
// };

// export default Welcome;
import PropTypes from 'prop-types';
function Welcome(props){
    return (
        <div>
            <h1 style={props.style}>
                Hello, {props.name} == &gt; {props.children}</h1>
        </div>
    )
}
// 부모 element로부터 props값이 전달되지 않을 때 기본값 설정
// 
Welcome.defaultProps={
    style : {
        backgroundColor : 'gray',
    },
    name: '리액트',
}

// 타입 명시. 가독성 높이기 위함
Welcome.propTypes= {
    name : PropTypes.string,
    style : PropTypes.object,
}
export default Welcome;



// import React, { Component } from 'react';

// class Welcome extends Component {
//     const {name, style} = this.props    
//     render() {
//         // 부모 element App 속성의 값: props 객체로 참조
//         // name 참조 <Welcome name="값"/>
//         return (
//             <div>
//                 <h1>Hello, {this.props.name}</h1>   
//             </div>
//         );
//     }
// }

// export default Welcome; 
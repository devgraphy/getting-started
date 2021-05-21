// import React from 'react';
import UserInfo from './component/UserInfo';

// function Comment(props) {
//     function formatDate(date){
//         return date.toLocaleDateString();
//     }
    
//     return (
        
//         <div>
//             <UserInfo author={props.author}/>
//             <div>{props.text}</div>
//             <div>{formatDate(props.date)}</div>
//         </div>
        
//     );
// }

// export default Comment;


import React, { Component } from 'react';
function formatDate(date){
    return date.toLocaleDateString();
}

class Comment extends Component {
    
    render() {
        return (
            <div>
                <UserInfo author={this.props.author}/>
                <div>{this.props.text}</div>
                <div>{formatDate(this.props.date)}</div>
            </div>
        );
    }
}

export default Comment;
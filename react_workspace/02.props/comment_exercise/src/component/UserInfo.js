import React from 'react';
import Avatar from './Avatar';
function UserInfo(props) {
    return (
        <div>
            <Avatar author = {props.author}/>
            <div>{props.author.name}</div>
        </div>
    );
}

export default UserInfo;
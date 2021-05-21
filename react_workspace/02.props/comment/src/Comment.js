import PropTypes from 'prop-types';
import UserInfo from './component/UserInfo';
Comment.propTypes = {
    data: PropTypes.string,
    text: PropTypes.string,
    author: PropTypes.object,
};

function formatDate(date){
    return date.toLocaleDateString();
}

function Comment(props){
    return(
    
    <div>
        <UserInfo author={props.author} />
        <div>{props.text}</div>
        <div>
            {formatDate(props.date)}
        </div>
    </div>
       
    )
}
export default Comment;
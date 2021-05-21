import { Item } from 'semantic-ui-react';
import React, { Component } from 'react';

//mobx 사용하지 않는 컴포넌트
class BookItemView extends Component {
    render() {
        const {book, bookSelect} = this.props;
        return (
            <Item onClick={()=>bookSelect(book)}>
                <Item.Image size='tiny' src={book.imgUrl} />

                <Item.Content>
                    <Item.Header as='a'>{book.title}</Item.Header>
                    <Item.Meta>{book.price}</Item.Meta>
                    <Item.Extra>{book.author}</Item.Extra>
                </Item.Content>
            </Item>
        );
    }
}

export default BookItemView;
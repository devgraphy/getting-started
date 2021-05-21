import React, { Component } from 'react';
import { Item } from 'semantic-ui-react';
import BookItem from './BookItem';

class BookList extends Component {
    render() {
        const {Books, onSelectBook} = this.props;
        const BookItems = Books.map(Book => {
            return(
                <BookItem key={Book.ISBN} Book={Book} onSelectBook={onSelectBook}/>
            );
        });

        return (
            <Item.Group>
                {BookItems}
            </Item.Group>
        );
    }
}

export default BookList;
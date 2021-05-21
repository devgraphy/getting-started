import React, { Component } from 'react';
import {Item} from 'semantic-ui-react';

import {inject, observer} from 'mobx-react';
import BookItemView from '../view/BookItemView'
@inject("BookStore")
@observer
class BookListContainer extends Component {
    render() {
        //const {books, bookSelect} = this.props;
        const {books, bookSelect} = this.props.BookStore;
        const listItems = books.map(book => {
            return(
               <BookItemView key={book.ISBN} book={book} bookSelect={bookSelect}/>
            )
        });
        return (
            <Item.Group>
                {listItems}
            </Item.Group>
        );
    }
}

export default BookListContainer;
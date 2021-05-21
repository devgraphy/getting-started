import React, { Component } from 'react';
import {Item, Image} from 'semantic-ui-react';
class BookItem extends Component {
    render() {
        const {Book, onSelectBook} = this.props;
        return (
            <Item onClick={()=>onSelectBook(Book)}>
                <Item.Image size='tiny' src={Book.imgUrl} />

                <Item.Content>
                    <Item.Header>{Book.title}</Item.Header>
                    <Item.Meta>{Book.price}</Item.Meta>
                    <Item.Extra>{Book.author}</Item.Extra>
                </Item.Content>
            </Item>
        );
    }
}

export default BookItem;
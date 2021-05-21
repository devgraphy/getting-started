import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react'

class BookDetail extends Component {
    render() {
        const {Book} = this.props;
        return (
            <Card>
            <Image src={Book.imgUrl} wrapped ui={false} />
            <Card.Content>
            <Card.Header>{Book.title}</Card.Header>
            <Card.Meta>
                <span className='date'>{Book.author} &nbsp; {Book.publisher}</span>
                <span className='date'>{Book.price}</span>
            </Card.Meta>
            <Card.Description>
                {Book.introduce}
            </Card.Description>
            </Card.Content>
        </Card>
        );
    }
}

export default BookDetail;


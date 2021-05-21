import './App.css';
import {Grid} from 'semantic-ui-react';
import BookList from './component/BookList';
import BookDetail from './component/BookDetail';
import React, { Component } from 'react';
import Books from './Books';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      Books: Books,
      Book: Books[0]
    }
  }
  onSelectBook = (selectBook) =>{
    this.setState({
      Book: selectBook
    });
  }

  render() {
    return (
      <Grid columns={2}>
      <Grid.Row>
        <Grid.Column>
          <BookList Books={this.state.Books} onSelectBook={this.onSelectBook}/>
        </Grid.Column>
        <Grid.Column>
          <BookDetail Book={this.state.Book}/>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    );
  }
}

export default App;
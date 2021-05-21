import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import Books from './Books';
import BookDetail from './component/BookDetail';
import BookList from './component/BookList';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      books : Books,
      book : Books[0],

    }
  }

  onBookSelect = (selectBook) => {
    this.setState(
      {
        book: selectBook,
      }
    )
  }
  render() {
    return (
      <Grid columns={2}>
        <Grid.Row>
          <Grid.Column>
            <BookList books={this.state.books} bookSelect={this.onBookSelect}/>
          </Grid.Column>
          <Grid.Column>
            <BookDetail book={this.state.book} />
          </Grid.Column>
        </Grid.Row>
      </Grid>

    );
  }
}

export default App;
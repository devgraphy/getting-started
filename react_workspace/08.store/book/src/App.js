import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import BookContainer from './container/BookContainer';
import BookListContainer from './container/BookListContainer';
// import {inject, observer} from 'mobx-react';

// @inject("BookStore")
// @observer
class App extends Component {
  render() {
    return (
      <Grid columns={2}>
        <Grid.Row>
          <Grid.Column>
            {/* <BookList books={this.state.books} bookSelect={this.onBookSelect}/> */}
            <BookListContainer/>
          </Grid.Column>
          <Grid.Column>
            <BookContainer />
          </Grid.Column>
        </Grid.Row>
      </Grid>

    );
  }
}

export default App;
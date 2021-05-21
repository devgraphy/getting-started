import React, { Component } from 'react';
import Counter2 from './Counter2';
import Counter1 from './Counter1';

class App extends Component {
  render() {
    return (
      <div>
        Counter1 : <Counter1 count={this.state.count}
      increase={this.onIncrease}
      decrease={this.onDecrease} />
        Counter2 : <Counter2 count={this.state.count}
      increase={this.onIncrease}
      decrease={this.onDecrease} />
      </div>
    );
  }
}

export default App;
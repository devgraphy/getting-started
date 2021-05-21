import React, { Component } from "react";
import {inject, observer} from "mobx-react";
import TodoContainer from "./container/TodoContainer";
import TodoListContainer from "./container/TodoListContainer";

@inject('TodoStore')
@observer
class App extends Component {
  render() {
    return (
      <div>
        <TodoContainer/>
        <TodoListContainer/>
      </div>
    );
  }
}

export default App;

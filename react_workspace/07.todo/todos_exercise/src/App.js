import TodoEditFormView from './Component/TodoEditFormView';
import TodoListView from './Component/TodoListView';
import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todos:[],
      todo: {id:"", name:""},
    }
  }
  inputInit
  onSetTodoProp
  onAddTodo
  onRemoveTodo
  onModifyTodo
  onSelectTodo
  render() {
    return (
      <div>
        <TodoEditFormView/>
        <TodoListView/>
      </div>
    );
  }
}

export default App;

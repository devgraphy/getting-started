import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';
import {generateId} from '../IDGenerator';
import TodoEditFormView from '../view/TodoEditFormView';

@inject('TodoStore')
@observer
class TodoContainer extends Component {
    TodoStore = this.props.TodoStore;
    onSetTodoProp = (name, value) => {
        this.props.TodoStore.setTodoProp(name, value);
    }
    onAddTodo = () => {
        const{ TodoStore } = this.props;
        let todo = TodoStore.todo;
        todo = {...todo, id:generateId(5)}
        TodoStore.addTodo(todo);
        
        //this.props.TodoStore.addTodo();
    }
    onRemoveTodo=()=>{
        this.props.TodoStore.removeTodo();
    }
    onModifyTodo=()=>{
        this.props.TodoStore.modifyTodo();
    }

    render() {
        const todo = this.props.TodoStore;
        //const {todo} = this.props.TodoStore; 이전 컴포넌트에서 todo라는 변수로 전해준값
        //const todo = this.props.TodoStore.todo
        return (
            <TodoEditFormView todo={todo}
                                onSetTodoProp={this.onSetTodoProp}
                                onAddTodo={this.onAddTodo}
                                onRemoveTodo={this.onRemoveTodo}
                                onModifyTodo={this.onModifyTodo}/>
        );
    }
}

export default TodoContainer;

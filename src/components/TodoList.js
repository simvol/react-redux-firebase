import React, { Component } from 'react'
import {connect} from 'react-redux';
import {toggleTodo, removeTodo} from '../actions/todoActions';

class TodoList extends Component {
  state = {
    todos: []
  };

  static getDerivedStateFromProps(props, state) {
    const { todos } = props;

    if (todos) {
      return { todos: todos };
    }

    return null;
  }

  onComplete = id => {
    this.props.toggleTodo(id);
  }

  onDelete = id => {
    this.props.removeTodo(id);
  }

  render () {
    const { todos } = this.state;
    if (todos){
      return (
        <ul>
          {todos.map(todo => (
              <li key={todo.id}> 
                {todo.task} 
                <button onClick={this.onComplete.bind(this, todo.id)}>complete</button>
                <button onClick={this.onDelete.bind(this, todo.id)}>delete</button>
              </li>
            )
          )}
        </ul>
      );
    } else {
      return (
        <div>Loading...</div>
      )
    }
  };
};

const mapStateToProps = state => ({
  todos: state.todo.todos
});

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id)),
  removeTodo: id => dispatch(removeTodo(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
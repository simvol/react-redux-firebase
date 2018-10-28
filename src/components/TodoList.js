import React, { Component } from 'react'
import {connect} from 'react-redux';
import {fetchTodos, toggleTodo, removeTodo} from '../actions/todoActions';

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

  componentDidMount() {
    this.props.fetchTodos();
  }

  onComplete = todo => {
    this.props.toggleTodo(todo);
  }

  onDelete = id => {
    this.props.removeTodo(id);
  }

  render () {
    const { todos } = this.state;
    if (todos){
      return (
        <ul>
          {todos.map(todo => {
              const todoStyle = todo.completed === true ? {textDecoration: 'line-through'} : {};

              return (<li key={todo.id}> 
                        <span style={todoStyle}>{todo.task}</span>
                        <button onClick={this.onComplete.bind(this, todo)}>complete</button>
                        <button onClick={this.onDelete.bind(this, todo.id)}>delete</button>
                      </li>);
            }
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
  fetchTodos: () => dispatch(fetchTodos()),
  toggleTodo: id => dispatch(toggleTodo(id)),
  removeTodo: id => dispatch(removeTodo(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
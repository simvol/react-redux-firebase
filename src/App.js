import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';

import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="container">
          <AddTodo />
          <TodoList />
        </div>
      </Provider>
    );
  }
}

export default App;

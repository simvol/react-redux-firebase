import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from './types';

let nextTodoId = 0;

export const addTodo = task => ({
  type: ADD_TODO,
  id: ++nextTodoId,
  task
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id
});

export const removeTodo = id => ({
  type: REMOVE_TODO,
  id
});
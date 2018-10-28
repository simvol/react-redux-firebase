import { FETCH_TODOS, REMOVE_TODO, TOGGLE_TODO } from './types';
import { todosRef } from '../config/firebase';

export const fetchTodos = () => async dispatch => {
  todosRef.onSnapshot(todosSnapshot => {

    const todos = todosSnapshot.docs.map(todoSnapshot => ({
        ...todoSnapshot.data(),
        id: todoSnapshot.id
      })
    );

    dispatch({
      type: FETCH_TODOS,
      payload: todos
    })
  })
};

export const addTodo = task => async dispatch => {
  todosRef.add({
    task,
    completed: false
  });
};

export const toggleTodo = todo => async dispatch => {
  todosRef.doc(todo.id).set({
    ...todo,
    completed: !todo.completed
  });
};

export const removeTodo = id => async dispatch => {
  todosRef.doc(id).delete();
};
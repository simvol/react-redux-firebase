import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from '../actions/types';

const initialState = {
  todos: [
    {task: 'lololol', id: 0, completed: false}
  ]
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        todos: [
          ...state.todos,
          {
            id: action.id,
            task: action.task,
            completed: false
          }
        ]
      };

    case TOGGLE_TODO:
      return {
        todos: state.todos.map(todo => (todo.id === action.id) ? {...todo, completed: !todo.completed} : todo)
      }

    case REMOVE_TODO:
      return {
        todos: state.todos.filter(todo => todo.id !== action.id)
      }

    default:
      return state;
  }
};

export default todos;
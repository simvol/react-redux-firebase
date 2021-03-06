import { FETCH_TODOS } from '../actions/types';

const initialState = {
  todos: []
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TODOS:
      return {
        todos: action.payload
      };

    // Not needed, because we add/toggle/remove directly in firebase
    // case ADD_TODO:
    //   return {
    //     todos: [
    //       ...state.todos,
    //       {
    //         id: action.id,
    //         task: action.task,
    //         completed: false
    //       }
    //     ]
    //   };

    // case TOGGLE_TODO:
    //   return {
    //     todos: state.todos.map(todo => (todo.id === action.id) ? {...todo, completed: !todo.completed} : todo)
    //   }

    // case REMOVE_TODO:
    //   return {
    //     todos: state.todos.filter(todo => todo.id !== action.id)
    //   }

    default:
      return state;
  }
};

export default todos;
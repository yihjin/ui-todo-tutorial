import { SET_TODOS, ADD_TODO } from "./todo.actions";

export const todoReducer = (state, action) => {
  const { type, data } = action;
  switch (type) {
    case SET_TODOS:
      return { ...state, todos: data };
    case ADD_TODO:
      const todos = {
        ...state.todos,
        [data.id]: { description: data.description },
      };
      return { ...state, todos };
    default:
      return state;
  }
};

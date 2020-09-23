import { SET_TODOS, ADD_TODO, DELETE_TODO, UPDATE_TODO } from "./todo.actions";

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
    case DELETE_TODO:
        const todosAfterDelete = { ...state.todos }; //spread operator, it copies the state.todos
        delete todosAfterDelete[data]; //data inside is id (data is an object)
        return { ...state, todos: todosAfterDelete };
    case UPDATE_TODO:
      //
        return  { ...state, todos: todosAfterDelete };
    default:
      return state;
  }
};

export const SET_TODOS = "SET_TODOS";
export const ADD_TODO = "ADD_TODO";

export const setTodos = (todos) => ({ type: SET_TODOS, data: todos });
export const addTodo = (id, description) => ({
  type: ADD_TODO,
  data: { id, description },
});

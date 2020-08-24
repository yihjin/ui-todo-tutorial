import { SET_TODOS, ADD_TODO } from "./todo.actions";
import { todoReducer } from "./todo.reducer";

describe("todo.reducer", () => {
  it("should add data to state.todos for type SET_TODOS", () => {
    const mockState = { todos: {} };
    const mockAction = {
      type: SET_TODOS,
      data: { 0: { description: "new todo!" } },
    };
    expect(todoReducer(mockState, mockAction)).toEqual({
      todos: {
        0: {
          description: "new todo!",
        },
      },
    });
  });

  it("should add data to state.todos for type ADD_TODO", () => {
    const mockState = { todos: {} };
    const mockAction = {
      type: ADD_TODO,
      data: { id: 0, description: "new todo!" },
    };
    expect(todoReducer(mockState, mockAction)).toEqual({
      todos: {
        0: {
          description: "new todo!",
        },
      },
    });
  });

  it("should do nothing for unrecognised type", () => {
    const mockState = { todos: {} };
    const mockAction = {
      type: "WRONG_TYPE",
      data: { id: 0, description: "new todo!" },
    };
    expect(todoReducer(mockState, mockAction)).toEqual(mockState);
  });
});

import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
const initialState = {
  todos: [
    {
      id: uuidv4(),
      context: "learn redux",
      done: false
    }
  ]
};
const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    deleteTodoItem(state, actions) {
      state.todos.splice(actions.payload, 1);
    },
    addTodoItem(state, actions) {
      state.todos.push({
        id: uuidv4(),
        ...actions.payload
      });
    },
    changeDoneState(state,actions){
      state.todos[actions.payload].done = !state.todos[actions.payload].done;
    }
  }
});
export const { deleteTodoItem, addTodoItem,changeDoneState } = todoSlice.actions;
export default todoSlice.reducer;

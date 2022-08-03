import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  todos: [
    
  ]
};
const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    deleteTodoItem(state, actions) {
      const todoIndex = state.todos.findIndex(
        todo => todo.id === actions.payload
      );
      state.todos.splice(todoIndex, 1);
    },
    addTodoItem(state, actions) {
      state.todos.push({
        ...actions.payload
      });
    },
    changeDoneState(state, actions) {
      const todoIndex = state.todos.findIndex(
        todo => todo.id === actions.payload
      );
      state.todos[todoIndex].done = !state.todos[todoIndex].done;
    },
    setTodoList(state,actions){
      state.todos = actions.payload;
    }
  }
});
export const {
  deleteTodoItem,
  addTodoItem,
  changeDoneState,
  setTodoList
} = todoSlice.actions;
export default todoSlice.reducer;

import {createSlice} from "@reduxjs/toolkit";
import {v4 as uuidv4} from "uuid";
const initialState = {
    todos:[
        {
            id:uuidv4(),
            context:"learn redux",
            done:false
        }
    ]
}
const todoSlice = createSlice({
    name:"todo",
    initialState,
    reducers:{
        deleteTodoItem(state,actions){
            state.todos.splice(actions.payload,1);
        }
    }
})
export const {deleteTodoItem} = todoSlice.actions;
export default todoSlice.reducer;
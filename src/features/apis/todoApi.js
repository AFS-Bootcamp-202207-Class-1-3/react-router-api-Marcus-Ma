import {api} from './apis'
export const getTodos = ()=> {
    return api.get("/todos")
}
export const getTodoById = (id)=> {
    return api.get(`/todos/{id}`)
}
export const deleteTodoById = (id)=> {
    return api.delete(`/todos/{id}`)
}
export const saveTodo = (todo)=>{
    return api.post({todo})
}
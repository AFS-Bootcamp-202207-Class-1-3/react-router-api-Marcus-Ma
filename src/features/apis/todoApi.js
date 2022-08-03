import {api} from './apis'
export const getTodos = () => {
    return api.get("/todos")
}
export const getTodoById = (id) => {
    return api.get(`/todos/${id}`)
}
export const deleteTodoById = (id) => {
    return api.delete(`/todos/${id}`)
}
export const saveTodo = (text)=>{
    return api.post("/todos",text)
}
export const changeTodoDone = (id,done) =>{
    return api.put(`/todos/${id}`,done)
}
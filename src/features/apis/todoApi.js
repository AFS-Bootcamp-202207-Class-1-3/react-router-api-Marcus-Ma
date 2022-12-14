import {api} from './apis'
export const getTodos = () => {
    return api.get("/todos")
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
export const changeTodoContext = (id,context) =>{
  return api.put(`/todos/${id}`,context)
}

import "../css/TodoGroup.css"
import TodoItem from "./TodoItem";
function TodoGroup(props){
  const {updateTodoItemList,todoItemList} = props;
  const todoItems = todoItemList
  .map((value,index) => (<TodoItem 
    todoItemList={todoItemList} 
    key={index}
    index={index} 
    todo={value} 
    updateTodoItemList={updateTodoItemList}
    />))
  return(
    <div className="todoGroup-box">
      {todoItems}
    </div>
  )
}
export default TodoGroup;
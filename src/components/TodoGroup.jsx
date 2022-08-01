import "../css/TodoGroup.css"
import TodoItem from "./TodoItem";
function TodoGroup(props){
  const {deleteTodoItem,todoItemList} = props;
  const todoItems = todoItemList
  .map((value,index) => (<TodoItem  
    key={index}
    index={index} 
    todo={value} 
    deleteTodoItem={deleteTodoItem}
    />))
  return(
    <div className="todoGroup-box">
      {todoItems}
    </div>
  )
}
export default TodoGroup;
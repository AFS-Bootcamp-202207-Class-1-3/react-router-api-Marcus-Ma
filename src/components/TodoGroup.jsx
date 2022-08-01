import "../css/TodoGroup.css"
import TodoItem from "./TodoItem";
function TodoGroup(props){
  const {todoItemList} = props;
  const todoItems = todoItemList.map((value,index) => (<TodoItem key={index} todo={value}/>))
  return(
    <div className="todoGroup-box">
      {todoItems}
    </div>
  )
}
export default TodoGroup;
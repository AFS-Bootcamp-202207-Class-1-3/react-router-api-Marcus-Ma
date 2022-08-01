import "../css/TodoItem.css"
function TodoItem(props){
  const {todoItemList,updateTodoItemList,index,todo} = props;
  const deleteTodo = function(){
    let todolist = [...todoItemList];
    todolist.splice(index,1);
    updateTodoItemList(todolist);
  }
  return(
    <div className="todoItem">
      <input type="text" value={todo} readOnly/><button onClick={deleteTodo}>delete</button>
    </div>
  )
}
export default TodoItem;
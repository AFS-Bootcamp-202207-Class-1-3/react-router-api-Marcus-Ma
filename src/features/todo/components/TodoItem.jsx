import "../css/TodoItem.css"
function TodoItem(props){
  const {deleteTodoItem,index,todo} = props;
  const deleteTodo = function(){
    deleteTodoItem(index);
  }
  return(
    <div className="todo-item">
      <input type="text" value={todo} readOnly/><button onClick={deleteTodo}>delete</button>
    </div>
  )
}
export default TodoItem;
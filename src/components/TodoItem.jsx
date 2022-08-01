import "../css/TodoItem.css"
function TodoItem(props){
  const {todo} = props;
  return(
    <div className="todoItem">
      <input type="text" value={todo} readOnly/>
    </div>
  )
}
export default TodoItem;
import "../css/TodoGenerator.css";
function TodoGenerator(props){
  const {updateTodoItemList,todoItemList} = props;
  const addTodoList = function(){
    const value = document.getElementById("inputText").value;
    const todo = todoItemList;
    if(value !== ""){
      todo.push(value);
      updateTodoItemList(todo);
      document.getElementById("inputText").value="";
    }
  }
  return(
    <div className="todoGeneratorBox">
      <input type="text" id="inputText" /><button className="addButton" onClick={addTodoList}>add</button>
    </div>
  )
}
export default TodoGenerator;
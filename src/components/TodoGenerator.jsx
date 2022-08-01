import "../css/TodoGenerator.css";
function TodoGenerator(props){
  const {updateTodoItemList,} = props;
  const addTodoList = function(){
    const value = document.getElementById("inputText").value;
    if(value !== ""){
      updateTodoItemList(value);
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
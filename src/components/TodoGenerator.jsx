import "../css/TodoGenerator.css"
function TodoGenerator(){
  return(
    <div className="todoGeneratorBox">
      <input type="text" className="inputText" /><button className="addButton">add</button>
    </div>
  )
}
export default TodoGenerator;
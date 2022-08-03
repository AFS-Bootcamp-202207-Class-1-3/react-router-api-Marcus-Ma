import "../css/TodoItem.css";
import { Button } from 'antd';
import { EditFilled,DeleteFilled } from '@ant-design/icons';
import { useDispatch } from "react-redux";
import { deleteTodoItem, changeDoneState } from "../todoSlice";
import { deleteTodoById, changeTodoDone } from "../../apis/todoApi";
function TodoItem(props) {
  const { todo } = props;
  const dispatch = useDispatch();
  const deleteTodo = function() {
    deleteTodoById(todo.id).then(response=>{
      dispatch(deleteTodoItem(response.data.id));
    })
  };
  const changeDone = function() {
    const done = !todo.done;
    changeTodoDone(todo.id,{done}).then(response =>{
      dispatch(changeDoneState(response.data.id));
    })
  };
  return (
      <div className="todo-li" >
        <span className={todo.done ? "line-through-text":"none-text"} onClick={changeDone} >
          {todo.context}
        </span>
        <div className="button-group">
          <Button type="primary" icon={<EditFilled />} ghost/>
          <Button type="primary" icon={<DeleteFilled />} danger ghost  onClick={deleteTodo}/>
        </div>
      </div>
  );
}
export default TodoItem;

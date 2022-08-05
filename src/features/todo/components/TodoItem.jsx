import "../css/TodoItem.css";
import { Button, message } from "antd";
import { EditFilled, DeleteFilled } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import {
  deleteTodoItem,
  changeDoneState,
} from "../todoSlice";
import {
  deleteTodoById,
  changeTodoDone,
} from "../../apis/todoApi";
function TodoItem(props) {
  const { todo,showModal } = props;
  const dispatch = useDispatch();

  const success = (successMsg) => {
    message.success(successMsg);
  };

  const deleteTodo = function() {
    deleteTodoById(todo.id).then(response => {
      dispatch(deleteTodoItem(todo.id));
      success("删除成功！");
    });
  };
  const changeDone = function() {
    const done = !todo.done;
    changeTodoDone(todo.id, { done }).then(response => {
      dispatch(changeDoneState(response.data.id));
    });
  };

  return (
    <div className="todo-li">
      <span
        className={todo.done ? "line-through-text" : "none-text"}
        onClick={changeDone}
      >
        {todo.context}
      </span>
      <div className="button-group">
        <Button
          type="primary"
          icon={<EditFilled />}
          onClick={(e)=>showModal(todo)}
          ghost
        />
        <Button
          type="primary"
          icon={<DeleteFilled />}
          danger
          ghost
          onClick={deleteTodo}
        />
      </div>
    </div>
  );
}
export default TodoItem;

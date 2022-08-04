import "../css/TodoItem.css";
import { Button, Modal, message } from "antd";
import { EditFilled, DeleteFilled } from "@ant-design/icons";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  deleteTodoItem,
  changeDoneState,
  updateTodoContext
} from "../todoSlice";
import {
  deleteTodoById,
  changeTodoDone,
  changeTodoContext
} from "../../apis/todoApi";
function TodoItem(props) {
  const { todo } = props;
  const dispatch = useDispatch();
  const errorMessage = "修改内容不能为空!";
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [updateValue, setUpdateValue] = useState(todo.context);
  const showModal = () => {
    setIsModalVisible(true);
  };
  const error = () => {
    message.error(errorMessage);
  };
  const success = (successMsg) => {
    message.success(successMsg);
  };
  const handleOk = () => {
    if (updateValue === "") {
      error();
    } else {
      changeTodoContext(todo.id, { context: updateValue }).then(response => {
        dispatch(updateTodoContext(response.data));
        setIsModalVisible(false);
      });
    }
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const handleUpdateValue = event => {
    setUpdateValue(event.target.value);
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
          onClick={showModal}
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
      {/* 往上提一层 */}
      <Modal
        title="Update Context"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <textarea
          value={updateValue}
          cols="25"
          rows="5"
          className="my-text"
          onChange={handleUpdateValue}
        >
          {updateValue}
        </textarea>
      </Modal>
    </div>
  );
}
export default TodoItem;

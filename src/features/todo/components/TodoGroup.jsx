import "../css/TodoGroup.css";
import TodoItem from "./TodoItem";
import { useEffect,useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTodos,changeTodoContext } from "../../apis/todoApi.js";
import { setTodoList,updateTodoContext } from "../todoSlice";
import { List,Modal,message } from 'antd';
function TodoGroup() {
  const todos = useSelector(state => state.todo.todos);
  const dispatch = useDispatch();
  const errorMessage = "修改内容不能为空!";
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [updateValue, setUpdateValue] = useState("");
  const [nowTodo,setNowTodo] = useState({});
  // [dispatch] 解决依赖
  useEffect(() => {
    getTodos().then(response => {
      dispatch(setTodoList(response.data));
    })
  }, [dispatch]);
  const noDoneTodos = todos.filter(todo => todo.done === false);

  // 修改
    const showModal = function(todo){
      setNowTodo(todo);
      setUpdateValue(todo.context);
      setIsModalVisible(true);
    };
    const error = () => {
      message.error(errorMessage);
    };
    const handleOk = function(todo){
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
  return (
    <div className="todo-group-box">
        <List
          bordered
          dataSource={noDoneTodos}
          renderItem={item => (
            <List.Item>
              <TodoItem key={item.id} todo={item} showModal={showModal} />
            </List.Item>
          )}
        />
        <Modal
          title="Update Context"
          visible={isModalVisible}
          onOk={()=>handleOk(nowTodo)}
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
export default TodoGroup;

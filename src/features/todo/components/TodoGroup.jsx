import "../css/TodoGroup.css";
import TodoItem from "./TodoItem";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTodos } from "../../apis/todoApi.js";
import { setTodoList } from "../todoSlice";
import { List } from 'antd';
function TodoGroup() {
  const todos = useSelector(state => state.todo.todos);
  const dispatch = useDispatch();
  // [dispatch] 解决依赖
  useEffect(() => {
    getTodos().then(response => {
      dispatch(setTodoList(response.data));
    })
  }, [dispatch]);
  const noDoneTodos = todos
    .filter(todo => todo.done === false);
  return (
    <div className="todo-group-box">
       <List
          bordered
          dataSource={noDoneTodos}
          renderItem={item => (
            <List.Item>
              <TodoItem key={item.id} todo={item} />
            </List.Item>
          )}
        />
    </div>
  );
}
export default TodoGroup;

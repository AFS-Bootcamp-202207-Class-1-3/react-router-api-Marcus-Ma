import { useSelector } from "react-redux";
import { List } from 'antd';
import TodoItem from "../todo/components/TodoItem";
import "./css/Done.css";
function Done() {
  const todos = useSelector(state => state.todo.todos);
  const doneTodos = todos.filter(todo => todo.done === true);
  return (
    <div className="done-box">
      <h1>Done</h1>
      <List
          bordered
          dataSource={doneTodos}
          renderItem={item => (
            <List.Item>
              <TodoItem key={item.id} todo={item} />
            </List.Item>
          )}
        />
    </div>
  );
}
export default Done;

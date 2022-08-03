import "./App.css";
import TodoList from "./features/todo/components/TodoList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./features/layout/Layout";
import About from "./features/pages/About";
import Done from "./features/pages/Done";
import NotFound from "./features/pages/NotFound404";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 最外层  路由从上到下进行匹配 */}
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<TodoList />} />
          <Route path="/about" element={<About />} />
          <Route path="/done" element={<Done />} />
        </Route>
        {/* 所有匹配 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

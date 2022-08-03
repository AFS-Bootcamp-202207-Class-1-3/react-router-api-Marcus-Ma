import './App.css';
import TodoList from "./features/todo/components/TodoList";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Layout from "./features/layout/Layout";
import About from './features/pages/About';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 最外层 */}
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<TodoList/>}/>
          <Route path="/about" element={<About/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

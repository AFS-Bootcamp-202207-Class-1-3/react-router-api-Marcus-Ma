import "./Layout.css";
import { Link, Outlet } from "react-router-dom";
function Layout() {
  return (
    <div className="layout">
      <h1>My ToDo</h1>
      <nav>
        {/* 切换路由 */}
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/done">Done</Link>
      </nav>
      <div className="content">
          {/* 内容切换区域 */}
        <Outlet />
      </div>
    </div>
  );
}
export default Layout;

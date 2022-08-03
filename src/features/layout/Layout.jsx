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
      </nav>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}
export default Layout;
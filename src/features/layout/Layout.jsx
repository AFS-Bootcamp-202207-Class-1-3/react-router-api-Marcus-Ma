import "./Layout.css";
import { Link, Outlet } from "react-router-dom";
import { Menu } from "antd";
import { HomeFilled, MessageFilled, LikeFilled } from "@ant-design/icons";
function Layout() {
  return (
    <div className="layout">
      <h1>My ToDo</h1>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["home"]}>
        <Menu.Item key="home" icon={<HomeFilled />}>
          <Link to="/">Home </Link>
        </Menu.Item>
        <Menu.Item key="about" icon={<MessageFilled />}>
          <Link to="/about">About</Link>
        </Menu.Item>
        <Menu.Item key="done" icon={<LikeFilled />}>
          <Link to="/done">Done</Link>
        </Menu.Item>
      </Menu>
      <div className="content">
        {/* 内容切换区域 */}
        <Outlet />
      </div>
    </div>
  );
}
export default Layout;

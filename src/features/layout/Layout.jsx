import "./Layout.css";
import { Link, Outlet } from "react-router-dom";
import { Menu } from "antd";
import { MailOutlined } from "@ant-design/icons";
function Layout() {
  return (
    <div className="layout">
      <h1>My ToDo</h1>
      <Menu mode="horizontal" defaultSelectedKeys={["home"]}>
        <Menu.Item key="home" icon={<MailOutlined />}>
          <Link to="/">Home </Link>
        </Menu.Item>
        <Menu.Item key="about" icon={<MailOutlined />}>
          <Link to="/about">About</Link>
        </Menu.Item>
        <Menu.Item key="done" icon={<MailOutlined />}>
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

import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItem active">Home</li>
            </Link>
            <li className="sidebarListItem">
              <i class="fa-regular fa-user"></i>
              Analytics
            </li>
            <li className="sidebarListItem">Sales</li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <i class="fa-regular fa-user"></i>
                Users
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarListItem">
                <i class="fa-regular fa-user"></i>
                Products
              </li>
            </Link>
            <li className="sidebarListItem">
              <i class="fa-regular fa-user"></i>
              Transactions
            </li>
            <li className="sidebarListItem">
              <i class="fa-regular fa-user"></i>
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <i class="fa-regular fa-user"></i>
              Mail
            </li>
            <li className="sidebarListItem">
              <i class="fa-regular fa-user"></i>
              Feedback
            </li>
            <li className="sidebarListItem">
              <i class="fa-regular fa-user"></i>
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <i class="fa-regular fa-user"></i>
              Manage
            </li>
            <li className="sidebarListItem">
              <i class="fa-regular fa-user"></i>
              Analytics
            </li>
            <li className="sidebarListItem">
              <i class="fa-regular fa-user"></i>
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Sidebar;

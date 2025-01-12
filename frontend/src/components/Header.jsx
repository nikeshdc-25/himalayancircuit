import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import logo from "../assets/logo.png";
import "./Header.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../slices/authSlice";
import { toast } from "react-toastify";
import { useUserLogoutMutation } from "../slices/userApiSlice";
import SearchBox from "./SearchBox";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { FaInfoCircle, FaSignOutAlt, FaUserEdit } from "react-icons/fa";
import { TfiWrite } from "react-icons/tfi";
import { MdMarkEmailUnread } from "react-icons/md";
import { MdFlight } from "react-icons/md";
import { useState } from "react";

function Header() {
  const { userInfo } = useSelector((state) => state.auth);
  const [userLogout, { isLoading }] = useUserLogoutMutation();
  const dispatch = useDispatch();
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      let res = await userLogout().unwrap();
      dispatch(logout());
      toast.warn(res.message);
    } catch (err) {
      toast.error(err.data.error);
    }
  };

  const handleNavClick = (path) => {
    setExpanded(false);
    navigate(path);
  };
  const collapseHandler = () => setExpanded(false); // Collapse function for SearchBox

  return (
    <header style={{ top: -5, width: "100%", zIndex: 1000, position: "fixed" }}>
      <Navbar
        variant="dark"
        bg="dark"
        expand="md"
        collapseOnSelect
        expanded={expanded}
        onToggle={() => setExpanded(!expanded)}
      >
        <NavLink to="/" className="navbar-brand">
          <Navbar.Brand className="px-2">
            <img src={logo} alt="logo" className="mx-3" />
          </Navbar.Brand>
        </NavLink>
        <Container>
          <Navbar.Toggle aria-controls="navbar" />

          <Navbar.Collapse id="navbar">
            <Nav className="ms-auto">
              <NavLink to="" className="header-underline nav-link mx-1">
                Tour
              </NavLink>
              <NavLink to="/" className="header-underline nav-link mx-1">
                Trekking
              </NavLink>
              <NavLink to="" className="header-underline nav-link mx-1">
                Cultural
              </NavLink>
              <NavLink to="" className="header-underline nav-link mx-1">
                Climbing
              </NavLink>
              <SearchBox collapseHandler={collapseHandler} />
              <NavLink to="" className="header-underline nav-link mx-1">
                About Us
              </NavLink>
              <NavLink to="" className="header-underline nav-link mx-1">
                Blog
              </NavLink>

              {userInfo && (
                <NavDropdown
                  title={
                    <MdOutlineAdminPanelSettings style={{ fontSize: 22 }} />
                  }
                  id="admin-routes"
                  className="admin-routes"
                >
                  {userInfo.isSuperUser && (
                    <>
                      <NavDropdown.Item
                        onClick={() => handleNavClick("/admin/aboutus")}
                      >
                        <FaInfoCircle /> About Us
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        onClick={() => handleNavClick("/admin/users")}
                      >
                        <FaUserEdit /> Users
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        onClick={() => handleNavClick("/admin/blogs")}
                      >
                        <TfiWrite /> Blogs
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        onClick={() => handleNavClick("/admin/newsletters")}
                      >
                        <MdMarkEmailUnread /> Newsletter
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        onClick={() => handleNavClick("/admin/packages")}
                      >
                        <MdFlight /> Tours
                      </NavDropdown.Item>
                    </>
                  )}
                  {userInfo.isBlogUser && !userInfo.isSuperUser && (
                    <>
                      <NavDropdown.Item
                        onClick={() => handleNavClick("/admin/blogs")}
                      >
                        <TfiWrite /> Blogs
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        onClick={() => handleNavClick("/admin/newsletters")}
                      >
                        <MdMarkEmailUnread /> Newsletter
                      </NavDropdown.Item>
                    </>
                  )}
                  {userInfo.isTnTUser && !userInfo.isSuperUser && (
                    <>
                      <NavDropdown.Item
                        onClick={() => handleNavClick("/admin/aboutus")}
                      >
                        <FaInfoCircle /> About Us
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        onClick={() => handleNavClick("/admin/newsletters")}
                      >
                        <MdMarkEmailUnread /> Newsletter
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        onClick={() => handleNavClick("/admin/packages")}
                      >
                        <MdFlight /> Tours
                      </NavDropdown.Item>
                    </>
                  )}
                  <NavDropdown.Item onClick={logoutHandler}>
                    <FaSignOutAlt /> Logout
                  </NavDropdown.Item>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;

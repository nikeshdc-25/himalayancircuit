import { Container, Navbar, Nav } from "react-bootstrap";
import logo from "../assets/logo.png";
import "./Header.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../slices/authSlice";
import { toast } from "react-toastify";
import { useUserLogoutMutation } from "../slices/userApiSlice";
import SearchBox from "./SearchBox";
import { useEffect } from "react";

function Header() {
  const { userInfo } = useSelector((state) => state.auth);
  const [userLogout, { isLoading }] = useUserLogoutMutation();
  const dispatch = useDispatch();

  const logoutHandler = async () => {
    try {
      let res = await userLogout().unwrap();
      dispatch(logout()); 
      toast.warn(res.message);
    } catch (err) {
      toast.error(err.data.error);
    }
  };

  return (
<header style={{ top: -5, width: "100%", zIndex: 1000, position: "fixed"}}>
<Navbar variant="dark" bg="dark" expand="md" collapseOnSelect>
        <NavLink to="/" className="navbar-brand">
          <Navbar.Brand className="px-2">
            <img src={logo} alt="logo" className="mx-3" />
          </Navbar.Brand>
        </NavLink>
        <Container>
          <Navbar.Toggle aria-controls="navbar" />

          <Navbar.Collapse id="navbar">
            <Nav className="ms-auto">
              <NavLink to="/" className="header-underline nav-link mx-1">
                Home
              </NavLink>
              <NavLink to="" className="header-underline nav-link mx-1">
                Trekking
              </NavLink>
              <NavLink to="" className="header-underline nav-link mx-1">
                Tour
              </NavLink>
              <NavLink to="" className="header-underline nav-link mx-1">
                Climbing
              </NavLink>
              <SearchBox />
              <NavLink to="" className="header-underline nav-link mx-1">
                About Us
              </NavLink>
              <NavLink to="" className="header-underline nav-link mx-1">
                Blog
              </NavLink>

              {userInfo && (userInfo.isSuperUser || userInfo.isBlogUser || userInfo.isTnTUser) && (
                <NavLink
                  to="#"
                  className="header-underline nav-link mx-1"
                  onClick={logoutHandler} // Call logoutHandler on click
                >
                  Logout
                </NavLink>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;

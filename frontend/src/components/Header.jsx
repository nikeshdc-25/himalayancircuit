import { Container, Navbar, Nav } from "react-bootstrap";
import logo from "../assets/logo.png";
<<<<<<< HEAD
import { FaUser, FaHouseUser, FaUserCog, FaBoxes, FaUserEdit, FaSitemap } from "react-icons/fa";
=======
import {
  FaUserCog,
  FaBoxes,
  FaUserEdit,
  FaSitemap,
} from "react-icons/fa";
>>>>>>> cddda4126a569248e2917556ce997960d094985e
import "./Header.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../slices/authSlice";
import { toast } from "react-toastify";
import { useUserLogoutMutation } from "../slices/userApiSlice";
import SearchBox from "./SearchBox";

function Header() {
  const { userInfo } = useSelector((state) => state.auth);
  const [userLogout, { isLoading }] = useUserLogoutMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      let res = await userLogout().unwrap();
      dispatch(logout()); // Dispatch the logout action
      toast.warn(res.message); // Display success message
      navigate("/login"); // Redirect to login page after logout
    } catch (err) {
      toast.error(err.data.error); // Display error message
    }
  };

  return (
    <header>
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
              <NavLink to="" className="header-underline nav-link mx-1">
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

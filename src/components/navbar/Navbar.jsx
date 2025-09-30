import "./Navbar.css";

import logo from "../../assets/images/logo.png";

import { useState } from "react";

import { NavLink, Link, useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { addModal } from "../../store/modalSlice";

function Navbar() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleLogout = (e) => {
    e.preventDefault();

    dispatch(
      addModal({
        type: "confirm",
        title: "Confirm Logout",
        message: "Are you sure you want to logout?",
        disableAutoClose: true,
        actionType: "logout-confirm",
      })
    );
  };
  /*
  dispatch(
    addModal({
      type: "confirm",
      message: "Are you sure you want to logout?",
      title: "Confirm Logout",
      disableAutoClose: true,
      onConfirm: () => {
        dispatch(logout());
        navigate("/home");
      },
    })
  );
*/
  const triggerSearch = () => {
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
      setSearchTerm("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      triggerSearch();
    }
  };

  const handleSearchInput = (e) => {
    setSearchTerm(e.target.value);
    // navigate(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
  };

  return (
    <header>
      <nav>
        <Link to="/">
          <img className="logo" src={logo} alt="Logo" />
        </Link>

        <ul className="leftUl">
          <li>
            <NavLink
              to="/"
              data-title="Home"
              aria-label="Home"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <hr />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/favorites"
              data-title="Favorites"
              aria-label="Favorites"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <hr />
            </NavLink>
          </li>
        </ul>

        <label htmlFor="search">
          <input
            className="search"
            id="search"
            type="search"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchInput}
            onKeyDown={handleKeyDown}
          />
          <button
            className="search-btn"
            onClick={triggerSearch}
            aria-label="Search"
            type="button"
          ></button>
        </label>

        <ul className="rightUl">
          {!user ? (
            <>
              <li>
                <NavLink
                  to="/login"
                  data-title="LogIn"
                  aria-label="LogIn"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  <hr />
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/signup"
                  data-title="SignUp"
                  aria-label="SignUp"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  <hr />
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink
                  to="/profile"
                  data-title="Profile"
                  aria-label="Profile"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  <hr />
                </NavLink>
              </li>
              <li>
                <Link
                  to="/"
                  onClick={handleLogout}
                  data-title="Logout"
                  aria-label="Logout"
                  className="logout-btn"
                >
                  <hr />
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;

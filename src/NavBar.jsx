import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "./UserContext";

let NavBar = () => {
  //get context
  let userContext = useContext(UserContext);

  let onLogoutClick = (event) => {
    event.preventDefault();

    userContext.setUser({
      isLoggedIn: false,
      currentUserId: null,
      currentUserName: null,
      currentUserRole: null,
    });

    window.location.hash = "/";
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-style">
      <a className="navbar-brand" href="/#">
        eBazar
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          {userContext.user.isLoggedIn &&
          userContext.user.currentUserRole === "user" ? (
            <li className="nav-item navData.isActive">
              <NavLink className="nav-link" to="/dashboard">
                <i className="fa fa-dashboard"></i> Dashboard
              </NavLink>
            </li>
          ) : (
            ""
          )}

          {userContext.user.isLoggedIn &&
          userContext.user.currentUserRole === "user" ? (
            <li className="nav-item navData.isActive">
              <NavLink className="nav-link" to="/store">
                <i className="fa fa-shopping-bag"></i> Store
              </NavLink>
            </li>
          ) : (
            ""
          )}

          {userContext.user.isLoggedIn &&
          userContext.user.currentUserRole === "admin" ? (
            <li className="nav-item navData.isActive">
              <NavLink className="nav-link" to="/products">
                <i className="fa fa-suitcase"></i> Products
              </NavLink>
            </li>
          ) : (
            ""
          )}

          {!userContext.user.isLoggedIn ? (
            <li>
              <NavLink
                className="nav-link navData.isActive"
                to="/"
                exact="true"
              >
                Login
              </NavLink>
            </li>
          ) : (
            ""
          )}

          {!userContext.user.isLoggedIn ? (
            <li>
              <NavLink className="nav-link navData.isActive" to="/register">
                Register
              </NavLink>
            </li>
          ) : (
            ""
          )}
        </ul>

        {/* right box starts */}
        {userContext.user.isLoggedIn ? (
          <div style={{ marginRight: 100 }}>
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="fa fa-user-circle"></i>{" "}
                  {userContext.user.currentUserName}
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a
                    className="dropdown-item"
                    href="/#"
                    onClick={onLogoutClick}
                  >
                    Logout
                  </a>
                </div>
              </li>
            </ul>
          </div>
        ) : (
          ""
        )}

        {/* right box ends */}
      </div>
    </nav>
  );
};

export default NavBar;

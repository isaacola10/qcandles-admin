import React from "react";
import { Link } from "react-router-dom";

export const TopBar = () => {
  return (
    <nav className="navbar navbar-expand-lg main-navbar">
      <Link className="header-brand" to="/dashboard">
        <img
          src="/assets/img/textlogo.png"
          className="header-brand-img"
          alt="q candles logo"
          style={{ height: 25 }}
        />
      </Link>
      <form className="form-inline mr-auto">
        <ul className="navbar-nav">
          <li>
            <Link to="#" data-toggle="sidebar" className="nav-link nav-link-lg">
              <i className="fa fa-navicon"></i>
            </Link>
          </li>
          <li>
            <Link
              to="#"
              data-toggle="search"
              className="nav-link nav-link-lg d-sm-none navsearch"
            >
              <i className="ion ion-search"></i>
            </Link>
          </li>
        </ul>

        <div className="form-inline mr-auto horizontal" id="headerMenuCollapse">
          <div className=" d-none d-lg-block">
            <ul className="nav">
              <li className="nav-item with-sub">
                <Link className="nav-link mr-0" to="#">
                  <i className="fa fa-cog"></i>
                  <span> Settings</span>
                </Link>
                <div className="sub-item dropdown-menu-right">
                  <ul>
                    <li>
                      <Link to="/change-password">Change Password</Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </form>

      <ul className="navbar-nav navbar-right ">
        <li className="dropdown dropdown-list-toggle d-none d-lg-block">
          <Link to="#" data-toggle="dropdown" className="nav-link  nav-link-lg">
            <i className="fa fa-bell-o"></i>
          </Link>
          <span className="pulse bg-danger"></span>
          <div className="dropdown-menu dropdown-list dropdown-menu-right">
            <div className="dropdown-header">
              Notifications
            </div>
            <div className="dropdown-list-content">
              <Link to="#" className="dropdown-item">
                <i className="fa fa-shopping-bag  text-primary"></i>
                <div className="dropdown-item-desc">
                  <b>2 new orders</b>
                </div>
              </Link>
            </div>
          </div>
        </li>
        <li className="dropdown dropdown-list-toggle">
          <Link to="#" className="nav-link nav-link-lg full-screen-link">
            <i className="fa fa-expand" id="fullscreen-button"></i>
          </Link>
        </li>
        <li className="dropdown">
          <Link
            to="#"
            data-toggle="dropdown"
            className="nav-link dropdown-toggle nav-link-lg"
          >
            <img
              src="/assets/img/avatar/avatar-1.jpeg"
              alt="profile-user"
              className="rounded-circle w-32"
            />
            <div className="d-sm-none d-lg-inline-block"> Admin </div>
          </Link>
          <div className="dropdown-menu dropdown-menu-right">
            <Link to="#" className="dropdown-item has-icon">
              <i className="ion-ios-redo"></i> Logout
            </Link>
          </div>
        </li>
      </ul>
    </nav>
  );
};

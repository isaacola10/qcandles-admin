import React from "react";
import { Link } from "react-router-dom";

export const TopBar = () => {
  return (
    <nav class="navbar navbar-expand-lg main-navbar">
      <Link class="header-brand" to="/dashboard">
        <img
          src="assets/img/textlogo.png"
          class="header-brand-img"
          alt="q candles logo"
          style={{ height: 25 }}
        />
      </Link>
      <form class="form-inline mr-auto">
        <ul class="navbar-nav">
          <li>
            <Link to="#" data-toggle="sidebar" class="nav-link nav-link-lg">
              <i class="fa fa-navicon"></i>
            </Link>
          </li>
          <li>
            <Link
              to="#"
              data-toggle="search"
              class="nav-link nav-link-lg d-sm-none navsearch"
            >
              <i class="ion ion-search"></i>
            </Link>
          </li>
        </ul>

        <div class="form-inline mr-auto horizontal" id="headerMenuCollapse">
          <div class=" d-none d-lg-block">
            <ul class="nav">
              <li class="nav-item with-sub">
                <Link class="nav-link mr-0" to="#">
                  <i class="fa fa-cog"></i>
                  <span> Settings</span>
                </Link>
                <div class="sub-item dropdown-menu-right">
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

      <ul class="navbar-nav navbar-right ">
        <li class="dropdown dropdown-list-toggle d-none d-lg-block">
          <Link to="#" data-toggle="dropdown" class="nav-link  nav-link-lg">
            <i class="fa fa-bell-o"></i>
          </Link>
          <span class="pulse bg-danger"></span>
          <div class="dropdown-menu dropdown-list dropdown-menu-right">
            <div class="dropdown-header">
              Notifications
            </div>
            <div class="dropdown-list-content">
              <Link to="#" class="dropdown-item">
                <i class="fa fa-shopping-bag  text-primary"></i>
                <div class="dropdown-item-desc">
                  <b>2 new orders</b>
                </div>
              </Link>
            </div>
          </div>
        </li>
        <li class="dropdown dropdown-list-toggle">
          <Link to="#" class="nav-link nav-link-lg full-screen-link">
            <i class="fa fa-expand" id="fullscreen-button"></i>
          </Link>
        </li>
        <li class="dropdown">
          <Link
            to="#"
            data-toggle="dropdown"
            class="nav-link dropdown-toggle nav-link-lg"
          >
            <img
              src="assets/img/avatar/avatar-1.jpeg"
              alt="profile-user"
              class="rounded-circle w-32"
            />
            <div class="d-sm-none d-lg-inline-block"> Admin </div>
          </Link>
          <div class="dropdown-menu dropdown-menu-right">
            <Link to="#" class="dropdown-item has-icon">
              <i class="ion-ios-redo"></i> Logout
            </Link>
          </div>
        </li>
      </ul>
    </nav>
  );
};

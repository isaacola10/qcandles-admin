import React from "react";
import { Link } from "react-router-dom";

export const SideBar = () => {
  return (
    <aside className="app-sidebar">
      <ul className="side-menu">
        <li>
          <Link className="side-menu__item" to="/dashboard">
            <i className="side-menu__icon fa fa fa-desktop"></i>
            <span className="side-menu__label">Dashboard</span>
          </Link>
        </li>
        <li>
          <Link className="side-menu__item" to="/orders">
            <i className="side-menu__icon fa fa fa-shopping-bag"></i>
            <span className="side-menu__label">Orders</span>
          </Link>
        </li>
        <li className="slide">
          <Link className="side-menu__item" data-toggle="slide" to="#">
            <i className="side-menu__icon fa fa-cubes"></i>
            <span className="side-menu__label">Inventory</span>
            <i className="angle fa fa-angle-right"></i>
          </Link>
          <ul className="slide-menu">
            <li>
              <Link to="/products" className="slide-item">
                All Products
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link className="side-menu__item" to="/store-locator">
            <i className="side-menu__icon fa fa-location-arrow"></i>
            <span className="side-menu__label">Store Locator</span>
          </Link>
        </li>
        <li>
          <Link className="side-menu__item" to="/category">
            <i className="side-menu__icon fa fa fa-tags"></i>
            <span className="side-menu__label">Category</span>
          </Link>
        </li>
        <li>
          <Link className="side-menu__item" to="/shipping-fee">
            <i className="side-menu__icon fa fa fa-truck"></i>
            <span className="side-menu__label">Shipping</span>
          </Link>
        </li>
        <li>
          <Link className="side-menu__item" to="/coupon">
            <i className="side-menu__icon fa fa fa-tag"></i>
            <span className="side-menu__label">Discount</span>
          </Link>
        </li>
      </ul>
    </aside>
  );
};

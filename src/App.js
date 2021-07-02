import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Dashboard } from "./Pages/Dashboard/Dashboard";
// import { Login } from "./Pages/Auths/Login";
import { TopBar } from "./Components/DashboardComponents/TopBar";
import { SideBar } from "./Components/DashboardComponents/SideBar";
import { Footer } from "./Components/DashboardComponents/Footer";
import { Orders } from "./Pages/Orders/Orders";
import { Inventory } from "./Pages/Inventory/Inventory";
import { StoreLocator } from "./Pages/Locator/StoreLocator";
import { Category } from "./Pages/Category/Category";
import { ChangePassword } from "./Pages/Auths/ChangePassword";
import { SingleOrder } from "./Pages/Orders/SingleOrder";
import { ShippingFee } from "./Pages/Shipping/ShippingFee";
import { Coupon } from "./Pages/Discount/Coupon";
import {InventoryForm} from "./Components/InventoryComponents/Inventory-Form";
import {EditForm} from "./Components/InventoryComponents/Edit-Form";

function App() {
  return (
    <div id="app" className="page">
      <Router>
        <div className="main-wrapper page-main">
          <TopBar />
          <SideBar />
          {/* insdie body */}
          <div className="app-content">
            <Switch>
              {/* <Route>
                <Login />
              </Route> */}
              <Route path="/dashboard" exact>
                <Dashboard />
              </Route>
              <Route path="/orders" exact>
                <Orders />
              </Route>
              <Route path="/single-order" exact>
                <SingleOrder />
              </Route>
              <Route path="/products" exact>
                <Inventory />
              </Route>
              <Route path="/create-product" exact>
                <InventoryForm />
              </Route>
              <Route path="/product-details/:uuid" exact component={EditForm} />
              <Route path="/store-locator" exact>
                <StoreLocator />
              </Route>
              <Route path="/shipping-fee" exact>
                <ShippingFee />
              </Route>
              <Route path="/category" exact>
                <Category />
              </Route>
              <Route path="/coupon" exact>
                <Coupon />
              </Route>
              <Route path="/change-password" exact>
                <ChangePassword />
              </Route>
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;

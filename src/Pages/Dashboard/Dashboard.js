import React from "react";
import {DashboardTableComponent} from "../../Components/DashboardComponents/DashboardTableComponent";

export const Dashboard = () => {
  return (
    <div>
      <section className="section">
        <ol className="breadcrumb">
          <li className="breadcrumb-item active text-" aria-current="page">
            Dashboard
          </li>
        </ol>
        <div className="row">
          <div className="col-xl-3 col-lg-6 col-sm-6 col-md-12">
            <div className="card">
              <div className="card-body knob-chart">
                <div className="row mb-0">
                  <div className="col-6">
                    <div className="dash3 text-center">
                      <small className="text-muted mt-0">New Users</small>
                      <h2 className="text-success mb-0">612</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6 col-sm-6 col-md-12">
            <div className="card">
              <div className="card-body knob-chart">
                <div className="row mb-0">
                  <div className="col-6">
                    <div className="dash3 text-center">
                      <small className="text-muted mt-0">Orders</small>
                      <h2 className="text-primary mb-0">458</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6 col-sm-6 col-md-12">
            <div className="card">
              <div className="card-body knob-chart">
                <div className="row mb-0">
                  <div className="col-6">
                    <div className="dash3 text-center">
                      <small className="text-muted mt-0">Profit</small>
                      <h2 className="text-danger mb-0">$132</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6 col-sm-6 col-md-12">
            <div className="card">
              <div className="card-body knob-chart">
                <div className="row mb-0">
                  <div className="col-6">
                    <div className="dash3 text-center">
                      <small className="text-muted mt-0">Tax</small>
                      <h2 className="text-warning mb-0">$876</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <DashboardTableComponent />
        </div>
      </section>
    </div>
  );
};

import React from "react";
import { Link } from "react-router-dom";

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
          <div className="col-lg-10 col-md-12 col-sm-12 col-xl-12">
            <div className="card">
              <div className="card-header border-bottom-0">
                <h4 className="card-title">Recent Orders</h4>
              </div>
              <div className="">
                <div className="table-responsive border-top">
                  <table className="table card-table table-striped table-vcenter text-nowrap mb-0">
                    <thead>
                      <tr>
                        <th>Id</th>
                        <th>User Name</th>
                        <th>No. of items</th>
                        <th>Date</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>2345</td>
                        <td>Megan Peters</td>
                        <td>12</td>
                        <td className="text-nowrap">July 13, 2018</td>
                        <td className="text-center align-middle">
                          <div className="btn-group align-top">
                            <Link
                              className="btn btn-sm btn-primary badge"
                              to="/single-order"
                            >
                              View details
                            </Link>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>4562</td>
                        <td>Phil Vance</td>
                        <td>12</td>
                        <td className="text-nowrap">June 15, 2018</td>
                        <td className="text-center align-middle">
                          <div className="btn-group align-top">
                            <Link
                              className="btn btn-sm btn-primary badge"
                              to="/single-order"
                            >
                              View details
                            </Link>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

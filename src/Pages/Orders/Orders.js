import React from "react";
import { Link } from "react-router-dom";

export const Orders = () => {
  return (
    <div>
      <section className="section">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="#">Orders</Link>
          </li>
        </ol>

        <div className="section-body ">
          <div className="row">
            <div className="col-lg-12">
              <div className="e-panel card">
                <div className="card-header">
                  <h4>Orders</h4>
                </div>
                <div className="card-body">
                  <div className="e-table">
                    <div className="table-responsive table-lg">
                      <table className="table table-bordered text-nowrap">
                        <thead>
                          <tr>
                            <th className="text-center"></th>
                            <th className="text-center">Image</th>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Total Amount</th>
                            <th>Customer Name</th>
                            <th>Date</th>
                            <th className="text-center">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="align-middle text-center">
                              <div className="custom-control custom-control-inline custom-checkbox custom-control-nameless m-0 align-top">
                                <input
                                  className="custom-control-input"
                                  id="item-1"
                                  type="checkbox"
                                />
                                <label
                                  className="custom-control-label"
                                  for="item-1"
                                ></label>
                              </div>
                            </td>
                            <td className="align-middle text-center">
                              <img
                                alt=""
                                className="avatar avatar-md rounded-circle"
                                src="assets/img/avatar/avatar-1.jpeg"
                              />
                            </td>
                            <td className="text-nowrap align-middle">
                              Adam Cotter
                            </td>
                            <td className="text-nowrap align-middle">
                              <span>7</span>
                            </td>
                            <td className="text-nowrap align-middle">
                              <span>7500</span>
                            </td>
                            <td className="text-nowrap align-middle">
                              <span>Tonye Greene</span>
                            </td>
                            <td className="text-nowrap align-middle">
                              <span>12 Jan 2018</span>
                            </td>
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
                    <div className="d-flex justify-content-center">
                      <ul className="pagination mt-3 mb-0">
                        <li className="disabled page-item">
                          <Link className="page-link" to="#">
                            ‹
                          </Link>
                        </li>
                        <li className="active page-item">
                          <Link className="page-link" to="#">
                            1
                          </Link>
                        </li>
                        <li className="page-item">
                          <Link className="page-link" to="#">
                            2
                          </Link>
                        </li>
                        <li className="page-item">
                          <Link className="page-link" to="#">
                            3
                          </Link>
                        </li>
                        <li className="page-item">
                          <Link className="page-link" to="#">
                            4
                          </Link>
                        </li>
                        <li className="page-item">
                          <Link className="page-link" to="#">
                            5
                          </Link>
                        </li>
                        <li className="page-item">
                          <Link className="page-link" to="#">
                            ›
                          </Link>
                        </li>
                        <li className="page-item">
                          <Link className="page-link" to="#">
                            »
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

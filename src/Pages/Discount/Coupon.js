import React from "react";
import { Link } from "react-router-dom";

export const Coupon = () => {
  return (
    <div>
      <section className="section">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="#">Coupon</Link>
          </li>
        </ol>

        <div className="row">
          <div className="col-6">
            <div className="card">
              <div className="card-header">
                <h4>Create Coupon</h4>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-8">
                    <div className="form-group mb-0">
                      <label>Coupon Code</label>
                      <input
                        type="text"
                        className="form-control w-100"
                        name="couponCode"
                        placeholder=""
                        required
                      />
                    </div>
                    <div className="mt-4 ">
                      <button className="btn btn-dark">Generate</button>
                    </div>
                    <div className="form-group mb-0 mt-3">
                      <label>Expiration Date</label>
                      <input
                        type="date"
                        className="form-control w-100 "
                        name="expireDate"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <button
                    className="btn btn-primary"
                    style={{ marginLeft: 15 }}
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-6 col-md-12 col-sm-12 col-xl-6">
          <div className="card">
            <div className="card-header border-bottom-0">
              <h4 className="card-title">Active Coupons</h4>
            </div>
            <div className="">
              <div className="table-responsive border-top">
                <table className="table card-table table-striped table-vcenter text-nowrap mb-0">
                  <thead>
                    <tr>
                      <th>Coupon Code</th> <th>Creation Date</th>
                      <th>Expiration Date</th> <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>SCT12CY</td>
                      <td>24th June, 2021</td>
                      <td>24th July, 2021</td>
                      <td className="text-center align-middle">
                        <div className="btn-group align-top">
                          <button
                            className="btn btn-sm btn-danger badge"
                            type="button"
                          >
                            <i className="fa fa-trash"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

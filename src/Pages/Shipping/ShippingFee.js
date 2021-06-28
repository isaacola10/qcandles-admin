import React from "react";
import { Link } from "react-router-dom";

export const ShippingFee = () => {
  return (
    <div>
      <section className="section">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="#">Shipping Fee</Link>
          </li>
        </ol>

        <div className="row">
          <div className="col-6">
            <div className="card">
              <div className="card-header">
                <h4>Create Shipping Fee</h4>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group mb-3">
                      <label>State</label>
                      <select className="form-control w-100">
                        <option>Lagos</option>
                        <option>Abuja</option>
                        <option>Rivers</option>
                        <option>Ogun</option>
                        <option>Ibadan</option>
                      </select>
                    </div>
                    <div className="form-group mb-3">
                      <label>Area</label>
                      <input
                        type="text"
                        className="form-control w-100"
                        name=""
                        placeholder="Ikeja"
                        required
                      />
                    </div>
                    <div className="form-group mb-0">
                      <label>Fee</label>
                      <input
                        type="text"
                        className="form-control w-100"
                        name=""
                        placeholder="3000"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <button className="btn btn-primary">Add Fee</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-6 col-md-12 col-sm-12 col-xl-6">
          <div className="card">
            <div className="card-header border-bottom-0">
              <h4 className="card-title">Shipping Fees</h4>
            </div>
            <div className="">
              <div className="table-responsive border-top">
                <table className="table card-table table-striped table-vcenter text-nowrap mb-0">
                  <thead>
                    <tr>
                      <th>State</th>
                      <th>Area</th>
                      <th>Fee</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Lagos</td>
                      <td>Ikeja</td>
                      <td>3000</td>
                      <td className="text-center align-middle">
                        <div className="btn-group align-top">
                          <button
                            className="btn btn-sm btn-danger badge"
                            data-target="#largeModal"
                            data-toggle="modal"
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

import React from "react";
import { Link } from "react-router-dom";

export const Category = () => {
  return (
    <div>
      <section className="section">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="#">Category</Link>
          </li>
        </ol>

        <div className="row">
          <div className="col-6">
            <div className="card">
              <div className="card-header">
                <h4>Create Category</h4>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group mb-0">
                      <label>Category Name</label>
                      <input
                        type="text"
                        className="form-control w-100"
                        name="storeName"
                        placeholder="Scented Candles"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <button className="btn btn-primary">Save</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-6 col-md-12 col-sm-12 col-xl-6">
          <div className="card">
            <div className="card-header border-bottom-0">
              <h4 className="card-title">Categories</h4>
            </div>
            <div className="">
              <div className="table-responsive border-top">
                <table className="table card-table table-striped table-vcenter text-nowrap mb-0">
                  <thead>
                    <tr>
                      <th>Category Name</th> <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Scented Candles</td>
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

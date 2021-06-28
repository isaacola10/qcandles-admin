import React from "react";
import { Link } from "react-router-dom";

export const Inventory = () => {
  return (
    <div>
      <section className="section">
        <ol className="breadcrumb">
          <li className="breadcrumb-item active" aria-current="page">
            Products
          </li>
          <li className="ml-auto d-lg-flex d-none">
            <span className="float-left border-">
              <button
                className="btn btn-primary"
                data-target="#addProduct"
                data-toggle="modal"
                type="button"
              >
                + Add Product
              </button>
            </span>
          </li>
        </ol>

        <div className="section-body ">
          <div className="row">
            <div className="col-lg-12">
              <div className="e-panel card">
                <div className="card-header">
                  <h4>Product List</h4>
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
                            <th>Category</th>
                            <th>Quantity</th>
                            <th>Price</th>
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
                                />{" "}
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
                              Scented Candle
                            </td>
                            <td className="text-nowrap align-middle">
                              <span>7</span>
                            </td>
                            <td className="text-nowrap align-middle">
                              <span>7500</span>
                            </td>

                            <td className="text-center align-middle">
                              <div className="btn-group align-top">
                                <button
                                  className="btn btn-sm btn-primary badge"
                                  data-target="#editProduct"
                                  data-toggle="modal"
                                  type="button"
                                >
                                  Edit
                                </button>{" "}
                                <button
                                  className="btn btn-sm btn-primary badge"
                                  type="button"
                                  data-target="#deleteModal"
                                  data-toggle="modal"
                                >
                                  <i className="fa fa-trash"></i>
                                </button>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle text-center">
                              <div className="custom-control custom-control-inline custom-checkbox custom-control-nameless m-0 align-top">
                                <input
                                  className="custom-control-input"
                                  id="item-2"
                                  type="checkbox"
                                />{" "}
                                <label
                                  className="custom-control-label"
                                  for="item-2"
                                ></label>
                              </div>
                            </td>
                            <td className="align-middle text-center">
                              <img
                                alt=""
                                className="avatar avatar-md rounded-circle"
                                src="assets/img/avatar/avatar-2.jpeg"
                              />
                            </td>
                            <td className="text-nowrap align-middle">
                              Pauline Noble
                            </td>
                            <td className="text-nowrap align-middle">
                              Diffuser
                            </td>
                            <td className="text-nowrap align-middle">
                              <span>28</span>
                            </td>
                            <td className="text-nowrap align-middle">
                              <span>7500</span>
                            </td>

                            <td className="text-center align-middle">
                              <div className="btn-group align-top">
                                <button
                                  className="btn btn-sm btn-primary badge"
                                  data-target="#user-form-modal"
                                  data-toggle="modal"
                                  type="button"
                                >
                                  Edit
                                </button>{" "}
                                <button
                                  className="btn btn-sm btn-primary badge"
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

      {/* <!-- Add product Modal --> */}
      <div
        className="modal fade"
        id="addProduct"
        tabindex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="example-Modal3">
                Add Product
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label for="recipient-name" className="form-control-label">
                    Name:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="product-name"
                    placeholder="Green scented candle"
                  />
                </div>
                <div className="form-group">
                  <label>Categories</label>
                  <select
                    className="form-control"
                    data-placeholder="Select Categories"
                  >
                    <option>Scented Candles</option>
                    <option>Diffuser</option>
                  </select>
                </div>
                <div className="form-group">
                  <label for="recipient-name" className="form-control-label">
                    Price:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="product-price"
                    placeholder="4500"
                  />
                </div>
                <div className="form-group">
                  <label for="recipient-name" className="form-control-label">
                    Quantity:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="product-quantity"
                    placeholder="20"
                  />
                </div>
                <div className="form-group mb-0">
                  <label for="message-text" className="form-control-label">
                    Image:
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    id="product-image"
                  />
                </div>
                <div className="form-group mb-0">
                  <label for="message-text" className="form-control-label">
                    Description:
                  </label>
                  <textarea name="" className="form-control" />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary">
                Add Product
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <!--end of Add modal--> */}

      {/* <!-- edit product Modal --> */}
      <div
        className="modal fade"
        id="editProduct"
        tabindex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="example-Modal3">
                Product ID: 4563
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label for="recipient-name" className="form-control-label">
                    Name:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="product-name"
                    value="Green scented candle"
                  />
                </div>
                <div className="form-group">
                  <label>Categories</label>
                  <select
                    className="form-control"
                    data-placeholder="Scented Candles"
                  >
                    <option>Scented Candles</option>
                    <option>Diffuser</option>
                  </select>
                </div>
                <div className="form-group">
                  <label for="recipient-name" className="form-control-label">
                    Price:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="product-price"
                    value="4500"
                  />
                </div>
                <div className="form-group">
                  <label for="recipient-name" className="form-control-label">
                    Quantity:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="product-quantity"
                    value="20"
                  />
                </div>
                <div className="form-group mb-0">
                  <label for="message-text" className="form-control-label">
                    Image:
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    id="product-image"
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-success">
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <!--end of edit modal--> */}

      {/* <!-- delete Modal --> */}
      <div
        className="modal fade"
        id="deleteModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Confirmation
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <p className="mb-0">
                Are you sure you want to delete this product?
              </p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-danger">
                Yes, Delete
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <!--end of delete modal--> */}
    </div>
  );
};

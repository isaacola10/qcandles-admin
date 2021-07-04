import React from "react";
import { Link } from "react-router-dom";
import {ProductList} from "../../Components/InventoryComponents/ProductList";

export const Inventory = () => {
  return (
    <div>
      <section className="section">
        <ol className="breadcrumb">
          <li className="breadcrumb-item active" aria-current="page">
            Products
          </li>
          <li className="ml-auto">
            <span className="float-left border-">
              <Link
                className="btn btn-primary"
                to='/create-product'
              >
                + Add Product
              </Link>
            </span>
          </li>
        </ol>

        <ProductList />
      </section>

      {/* <!-- Add product Modal --> */}
      <div
        className="modal fade"
        id="addProduct"
        tabIndex="-1"
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
                  <label htmlFor="recipient-name" className="form-control-label">
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
                  <label htmlFor="recipient-name" className="form-control-label">
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
                  <label htmlFor="recipient-name" className="form-control-label">
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
                  <label htmlFor="message-text" className="form-control-label">
                    Image:
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    id="product-image"
                  />
                </div>
                <div className="form-group mb-0">
                  <label htmlFor="message-text" className="form-control-label">
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


      {/* <!--end of delete modal--> */}
    </div>
  );
};

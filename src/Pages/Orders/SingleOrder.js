import React from "react";
import { Link } from "react-router-dom";

export const SingleOrder = () => {
  return (
    <div>
      <section className="section">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="#">Order Id: </Link>
          </li>
        </ol>
        <div className="mb-4 m-2">
          <Link to="#" style={{ textDecoration: "none" }}>
            <i className="fa fa-arrow-left"></i> Back
          </Link>
        </div>
        <div className="col-lg-12 col-md-12 col-sm-12 col-xl-12">
          <div className="card">
            <div className="card-header border-bottom-0">
              <h4 className="card-title">Order ID</h4>
            </div>
            <div className="">
              <div className="table-responsive border-top">
                <table className="table card-table table-striped table-vcenter text-nowrap mb-0">
                  <thead>
                    <tr>
                      <th>Customer Name:</th> <th>Tonye Greene</th>
                    </tr>
                    <tr>
                      <th>Customer Email:</th> <th>ellysmoore@gmail.com</th>
                    </tr>
                    <tr>
                      <th>Customer Phone Number:</th> <th>07039627810</th>
                    </tr>
                    <tr>
                      <th>Customer Address:</th>
                      <th>67 Isaac john street, lagos</th>
                    </tr>
                    <tr>
                      <th>Date Ordered:</th> <th>12th June, 2021</th>
                    </tr>
                    <tr>
                      <th>Items Ordered:</th> <th>Candle (2), Diffuser (1)</th>
                    </tr>
                    <tr>
                      <th>Shipping Fee:</th> <th>N5,000</th>
                    </tr>
                    <tr>
                      <th>Total Amount:</th> <th>N45,000</th>
                    </tr>
                  </thead>
                  <button className="btn btn-primary m-4 ">
                    <i className="fa fa-truck"></i> Ship item
                  </button>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

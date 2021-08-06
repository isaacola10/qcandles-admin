import React, {useEffect, useState} from 'react';
import {Toast} from "../FormBuilder/Toast";

export const ShippingList = ({locations}) => {
    return (
        <>
            {
                locations && locations.length !== 0 ? (
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
                                      {locations.map((location, index) => (
                                        <tr key={index}>
                                            <td>{location.state}</td>
                                            <td>{location.area}</td>
                                            <td>{location.fee}</td>
                                            <td className="text-center align-middle">
                                                <div className="btn-group align-top">
                                                    <button
                                                      className="btn btn-sm btn-danger badge"
                                                      // onClick={(e) => removeDiscount(e, shipping.uuid)}
                                                      type="button"
                                                    >
                                                        <i className="fa fa-trash"></i>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                      ))}
                                      </tbody>
                                  </table>
                              </div>
                          </div>
                      </div>
                  </div>
                ) : (
                  <div>No locations found</div>
                )
            }
        </>
    );
}
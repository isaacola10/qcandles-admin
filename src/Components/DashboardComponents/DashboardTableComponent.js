import React from 'react';
import {Link} from "react-router-dom";

export const DashboardTableComponent = (props) => {
    return (
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
    );
}

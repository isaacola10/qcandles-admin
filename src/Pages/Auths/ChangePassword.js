import React from "react";
import { Link } from "react-router-dom";

export const ChangePassword = () => {
  return (
    <div>
      <section className="section">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="#">Change Password</Link>
          </li>
        </ol>

        <div className="row">
          <div className="col-6">
            <div className="card">
              <div className="card-header">
                <h4>Change Password</h4>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group mb-3">
                      <label>Old Password</label>
                      <input
                        type="text"
                        className="form-control w-100"
                        name=""
                        placeholder="Enter old password"
                        required
                      />
                    </div>
                    <div className="form-group mb-3">
                      <label>New Password</label>
                      <input
                        type="text"
                        className="form-control w-100"
                        name=""
                        placeholder="Enter new password"
                        required
                      />
                    </div>
                    <div className="form-group mb-0">
                      <label>Confirm New Password</label>
                      <input
                        type="text"
                        className="form-control w-100"
                        name=""
                        placeholder="Enter New Password"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <button className="btn btn-lg btn-primary">
                    Make Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

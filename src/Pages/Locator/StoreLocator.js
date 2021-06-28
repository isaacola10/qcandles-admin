import React from "react";

export const StoreLocator = () => {
  return (
    <div>
      <section className="section">
        <ol className="breadcrumb">
          <li className="breadcrumb-item active text-" aria-current="page">
            Store Locator
          </li>
        </ol>

        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                <h4>Add Store Locator</h4>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group mb-0">
                      <label>Store Name</label>
                      <input
                        type="text"
                        className="form-control w-100"
                        name="storeName"
                        placeholder=""
                        required
                      />
                    </div>
                    <div className="form-group mb-3">
                      <label>Start Time</label>
                      <input type="time" className="form-control" />
                    </div>
                    <div className="form-group ">
                      <label>Working Days</label>
                      <select
                        className="form-control select2 w-100"
                        multiple="multiple"
                        data-placeholder="Select days"
                      >
                        <option>Monday</option>
                        <option>Tuesday</option>
                        <option>Wednesday</option>
                        <option>Thursday</option>
                        <option>Friday</option>
                        <option>Saturday</option>
                        <option>Sunday</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group mb-0">
                      <label>Address</label>
                      <textarea className="form-control"></textarea>
                    </div>
                    <div className="form-group">
                      <label>End Time</label>
                      <input type="time" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <button className="btn btn-primary">Save</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-10 col-md-12 col-sm-12 col-xl-12">
          <div className="card">
            <div className="card-header border-bottom-0">
              <h4 className="card-title">Stores</h4>
            </div>
            <div className="">
              <div className="table-responsive border-top">
                <table className="table card-table table-striped table-vcenter text-nowrap mb-0">
                  <thead>
                    <tr>
                      <th>Store Name</th>
                      <th>Address</th>
                      <th>Working Days</th>
                      <th>Working Hours</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Megan Stores</td>
                      <td>50 Prince kazeem, Lekki Phase 1, Lagos, Nigeria</td>
                      <td>Monday, Tuesday, Wednesday</td>
                      <td className="text-nowrap">8:00 AM - 4:00 PM</td>
                      <td className="text-center align-middle">
                        <div className="btn-group align-top">
                          <button
                            className="btn btn-sm btn-primary badge"
                            data-target="#largeModal"
                            data-toggle="modal"
                            type="button"
                          >
                            Edit
                          </button>
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

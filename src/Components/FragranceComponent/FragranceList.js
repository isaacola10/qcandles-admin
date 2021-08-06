import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {Toast} from "../FormBuilder/Toast";
import {deleteFragrance} from "../../Controllers/reducers/fragrance";

export const FragranceList = ({fragrances}) => {
  const dispatch = useDispatch()
  const orderedFragrances = fragrances.slice().sort((a, b) => b.created_at.localeCompare(a.created_at))
  return (
    <>
      {
        fragrances && fragrances.length !== 0 ? (
          <div className="col-lg-6 col-md-12 col-sm-12 col-xl-6">
            {/*{ displayToast && <Toast message={message}/>}*/}
            <div className="card">
              <div className="card-header border-bottom-0">
                <h4 className="card-title">Categories</h4>
              </div>
              <div className="">
                <div className="table-responsive border-top">
                  <table className="table card-table table-striped table-vcenter text-nowrap mb-0">
                    <thead>
                    <tr>
                      <th>Fragrance Name</th>
                      <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {fragrances && orderedFragrances.map((fragrance, index) => (
                      <tr key={index}>
                        <td>{fragrance.title}</td>
                        <td className="text-center align-middle">
                          <div className="btn-group align-top">
                            <button
                              className="btn btn-sm btn-danger badge"
                              onClick={() => dispatch(deleteFragrance(fragrance.uuid))}
                              type="button">
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
          <div>No Fragrances found</div>
        )
      }
    </>
  );
}

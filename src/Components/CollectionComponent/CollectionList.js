import React from 'react';
import {useDispatch} from "react-redux";

export const CollectionList = ({collections}) => {
  const dispatch = useDispatch()
  const orderedCollections = collections.slice().sort((a, b) => b.created_at.localeCompare(a.created_at))
  return (
    <>
      {
        collections && collections.length !== 0 ? (
          <div className="col-lg-6 col-md-12 col-sm-12 col-xl-6">
            {/*{ displayToast && <Toast message={message}/>}*/}
            <div className="card">
              <div className="card-header border-bottom-0">
                <h4 className="card-title">Collections</h4>
              </div>
              <div className="">
                <div className="table-responsive border-top">
                  <table className="table card-table table-striped table-vcenter text-nowrap mb-0">
                    <thead>
                    <tr>
                      <th>Collection Name</th>
                      <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {collections && orderedCollections.map((collection, index) => (
                      <tr key={index}>
                        <td>{collection.title}</td>
                        <td className="text-center align-middle">
                          <div className="btn-group align-top">
                            <button
                              className="btn btn-sm btn-danger badge"
                              // onClick={() => dispatch((collection.uuid))}
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
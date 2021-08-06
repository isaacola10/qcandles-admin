import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import { Link } from "react-router-dom";
import {deleteStore, getStores as listStores} from "../../Controllers/actions/storelocator";
import {Toast} from "../FormBuilder/Toast";
import {fetchStores, selectAllStores} from "../../Controllers/reducers/storelocator";
import {Stores} from "./Stores";

export const StoreLists = (props) => {
    const dispatch = useDispatch()
    const stores = useSelector(selectAllStores)
    const storeStatus = useSelector((state) => state.stores.status)
    const error = useSelector((state) => state.stores.error)

    useEffect(() => {
        if(storeStatus === 'idle'){
            dispatch(fetchStores())
        }
    }, [storeStatus ,dispatch])

    let content
    if(storeStatus === 'loading'){
        content = <div className='loader'>Loading... </div>
    }else if (storeStatus === 'succeeded'){
        const orderedStores = stores
          .slice()
          .sort((a,b) => b.created_at.localeCompare(a.created_at))
        content = <Stores stores={orderedStores} />
    }else if (storeStatus === 'error') {
        content = <div> {error} </div>
    }

    const [displayToast, setDisplayToast] = useState(false);
    const [message, setMessage] = useState(null)

    return (
        <>
            {
                stores && stores.length !== 0 ? (
                  <div className="col-lg-10 col-md-12 col-sm-12 col-xl-12">
                      { displayToast && <Toast message={message}/>}
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
                                      {content}
                                      </tbody>
                                  </table>
                              </div>
                          </div>
                      </div>
                  </div>
                ) : (
                  <div>No records found</div>
                )
            }
        </>
    );
}
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import { Link } from "react-router-dom";
import {deleteStore, getStores as listStores} from "../../Controllers/actions/storelocator";
import {Toast} from "../FormBuilder/Toast";

export const StoreLists = (props) => {
    const dispatch = useDispatch()

    const getStores = useSelector((state) => state.getStores)
    const {stores, loading, error} = getStores

    const [displayToast, setDisplayToast] = useState(false);
    const [message, setMessage] = useState(null)

    useEffect(() => {
        dispatch(listStores())

    }, [dispatch])

    const removeStore = (e, uuid) => {
        e.preventDefault();
        const get = uuid

        dispatch(deleteStore(get)).then(data => {
            setMessage(data.message)
            setDisplayToast(true)
            setTimeout(() => {
                window.location.reload()
                setDisplayToast(false)
            }, 2000)
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <>
            {loading ? (
                <div>Loading...</div>
            ) : error ? (
                <div>{error}</div>
            ) : stores ? (
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
                                    {stores.map((store, index) => (
                                        <tr key={index}>
                                            <td>{store.store_name}</td>
                                            <td>{store.address}</td>
                                            <td>
                                                {JSON.parse(store.working_days).map((day) => (
                                                    day.label+ " "
                                                ))}
                                            </td>
                                            <td className="text-nowrap">{store.open_time} - {store.close_time}</td>
                                            <td className="text-center align-middle">
                                                <div className="btn-group align-top">
                                                    <Link
                                                        className="btn btn-sm btn-primary badge"
                                                        to={'/edit-store/'+store.uuid}
                                                    >
                                                        Edit
                                                    </Link>
                                                    <button
                                                        className="btn btn-sm btn-danger badge"
                                                        type="button"
                                                        onClick={(e) => removeStore(e, store.uuid)}
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
                <div>No Stores</div>
            )}

        </>
    );
}
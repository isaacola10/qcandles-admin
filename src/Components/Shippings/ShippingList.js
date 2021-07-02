import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import { Link } from "react-router-dom";
import {deleteShipping, getShippings as listShipping} from "../../Controllers/actions/shipping";
import {deleteDiscount} from "../../Controllers/actions/discount";
import {Toast} from "../FormBuilder/Toast";

export const ShippingList = (props) => {
    const dispatch = useDispatch()

    const getShippings = useSelector((state) => state.getShippings)
    const {shippings, loading, error} = getShippings

    useEffect(()=> {
        dispatch(listShipping())
    }, [dispatch])

    const [displayToast, setDisplayToast] = useState(false);
    const [message, setMessage] = useState(null)

    const removeDiscount = (e, uuid) => {
        e.preventDefault();
        const get = uuid

        dispatch(deleteShipping(get)).then(data => {
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
            ) : shippings ? (
                <div className="col-lg-6 col-md-12 col-sm-12 col-xl-6">
                    { displayToast && <Toast message={message}/>}
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
                                    {shippings.map((shipping, index) => (
                                        <tr>
                                            <td>{shipping.state}</td>
                                            <td>{shipping.area}</td>
                                            <td>{shipping.fee}</td>
                                            <td className="text-center align-middle">
                                                <div className="btn-group align-top">
                                                    <button
                                                        className="btn btn-sm btn-danger badge"
                                                        onClick={(e) => removeDiscount(e, shipping.uuid)}
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
                <div>No Shipping Records</div>
            )
            }

        </>
    );
}
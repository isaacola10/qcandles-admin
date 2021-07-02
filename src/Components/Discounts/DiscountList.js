import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Moment from 'react-moment'
import {deleteDiscount, getDiscounts as listDiscount} from "../../Controllers/actions/discount";
import {Toast} from "../FormBuilder/Toast";

export const DiscountList = (props) => {
    const dispatch = useDispatch()

    const getDiscounts = useSelector((state) => state.getDiscounts)
    const {discounts, loading, error} = getDiscounts

    useEffect(() => {
        dispatch(listDiscount())
    }, [dispatch])

    const [displayToast, setDisplayToast] = useState(false);
    const [message, setMessage] = useState(null)

    const removeDiscount = (e, uuid) => {
        e.preventDefault();
        const get = uuid

        dispatch(deleteDiscount(get)).then(data => {
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
            ) : discounts && discounts.length!==0 ? (
                <div className="col-lg-6 col-md-12 col-sm-12 col-xl-6">
                    { displayToast && <Toast message={message}/>}
                    <div className="card">
                        <div className="card-header border-bottom-0">
                            <h4 className="card-title">Active Coupons</h4>
                        </div>
                        <div className="">
                            <div className="table-responsive border-top">
                                <table className="table card-table table-striped table-vcenter text-nowrap mb-0">
                                    <thead>
                                    <tr>
                                        <th>Coupon Code</th>
                                        <th>Percentage (%)</th>
                                        <th>Creation Date</th>
                                        <th>Expiration Date</th>
                                        <th></th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {discounts.map((discount, index) => (
                                        <tr key={index}>
                                            <td>{discount.coupon_code}</td>
                                            <td>{discount.percentage_cost*100}</td>
                                            <td>
                                                <Moment format="DD/YYYY/MM">
                                                    {discount.created_at}
                                                </Moment>
                                            </td>
                                            <td>
                                                <Moment format="DD/YYYY/MM">
                                                    {discount.expiration_date}
                                                </Moment>
                                            </td>
                                            <td className="text-center align-middle">
                                                <div className="btn-group align-top">
                                                    <button
                                                        className="btn btn-sm btn-danger badge"
                                                        type="button"
                                                        onClick={(e) =>removeDiscount(e, discount.uuid)}
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
                <div>No Discounts Found</div>
            )
            }
        </>
    );
}

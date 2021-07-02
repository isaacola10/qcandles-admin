import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {deleteProduct, getProducts as listProducts} from "../../Controllers/actions/product";
import {Toast} from "../FormBuilder/Toast";

export const ProductList = (props) => {
    const dispatch = useDispatch()

    const getProducts = useSelector((state) => state.getProducts);
    const { products, loading, error } = getProducts

    const [displayToast, setDisplayToast] = useState(false);
    const [message, setMessage] = useState(null)

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch]);

    const removeProduct = (e, uuid) => {
        e.preventDefault();
        const get = uuid

        dispatch(deleteProduct(get)).then(data => {
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
        {
            loading ? (
                <div></div>
            ) : error ? (
                <div>{error}</div>
            ) : products && products.length!==0 ? (
                <div className="section-body ">
                    { displayToast && <Toast message={message}/>}
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="e-panel card">
                                <div className="card-header">
                                    <h4>Product List</h4>
                                </div>
                                <div className="card-body">
                                    <div className="e-table">
                                        <div className="table-responsive table-lg">
                                            <table className="table table-bordered text-nowrap">
                                                <thead>
                                                <tr>
                                                    <th className="text-center"></th>
                                                    <th className="text-center">Image</th>
                                                    <th>Product Name</th>
                                                    <th>Category</th>
                                                    <th>Quantity</th>
                                                    <th>Price</th>
                                                    <th className="text-center">Actions</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                {products.map((product, index) => (
                                                    <tr>
                                                        <td className="align-middle text-center">
                                                            <div
                                                                className="custom-control custom-control-inline custom-checkbox custom-control-nameless m-0 align-top">
                                                                <input
                                                                    className="custom-control-input"
                                                                    id="item-1"
                                                                    type="checkbox"
                                                                />{" "}
                                                                <label
                                                                    className="custom-control-label"
                                                                    htmlFor="item-1"
                                                                ></label>
                                                            </div>
                                                        </td>
                                                        <td className="align-middle text-center">
                                                            <img
                                                                alt=""
                                                                className="avatar avatar-md rounded-circle"
                                                                src={product.product_image}
                                                            />
                                                        </td>
                                                        <td className="text-nowrap align-middle">
                                                            {product.product_name}
                                                        </td>
                                                        <td className="text-nowrap align-middle">
                                                            {product.category ? product.category.category_name : 'None'}
                                                        </td>
                                                        <td className="text-nowrap align-middle">
                                                            <span>{product.quantity}</span>
                                                        </td>
                                                        <td className="text-nowrap align-middle">
                                                            <span>{product.price}</span>
                                                        </td>

                                                        <td className="text-center align-middle">
                                                            <div className="btn-group align-top">
                                                                <Link
                                                                    to={`/product-details/${product.uuid}`}
                                                                    className="btn btn-sm btn-primary badge"
                                                                >
                                                                    Edit
                                                                </Link>
                                                                {" "}
                                                                <button
                                                                    className="btn btn-sm btn-danger badge"
                                                                    type="button"
                                                                    onClick={(e) => removeProduct(e, product.uuid)}
                                                                    // data-target="#deleteModal"
                                                                    // data-toggle="modal"
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
                                        <div className="d-flex justify-content-center">
                                            <ul className="pagination mt-3 mb-0">
                                                <li className="disabled page-item">
                                                    <Link className="page-link" to="#">
                                                        ‹
                                                    </Link>
                                                </li>
                                                <li className="active page-item">
                                                    <Link className="page-link" to="#">
                                                        1
                                                    </Link>
                                                </li>
                                                <li className="page-item">
                                                    <Link className="page-link" to="#">
                                                        2
                                                    </Link>
                                                </li>
                                                <li className="page-item">
                                                    <Link className="page-link" to="#">
                                                        3
                                                    </Link>
                                                </li>
                                                <li className="page-item">
                                                    <Link className="page-link" to="#">
                                                        4
                                                    </Link>
                                                </li>
                                                <li className="page-item">
                                                    <Link className="page-link" to="#">
                                                        5
                                                    </Link>
                                                </li>
                                                <li className="page-item">
                                                    <Link className="page-link" to="#">
                                                        ›
                                                    </Link>
                                                </li>
                                                <li className="page-item">
                                                    <Link className="page-link" to="#">
                                                        »
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div>
                    No Product Found
                </div>
            )
        }
        </>
    );
}


import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {deleteCategory} from "../../Controllers/actions/category";
import {Toast} from "../FormBuilder/Toast";

export const  CategoryList = ({categories}) => {

    const dispatch = useDispatch()

    const [displayToast, setDisplayToast] = useState(false);
    const [message, setMessage] = useState(null)

    const removeCategory = (e, uuid) => {
        e.preventDefault();
        const get = uuid

        dispatch(deleteCategory(get)).then(data => {
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
                categories && categories.length !== 0 ? (
                    <div className="col-lg-6 col-md-12 col-sm-12 col-xl-6">
                        { displayToast && <Toast message={message}/>}
                        <div className="card">
                            <div className="card-header border-bottom-0">
                                <h4 className="card-title">Categories</h4>
                            </div>
                            <div className="">
                                <div className="table-responsive border-top">
                                    <table className="table card-table table-striped table-vcenter text-nowrap mb-0">
                                        <thead>
                                        <tr>
                                            <th>Category Name</th>
                                            <th></th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {categories && categories.map((category, index) => (
                                            <tr key={index}>
                                                <td>{category.category_name}</td>
                                                <td className="text-center align-middle">
                                                    <div className="btn-group align-top">
                                                        <button
                                                            className="btn btn-sm btn-danger badge"
                                                            onClick={(e) => removeCategory(e, category.uuid)}
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
                    <div>No Categories found</div>
                )
            }
        </>
    );
}

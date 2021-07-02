import React, {useEffect, useState} from 'react';

import { useSelector, useDispatch } from "react-redux";
import {getProductDetails, updateProduct} from "../../Controllers/actions/product";
import {Category} from "../FormBuilder/Category";
import {Toast} from "../FormBuilder/Toast";


export const EditForm = ({match}) => {
    const dispatch = useDispatch()
    const [products, setProducts] = useState({
        category_id: '',
        product_name: '',
        product_price: '',
        product_quantity: '',
        product_description: ''
    })
    const [message, setMessage] = useState(null)
    const [buttonClick, setButtonClick] = useState(false)
    const [confirmed, setConfirmed] = useState(null)
    const [image, setImage] = useState({
        product_image: ''
    })

    const handleOnChange = (e) => {
        setProducts({
            ...products,
            [e.target.name]:e.target.value
        })
    }

    const handleFileChange = (e) => {
        let files = e.target.files[0]
        setImage({
            product_image: files
        })
    }

    const productDetails = useSelector((state) => state.getProductDetails);
    const { product, loading, error } = productDetails;

    useEffect(() => {
        if (product && match.params.uuid !== product.uuid) {
            dispatch(getProductDetails(match.params.uuid));
        }
        setProducts(product && product)
    }, [match]);

    const updateInventory = (e) => {
        e.preventDefault()
        const {product_image} = image
        console.log(product_image)

        const formData = {
            category_id: products.category_id===undefined  ? product.category_id : products.category_id,
            product_name: products.product_name===undefined  ? product.product_name : products.product_name,
            price:products.product_price===undefined  ? product.price : products.product_price,
            product_image: product_image,
            quantity: products.product_quantity===undefined  ? product.quantity : products.product_quantity,
            description: products.product_description===undefined  ? product.description : products.product_description
        }



        setButtonClick(true)
       dispatch(updateProduct(
           product.uuid,
           formData
       )).then(data => {
           console.log(data)
           setButtonClick(false)
           setMessage(data.message)
           setConfirmed(data.isConfirmed)
           setTimeout(() => {
               setConfirmed(false)
           }, 2000)
       }).catch(e => {
           console.log(e)
       })

    }

    return (
        <>
            <section className="section">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item active" aria-current="page">
                        Products
                    </li>
                </ol>
                {confirmed && <Toast message={message} /> }

                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>Edit Inventory</h4>
                            </div>
                            {loading ? (
                                <h2>Loading...</h2>
                            ) : error ? (
                                <h2>{error}</h2>
                            ) : product ? (
                                <div className="card-body">
                                    <form onSubmit={(e) => updateInventory(e)} encType="multipart/form-data">
                                        <div className="form-group">
                                            <label htmlFor="recipient-name" className="form-control-label">
                                                Product Name:
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="product-name"
                                                name="product_name"
                                                onChange={handleOnChange}
                                                value={products.product_name || product.product_name}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Categories</label>
                                            <select
                                                className="form-control"
                                                data-placeholder="Scented Candles"
                                                name="category_id"
                                                onChange={handleOnChange}
                                                value={products.category_id || product.category_id}
                                            >
                                                <option value="">Select Category</option>
                                                <Category categoryId={product.category_id} />
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="recipient-name" className="form-control-label">
                                                Price:
                                            </label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                id="product-price"
                                                name="product_price"
                                                onChange={handleOnChange}
                                                value={products.product_price || product.price}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="recipient-name" className="form-control-label">
                                                Quantity:
                                            </label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                id="product-quantity"
                                                name="product_quantity"
                                                value={products.product_quantity || product.quantity}
                                                onChange={handleOnChange}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="recipient-name" className="form-control-label">
                                                Description:
                                            </label>
                                            <textarea
                                                className='form-control'
                                                name="product_description"
                                                value={products.product_description || product.description}
                                                onChange={handleOnChange}
                                            ></textarea>
                                        </div>
                                        <div className="form-group mb-0">
                                            <label htmlFor="message-text" className="form-control-label">
                                                Image:
                                            </label>
                                            <input
                                                type="file"
                                                className="form-control"
                                                id="product-image"
                                                name="product_image"
                                                onChange={handleFileChange}
                                            />
                                        </div>
                                        <button className="btn btn-primary mt-4" type="submit">Edit Product</button>
                                    </form>
                                </div>
                            ) : (
                                <h2>No Product Found</h2>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

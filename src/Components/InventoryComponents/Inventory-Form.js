import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {createProduct} from "../../Controllers/actions/product";
import {Category} from "../FormBuilder/Category";
import {Toast} from "../FormBuilder/Toast";
import {BeatLoader} from "react-spinners";
import { css } from "@emotion/react";
const override = css`
  display: block;
  margin: 0 auto;
  border-color: #fff;
`;

export const InventoryForm = () => {
    const dispatch = useDispatch()

    const [values, setValues] = useState({
        category_id: '',
        product_name: '',
        product_price: '',
        product_quantity: '',
        product_description: ''
    });
    const [displayToast, setDisplayToast] = useState(false);
    const [message, setMessage] = useState(null)
    let [loaded, setLoading] = useState(false);
    let [color, setColor] = useState("#ffffff");
    const [buttonClick, setButtonClick] = useState(false)
    const [image, setImage] = useState({
        product_image: ''
    })

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]:e.target.value
        })
    }

    const handleFileChange = (e) => {
        let files = e.target.files[0]
        setImage({
            product_image: files
        })
    }

    const saveProduct = (e) => {
        e.preventDefault()

        const {category_id, product_name, product_price, product_quantity, product_description} = values
        const {product_image} = image

        const formData = new FormData()
        formData.append('category_id', category_id);
        formData.append('product_name', product_name);
        formData.append('price', product_price);
        formData.append('product_image', product_image);
        formData.append('quantity',product_quantity );
        formData.append('description', product_description);

        setButtonClick(true)
        setLoading(true)
        dispatch(createProduct(formData)).then(data => {
            setValues({
                category_id:'', product_name: '', product_price: '', product_quantity: '', product_description: ''
            })
            setLoading(false)
            setButtonClick(false)
            setDisplayToast(data.isConfirmed)
            setMessage(data.message)
            setTimeout(() => {
                setDisplayToast(false)
            }, 3000)
        }).catch(e => {
            console.log(e)
        })
    }

    return (
        <section className="section">
            {displayToast && <Toast message={message} /> }

            <ol className="breadcrumb">
                <li className="breadcrumb-item active" aria-current="page">
                    Products
                </li>
            </ol>

            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-header">
                            <h4>Add to Inventory</h4>
                        </div>
                        <div className="card-body">
                            <div>
                            </div>
                            <form onSubmit={(e) => saveProduct(e)} encType="multipart/form-data">
                                <div className="form-group">
                                    <label htmlFor="recipient-name" className="form-control-label">
                                        Product Name:
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="product-name"
                                        name="product_name"
                                        onChange={handleChange}
                                        value={values.product_name}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Categories</label>
                                    <select
                                        className="form-control"
                                        data-placeholder="Scented Candles"
                                        name="category_id"
                                        onChange={handleChange}
                                        value={values.category_id}
                                    >
                                        <option>Select a category</option>
                                        <Category />
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
                                        onChange={handleChange}
                                        value={values.product_price}
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
                                        value={values.product_quantity}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="recipient-name" className="form-control-label">
                                        Description:
                                    </label>
                                    <textarea className='form-control' name="product_description" value={values.product_description} onChange={handleChange}></textarea>
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
                                        // value={values.product_image}
                                        onChange={handleFileChange}
                                    />
                                </div>
                                <button
                                    className="btn btn-primary mt-4"
                                    type="submit"
                                    disabled={buttonClick}
                                >
                                    <div className="row">
                                        <span className='pr-2'>Create Product</span>
                                        <BeatLoader color={color} loading={loaded} css={override} size={15} />
                                    </div>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


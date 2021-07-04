import React, {useEffect, useState} from 'react';
import {BeatLoader} from "react-spinners";
import { css } from "@emotion/react";
import { useSelector, useDispatch } from "react-redux";
import {getProductDetails, updateProduct} from "../../Controllers/actions/product";
import {Category} from "../FormBuilder/Category";
import {Toast} from "../FormBuilder/Toast";
const override = css`
  display: block;
  margin: 0 auto;
  border-color: #fff;
`;

export const EditForm = ({match}) => {
    let [loaded, setLoading] = useState(false);
    let [color, setColor] = useState("#ffffff");

    const dispatch = useDispatch()
    const [products, setProducts] = useState({
        categoryId: '',
        productName: '',
        productPrice: '',
        productQuantity: '',
        productDescription: ''
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

    console.log(products)

    useEffect(() => {
        if (product && match.params.uuid !== product.uuid) {
            dispatch(getProductDetails(match.params.uuid));
        }
        setProducts(product && product)
    }, [dispatch, product, match]);

    const updateInventory = (e) => {
        e.preventDefault()
        const {product_image} = image
        console.log(product_image)

        const formData = {
            category_id: products.categoryId===undefined  ? product.category_id : products.categoryId,
            product_name: products.productName===undefined  ? product.product_name : products.productName,
            price:products.productPrice===undefined  ? product.price : products.productPrice,
            quantity: products.productQuantity===undefined  ? product.quantity : products.productQuantity,
            description: products.productDescription===undefined  ? product.description : products.productDescription
        }



        setButtonClick(true)
        setLoading(true)
       dispatch(updateProduct(
           product.uuid,
           formData
       )).then(data => {
           console.log(data)
           setButtonClick(false)
           setLoading(false)
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
                                                name="productName"
                                                onChange={handleOnChange}
                                                value={products &&products.productName || product.product_name}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Categories</label>
                                            <select
                                                className="form-control"
                                                data-placeholder="Scented Candles"
                                                name="categoryId"
                                                onChange={handleOnChange}
                                                value={products &&products.categoryId || product.category_id}
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
                                                name="productPrice"
                                                onChange={handleOnChange}
                                                value={products &&products.productPrice || product.price}
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
                                                name="productQuantity"
                                                value={products &&products.productQuantity || product.quantity}
                                                onChange={handleOnChange}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="recipient-name" className="form-control-label">
                                                Description:
                                            </label>
                                            <textarea
                                                className='form-control'
                                                name="productDescription"
                                                value={products &&products.productDescription || product.description}
                                                onChange={handleOnChange}
                                            ></textarea>
                                        </div>
                                        <div className="align-middle">                                        
                                            <button disabled={buttonClick} className="btn btn-primary mt-4" type="submit">
                                                <div className="row">
                                                    <span className='pr-2'>Edit Product</span>
                                                    <BeatLoader color={color} loading={loaded} css={override} size={15} />
                                                </div>
                                            </button>
                                        </div>                    
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

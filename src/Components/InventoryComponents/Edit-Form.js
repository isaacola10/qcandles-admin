import React, {useEffect, useState} from 'react';
import {BeatLoader} from "react-spinners";
import { css } from "@emotion/react";
import { useSelector, useDispatch } from "react-redux";
import {getProductDetails, updateProduct} from "../../Controllers/actions/product";
import {Category} from "../FormBuilder/Category";
import {Toast} from "../FormBuilder/Toast";
import {Fragrances} from "../FormBuilder/Fragrances";
import Collections from "../FormBuilder/Collections";
import {fetchFragrances, selectAllFragrances} from "../../Controllers/reducers/fragrance";
import MultiSelect from "react-multi-select-component";
const override = css`
  display: block;
  margin: 0 auto;
  border-color: #fff;
`;

export const EditForm = ({match}) => {
    let [loaded, setLoading] = useState(false);
    let [color, setColor] = useState("#ffffff");

    const dispatch = useDispatch()
    const [selected, setSelected] = useState([])

    const [listFragrances, setListFragrances] = useState([{fragrance: '', description: ''}])
    const [listFeatures, setListFeatures] = useState([{type: '', price: ''}])

    const handleFragranceChange = event => {
        const _tempFrag = [...listFragrances];
        _tempFrag[event.target.dataset.id][event.target.name] = event.target.value;
        //
        setListFragrances(_tempFrag)
    }

    const handleFeatureChange = event => {
        const _tempFeat = [...listFeatures]
        _tempFeat[event.target.dataset.id][event.target.name] = event.target.value

        setListFeatures(_tempFeat)
    }

    const addNewFeature = () => {
        setListFeatures(prevFeat => [...prevFeat, {type: '', price: ''}])
    }

    const addNewFragrance = () => {
        setListFragrances(prevFrag => [...prevFrag, {fragrance: '', description: ''}])
    }

    const fragrances = useSelector(selectAllFragrances)
    const options = fragrances.map((fragrance) => (
      { label: fragrance.title, value: fragrance.id }
    ))
    const fragranceStatus = useSelector((state) => state.fragrances.status)
    const errors = useSelector((state) => state.fragrances.error)
    useEffect(() => {
        if(fragranceStatus === 'idle') {
            dispatch(fetchFragrances())
        }
    }, [fragranceStatus, dispatch])

    const [products, setProducts] = useState({
        collectionId: '',
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
            fragrance_id: selected,
            collection_id: products.collectionId===undefined  ? product.collection_id : products.collectionId,
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
                                            <label>
                                                Fragrances
                                                <button type="button" onClick={addNewFragrance} className="btn btn-sm btn-outline-success mx-2"><i className="fa fa-plus"></i></button>
                                            </label>
                                            {/*{product.fragrance_description.map((item, index) => (*/}
                                            {/*  <div className="row my-2" >*/}
                                            {/*      <div className="col-6">*/}
                                            {/*          <select className='form-control' data-id={index} name="fragrance" onChange={handleFragranceChange} value={item.fragrance}>*/}
                                            {/*              <option>Select Fragrance</option>*/}
                                            {/*              {fragrances.map((fragrance) => (*/}
                                            {/*                <option key={fragrance.id} value={fragrance.id}>{fragrance.title}</option>*/}
                                            {/*              ))}*/}
                                            {/*          </select>*/}
                                            {/*      </div>*/}
                                            {/*      <div className="col-6">*/}
                                            {/*          <input type="text" name="description" data-id={index} onChange={handleFragranceChange} value={item.description} className="form-control p-3" placeholder="Fragrance Description"/>*/}
                                            {/*      </div>*/}
                                            {/*  </div>*/}
                                            {/*))}*/}
                                            {listFragrances.map((item, index) => (
                                              <div className="row my-2" >
                                                  <div className="col-6">
                                                      <select className='form-control' data-id={index} name="fragrance" onChange={handleFragranceChange} value={item.fragrance}>
                                                          <option>Select Fragrance</option>
                                                          {fragrances.map((fragrance) => (
                                                            <option key={fragrance.id} value={fragrance.id}>{fragrance.title}</option>
                                                          ))}
                                                      </select>
                                                  </div>
                                                  <div className="col-6">
                                                      <input type="text" name="description" data-id={index} onChange={handleFragranceChange} value={item.description} className="form-control p-3" placeholder="Fragrance Description"/>
                                                  </div>
                                              </div>
                                            ))}
                                        </div>
                                        <div className="form-group">
                                            <label>
                                                Category
                                                <button type="button" onClick={addNewFeature} className="btn btn-sm btn-outline-success mx-2"><i className="fa fa-plus"></i></button>
                                            </label>
                                            {listFeatures.map((item, index) => (
                                              <div className="row my-2" >
                                                  <div className="col-6">
                                                      <select className='form-control' data-id={index} name="type" onChange={handleFeatureChange} value={item.type}>
                                                          <option>Select Type</option>
                                                          <option value='scented'>Scented</option>
                                                          <option value='non-scented'>Non-Scented</option>
                                                      </select>
                                                  </div>
                                                  <div className="col-6">
                                                      <input type="number" name="price" data-id={index} onChange={handleFeatureChange} value={item.price} className="form-control p-3" placeholder="Price"/>
                                                  </div>
                                              </div>
                                            ))}
                                        </div>
                                        {/*<div className="form-group">*/}
                                        {/*    <label>Fragrance</label>*/}
                                        {/*    <MultiSelect*/}
                                        {/*      options={options}*/}
                                        {/*      value={selected}*/}
                                        {/*      onChange={setSelected}*/}
                                        {/*      labelledBy='Select Fragrance' />*/}
                                        {/*</div>*/}
                                        <div className="form-group">
                                            <label>Collections</label>
                                            <select
                                                className="form-control"
                                                data-placeholder="Scented Candles"
                                                name="collectionId"
                                                onChange={handleOnChange}
                                                value={products &&products.collectionId || product.collection_id}
                                            >
                                                <option value="">Select Category</option>
                                                <Collections collectionId={product.collection_id} />
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

import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {createProduct} from "../../Controllers/actions/product";
import {Toast} from "../FormBuilder/Toast";
import {BeatLoader} from "react-spinners";
import { css } from "@emotion/react";
import Collections from "../FormBuilder/Collections";
import {Fragrances} from "../FormBuilder/Fragrances";
import {fetchFragrances, selectAllFragrances} from "../../Controllers/reducers/fragrance";
import MultiSelect from "react-multi-select-component";
import {AddFragrance} from "./AddFragrance";
const override = css`
  display: block;
  margin: 0 auto;
  border-color: #fff;
`;

export const InventoryForm = () => {
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
    const error = useSelector((state) => state.fragrances.error)
    useEffect(() => {
        if(fragranceStatus === 'idle') {
            dispatch(fetchFragrances())
        }
    }, [fragranceStatus, dispatch])

    const [values, setValues] = useState({
        collection_id: '',
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

        const {collection_id, product_name, product_price, product_quantity, product_description} = values
        const {product_image} = image

        const formData = {
            fragrance_id: listFragrances,
            features: listFeatures,
            collection_id: collection_id,
            product_name: product_name,
            price: product_price,
            product_image: product_image,
            quantity: product_quantity,
            description: product_description,
        }
        // console.log(formData)

        setButtonClick(true)
        setLoading(true)
        dispatch(createProduct(formData)).then(data => {
            console.log(data)
            setValues({
                collection_id:'', product_name: '', product_price: '', product_quantity: '', product_description: ''
            })
            setListFragrances([{fragrance: '', description: ''}])
            setListFeatures([{type: '', price: ''}])
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
                                    <label>Collections</label>
                                    <select
                                      className="form-control"
                                      data-placeholder="Scented Candles"
                                      name="collection_id"
                                      onChange={handleChange}
                                      value={values.collection_id}
                                    >
                                        <option>Select a collection</option>
                                        <Collections />
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>
                                        Fragrances
                                        <button type="button" onClick={addNewFragrance} className="btn btn-sm btn-outline-success mx-2"><i className="fa fa-plus"></i></button>
                                    </label>
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
                                {/*    <label>Fragrances</label>*/}
                                {/*    <MultiSelect*/}
                                {/*      options={options}*/}
                                {/*      value={selected}*/}
                                {/*      onChange={setSelected}*/}
                                {/*      labelledBy='Select' />*/}
                                {/*</div>*/}
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


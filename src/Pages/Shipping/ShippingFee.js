import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import { Link } from "react-router-dom";
import {createShipping} from "../../Controllers/actions/shipping";
import {Toast} from "../../Components/FormBuilder/Toast";
import {ShippingList} from "../../Components/Shippings/ShippingList";
import {createLocation, fetchLocations, selectAllLocation} from "../../Controllers/reducers/shipping";
import {unwrapResult} from "@reduxjs/toolkit";

export const ShippingFee = () => {
  const dispatch = useDispatch();
  const locations = useSelector(selectAllLocation)
  const locationStatus = useSelector((state) => state.locations.status)
  const error = useSelector((state) => state.locations.error)

  const [addRequestStatus, setAddRequestStatus] = useState('idle')

  useEffect(() => {
    if(locationStatus === 'idle'){
      dispatch(fetchLocations())
    }
  }, [locationStatus, dispatch]);

  let content

  if(locationStatus === 'idle'){
    content = <div className='loader'>Loading...</div>
  }else if (locationStatus === 'succeeded'){
    const orderedLocations = locations
      .slice()
      .sort((a, b) => b.created_at.localeCompare(a.created_at))
    content = <ShippingList locations={orderedLocations} />
  }else if (locationStatus === 'error') {
    content = <div>{error}</div>
  }


  const [values, setValues] = useState({
    state: '',
    area: '',
    fee: ''
  })
  const [displayToast, setDisplayToast] = useState(false);
  const [message, setMessage] = useState(null)
  const [buttonClick, setButtonClick] = useState(false)

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]:e.target.value
    })
  }

  const canSave = [values].every(Boolean) && addRequestStatus === 'idle'
  const handleSubmit = async (e) => {
    e.preventDefault()

    const {state, area, fee} = values
    const formData = {
      state: state,
      area: area,
      fee: fee
    }
    if (canSave) {
      try {
        setAddRequestStatus('pending')
        const resultAction = await dispatch(
          createLocation(formData)
        )
        unwrapResult(resultAction)
        setValues({
          state: '',
          area: '',
          fee: ''
        })
      }catch (e) {
        console.log(e)
      }finally {
        setAddRequestStatus('idle')
      }
    }



  }

  return (
    <div>
      <section className="section">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="#">Shipping Fee</Link>
          </li>
        </ol>

        { displayToast && <Toast message={message}/>}

        <div className="row">
          <div className="col-6">
            <div className="card">
              <div className="card-header">
                <h4>Create Shipping Fee</h4>
              </div>
              <div className="card-body">
                <form onSubmit={(e) => handleSubmit(e)}>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group mb-3">
                        <label>State</label>
                        <select className="form-control w-100" name='state' value={values.state} onChange={handleChange}>
                          <option value=''>Select state</option>
                          <option value='Lagos'>Lagos</option>
                          <option value='Abuja'>Abuja</option>
                          <option value='Rivers'>Rivers</option>
                          <option value='Ogun'>Ogun</option>
                          <option value='Ibadan'>Ibadan</option>
                        </select>
                      </div>
                      <div className="form-group mb-3">
                        <label>Area</label>
                        <input
                            type="text"
                            className="form-control w-100"
                            name="area"
                            value={values.area}
                            onChange={handleChange}
                            placeholder="Ikeja"
                            required
                        />
                      </div>
                      <div className="form-group mb-0">
                        <label>Fee</label>
                        <input
                            type="number"
                            className="form-control w-100"
                            name="fee"
                            value={values.fee}
                            onChange={handleChange}
                            placeholder="3000"
                            required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <button className="btn btn-primary" disabled={!canSave} type='submit'>Add Fee</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {content}
      </section>
    </div>
  );
};

import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import { Link } from "react-router-dom";
import {createShipping} from "../../Controllers/actions/shipping";
import {Toast} from "../../Components/FormBuilder/Toast";
import {ShippingList} from "../../Components/Shippings/ShippingList";

export const ShippingFee = () => {
  const dispatch = useDispatch();

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

  const handleSubmit = (e) => {
    e.preventDefault()

    const {state, area, fee} = values
    const formData = {
      state: state,
      area: area,
      fee: fee
    }

    setButtonClick(true)
    dispatch(createShipping(formData)).then(data => {
      console.log(data)
      setMessage(data.message)
      setButtonClick(false)
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
                    <button className="btn btn-primary" disabled={buttonClick} type='submit'>Add Fee</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <ShippingList />
      </section>
    </div>
  );
};

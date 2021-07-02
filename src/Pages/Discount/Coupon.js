import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import randomstring  from 'randomstring'
import { Link } from "react-router-dom";
import {DiscountList} from "../../Components/Discounts/DiscountList";
import {createDiscount} from "../../Controllers/actions/discount";
import {Toast} from "../../Components/FormBuilder/Toast";

export const Coupon = () => {
  const dispatch = useDispatch()

  const [values, setValues] = useState({
    coupon_code: '',
    percentage_cost: '',
    expiration_date: ''
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

  const generateCode = (e) => {
    e.preventDefault()

    const code = randomstring.generate({
      length: 7,
      capitalization: 'uppercase'
    })
    setValues({
      coupon_code: code,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const {coupon_code, percentage_cost, expiration_date} = values
    const formData = {
      coupon_code: coupon_code,
      percentage_cost: percentage_cost/100,
      expiration_date: expiration_date
    }
    setButtonClick(true)
    dispatch(createDiscount(formData)).then(data => {
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
            <Link to="#">Coupon</Link>
          </li>
        </ol>

        { displayToast && <Toast message={message}/>}

        <div className="row">
          <div className="col-6">
            <div className="card">
              <div className="card-header">
                <h4>Create Coupon</h4>
              </div>
              <div className="card-body">
                <form onSubmit={(e) => handleSubmit(e)}>
                  <div className="row">
                    <div className="col-md-8">
                      <div className="form-group mb-0">
                        <label>Coupon Code</label>
                        <input
                            type="text"
                            className="form-control w-100"
                            name="coupon_code"
                            value={values.coupon_code && values.coupon_code}
                            onClick={handleChange}
                            placeholder=""
                            required
                            readOnly={true}
                        />
                      </div>
                      <div className="py-4 ">
                        <button className="btn btn-dark" onClick={(e) => generateCode(e)}>Generate</button>
                      </div>
                      <div className="form-group mb-0">
                        <label>Percentage Cost</label>
                        <input
                            type="number"
                            className="form-control w-100"
                            name="percentage_cost"
                            value={values.percentage_cost}
                            onChange={handleChange}
                            required
                        />
                      </div>
                      <div className="form-group mb-0 mt-3">
                        <label>Expiration Date</label>
                        <input
                            type="date"
                            className="form-control w-100 "
                            name="expiration_date"
                            value={values.expiration_date}
                            onChange={handleChange}
                            required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <button
                        className="btn btn-primary"
                        style={{ marginLeft: 15 }}
                        disabled={buttonClick}
                    >
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <DiscountList />
      </section>
    </div>
  );
};

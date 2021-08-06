import React, {useState} from "react";
import Select from 'react-select'
import {useDispatch} from "react-redux";
import {Toast} from "../../Components/FormBuilder/Toast";
import {StoreLists} from "../../Components/StoreLocator/StoreLists";
import {createStore} from "../../Controllers/reducers/storelocator";
import {unwrapResult} from "@reduxjs/toolkit";

export const StoreLocator = () => {
  const dispatch = useDispatch()

  const work_days = [
    {label: "Monday", value: "Monday"},
    {label: "Tuesday", value: "Tuesday"},
    {label: "Wednesday", value: "Wednesday"},
    {label: "Thursday", value: "Thursday"},
    {label: "Friday", value: "Friday"},
    {label: "Saturday", value: "Saturday"},
    {label: "Sunday", value: "Sunday"},
  ]
  const [days, setDays] = useState([]);
  const [newArray, setNewArray] = useState([]);
  const [displayToast, setDisplayToast] = useState(false);
  const [message, setMessage] = useState(null)
  const [buttonClick, setButtonClick] = useState(false)
  const [addRequestStatus, setAddRequestStatus] = useState('idle')

  const handleDayChange = (days) => {
    setDays(newArray.concat(days))
  }

  const [values, setValues] = useState({
    store_name: '',
    address: '',
    open_time: '',
    close_time: '',
  })

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]:e.target.value
    })
  }

  const canSave = [values].every(Boolean) && addRequestStatus === 'idle'

  const handleSubmit = async (e) => {
    e.preventDefault()

    const {store_name, address, open_time, close_time} = values
    const formData = {
      store_name: store_name,
      address: address,
      open_time: open_time,
      close_time: close_time,
      working_days: days,
    }
    if(canSave) {
      try {
        setAddRequestStatus('pending')
        const resultAction = await dispatch(
          createStore(formData)
        )
        unwrapResult(resultAction)
        setValues({
          store_name: '',
          address: '',
          open_time: '',
          close_time: '',
        })
        setDays([])
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
          <li className="breadcrumb-item active text-" aria-current="page">
            Store Locator
          </li>
        </ol>
        { displayToast && <Toast message={message}/>}

        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                <h4>Add Store Locator</h4>
              </div>
              <div className="card-body">
                  <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="row">
                    <div className="col-md-6">
                      <div className="form-group mb-0">
                        <label>Store Name</label>
                        <input
                            type="text"
                            className="form-control w-100"
                            name="store_name"
                            placeholder=""
                            value={values.store_name}
                            onChange={handleChange}
                            required
                        />
                      </div>
                      <div className="form-group mb-3">
                        <label>Start Time</label>
                        <input
                            type="time"
                            className="form-control"
                            name='open_time'
                            value={values.open_time}
                            onChange={handleChange}
                            required
                        />
                      </div>
                      <div className="form-group ">
                        <label>Working Days</label>
                        <Select
                            options={work_days}
                            isMulti
                            onChange={handleDayChange}
                            value={days.working_days}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group mb-0">
                        <label>Address</label>
                        <textarea
                            className="form-control"
                            name='address'
                            value={values.address}
                            onChange={handleChange}
                            required
                        ></textarea>
                      </div>
                      <div className="form-group">
                        <label>End Time</label>
                        <input
                            type="time"
                            className="form-control"
                            name='close_time'
                            value={values.close_time}
                            onChange={handleChange}
                            required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <button className="btn btn-primary" disabled={buttonClick}>Save</button>
                    </div>
                    </div>
                  </form>
              </div>
            </div>
          </div>
        </div>

        <StoreLists />
      </section>
    </div>
  );
};


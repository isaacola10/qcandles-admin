import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {createCollection} from "../../Controllers/reducers/collection";
import {unwrapResult} from "@reduxjs/toolkit";


export const AddCollection = () => {
  const dispatch = useDispatch()

  const [values, setValues] = useState({
    title: '',
    description: ''
  })
  const [addRequestStatus, setAddRequestStatus] = useState('idle')

  const handleChange = (e) => {
    e.preventDefault()
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }
  const canSave = [values].every(Boolean) && addRequestStatus === 'idle'

  const handleSubmit = async (e) => {
    e.preventDefault()
    const {title, description} = values
    if(canSave) {
      try{
        setAddRequestStatus('pending')
        const resultAction = await dispatch(
          createCollection({title, description})
        )
        unwrapResult(resultAction)
        setValues({
          title: '',
          description: ''
        })
      }catch (e) {
        console.log(e)
      }finally {
        setAddRequestStatus('idle')
      }
    }
  }

  return (
    <div className="card-body">
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="row">
          <div className="col-md-12">
            <div className="form-group mb-0">
              <label>Collection Name</label>
              <input
                type="text"
                className="form-control w-100"
                name="title"
                placeholder="Collection Name"
                value={values.title}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="col-md-12 mt-2">
            <div className="form-group mb-0">
              <label>Description</label>
              <textarea
                rows='5'
                cols='10'
                className='form-control w-100'
                name='description'
                placeholder='Description'
                value={values.description}
                onChange={handleChange}
                required
              ></textarea>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <button className="btn btn-primary" disabled={!canSave}>Save</button>
        </div>
      </form>
    </div>
  );
}

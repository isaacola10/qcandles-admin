import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import { Link } from "react-router-dom";
import {Toast} from "../../Components/FormBuilder/Toast";
import {createFragranceThunk, fetchFragrances, selectAllFragrances} from "../../Controllers/reducers/fragrance";
import {unwrapResult} from "@reduxjs/toolkit";
import {FragranceList} from "../../Components/FragranceComponent/FragranceList";

export const Fragrance = () => {

  const dispatch = useDispatch()
  const fragrances = useSelector(selectAllFragrances)
  const fragranceStatus = useSelector((state) => state.fragrances.status)
  const error = useSelector((state) => state.fragrances.error)

  useEffect(() => {
    if(fragranceStatus === 'idle') {
      dispatch(fetchFragrances())
    }
  }, [fragranceStatus, dispatch])

  let content

  if(fragranceStatus === 'loading') {
    content = <div className='loader'>Loading...</div>
  } else if(fragranceStatus === 'succeeded') {
    const orderedFragrances = fragrances
      .slice()
      .sort((a, b) => b.created_at.localeCompare(a.created_at))
    content = <FragranceList fragrances={orderedFragrances} />
  }
  else if (fragranceStatus === 'error') {
    content = <div> {error} </div>
  }

  const [values, setValues] = useState({
    title: '',
    description: ''
  })

  const [displayToast, setDisplayToast] = useState(false);
  const [message, setMessage] = useState(null)
  const [buttonClick, setButtonClick] = useState(false)
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
    if(canSave){
      try {
        setAddRequestStatus('pending')
        const resultAction = await dispatch(
          createFragranceThunk({title, description})
        )
        unwrapResult(resultAction)
        setValues({
          title: '',
          description: ''
        })
      }catch (e) {
        console.log(e)
      } finally {
        setAddRequestStatus('idle')
      }
    }
  }

  return (
    <div>
      <section className="section">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="#">Fragrances</Link>
          </li>
        </ol>
        {/*{displayToast && <Toast message={message}/>}*/}

        <div className="row">
          <div className="col-6">
            <div className="card">
              <div className="card-header">
                <h4>Create Fragrance</h4>
              </div>
              <div className="card-body">
                <form onSubmit={(e) => handleSubmit(e)}>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group mb-0">
                        <label>Fragrance Name</label>
                        <input
                          type="text"
                          className="form-control w-100"
                          name="title"
                          placeholder="Fragrance Name"
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
            </div>
          </div>
        </div>
        {content}
      </section>
    </div>
  );
}

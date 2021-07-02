import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import { Link } from "react-router-dom";
import {CategoryList} from "../../Components/CategoryComponent/CategoryList";
import {createCategory, getCategories as listCategories} from "../../Controllers/actions/category";
import {Toast} from "../../Components/FormBuilder/Toast";

export const Category = () => {
  const dispatch = useDispatch()

  const getCategories = useSelector((state) => state.getCategories)
  const {categories, loading, error} = getCategories
  const [values, setValues] = useState({
    categoryName: ''
  });
  const [displayToast, setDisplayToast] = useState(false);
  const [message, setMessage] = useState(null)
  const [buttonClick, setButtonClick] = useState(false)


  useEffect(() => {
    dispatch(listCategories())

  }, [dispatch])

  const handleChange = (e) => {
    e.preventDefault()
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setButtonClick(true)

    const {categoryName} = values
    dispatch(createCategory(categoryName)).then(data => {
      setMessage(data.message)
      setButtonClick(false)
      setDisplayToast(true)
      setTimeout(() => {
        window.location.reload()
        setDisplayToast(false)
      }, 2000)
      console.log(data)
    }).catch(error => {
      console.log(error)
    })
  }


  return (
    <div>
      <section className="section">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="#">Category</Link>
          </li>
        </ol>
        {displayToast && <Toast message={message}/>}

        <div className="row">
          <div className="col-6">
            <div className="card">
              <div className="card-header">
                <h4>Create Category</h4>
              </div>
              <div className="card-body">
                <form onSubmit={(e) => handleSubmit(e)}>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group mb-0">
                        <label>Category Name</label>
                        <input
                            type="text"
                            className="form-control w-100"
                            name="categoryName"
                            placeholder="Scented Candles"
                            value={values.categoryName}
                            onChange={handleChange}
                            required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <button className="btn btn-primary">Save</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {loading ? (
            <div>Loading...</div>
        ) : error ? (
            <div>{error}</div>
        ) : categories ? (
            <CategoryList categories={categories} />
        ) : (
            <div>No Categories</div>
        )}
      </section>
    </div>
  );
};

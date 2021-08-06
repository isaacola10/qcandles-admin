import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {deleteStore} from "../../Controllers/actions/storelocator";
import {useDispatch} from "react-redux";

export const Stores = ({ stores }) => {
  const [displayToast, setDisplayToast] = useState(false);
  const [message, setMessage] = useState(null)
  const dispatch = useDispatch()
  const removeStore = (e, uuid) => {
    e.preventDefault();
    const get = uuid

    dispatch(deleteStore(get)).then(data => {
      setMessage(data.message)
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
    <>
      {stores && stores.map((store, index) => (
        <tr key={index}>
          <td>{store.store_name}</td>
          <td>{store.address}</td>
          <td>
            {JSON.parse(store.working_days).map((day) => (
              day.label+ " "
            ))}
          </td>
          <td className="text-nowrap">{store.open_time} - {store.close_time}</td>
          <td className="text-center align-middle">
            <div className="btn-group align-top">
              <Link
                className="btn btn-sm btn-primary badge"
                to={'/edit-store/'+store.uuid}
              >
                Edit
              </Link>
              <button
                className="btn btn-sm btn-danger badge"
                type="button"
                onClick={(e) => removeStore(e, store.uuid)}
              >
                <i className="fa fa-trash"></i>
              </button>
            </div>
          </td>
        </tr>
      ))}
    </>
  );
}
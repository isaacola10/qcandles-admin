import React, {useState, useEffect} from "react";
import {useSelector, useDispatch} from 'react-redux'
import { Link } from "react-router-dom";
import {fetchOrders, selectAllOrders} from "../../Controllers/reducers/order";
import {OrdersList} from "../../Components/OrderComponent/OrdersList";

export const Orders = () => {
  const dispatch = useDispatch()
  const orders = useSelector(selectAllOrders)
  const orderStatus = useSelector((state) => state.orders.status)
  const error = useSelector((state) => state.orders.errors)

  useEffect(() => {
    if(orderStatus === 'idle') {
      dispatch(fetchOrders())
    }
  }, [orderStatus, dispatch])

  let content

  if(orderStatus === 'loading') {
    content = <div className='loading'>Loading</div>
  }else if (orderStatus === 'succeeded') {
    content = <OrdersList orders={orders}/>
  }else if (orderStatus === 'error') {
    content = <div>{error}</div>
  }

  return (
    <div>
      <section className="section">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="#">Orders</Link>
          </li>
        </ol>

        <div className="section-body ">
          <div className="row">
            <div className="col-lg-12">
              <div className="e-panel card">
                <div className="card-header">
                  <h4>Orders</h4>
                </div>
                <div className="card-body">
                  <div className="e-table">
                    <div className="table-responsive table-lg">
                      <table className="table table-bordered text-nowrap">
                        <thead>
                          <tr>
                            <th className="text-center"></th>
                            <th className="text-center">Image</th>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Total Amount</th>
                            <th>Customer Name</th>
                            <th>Date Ordered</th>
                            <th className="text-center">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                        {content}
                        </tbody>
                      </table>
                    </div>
                    <div className="d-flex justify-content-center">
                      <ul className="pagination mt-3 mb-0">
                        <li className="disabled page-item">
                          <Link className="page-link" to="#">
                            ‹
                          </Link>
                        </li>
                        <li className="active page-item">
                          <Link className="page-link" to="#">
                            1
                          </Link>
                        </li>
                        <li className="page-item">
                          <Link className="page-link" to="#">
                            2
                          </Link>
                        </li>
                        <li className="page-item">
                          <Link className="page-link" to="#">
                            3
                          </Link>
                        </li>
                        <li className="page-item">
                          <Link className="page-link" to="#">
                            4
                          </Link>
                        </li>
                        <li className="page-item">
                          <Link className="page-link" to="#">
                            5
                          </Link>
                        </li>
                        <li className="page-item">
                          <Link className="page-link" to="#">
                            ›
                          </Link>
                        </li>
                        <li className="page-item">
                          <Link className="page-link" to="#">
                            »
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

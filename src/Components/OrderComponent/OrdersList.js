import React from 'react';
import {Link} from "react-router-dom";
import Moment from 'moment'

export const OrdersList = ({orders}) => {
  console.log(orders)
  return (
    <>
      {
        orders && orders.length !== 0 ? (
          orders.map((order) => (
            <tr>
              <td className="align-middle text-center">
                <div className="custom-control custom-control-inline custom-checkbox custom-control-nameless m-0 align-top">
                  <input
                    className="custom-control-input"
                    id="item-1"
                    type="checkbox"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="item-1"
                  ></label>
                </div>
              </td>
              <td className="align-middle text-center">
                <img
                  alt=""
                  className="avatar avatar-md rounded-circle"
                  src={order.product.product_image}
                />
              </td>
              <td className="text-nowrap align-middle">
                {order.product.product_name}
              </td>
              <td className="text-nowrap align-middle">
                <span>{order.qty}</span>
              </td>
              <td className="text-nowrap align-middle">
                <span>{order.total_amount}</span>
              </td>
              <td className="text-nowrap align-middle">
                <span>{order.customer_name}</span>
              </td>
              <td className="text-nowrap align-middle">
                <span>
                  <Moment>
                    {order.created_at}
                  </Moment>
                </span>
              </td>
              <td className="text-center align-middle">
                <div className="btn-group align-top">
                  <Link
                    className="btn btn-sm btn-primary badge"
                    to="/single-order"
                  >
                    View details
                  </Link>
                </div>
              </td>
            </tr>
          ))
        ) : (
          <div>No orders found</div>
        )
      }
    </>
  );
}
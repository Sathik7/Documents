import React from "react";

export const ComponentToPrint = React.forwardRef((props, ref) => {
    const {cart, total}= props;
    return (
      <div ref={ref} className="p-5">
        <h1>General store</h1>
        <table className='table'>
              <thead>
                <tr>
                  <th>id</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Qty</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                { cart ? cart.map((cartProduct, key)=><tr key={key}>
                  <td>{cartProduct.id}</td>
                  <td>{cartProduct.name}</td>
                  <td>{cartProduct.price}</td>
                  <td>{cartProduct.quantity}</td>
                  <td>{cartProduct.totalAmount}</td>                  
                </tr>)
                : ""}
              </tbody>
            </table>
            <h2 className='px-2'>Total Amount: ${total}</h2>
      </div>
    );
  });
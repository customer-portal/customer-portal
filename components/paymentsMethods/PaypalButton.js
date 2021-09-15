import {
    PayPalScriptProvider,
    PayPalButtons,
    FUNDING,
  } from "@paypal/react-paypal-js";
  import { useState } from "react";
  
  function PaypalButton() {
    const [cancelled, setCancelled] = useState(false);
    const [orderDetails, setOrderDetails] = useState(null);
    const [loading, setLoading] = useState(null);
    const createOrder = (data, actions) => {
      return actions.order
        .create({
          application_context: {
            shipping_preference: "NO_SHIPPING",
          },
          purchase_units: [
            {
              amount: {
                currency: "USD",
                value: 10,
              },
            },
          ],
        })
        .then((orderID) => {
          return orderID;
        });
    };
    const onApprove = (data, actions) => {
      setLoading("Finishing transaction ...");
  
      actions.order.get().then((orderDetails) => {
        // ORDER IS APPROVED BUT NOT COMPLETED YET
        console.log({ orderDetails });
  
        actions.order.capture().then((data) => {
          // ORDER IS COMPLETED, MONEY SENT
          setOrderDetails({ data });
          setLoading(null);
        });
      });
    };
  
    const onCancel = () => {
      setCancelled(true);
    };
    return(
      <div>
        {orderDetails && (
            <pre>
              <h2>Order Result:</h2>
              {JSON.stringify(orderDetails, null, 2)}
            </pre>
          )}
  
          {cancelled && window.alert("Order cancelled!") && <button onClick={() => setCancelled(false)}>Dismiss cancelled</button>}
          {orderDetails && window.alert("Order processed!") && <button onClick={() => setOrderDetails(null)}>Dismiss Processed</button>}
          <PayPalScriptProvider
            options={{
              'client-id': process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID
            }}>
            <PayPalButtons
              fundingSource={FUNDING.PAYPAL}
              createOrder={createOrder}
              onApprove={onApprove}
              onCancel={onCancel}
            />
          </PayPalScriptProvider>
      </div>
    )
  }
  
  export default PaypalButton;
  
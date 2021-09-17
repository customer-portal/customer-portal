import { PaymentGateway } from "cashfree-sdk";

export default async (req, res) => {
  const orderid = req.params.id;
  const pg = new PaymentGateway({
    env: "TEST",
    apiVersion: "1.0.0",
    appId: process.env.Cashfree_AppID,
    secretKey: process.env.Cashfree_Secret_Key,
  });

  pg.orders
    .getStatus({
      orderId: orderid,
    })
    .then((data) => {
      res.render("response", { status: data.txStatus, message: data.txMsg });
    })
    .catch((error) => console.error(error));
};

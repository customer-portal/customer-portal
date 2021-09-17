import { PaymentGateway } from "cashfree-sdk";

export default async (req, res) => {
  const pg = new PaymentGateway({
    env: "TEST",
    apiVersion: "1.0.0",
    // appId: "9492120aa8c06f75e4d95f72c12949",
    // secretKey: "abec1646f250724dfda2a77c6855ffe33439aa7f",
    appId: process.env.Cashfree_AppID,
    secretKey: process.env.Cashfree_Secret_Key,
  });

  const orderId = "230";
  pg.orders
    .createOrders({
      orderId: orderId,
      orderAmount: "100",
      orderCurrency: "INR",
      orderNote: "Subscription",
      customerName: "Test Name",
      customerPhone: "9111122222",
      customerEmail: "test@deskera.com",
      sellerPhone: "9999999999",
      returnUrl: "/api/v1/payments/cashfree" + orderId,
      notifyUrl: "/notify",
      paymentModes: "",
      pc: "",
    })
    .then((data) => {
      if (data.status == "ERROR")
        return res.status(400).render("error", { msg: data.reason });
      const url = data.paymentLink;
      res.render("request", { url: url });
    })
    .catch((error) => console.error(error));
};

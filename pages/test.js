import { PaymentGateway } from "cashfree-sdk";

let pg = new PaymentGateway({
	env: 'TEST',
	apiVersion: '1.0.0',
	appId: process.env.CASHFREE_APPID,
	secretKey: process.env.CASHFREE_SECRET_KEY,
});
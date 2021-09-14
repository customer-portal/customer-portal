import { PaymentGateway  } from 'cashfree-sdk';

export default async (req, res) => {
    // const pg = new PaymentGateway({
    //     env: 'TEST',
    //     apiVersion: '1.0.0',
    //     appId: '9492120aa8c06f75e4d95f72c12949',
    //     secretKey: 'abec1646f250724dfda2a77c6855ffe33439aa7f',
    //   });
    const pg = PaymentGateway.verifyCredentials({
        env: 'TE',
        appId: '9492120aa8c06f75e4d95f72c12949',
        secretKey: 'abec1646f250724dfda2a77c6855ffe33439aa7f',
    })
    res.send({a: pg})
  }
  
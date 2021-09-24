import {
  Button,
  Card,
  CardContent,
  Grid,
  Input,
  TextField,
  Typography,
} from "@material-ui/core";

const MakePayment = () => {
  const [payment, setPayment] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardHolderName: "",
    amount: "",
    currency: "",
    description: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  });

  const handleChange = (event) => {
    setPayment({
      ...payment,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h4">Make Payment</Typography>
          <Card>
            <CardContent>
              <Typography variant="h5">Your Details</Typography>
              {details &&
                details.map((detail, index) => {
                  return (
                    <Typography key={index}>
                      {detail.title}: {detail.detail}
                    </Typography>
                  );
                })}
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <Typography variant="h5">Payment Details</Typography>
              {payment &&
                payment.map((payment, index) => {
                  return (
                    <Typography key={index}>
                      {payment.title}: {payment.detail}
                    </Typography>
                  );
                })}
              <Input
                type="number"
                placeholder="Enter Amount"
                onChange={handleChange}
                name="amount"
                min="0"
                max={payment.amount}
              />
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <Typography variant="h5">Make Payment</Typography>
              <PaypalButton />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default MakePayment;

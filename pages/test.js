async function HandleClick(e) {
  e.preventDefault();
  // const res = await fetch('/api/v1/payments/cashfree')
  // const toprint = await res.json()
  // console.log(toprint)
  const url = "https://sandbox.cashfree.com/pg/orders/pay";
  const options = {
    method: "POST",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify({
      payment_method: {
        card: {
          channel: "link",
          card_number: "4111111111111111",
          card_holder_name: "Tushar Gupta",
          card_expiry_mm: "06",
          card_expiry_yy: "22",
          card_cvv: "900",
        },
      },
      order_token: "hyj120nbvt12831",
    }),
  };

  const res = await fetch(url, options)
  const json = await res.json()
  console.log(json)
//   console.log(error)
}

function test() {
  return (
    <div>
      <button onClick={(e) => HandleClick(e)}>Click</button>
    </div>
  );
}

export default test;

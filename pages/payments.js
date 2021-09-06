import Layout from "../components/layout";
import * as React from "react";
import useSWR from "swr";
import { DataGrid } from "@material-ui/data-grid";
import { Box, Card } from "@material-ui/core";
import { PaymentHeader } from "../components/paymentHeader";

const columns = [
  { field: "documentSequenceCode", headerName: "Number", width: 200 },
  { field: "contact", headerName: "Contact", width: 200 },
  { field: "salesInvoiceDate", headerName: "Invoice Date", width: 200 },
  { field: "salesInvoiceDueDate", headerName: "Due Date", width: 200 },
  {
    field: "totalamount",
    headerName: "Total Amount",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 200,
    valueGetter: (params) =>
      `${params.getValue(params.id, "currency") || ""} ${
        params.getValue(params.id, "totalAmount") || ""
      }`,
  },
  { field: "fulfillmentStatus", headerName: "Fulfillment", width: 200 },
  { field: "paymentStatus", headerName: "Payment", width: 200 },
  { field: "linkedQuote", headerName: "Linked Quote", width: 200 },
  { field: "actions", headerName: "Quick Actions", width: 200 },
];

const selectRows = (key, content) => {
  const {
    documentSequenceCode,
    contact: { name },
    salesInvoiceDate,
    salesInvoiceDueDate,
    currency,
    totalAmount,
    fulfillmentStatus,
    paymentStatus,
  } = content;
  return {
    id: key,
    documentSequenceCode,
    contact: name,
    salesInvoiceDate,
    salesInvoiceDueDate,
    currency,
    totalAmount,
    fulfillmentStatus,
    paymentStatus,
  };
};

export default function Payments({ initalData }) {
  // const { data } = useSWR('https://run.mocky.io/v3/01612f6d-7846-4903-a814-efc88fbe2d77', fetch, { initalData});
  // console.log(initalData);
  const data = initalData.map((content, key) => selectRows(key, content));
  return (
    <Layout>
      <div style={{ height: 400, width: "100%" }}>
        {/* <div>{JSON.stringify(data, null, 2)}</div> */}
        <PaymentHeader />
        <Box display="flex" justify="space-evenly" width="100%">
          <Card margin="auto" width="4">
            H
          </Card>
          <Card margin="auto" width="4">
            H
          </Card>
          <Card margin="auto" width="4">
            H
          </Card>
        </Box>
        <DataGrid
          rows={data}
          columns={columns}
          pageSize={5}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    "https://run.mocky.io/v3/01612f6d-7846-4903-a814-efc88fbe2d77"
  );
  const { content } = await res.json();
  return { props: { initalData: content } };
}

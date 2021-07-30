import gql from "graphql-tag";

const BusinessOwners = gql`
  query BusinessOwners {
    businessOwner {
      email
      id
    }
  }
`;

const TransactionList = gql`
  query TransactionList {
    transactionsList {
      customerId
      customer {
        authToken
        billingAddress
        email
        id
        name
        paymentMethod
        phone
      }
    }
  }
`;



export {BusinessOwners,TransactionList};
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

const GetUserByEmail = gql`
  query GetUserByEmail($email: String!, $authToken: uuid!) {
    customer(
      where: { email: { _eq: $email }, authToken: { _eq: $authToken } }
    ) {
      id
      name
      email
      paymentMethod
      authToken
    }
  }
`;

export { BusinessOwners, TransactionList, GetUserByEmail };

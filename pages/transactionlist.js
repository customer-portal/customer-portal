import Layout from "../components/layout";
import { useQuery } from "@apollo/client";
import { TransactionList } from "../graphql/queries";
import { initializeApollo } from "../apollo/client";

export default function Page() {
  const {
    loading,
    error,
    data: { transactionsList},
  } = useQuery(TransactionList);

  if (loading || error) {
    return <h1>Error</h1>;
  }

  return (
    <Layout>
      <h1>Transactions List</h1>
      <pre>{JSON.stringify(transactionsList, null, 2)}</pre>
    </Layout>
  );
}

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: TransactionList,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
}

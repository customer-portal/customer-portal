import Layout from "../components/layout";
import { useQuery } from "@apollo/client";
import { BusinessOwners } from "../graphql/queries";
import { initializeApollo } from "../apollo/client";

export default function Page() {
  const {
    loading,
    error,
    data: { businessOwner },
  } = useQuery(BusinessOwners);

  if (loading || error) {
    return <h1>Error</h1>;
  }

  return (
    <Layout>
      <h1>Business Owners</h1>
      <pre>{JSON.stringify(businessOwner, null, 2)}</pre>
    </Layout>
  );
}

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: BusinessOwners,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
}

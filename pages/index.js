import Layout from "../components/layout";
import { useQuery } from "@apollo/client";
import { BusinessOwners } from "../graphql/queries";
import { initializeApollo } from "../apollo/client";
import { signIn, useSession } from "next-auth/client";
import Signin from "../components/signin";
import Payments from "./payments";
import Loading from "../components/loading";

export default function Page() {
  const [session, loading] = useSession();
  const {
    data: { businessOwner },
  } = useQuery(BusinessOwners);

  if (loading) return <Loading />;

  if (!session) {
    return <Signin />;
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

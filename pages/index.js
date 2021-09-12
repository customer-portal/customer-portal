import Layout from "../components/layout";
import { useQuery } from "@apollo/client";
import { BusinessOwners } from "../graphql/queries";
import { initializeApollo } from "../apollo/client";
import { signIn, useSession } from "next-auth/client";
import Signin from "../components/signin";

export default function Page() {
  const [session, loading] = useSession();
  const {
    data: { businessOwner },
  } = useQuery(BusinessOwners);

  return <Signin/>;

  // if (!session) {
  //   return (
  //     <Layout>
  //       <h1>You are not authorized. PLox sign in.</h1>
  //       <span>You are not signed in</span>
  //       <a
  //         href={`/api/auth/signin`}
  //         onClick={(e) => {
  //           e.preventDefault();
  //           signIn();
  //         }}
  //       >
  //         Sign in
  //       </a>
  //     </Layout>
  //   );
  // }

  // return (
  //   <Layout>
  //     <h1>Business Owners</h1>
  //     <pre>{JSON.stringify(businessOwner, null, 2)}</pre>
  //   </Layout>
  // );
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

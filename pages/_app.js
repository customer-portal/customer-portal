import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../apollo/client";
import { Provider } from "next-auth/client";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <Provider session={pageProps.session}>
      <ApolloProvider client={apolloClient}>
        <Head>
          <script
            src="https://www.cashfree.com/assets/cashfree.sdk.v1.2.js"
            type="text/javascript"
          ></script>
        </Head>
        <Component {...pageProps} />
      </ApolloProvider>
    </Provider>
  );
}

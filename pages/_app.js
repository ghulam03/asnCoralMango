import "../styles/global.css";

import Layout from "../components/Layout";
import { Provider } from "react-redux";
// import { SessionProvider } from "next-auth/react";
import { store } from "../store/store";

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <>
      <Provider store={store}>
        {/* <SessionProvider session={session}> */}
        <Layout>
          <Component {...pageProps} />
        </Layout>
        {/* </SessionProvider> */}
      </Provider>
    </>
  );
}

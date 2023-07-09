/* eslint-disable @typescript-eslint/no-explicit-any */
// import { useRef, useEffect } from "react";
// import { NextPage } from "next";
// import { AppProps } from "next/app";
// import { ErrorBoundary } from "react-error-boundary";
// import { Provider } from "react-redux";
import { Slide, ToastContainer } from "react-toastify";
import Head from "next/head";
import Home from "./home";

import "../styles/main.css";
import "../styles/vendor.css";
// import { NextPage } from "next";

const App = () => {

  return (
    <>
      <Head>
        <link rel="icon" href="/app/favicon.ico" />
      </Head>
      {/* <Provider store={store}> */}
      {/* <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onError={errorBoundaryHandlder}
      > */}
      <Home />
      {/* <Component {...pageProps} /> */}
        <ToastContainer transition={Slide} />
        <div id="modal-portal" />
      {/* </ErrorBoundary> */}
      {/* </Provider> */}
    </>
  );
};

export default App;

// import React from 'react';
// import type { AppProps } from 'next/app';

// const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
//   return <Component {...pageProps} />;
// };

// export default MyApp;

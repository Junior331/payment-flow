import React from "react";
import App from "next/app";
import { PaymentProvider } from "../src/data/payment/PaymentProvider";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <PaymentProvider>
        <Component {...pageProps} />
      </PaymentProvider>
    );
  }
}

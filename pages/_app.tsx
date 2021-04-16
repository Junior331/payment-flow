import React from "react";
import App from "next/app";
import { PurchaseProvider } from "../src/data/purchase/PurchaseProvider";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <PurchaseProvider>
        <Component {...pageProps} />
      </PurchaseProvider>
    );
  }
}

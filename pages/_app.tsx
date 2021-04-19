import React from "react";
import App from "next/app";
import { ThemeProvider } from "styled-components";
import { PaymentProvider } from "../src/data/payment/PaymentProvider";
import { GlobalStyles } from "../src/styles/globalStyled";
import Theme from "../src/styles/Theme";
import { Header } from "../src/components";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={Theme}>
        <GlobalStyles />
        <PaymentProvider>
          <Header />
          <Component {...pageProps} />
        </PaymentProvider>
      </ThemeProvider>
    );
  }
}

import React from "react";
import App from "next/app";
import { ThemeProvider } from "styled-components";
import { PaymentProvider } from "../src/data/payment/PaymentProvider";
import GlobalStyle from "../src/styles/GlobalStyle";
import Theme from "../src/styles/Theme";
import { Layout } from "../src/components";
import "./_app.css";
import { PlanProvider } from "../src/data/plan/PlanProvider";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <PaymentProvider>
          <PlanProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </PlanProvider>
        </PaymentProvider>
      </ThemeProvider>
    );
  }
}

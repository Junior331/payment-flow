import { createContext } from "react";

export interface IPaymentData {
  couponCode?: string;
  creditCardCPF?: string;
  creditCardCVV?: string;
  creditCardExpirationDate?: string;
  creditCardHolder?: string;
  creditCardNumber?: string;
  gateway?: string;
  installments?: number;
  offerId?: number;
  userId?: number;
}

export interface IPaymentContext {
  paymentData: IPaymentData;
  errors: Object;
  setPaymentData: (paymentData: IPaymentData) => void;
}

const INITIAL_CONTEXT = {
  paymentData: {},
  errors: {},
  setPaymentData: () => {},
};

export const PaymentContext = createContext<IPaymentContext>(INITIAL_CONTEXT);

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
  setPaymentItem: (key: string, value: string) => void;
  onChangeInput: (
    key: string
  ) => (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const INITIAL_CONTEXT = {
  paymentData: {},
  errors: {},
  setPaymentItem: () => {},
  onChangeInput: () => () => {},
};

export const PaymentContext = createContext<IPaymentContext>(INITIAL_CONTEXT);

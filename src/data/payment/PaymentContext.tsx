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

export interface IOption {
  key: string;
  value: string;
}

export interface IPaymentContext {
  installmentsOptions: IOption[];
  paymentData: IPaymentData;
  errors: Object;
  setPaymentItem: (key: string, value: string) => void;
  onChangeInput: (
    key: string
  ) => (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

const INITIAL_CONTEXT = {
  installmentsOptions: [],
  paymentData: {},
  errors: {},
  setPaymentItem: () => {},
  onChangeInput: () => () => {},
};

export const PaymentContext = createContext<IPaymentContext>(INITIAL_CONTEXT);

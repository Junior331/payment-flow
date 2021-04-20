import { createContext } from "react";
import { IOption, IPaymentData } from "../../domain/payment";
export interface IPaymentContext {
  installmentsOptions: IOption[];
  paymentData: IPaymentData;
  errors: Object;
  isValid?: boolean;
  setPaymentItem?: (key: string, value: string) => void;
  onChangeInput?: (
    key: string
  ) => (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  finishPayment?: (data: IPaymentData) => Promise<void>;
}

export const INITIAL_CONTEXT = {
  installmentsOptions: [],
  paymentData: {
    couponCode: "",
    creditCardCPF: "",
    creditCardCVV: "",
    creditCardExpirationDate: "",
    creditCardHolder: "",
    creditCardNumber: "",
    gateway: "iugu",
    installments: 0,
    userId: 1,
  },
  errors: {},
};

export const PaymentContext = createContext<IPaymentContext>(INITIAL_CONTEXT);

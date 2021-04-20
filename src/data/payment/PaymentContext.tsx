import { createContext } from "react";
import { IOption, IPaymentData } from "../../domain/payment";
export interface IPaymentContext {
  installmentsOptions: IOption[];
  paymentData: IPaymentData;
  errors: Object;
  setPaymentItem?: (key: string, value: string) => void;
  onChangeInput?: (
    key: string
  ) => (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  finishPayment?: (data: IPaymentData) => Promise<void>;
}

const INITIAL_CONTEXT = {
  installmentsOptions: [],
  paymentData: {},
  errors: {},
};

export const PaymentContext = createContext<IPaymentContext>(INITIAL_CONTEXT);

import { useState } from "react";
import { IPaymentData } from "../../domain/payment";
import { AxiosAdapterService } from "../../infra/adapters/axios.adapter";
import { PaymentService } from "../../infra/services/PaymentService";
import { installmentsOptionsMock } from "./installmentsOption.mock";
import { INITIAL_CONTEXT, PaymentContext } from "./PaymentContext";
import { PaymentValidator } from "./PaymentValidator";

export function PaymentProvider({ children }) {
  const [paymentData, setPaymentData] = useState<IPaymentData>(
    INITIAL_CONTEXT.paymentData
  );
  const { isValid, validate } = PaymentValidator(paymentData);
  const errors = validate();
  const installmentsOptions = installmentsOptionsMock;
  const setPaymentItem = (key: string, value: any) => {
    setPaymentData({ ...paymentData, [key]: value });
  };

  const onChangeInput = (key: string) => (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => setPaymentItem(key, event.target.value);

  const finishPayment = async (data: IPaymentData) => {
    const baseService = AxiosAdapterService<IPaymentData>();
    try {
      const response = await PaymentService(baseService).finishPayment(data);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <PaymentContext.Provider
      value={{
        paymentData,
        errors,
        setPaymentItem,
        onChangeInput,
        installmentsOptions,
        finishPayment,
        isValid,
      }}
    >
      {children}
    </PaymentContext.Provider>
  );
}

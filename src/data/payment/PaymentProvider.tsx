import { useState } from "react";
import { installmentsOptionsMock } from "./installmentsOption.mock";
import { IPaymentData, PaymentContext } from "./PaymentContext";

export function PaymentProvider({ children }) {
  const [paymentData, setPaymentData] = useState<IPaymentData>({});
  const [errors, setErrors] = useState({});
  const installmentsOptions = installmentsOptionsMock;
  const setPaymentItem = (key: string, value: any) => {
    setPaymentData({ ...paymentData, [key]: value });
  };

  const onChangeInput = (key: string) => (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => setPaymentItem(key, event.target.value);

  return (
    <PaymentContext.Provider
      value={{
        paymentData,
        errors,
        setPaymentItem,
        onChangeInput,
        installmentsOptions,
      }}
    >
      {children}
    </PaymentContext.Provider>
  );
}

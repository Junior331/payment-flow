import { useState } from "react";
import { IPaymentData, PaymentContext } from "./PaymentContext";

export function PaymentProvider({ children }) {
  const [paymentData, setPaymentData] = useState<IPaymentData>({});
  const [errors, setErrors] = useState({});

  const setPaymentItem = (key: string, value: any) => {
    setPaymentData({ ...paymentData, [key]: value });
  };

  const onChangeInput = (key: string) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => setPaymentItem(key, event.target.value);

  return (
    <PaymentContext.Provider
      value={{
        paymentData,
        errors,
        setPaymentItem,
        onChangeInput,
      }}
    >
      {children}
    </PaymentContext.Provider>
  );
}

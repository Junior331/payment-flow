import { useContext, useState } from "react";
import { IPaymentData, PaymentContext } from "./PaymentContext";

export function PaymentProvider({ children }) {
  const [paymentData, setPaymentData] = useState<IPaymentData>({});
  const [errors, setErrors] = useState({});
  return (
    <PaymentContext.Provider
      value={{
        paymentData,
        errors,
        setPaymentData,
      }}
    >
      {children}
    </PaymentContext.Provider>
  );
}

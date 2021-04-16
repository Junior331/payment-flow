import { useEffect } from "react";
import { usePayment } from "../src/data/payment/usePayment";

function PlanSelectorPage() {
  const { paymentData, setPaymentData } = usePayment();
  useEffect(() => {
    setTimeout(() => {
      setPaymentData({ couponCode: "1234" });
    }, 3000);
  }, []);
  return <div>Welcome to Next.js! {JSON.stringify(paymentData)}</div>;
}

export default PlanSelectorPage;

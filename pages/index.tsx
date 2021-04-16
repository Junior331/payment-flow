import { useEffect } from "react";
import { usePurchsae } from "../src/data/purchase/usePurchase";

function PlanSelectorPage() {
  const { paymentData, setPaymentData } = usePurchsae();
  useEffect(() => {
    setTimeout(() => {
      setPaymentData({ couponCode: "1234" });
    }, 3000);
  }, []);
  return <div>Welcome to Next.js! {JSON.stringify(paymentData)}</div>;
}

export default PlanSelectorPage;

import { useEffect } from "react";
import { Typography } from "../src/components";
import { usePayment } from "../src/data/payment/usePayment";

function PlanSelectorPage() {
  const { paymentData, setPaymentData } = usePayment();
  useEffect(() => {
    setTimeout(() => {
      setPaymentData({ couponCode: "1234" });
    }, 3000);
  }, []);
  return (
    <div>
      <Typography variant="h1">Estamos quase lá!</Typography>
    </div>
  );
}

export default PlanSelectorPage;

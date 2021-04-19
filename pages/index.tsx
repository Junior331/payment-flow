import { useEffect } from "react";
import { PaymentForm, PlanSelector, Typography } from "../src/components";
import { CreditCard } from "../src/components";
import { usePlan } from "../src/data/plan/usePlan";

function PlanSelectorPage() {
  const { plansFriendly } = usePlan();
  return (
    <div>
      <Typography variant="h1">Confira o seu plano:</Typography>
      <PlanSelector plans={plansFriendly} />
    </div>
  );
}

export default PlanSelectorPage;

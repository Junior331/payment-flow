import React from "react";
import { PlanCard } from "../..";
import { usePlan } from "../../../data/plan/usePlan";
import { IPlanViewModel } from "../../../view/plan/PlanViewModel";
import * as S from "./styles";

export interface PlanSelectorProps {
  onSelect?: (plan) => void;
  plans: IPlanViewModel[];
}

const PlanSelector: React.FC = () => {
  const { plans, selectedPlan, setSelectedPlan } = usePlan();

  return (
    <S.Container>
      {plans.map((plan, index) => (
        <PlanCard
          key={index}
          plan={plan}
          onSelect={setSelectedPlan}
          selected={selectedPlan.name === plan.name}
        />
      ))}
    </S.Container>
  );
};

export default PlanSelector;

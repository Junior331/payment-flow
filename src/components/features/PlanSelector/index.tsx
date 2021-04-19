import React from "react";
import { PlanCard } from "../..";
import { IPlanViewModel } from "../../../data/plan/PlanViewModel";
import * as S from "./styles";

export interface PlanSelectorProps {
  onSelect?: (plan) => void;
  plans: IPlanViewModel[];
}

const PlanSelector: React.FC<PlanSelectorProps> = ({
  plans,
  onSelect = () => {},
}) => (
  <S.Container>
    {plans.map((plan) => (
      <PlanCard key={plan.id} plan={plan} onSelect={onSelect} />
    ))}
  </S.Container>
);

export default PlanSelector;

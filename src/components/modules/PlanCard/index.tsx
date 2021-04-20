import React from "react";
import { OptionIndicator } from "../..";
import { IPlanViewModel } from "../../../view/plan/PlanViewModel";
import * as S from "./styles";

export interface PlanCardProps {
  onSelect?: (plan) => void;
  plan: IPlanViewModel;
  selected?: boolean;
}

const PlanCard: React.FC<PlanCardProps> = ({
  plan,
  onSelect = () => {},
  selected,
}) => {
  return (
    <S.Container onClick={() => onSelect(plan)}>
      <S.Column>
        <S.TimeText>{plan.title}</S.TimeText>
        <S.ValueText>{plan.value}</S.ValueText>
        <S.QuotaText>{plan.quota}</S.QuotaText>
      </S.Column>
      <S.Column>
        <S.PercentText>{plan.discountPercentage}</S.PercentText>
      </S.Column>
      <S.LastColumn>
        <OptionIndicator selected={selected} />
      </S.LastColumn>
    </S.Container>
  );
};

export default PlanCard;

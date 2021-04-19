import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { OptionIndicator } from "../..";
import { IPlanViewModel } from "../../../data/plan/PlanViewModel";
import * as S from "./styles";

export interface PlanCardProps {
  onSelect?: (plan) => void;
  plan: IPlanViewModel;
}

const PlanCard: React.FC<PlanCardProps> = ({ plan, onSelect = () => {} }) => {
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
      <S.Column alignItems="flex-end" flex="1">
        <OptionIndicator selected />
      </S.Column>
    </S.Container>
  );
};

export default PlanCard;

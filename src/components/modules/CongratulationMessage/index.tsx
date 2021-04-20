import React from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { OptionIndicator } from "../..";
import { IPlanViewModel } from "../../../view/plan/PlanViewModel";
import * as S from "./styles";

const CongratulationMessage: React.FC = () => {
  return (
    <S.Container>
      <S.ContainerIcon>
        <AiOutlineCheck size={40} />
      </S.ContainerIcon>
      <S.HighlightText>Parabéns!</S.HighlightText>
      <S.Text>Sua assinatura foi realizada com sucesso</S.Text>
    </S.Container>
  );
};

export default CongratulationMessage;

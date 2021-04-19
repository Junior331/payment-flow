import React, { InputHTMLAttributes, useState } from "react";
import { Input, Button } from "../../";
import * as S from "./styles";
// import { masks, typeMask } from "../../../utils/masks";

export interface PaymentFormProps {
  error?: boolean;
}

const PaymentForm: React.FC<PaymentFormProps> = ({}) => {
  const [isLoading, setIseLoading] = useState(false);
  return (
    <S.FormContainer onSubmit={(form) => console.log(form)}>
      <Input
        readOnly
        label="Número do cartão"
        placeholder="0000 0000 0000 0000"
      />
      <Input label="Validade" placeholder="MM/AA" />
      <Input label="CVV" placeholder="000" />
      <Input label="Nome impresso no cartão" placeholder="Seu nome" />
      <Input label="CPF" placeholder="000.000.000-00" />
      <Input label="Cupom" placeholder="Insira aqui" />
      <Button size="huge" isLoading={isLoading}>
        Finalizar Pagamento
      </Button>
    </S.FormContainer>
  );
};

export default PaymentForm;

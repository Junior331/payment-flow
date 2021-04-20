import React, { InputHTMLAttributes, useState } from "react";
import { Input, Button } from "../../";
import { usePayment } from "../../../data/payment/usePayment";
import { typeMask } from "../../../infra/helpers/masks";
import * as S from "./styles";
// import { masks, typeMask } from "../../../utils/masks";

export interface PaymentFormProps {
  error?: boolean;
}

const PaymentForm: React.FC<PaymentFormProps> = ({}) => {
  const [isLoading, setIsLoading] = useState(false);
  const { paymentData, onChangeInput } = usePayment();
  console.log(paymentData);

  return (
    <S.FormContainer onSubmit={(form) => console.log(form)}>
      <Input
        readOnly={isLoading}
        mask={typeMask.cardNumber}
        label="Número do cartão"
        placeholder="0000 0000 0000 0000"
        value={paymentData.creditCardNumber}
        onChange={onChangeInput("creditCardNumber")}
      />
      <Input
        readOnly={isLoading}
        mask={typeMask.expirationDate}
        width="50%"
        label="Validade"
        placeholder="MM/AA"
        value={paymentData.creditCardExpirationDate}
        onChange={onChangeInput("creditCardExpirationDate")}
      />
      <Input
        readOnly={isLoading}
        mask={typeMask.cvv}
        width="50%"
        label="CVV"
        placeholder="000"
        value={paymentData.creditCardCVV}
        onChange={onChangeInput("creditCardCVV")}
      />
      <Input
        readOnly={isLoading}
        label="Nome impresso no cartão"
        placeholder="Seu nome"
        value={paymentData.creditCardHolder}
        onChange={onChangeInput("creditCardHolder")}
      />
      <Input
        readOnly={isLoading}
        mask={typeMask.cpf}
        label="CPF"
        placeholder="000.000.000-00"
        value={paymentData.creditCardCPF}
        onChange={onChangeInput("creditCardCPF")}
      />
      <Input
        readOnly={isLoading}
        label="Cupom"
        placeholder="Insira aqui"
        value={paymentData.couponCode}
        onChange={onChangeInput("couponCode")}
      />
      <Button size="huge" isLoading={isLoading}>
        Finalizar Pagamento
      </Button>
    </S.FormContainer>
  );
};

export default PaymentForm;

import { useRouter } from "next/router";
import React, { InputHTMLAttributes, useState } from "react";
import { Input, Button, Select } from "../../";
import { usePayment } from "../../../data/payment/usePayment";
import { usePlan } from "../../../data/plan/usePlan";
import { typeMask } from "../../../infra/helpers/masks";
import * as S from "./styles";

const PaymentForm: React.FC = () => {
  const router = useRouter();
  const { selectedPlan } = usePlan();
  const [isLoading, setIsLoading] = useState(false);
  const {
    paymentData,
    onChangeInput,
    installmentsOptions,
    finishPayment,
  } = usePayment();

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      await finishPayment({ ...paymentData, offerId: selectedPlan.id });
      setIsLoading(false);
      router.push("/success");
    } catch (error) {
      setIsLoading(false);
    }
  };
  console.log(paymentData);

  return (
    <S.FormContainer>
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
      <Select
        disabled={isLoading}
        label="Número de parcelas"
        placeholder="Selecionar"
        value={paymentData.installments}
        onChange={onChangeInput("installments")}
        options={installmentsOptions}
      />
      <Button onClick={handleSubmit} size="huge" isLoading={isLoading}>
        Finalizar Pagamento
      </Button>
    </S.FormContainer>
  );
};

export default PaymentForm;

import { CreditCard, PaymentForm, Typography } from "../src/components";

function FormPaymentPage() {
  return (
    <>
      <Typography variant="h1">Estamos quase lá!</Typography>
      <Typography variant="h2">
        Insira seus dados de pagamento abaixo:
      </Typography>
      <CreditCard />
      <PaymentForm />
    </>
  );
}

export default FormPaymentPage;

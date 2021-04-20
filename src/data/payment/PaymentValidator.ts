import { ErrorMessageStyled } from "../../components/elements/Input/styles";
import { IPaymentData } from "../../domain/payment";
import { validateCpf } from "../../infra/helpers/cpfcnpj";

export const PaymentValidator = (payment: IPaymentData) => {
  const schema = {
    creditCardNumber: (value) => {
      if (value?.length < 16) {
        return "Número do cartão inválido";
      }
    },
    creditCardCPF: (value) => {
      if (!validateCpf(value)) {
        return "CPF inválido";
      }
    },
    creditCardCVV: (value) => {
      if (value?.length < 3) {
        return "CVV deve possuir 3 dígitos";
      }
    },
    creditCardExpirationDate: (value) => {
      if (value?.length < 5) {
        return "Data de expiração inválida";
      }
    },
    creditCardHolder: (value) => {
      if (!value) {
        return "O nome é obrigatório";
      }
    },
    couponCode: () => {},
    installments: (value) => {
      if (!value || value === "0") {
        return "Número de parcelas é obrigatório";
      }
    },
  };

  const validate = () => {
    const errors = Object.entries(payment).reduce(
      (acum, [key, value]) => ({
        ...acum,
        [key]: schema[key] ? schema[key](value) : undefined,
      }),
      {}
    );
    return errors;
  };

  const isValid = !Boolean(Object.values(validate()).find((item) => item));

  return { validate, isValid };
};

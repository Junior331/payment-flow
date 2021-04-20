import VMasker from "vanilla-masker";

const standard = (value) => value;

const unmask = (value) => (value ? value.replace(/[()\-\s.%/]/g, "") : "");

const cvv = (value) => {
  const rawValue = value.replace(/[/]/g, "");
  return VMasker.toPattern(rawValue, "999");
};

const cardNumber = (value) => {
  const rawValue = value.replace(/[/]/g, "");
  return VMasker.toPattern(rawValue, "9999 9999 9999 9999");
};

const expirationDate = (value) => {
  const rawValue = value.replace(/[/]/g, "");
  return VMasker.toPattern(rawValue, "99/99");
};

const date = (value) => {
  const rawValue = value.replace(/[/]/g, "");
  return VMasker.toPattern(rawValue, "99/99/9999");
};

const dateTime = (value) => {
  const rawValue = value.replace(/[/]/g, "");
  return VMasker.toPattern(rawValue, "99/99/9999 99:99");
};

const cpf = (value) => {
  const rawValue = value.replace(/[-.]/g, "");
  return VMasker.toPattern(rawValue, "999.999.999-99");
};

const cnpj = (value) => {
  const rawValue = value.replace(/[-.]/g, "");
  return VMasker.toPattern(rawValue, "99.999.999/9999-99");
};

const cpfCnpj = (value) => {
  const rawValue = unmask(value);
  if (rawValue.length < 12) {
    return cpf(value);
  }
  return cnpj(value);
};

const phone = (value) => {
  const rawValue = value.replace(/[()\-\s]/g, "");
  if (rawValue.length < 11) {
    return VMasker.toPattern(rawValue, "(99) 9999-9999");
  }
  return VMasker.toPattern(rawValue, "(99) 99999-9999");
};

const cep = (value) => {
  const rawValue = value.replace(/[()\-\s]/g, "");
  return VMasker.toPattern(rawValue, "99999-999");
};

const money = (value) => {
  if (value === "0,0" || value === "0,00") return "";
  return VMasker.toMoney(value);
};

const noSpace = (value) => {
  return value.replace(/\s/g, "");
};

export enum typeMask {
  date = "date",
  dateTime = "dateTime",
  cpf = "cpf",
  phone = "phone",
  cep = "cep",
  standard = "standard",
  cpfCnpj = "cpfCnpj",
  unmask = "unmask",
  percent = "percent",
  money = "money",
  noSpace = "noSpace",
  expirationDate = "expirationDate",
  cardNumber = "cardNumber",
  cvv = "cvv",
}

export const masks = {
  date,
  dateTime,
  cpf,
  phone,
  cnpj,
  cep,
  standard,
  cpfCnpj,
  unmask,
  money,
  noSpace,
  expirationDate,
  cardNumber,
  cvv,
};

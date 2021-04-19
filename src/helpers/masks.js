import VMasker from "vanilla-masker";

const standard = (value) => value;

const unmask = (value) => (value ? value.replace(/[()\-\s.%/]/g, "") : "");

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

function hasCharacter(value, char) {
  return value.search(char) !== -1;
}

const cep = (value) => {
  const rawValue = value.replace(/[()\-\s]/g, "");
  return VMasker.toPattern(rawValue, "99999-999");
};

const percentBaseHandler = (value, lastValue) => {
  const isFirstNumber = /^\d$/.test(value);
  const isDeletingLastNumber =
    hasCharacter(lastValue, "%") && value.length === 1;

  if (isDeletingLastNumber || !value?.replace(/\s/g, "")) return "exit";
  else if (isFirstNumber) return value;

  let rawValue = "";
  if (hasCharacter(value, "%")) {
    rawValue = unmask(value);
  } else {
    rawValue = value.slice(0, -1);
  }
  return rawValue;
};

const percent = (value, lastValue) => {
  const rawValue = percentBaseHandler(value, lastValue);
  if (rawValue === "exit") return "";

  return `${rawValue}%`;
};

const percentCashback = (value, lastValue) => {
  const rawValue = percentBaseHandler(value, lastValue);
  if (rawValue === "exit") return "";

  const handledValue = handleBusinessRules(rawValue);

  return `${handledValue}%`;
};

const handleBusinessRules = (value) => {
  const splittedValue = value.split(",") || [];

  const digitsOfCents = splittedValue[1]?.length;
  if (digitsOfCents > 2)
    return `${splittedValue[0]},${splittedValue[1].slice(0, -1)}`;
  else if (splittedValue.length > 2 || splittedValue[0].length > 3)
    return value.slice(0, -1);
  else return value;
};

const money = (value) => {
  if (value === "0,0" || value === "0,00") return "";
  return VMasker.toMoney(value);
};

const noSpace = (value) => {
  return value.replace(/\s/g, "");
};

export const masks = {
  date,
  dateTime,
  cpf,
  cnpj,
  cpfCnpj,
  phone,
  cep,
  standard,
  unmask,
  percent,
  percentCashback,
  money,
  noSpace,
};

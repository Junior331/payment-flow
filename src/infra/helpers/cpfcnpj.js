import * as thisModule from "./cpfcnpj.js";

const stripNonDigits = (string) => {
  return string?.replace(/[^\d]/g, "");
};

const validateCpfDigit = (arrayCPF, digit) => {
  const highestMultiplier = 9 + digit;

  const sumOfProducts = arrayCPF.reduce((acc, cur, index) => {
    const currentMultiplier = highestMultiplier - index;
    if (currentMultiplier < 2) return acc;
    const product = Number(cur) * currentMultiplier;
    return acc + product;
  }, 0);

  const expectedDigit = Number(arrayCPF[highestMultiplier - 1]);
  let calculatedDigit = (sumOfProducts * 10) % 11;
  if (calculatedDigit === 10) calculatedDigit = 0;
  return calculatedDigit === expectedDigit;
};

const validateCpf = (strCPF) => {
  const strippedCPF = thisModule.stripNonDigits(strCPF);

  if (strippedCPF.length !== 11 || /^(\d)\1+$/.test(strippedCPF)) {
    return false;
  }

  const arrayCPF = strippedCPF.split("");
  if (
    thisModule.validateCpfDigit(arrayCPF, 1) &&
    thisModule.validateCpfDigit(arrayCPF, 2)
  ) {
    return true;
  }
  return false;
};

const validateCnpjDigit = (arrayCNPJ, digit) => {
  const lengthInput = 11 + digit;
  let weight = lengthInput - 7;

  const sumOfProducts = arrayCNPJ.reduce((acc, cur, index) => {
    if (index >= lengthInput) return acc;

    const product = Number(cur) * weight;
    weight -= 1;
    if (weight < 2) weight = 9;
    return acc + product;
  }, 0);

  const expectedDigit = Number(arrayCNPJ[lengthInput]);
  const calculatedDigit =
    sumOfProducts % 11 < 2 ? 0 : 11 - (sumOfProducts % 11);

  return calculatedDigit === expectedDigit;
};

const validateCnpj = (strCNPJ) => {
  const strippedCNPJ = thisModule.stripNonDigits(strCNPJ);

  if (strippedCNPJ.length !== 14 || /^(\d)\1+$/.test(strippedCNPJ))
    return false;

  const arrayCNPJ = strippedCNPJ.split("");

  if (
    thisModule.validateCnpjDigit(arrayCNPJ, 1) &&
    thisModule.validateCnpjDigit(arrayCNPJ, 2)
  )
    return true;
  return false;
};

const validateCpfCnpj = (strID) => {
  const strippedID = thisModule.stripNonDigits(strID);
  if (!strippedID) return false;
  if (strippedID.length === 14) return thisModule.validateCnpj(strippedID);
  else if (strippedID.length === 11) return thisModule.validateCpf(strippedID);
  return false;
};

export {
  validateCpfDigit,
  validateCpf,
  validateCnpjDigit,
  validateCnpj,
  validateCpfCnpj,
  stripNonDigits,
};

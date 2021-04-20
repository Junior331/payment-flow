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

export { validateCpfDigit, validateCpf, stripNonDigits };

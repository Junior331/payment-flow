import { IOption } from "../../domain/payment";

export const installmentsOptionsMock: IOption[] = Array(10)
  .fill(null)
  .map((_, index) => ({ key: `${index + 1}`, value: `${index + 1}` }));

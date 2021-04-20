import { IBaseService } from "./interfaces/baseService";
import { IPaymentData, IPaymentAPI } from "../../domain/payment";

export const PaymentService = (
  baseService: IBaseService<IPaymentData>
): IPaymentAPI => {
  return {
    finishPayment: (data: IPaymentData): Promise<IPaymentData> => {
      return baseService.post("subscription", data);
    },
  };
};

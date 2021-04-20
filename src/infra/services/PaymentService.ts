import { IBaseService } from "./interfaces/baseService";
import { IPaymentData, IPaymentEntity } from "../../domain/payment";

export const PaymentService = (
  baseService: IBaseService<IPaymentData>
): IPaymentEntity => {
  return {
    finishPayment: (data: IPaymentData): Promise<IPaymentData> => {
      return baseService.post("subscription", data);
    },
  };
};

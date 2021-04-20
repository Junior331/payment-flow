export interface IPaymentData {
  couponCode?: string;
  creditCardCPF?: string;
  creditCardCVV?: string;
  creditCardExpirationDate?: string;
  creditCardHolder?: string;
  creditCardNumber?: string;
  gateway?: string;
  installments?: number;
  offerId?: number;
  userId?: number;
  id?: number;
}

export interface IOption {
  key: string;
  value: string;
}

export interface IPaymentEntity {
  finishPayment: (data: IPaymentData) => Promise<IPaymentData>;
}

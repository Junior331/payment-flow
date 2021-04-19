import { IBaseService } from "../interfaces/baseService";

export interface IPlan {
  id: number;
  storeId: string;
  name: string;
  description: string;
  fullPrice: number;
  discountPercentage: number;
  order: number;
  gateway: string;
  splittable: boolean;
  acceptsCoupon: boolean;
  caption: string;
  periodLabel: string;
  period: string;
  priority: 2;
  title: string;
  discountAmmount: number;
  discountCouponCode: null | string;
}

export const PlanService = (baseService: IBaseService<IPlan[]>) => {
  return {
    getPlans: (): Promise<IPlan[]> => {
      return baseService.get("offer");
    },
  };
};

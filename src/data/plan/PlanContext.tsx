import { createContext } from "react";
import { IPlanViewModel } from "./PlanViewModel";

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

export interface IPlanContext {
  plans: IPlan[];
  plansFriendly: IPlanViewModel[];
}

const INITIAL_CONTEXT = {
  plans: [],
  plansFriendly: [],
};

export const PlanContext = createContext<IPlanContext>(INITIAL_CONTEXT);

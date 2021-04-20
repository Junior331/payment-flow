import { IPlan } from "../../domain/plan";
import { masks } from "../../infra/helpers/masks";

export interface IPlanViewModel {
  id: number;
  value: string;
  discountPercentage: string;
  quota: string;
  title: string;
  name: string;
}

export const PlanViewModel = (plans: IPlan[]): IPlanViewModel[] => {
  const getTitle = (plan: IPlan) => `${plan.title} | ${plan.description}`;
  const getDiscountPercentage = (plan: IPlan) =>
    `-${plan.discountPercentage * 100}%`;
  const getValue = (plan: IPlan) =>
    `De R$ ${masks.money(plan.fullPrice)} | Por R$ ${masks.money(
      plan.fullPrice - plan.discountAmmount
    )}`;
  const getQuota = (plan: IPlan) =>
    `10x de R$ ${masks.money(
      (plan.fullPrice - plan.discountAmmount) / 10
    )}/mês`;

  const plansFriendly = plans.map((plan) => ({
    title: getTitle(plan),
    discountPercentage: getDiscountPercentage(plan),
    value: getValue(plan),
    id: plan.id,
    quota: getQuota(plan),
    name: plan.name,
  }));

  return plansFriendly;
};

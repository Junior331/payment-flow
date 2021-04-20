import { IBaseService } from "./interfaces/baseService";
import { IPlan, IPlanEntity } from "../../domain/plan";

export const PlanService = (
  baseService: IBaseService<IPlan[]>
): IPlanEntity => {
  return {
    getPlans: (): Promise<IPlan[]> => {
      return baseService.get("offer");
    },
  };
};

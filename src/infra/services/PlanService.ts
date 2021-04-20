import { IBaseService } from "./interfaces/baseService";
import { IPlan, IPlanAPI } from "../../domain/plan";

export const PlanService = (baseService: IBaseService<IPlan[]>): IPlanAPI => {
  return {
    getPlans: (): Promise<IPlan[]> => {
      return baseService.get("offer");
    },
  };
};

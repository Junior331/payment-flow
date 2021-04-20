import { createContext } from "react";
import { IPlanViewModel } from "../../view/plan/PlanViewModel";
export interface IPlanContext {
  plans: IPlanViewModel[];
  selectedPlan: IPlanViewModel;
  setSelectedPlan: (plan: IPlanViewModel) => void;
}

const INITIAL_CONTEXT = {
  plans: [],
  selectedPlan: {} as IPlanViewModel,
  setSelectedPlan: () => {},
};

export const PlanContext = createContext<IPlanContext>(INITIAL_CONTEXT);

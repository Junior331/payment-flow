import { useEffect, useMemo, useState } from "react";
import { PlanService } from "../../infra/services/PlanService";
import { PlanContext } from "./PlanContext";
import { AxiosAdapterService } from "../../infra/adapters/axios.adapter";
import { IPlanViewModel, PlanViewModel } from "../../view/plan/PlanViewModel";
import { IPlan } from "../../domain/plan";

export function PlanProvider({ children }) {
  const [plans, setPaymentData] = useState<IPlan[]>([]);
  const [selectedPlan, setSelectedPlan] = useState({} as IPlanViewModel);
  const plansFriendly: IPlanViewModel[] = useMemo(() => PlanViewModel(plans), [
    plans,
  ]);

  useEffect(() => {
    const baseService = AxiosAdapterService<IPlan[]>();
    (async () => {
      try {
        const _plans = await PlanService(baseService).getPlans();
        setPaymentData(_plans);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <PlanContext.Provider
      value={{
        plans: plansFriendly,
        selectedPlan,
        setSelectedPlan,
      }}
    >
      {children}
    </PlanContext.Provider>
  );
}

import { useMemo, useEffect, useState } from "react";
import { PlanService } from "./PlanService";
import { IPlan, PlanContext } from "./PlanContext";
import { AxiosAdapterService } from "../../adapters/axios.adaptes";
import { IPlanViewModel, PlanViewModel } from "./PlanViewModel";

export function PlanProvider({ children }) {
  const [plans, setPaymentData] = useState<IPlan[]>([]);
  const plansFriendly: IPlanViewModel[] = PlanViewModel(plans);

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
        plans,
        plansFriendly,
      }}
    >
      {children}
    </PlanContext.Provider>
  );
}

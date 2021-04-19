import { useContext } from "react";
import { PlanContext } from "./PlanContext";

export function usePlan() {
  return useContext(PlanContext);
}

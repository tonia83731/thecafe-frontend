import { create } from "zustand";

type StepsState = {
  currStep: number;
  setCurrStep: (step: number) => void;
};

export const useStepsStore = create<StepsState>((set) => ({
  currStep: 1,
  setCurrStep: (step) => set({ currStep: step }),
}));

import { create } from "zustand";
import { filterOptions } from "@/types/type";

type FilterState = {
  isCheckedOptions: filterOptions;
  handleIsCheckedOptions: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
export const useFilterStore = create<FilterState>((set) => ({
  isCheckedOptions: {
    all: true,
    drinks: true,
    desserts: true,
    meals: true,
  },
  handleIsCheckedOptions: (e) =>
    set((state) => {
      const name = e.target.name;
      const checked = e.target.checked;
      if (name === "all" && checked) {
        return {
          isCheckedOptions: {
            all: true,
            drinks: true,
            desserts: true,
            meals: true,
          },
        };
      }
      if (name === "all" && !checked) {
        return {
          isCheckedOptions: {
            all: false,
            drinks: false,
            desserts: false,
            meals: false,
          },
        };
      }
      return {
        isCheckedOptions: {
          ...state.isCheckedOptions,
          all: false,
          [name]: checked,
        },
      };
    }),
}));

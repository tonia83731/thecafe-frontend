import { create } from "zustand";
export type MealCustomKeys = "based" | "addon";
export type DrinkCustomKeys = "size" | "sugar" | "ice" | "toppings";
type CustomState = {
  mealCustom: {
    based: string[];
    addon: string[];
  };
  drinkCustom: {
    size: string;
    sugar: string;
    ice: string;
    toppings: string[];
  };
  handleMealsCustom: (
    e: React.ChangeEvent<HTMLInputElement>,
    uid: MealCustomKeys
  ) => void;
  handleDrinksCustom: (
    e: React.ChangeEvent<HTMLInputElement>,
    uid: DrinkCustomKeys
  ) => void;
};
export const useCustomStore = create<CustomState>((set) => ({
  mealCustom: {
    based: ["mayo", "ketchup", "lettuce", "tomato", "cucumbur"],
    addon: [],
  },
  drinkCustom: {
    size: "tall",
    sugar: "50%sugar",
    ice: "50%ice",
    toppings: [],
  },
  handleMealsCustom: (e, uid) =>
    set((state) => {
      const name = e.target.name;
      const checked = e.target.checked;
      const data = checked
        ? [...state.mealCustom[uid], name]
        : state.mealCustom[uid].filter((item) => item !== name);
      return {
        mealCustom: {
          ...state.mealCustom,
          [uid]: data,
        },
      };
    }),
  handleDrinksCustom: (e, uid) =>
    set((state) => {
      const name = e.target.name;
      if (uid !== "toppings") {
        return {
          drinkCustom: {
            ...state.drinkCustom,
            [uid]: name,
          },
        };
      }
      const checked = e.target.checked;
      const toppings = checked
        ? [...state.drinkCustom.toppings, name]
        : state.drinkCustom.toppings.filter((topping) => topping !== name);
      return {
        drinkCustom: {
          ...state.drinkCustom,
          toppings,
        },
      };
    }),
}));

import { create } from "zustand";
type MenuTypeState = {
  menuType: "grid" | "list";
  handleTypeSwitch: (type: "grid" | "list") => void;
};
export const useMenuTypeStore = create<MenuTypeState>((set) => ({
  menuType: "grid",
  handleTypeSwitch: (type) =>
    set(() => ({
      menuType: type,
    })),
}));

import { create } from "zustand";

type SidebarState = {
  sidebarOption: "cart" | "custom" | "wish";
  handleSidebarOption: (id: "cart" | "custom" | "wish") => void;
};

export const useSidebarStore = create<SidebarState>((set) => ({
  sidebarOption: "cart",
  handleSidebarOption: (id) =>
    set(() => ({
      sidebarOption: id,
    })),
}));

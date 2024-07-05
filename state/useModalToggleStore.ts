import { create } from "zustand";
type ModalState = {
  isModalToggle: boolean;
  isProductType: null | string;
  handleProductType: (type: string) => void;
  handleToggle: () => void;
  handleToggleClose: () => void;
};
export const useModalStore = create<ModalState>((set) => ({
  isModalToggle: false,
  isProductType: null,
  handleProductType: (type) =>
    set(() => ({
      isProductType: type,
    })),
  handleToggle: () =>
    set((state) => ({
      isModalToggle: state.isProductType ? true : state.isModalToggle,
    })),
  handleToggleClose: () =>
    set(() => ({
      isModalToggle: false,
    })),
}));

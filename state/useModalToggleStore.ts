import { create } from "zustand";
type ModalState = {
  isModalToggle: boolean;
  isWishToggle: boolean;
  isProductType: null | string;
  handleProductType: (type: string) => void;
  handleToggle: () => void;
  handleToggleClose: () => void;
  handleWishToggle: () => void;
  handleWishToggleClose: () => void;
};
export const useModalStore = create<ModalState>((set) => ({
  isModalToggle: false,
  isWishToggle: false,
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
  handleWishToggle: () =>
    set(() => ({
      isWishToggle: true,
    })),
  handleWishToggleClose: () =>
    set(() => ({
      isWishToggle: false,
    })),
}));

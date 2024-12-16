import { create } from "zustand";
interface useBurgerStoreProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}
export const useBurgerStore = create<useBurgerStoreProps>((set) => ({
  isOpen: false,
  setIsOpen: (value: boolean) => set({ isOpen: value }),
}));

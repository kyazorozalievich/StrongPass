import { create } from "zustand";

interface ToggleState {
  isToggled: boolean;
  toggle: () => void;
  setToggle: (value: boolean) => void;
}

const useToggleStore = create<ToggleState>((set) => ({
  isToggled: false,
  toggle: () => set((state) => ({ isToggled: !state.isToggled })),
  setToggle: (value: boolean) => set(() => ({ isToggled: value })),
}));

export default useToggleStore;

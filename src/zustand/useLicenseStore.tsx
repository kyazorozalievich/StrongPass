import { create } from "zustand";

interface LicenseState {
  isToggled: boolean;
  toggle: () => void;
  setToggle: (value: boolean) => void;
}

const useLicenseStore = create<LicenseState>((set) => ({
  isToggled: false,
  toggle: () => set((state) => ({ isToggled: !state.isToggled })),
  setToggle: (value: boolean) => set(() => ({ isToggled: value })),
}));

export default useLicenseStore;

import { create } from "zustand";

interface askState {
  isToggled: boolean;
  toggle: () => void;
  setToggle: (value: boolean) => void;
}

const useAskQuestionStore = create<askState>((set) => ({
  isToggled: false,
  toggle: () => set((state) => ({ isToggled: !state.isToggled })),
  setToggle: (value: boolean) => set(() => ({ isToggled: value })),
}));

export default useAskQuestionStore;

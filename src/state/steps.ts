import { create } from "zustand";

type Location = {
  long: number;
  lat: number;
};

type User = {
  firstName: string;
  lastName: string;
  cellNumber: string;
  email: string;
};

type LeadStore = {
  step: number;
  location: Location;
  user: User;
  nextStep: () => void;
  prevStep: () => void;
  setStep: (step: number) => void;
  setLocation: (location: Location) => void;
  setUser: (user: User) => void;
  reset: () => void;
};

const defaultState = {
  step: 0,
  location: {
    long: 0,
    lat: 0,
  },
  user: {
    firstName: "",
    lastName: "",
    cellNumber: "",
    email: "",
  },
};

export const useLeadStore = create<LeadStore>((set) => ({
  ...defaultState,
  nextStep: () => set((state) => ({ step: state.step + 1 })),
  prevStep: () => set((state) => ({ step: state.step - 1 })),
  setStep: (step) => set(() => ({ step })),
  setLocation: (location) => set(() => ({ location })),
  setUser: (user) => set(() => ({ user })),
  reset: () => set(() => defaultState),
}));

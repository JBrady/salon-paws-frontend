import { create } from 'zustand';

interface Pet {
  id: number;
  name: string;
  species: string;
  age: number;
}

interface PetStore {
  selectedPet: Pet | null;
  setSelectedPet: (pet: Pet | null) => void;
}

export const usePetStore = create<PetStore>((set) => ({
  selectedPet: null,
  setSelectedPet: (pet) => set({ selectedPet: pet }),
}));
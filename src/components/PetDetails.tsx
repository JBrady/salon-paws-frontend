// File: src/components/PetDetails.tsx

import { usePetStore } from '../store/petStore';

const PetDetails = () => {
  const selectedPet = usePetStore(state => state.selectedPet);

  if (!selectedPet) return <div>Select a pet to view details</div>;

  return (
    <div className="space-y-2">
      <h2 className="text-xl font-bold">{selectedPet.name}</h2>
      <p>Species: {selectedPet.species}</p>
      <p>Age: {selectedPet.age}</p>
    </div>
  );
};

export default PetDetails;
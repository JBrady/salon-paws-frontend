// File: src/components/PetList.tsx

import { useQuery } from 'react-query';
import { usePetStore } from '../store/petStore';

interface Pet {
  id: number;
  name: string;
  species: string;
  age: number;
}

const fetchPets = async (): Promise<Pet[]> => {
  const response = await fetch('/api/pets');
  if (!response.ok) throw new Error('Failed to fetch pets');
  return response.json();
};

const PetList = () => {
  const { data: pets, isLoading, error } = useQuery<Pet[]>('pets', fetchPets);
  const setSelectedPet = usePetStore(state => state.setSelectedPet);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching pets</div>;

  return (
    <ul className="space-y-2">
      {pets?.map((pet) => (
        <li
          key={pet.id}
          className="cursor-pointer hover:bg-gray-100 p-2 rounded"
          onClick={() => setSelectedPet(pet)}
        >
          {pet.name} - {pet.species}
        </li>
      ))}
    </ul>
  );
};

export default PetList;
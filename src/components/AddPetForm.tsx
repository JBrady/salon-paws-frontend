// File: src/components/AddPetForm.tsx

import { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';

interface Pet {
  name: string;
  species: string;
  age: number;
}

const addPet = async (pet: Pet): Promise<Pet> => {
  const response = await fetch('/api/pets', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(pet),
  });
  if (!response.ok) throw new Error('Failed to add pet');
  return response.json();
};

const AddPetForm = () => {
  const [name, setName] = useState('');
  const [species, setSpecies] = useState('');
  const [age, setAge] = useState('');
  const queryClient = useQueryClient();

  const mutation = useMutation(addPet, {
    onSuccess: () => {
      queryClient.invalidateQueries('pets');
      setName('');
      setSpecies('');
      setAge('');
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate({ name, species, age: parseInt(age, 10) });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Pet Name"
        className="w-full p-2 border rounded"
        required
      />
      <input
        type="text"
        value={species}
        onChange={(e) => setSpecies(e.target.value)}
        placeholder="Species"
        className="w-full p-2 border rounded"
        required
      />
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        placeholder="Age"
        className="w-full p-2 border rounded"
        required
      />
      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        Add Pet
      </button>
    </form>
  );
};

export default AddPetForm;
// File: src/app/page.tsx

'use client';

import { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import PetList from '../components/PetList';
import PetDetails from '../components/PetDetails';
import AddPetForm from '../components/AddPetForm';

const queryClient = new QueryClient();

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Pet Management Software</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h2 className="text-2xl font-bold mb-2">Pet List</h2>
            <PetList />
            <h2 className="text-2xl font-bold mt-4 mb-2">Add New Pet</h2>
            <AddPetForm />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-2">Pet Details</h2>
            <PetDetails />
          </div>
        </div>
      </div>
    </QueryClientProvider>
  );
}
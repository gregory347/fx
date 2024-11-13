import React from 'react';
import { useQuery } from 'react-query';
import { DollarSign } from 'lucide-react';
import { RatesTable } from './components/RatesTable';
import { fetchRates } from './utils/fetchRates';

function App() {
  const { data, isLoading, refetch } = useQuery('rates', fetchRates, {
    refetchInterval: 30000, // Refetch every 30 seconds
  });

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <DollarSign className="h-8 w-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900">Western Union Rates</h1>
          </div>
        </div>
      </header>

      <main className="py-10">
        <RatesTable 
          data={data || []} 
          isLoading={isLoading} 
          onRefresh={() => refetch()} 
        />
      </main>

      <footer className="bg-white border-t">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Western Union Rates. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
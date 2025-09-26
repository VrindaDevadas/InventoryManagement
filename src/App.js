import React from 'react';
import { InventoryProvider } from './contexts/InventoryContext';
import Header from './components/Header';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <InventoryProvider>
      <div className="min-h-screen bg-background-dark text-text-light">
        <Header />
        <Dashboard />
      </div>
    </InventoryProvider>
  );
}

export default App;
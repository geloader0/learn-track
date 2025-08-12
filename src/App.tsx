import React, { useState } from 'react';
import { LoginPage } from './components/LoginPage';
import { Dashboard } from './components/Dashboard';
import { UserProvider, useUser } from './context/UserContext';

function AppContent() {
  const { user } = useUser();

  return (
    <div className="min-h-screen bg-gray-50">
      {!user ? <LoginPage /> : <Dashboard />}
    </div>
  );
}

function App() {
  return (
    <UserProvider>
      <AppContent />
    </UserProvider>
  );
}

export default App;
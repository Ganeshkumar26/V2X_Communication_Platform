import React from 'react';
import { AuthProvider } from './contexts/AuthContext';
import Header from './components/Header';
import Overview from './components/Overview';
import V2VCommunication from './components/V2VCommunication';
import V2ICommunication from './components/V2ICommunication';
import SecurityFramework from './components/SecurityFramework';
import CloudIntegration from './components/CloudIntegration';
import Applications from './components/Applications';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';

function App() {
  return (
    <AuthProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <Dashboard />
        <Overview />
        <V2VCommunication />
        <V2ICommunication />
        <SecurityFramework />
        <CloudIntegration />
        <Applications />
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
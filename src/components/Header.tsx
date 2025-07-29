import React from 'react';
import { Car, Shield, Cloud, Wifi, LogIn, LogOut } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Header: React.FC = () => {
  const { isAuthenticated, logout, openLoginModal } = useAuth(); // use context

  return (
    <header className="bg-gradient-to-r from-blue-800 via-blue-700 to-teal-600 text-white py-6 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="bg-white/20 p-2 rounded-lg">
              <Car className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">V2X Communication Platform</h1>
              <p className="text-blue-100">Secure Cloud-Vehicle Communication Frameworks</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Shield className="h-6 w-6 text-green-300" />
            <Cloud className="h-6 w-6 text-blue-300" />
            <Wifi className="h-6 w-6 text-teal-300" />

            {isAuthenticated ? (
              <button
                onClick={logout}
                className="hover:text-red-300 transition-colors"
                title="Logout"
              >
                <LogOut className="h-6 w-6" />
              </button>
            ) : (
              <button
                onClick={openLoginModal}
                className="hover:text-green-300 transition-colors"
                title="Login"
              >
                <LogIn className="h-6 w-6" />
              </button>
            )}
          </div>
        </div>

        <nav className="flex space-x-6">
          <a href="#overview" className="hover:text-blue-200 transition-colors">Overview</a>
          <a href="#v2v" className="hover:text-blue-200 transition-colors">V2V Communication</a>
          <a href="#v2i" className="hover:text-blue-200 transition-colors">V2I Communication</a>
          <a href="#security" className="hover:text-blue-200 transition-colors">Security</a>
          <a href="#cloud" className="hover:text-blue-200 transition-colors">Cloud Integration</a>
          <a href="#applications" className="hover:text-blue-200 transition-colors">Applications</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;

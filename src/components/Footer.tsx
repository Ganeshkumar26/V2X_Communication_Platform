import React from 'react';
import { Car, Github, Mail, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Car className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">V2X Platform</span>
            </div>
            <p className="text-gray-400">
              Advancing connected mobility through secure, intelligent vehicle communication systems.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Technologies</h4>
            <ul className="space-y-2 text-gray-400">
              <li>V2V Communication</li>
              <li>V2I Integration</li>
              <li>Cloud Services</li>
              <li>Security Frameworks</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Standards</h4>
            <ul className="space-y-2 text-gray-400">
              <li>IEEE 802.11p</li>
              <li>3GPP C-V2X</li>
              <li>SAE J2735</li>
              <li>ETSI ITS-G5</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Globe className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2025 V2X Communication Platform. Educational resource for connected mobility technologies.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
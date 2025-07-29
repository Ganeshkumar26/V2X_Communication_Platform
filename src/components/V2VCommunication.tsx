import React, { useState } from 'react';
import { Car, Radio, AlertTriangle, Clock, Shield } from 'lucide-react';

const V2VCommunication: React.FC = () => {
  const [activeScenario, setActiveScenario] = useState('collision');

  const scenarios = {
    collision: {
      title: "Collision Avoidance",
      description: "Vehicles share real-time position, speed, and trajectory data to prevent accidents",
      icon: AlertTriangle,
      color: "red"
    },
    platooning: {
      title: "Vehicle Platooning",
      description: "Coordinated movement of multiple vehicles to improve fuel efficiency and traffic flow",
      icon: Car,
      color: "blue"
    },
    emergency: {
      title: "Emergency Vehicle Priority",
      description: "Emergency vehicles communicate their approach to clear traffic paths automatically",
      icon: Radio,
      color: "orange"
    }
  };

  const protocols = [
    { name: "DSRC/802.11p", frequency: "5.9 GHz", range: "300-1000m", latency: "<100ms" },
    { name: "C-V2X (LTE)", frequency: "5.9 GHz", range: "1-10km", latency: "<20ms" },
    { name: "5G NR-V2X", frequency: "Multiple", range: "1-100km", latency: "<1ms" }
  ];

  return (
    <section id="v2v" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Vehicle-to-Vehicle Communication</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Direct communication between vehicles enables real-time information sharing for enhanced safety and traffic efficiency
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {Object.entries(scenarios).map(([key, scenario]) => (
            <div 
              key={key}
              className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                activeScenario === key 
                  ? `border-${scenario.color}-500 bg-${scenario.color}-50` 
                  : 'border-gray-200 hover:border-gray-300'
              }`}
              onClick={() => setActiveScenario(key)}
            >
              <div className={`bg-${scenario.color}-100 p-3 rounded-lg w-fit mb-4`}>
                <scenario.icon className={`h-8 w-8 text-${scenario.color}-600`} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{scenario.title}</h3>
              <p className="text-gray-600">{scenario.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Communication Protocols</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {protocols.map((protocol, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-lg font-semibold text-blue-600 mb-3">{protocol.name}</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Frequency:</span>
                    <span className="font-medium">{protocol.frequency}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Range:</span>
                    <span className="font-medium">{protocol.range}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Latency:</span>
                    <span className="font-medium">{protocol.latency}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border-2 border-gray-200 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Message Types & Data Exchange</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Basic Safety Messages (BSM)</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center"><Clock className="h-4 w-4 mr-2 text-blue-500" />Position & velocity data</li>
                <li className="flex items-center"><Clock className="h-4 w-4 mr-2 text-blue-500" />Vehicle size & type</li>
                <li className="flex items-center"><Clock className="h-4 w-4 mr-2 text-blue-500" />Brake status & acceleration</li>
                <li className="flex items-center"><Clock className="h-4 w-4 mr-2 text-blue-500" />Steering wheel angle</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Security Measures</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center"><Shield className="h-4 w-4 mr-2 text-green-500" />Digital certificates & PKI</li>
                <li className="flex items-center"><Shield className="h-4 w-4 mr-2 text-green-500" />Message authentication</li>
                <li className="flex items-center"><Shield className="h-4 w-4 mr-2 text-green-500" />Privacy protection</li>
                <li className="flex items-center"><Shield className="h-4 w-4 mr-2 text-green-500" />Anti-replay mechanisms</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default V2VCommunication;
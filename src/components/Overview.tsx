import React from 'react';
import { Network, Shield, Cloud, Zap } from 'lucide-react';

const Overview: React.FC = () => {
  const features = [
    {
      icon: Network,
      title: "Connected Mobility",
      description: "Seamless vehicle-to-everything (V2X) communication enabling intelligent transportation systems"
    },
    {
      icon: Shield,
      title: "Security First",
      description: "Advanced cryptographic protocols ensuring secure data transmission and vehicle authentication"
    },
    {
      icon: Cloud,
      title: "Cloud Integration",
      description: "Scalable cloud infrastructure supporting real-time processing and data analytics"
    },
    {
      icon: Zap,
      title: "Real-time Processing",
      description: "Ultra-low latency communication for critical safety and traffic optimization applications"
    }
  ];

  return (
    <section id="overview" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Connected Mobility Revolution</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore the future of transportation through secure, intelligent communication frameworks 
            that connect vehicles, infrastructure, and cloud services for safer, more efficient mobility.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-gradient-to-br from-blue-100 to-teal-100 p-3 rounded-lg w-fit mb-4">
                <feature.icon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">V2X Communication Ecosystem</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-600">V2V</span>
              </div>
              <h4 className="text-lg font-semibold mb-2">Vehicle-to-Vehicle</h4>
              <p className="text-gray-600">Direct communication between vehicles for collision avoidance and traffic coordination</p>
            </div>
            <div className="text-center">
              <div className="bg-teal-100 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-teal-600">V2I</span>
              </div>
              <h4 className="text-lg font-semibold mb-2">Vehicle-to-Infrastructure</h4>
              <p className="text-gray-600">Communication with traffic lights, road sensors, and smart infrastructure</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-purple-600">V2C</span>
              </div>
              <h4 className="text-lg font-semibold mb-2">Vehicle-to-Cloud</h4>
              <p className="text-gray-600">Cloud-based services for data analytics, route optimization, and fleet management</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
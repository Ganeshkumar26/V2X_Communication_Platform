import React from 'react';
import { TrafficCone as Traffic, MapPin, Wifi, Database, Activity } from 'lucide-react';

const V2ICommunication: React.FC = () => {
  const infrastructureTypes = [
    {
      icon: Traffic,
      title: "Traffic Signals",
      description: "Smart traffic lights that communicate signal timing and phases",
      examples: ["Signal Phase & Timing (SPaT)", "Map Data (MAP)", "Priority requests"]
    },
    {
      icon: MapPin,
      title: "Road Side Units (RSU)",
      description: "Stationary communication devices providing local area network coverage",
      examples: ["Weather conditions", "Construction zones", "Speed limit updates"]
    },
    {
      icon: Database,
      title: "Traffic Management Centers",
      description: "Centralized systems for traffic monitoring and control",
      examples: ["Traffic flow optimization", "Incident management", "Route guidance"]
    },
    {
      icon: Activity,
      title: "Connected Sensors",
      description: "Various sensors providing real-time environmental data",
      examples: ["Weather sensors", "Air quality monitors", "Parking availability"]
    }
  ];

  const applications = [
    {
      name: "Green Light Optimal Speed Advisory (GLOSA)",
      description: "Provides speed recommendations to reach traffic lights during green phase",
      benefits: ["Reduced fuel consumption", "Lower emissions", "Improved traffic flow"]
    },
    {
      name: "Electronic Toll Collection (ETC)",
      description: "Automated toll payment without stopping at toll booths",
      benefits: ["Reduced congestion", "Faster throughput", "Lower operational costs"]
    },
    {
      name: "Dynamic Route Guidance",
      description: "Real-time route optimization based on current traffic conditions",
      benefits: ["Reduced travel time", "Better traffic distribution", "Lower stress"]
    }
  ];

  return (
    <section id="v2i" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Vehicle-to-Infrastructure Communication</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connecting vehicles with smart infrastructure creates an intelligent transportation ecosystem
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {infrastructureTypes.map((type, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-teal-100 to-blue-100 p-3 rounded-lg w-fit mb-4">
                <type.icon className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{type.title}</h3>
              <p className="text-gray-600 mb-4">{type.description}</p>
              <ul className="space-y-1">
                {type.examples.map((example, idx) => (
                  <li key={idx} className="text-sm text-teal-600 flex items-center">
                    <Wifi className="h-3 w-3 mr-2" />
                    {example}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Applications</h3>
          <div className="space-y-6">
            {applications.map((app, index) => (
              <div key={index} className="border-l-4 border-teal-500 pl-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{app.name}</h4>
                <p className="text-gray-600 mb-3">{app.description}</p>
                <div className="flex flex-wrap gap-2">
                  {app.benefits.map((benefit, idx) => (
                    <span key={idx} className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm">
                      {benefit}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-blue-500 to-teal-500 text-white p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Communication Standards</h3>
            <div className="space-y-4">
              <div className="bg-white/20 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">IEEE 802.11p / DSRC</h4>
                <p className="text-blue-100">Dedicated Short Range Communications for V2I messaging</p>
              </div>
              <div className="bg-white/20 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">3GPP C-V2X</h4>
                <p className="text-blue-100">Cellular V2X using LTE and 5G networks</p>
              </div>
              <div className="bg-white/20 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">SAE J2735</h4>
                <p className="text-blue-100">Standard for V2X message set dictionary</p>
              </div>
            </div>
          </div>

          <div className="bg-white border-2 border-gray-200 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Implementation Challenges</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-orange-500 pl-4">
                <h4 className="font-semibold text-gray-900">Infrastructure Deployment</h4>
                <p className="text-gray-600">Widespread RSU installation and maintenance costs</p>
              </div>
              <div className="border-l-4 border-red-500 pl-4">
                <h4 className="font-semibold text-gray-900">Interoperability</h4>
                <p className="text-gray-600">Ensuring compatibility across different vendors and regions</p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-semibold text-gray-900">Legacy Integration</h4>
                <p className="text-gray-600">Retrofitting existing infrastructure with V2I capabilities</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default V2ICommunication;
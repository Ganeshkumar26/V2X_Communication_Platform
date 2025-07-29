import React from 'react';
import { Cloud, Database, Cpu, Globe, BarChart, Zap } from 'lucide-react';

const CloudIntegration: React.FC = () => {
  const cloudServices = [
    {
      icon: Database,
      title: "Data Storage & Analytics",
      description: "Scalable storage for V2X messages, traffic patterns, and historical data",
      features: ["Real-time data ingestion", "Big data analytics", "Machine learning insights", "Predictive modeling"]
    },
    {
      icon: Cpu,
      title: "Edge Computing",
      description: "Low-latency processing at network edge for critical applications",
      features: ["Ultra-low latency", "Local data processing", "Bandwidth optimization", "Offline capability"]
    },
    {
      icon: Globe,
      title: "Global Connectivity",
      description: "Worldwide vehicle connectivity through cellular and satellite networks",
      features: ["5G integration", "Satellite backup", "Roaming support", "Cross-border operations"]
    },
    {
      icon: BarChart,
      title: "Traffic Management",
      description: "Intelligent traffic optimization using cloud-based algorithms",
      features: ["Dynamic routing", "Congestion prediction", "Signal optimization", "Incident response"]
    }
  ];

  const architectureLayers = [
    {
      name: "Vehicle Layer",
      description: "In-vehicle systems and sensors",
      components: ["OBU (On-Board Unit)", "Sensors & Actuators", "V2X Radio", "ECU Integration"]
    },
    {
      name: "Edge Layer",
      description: "Local processing and communication",
      components: ["RSU (Road Side Unit)", "Edge Servers", "MEC (Multi-access Edge Computing)", "Local Analytics"]
    },
    {
      name: "Network Layer",
      description: "Communication infrastructure",
      components: ["5G/LTE Networks", "Fiber Backbone", "Satellite Links", "Network Slicing"]
    },
    {
      name: "Cloud Layer",
      description: "Centralized processing and services",
      components: ["Cloud Computing", "AI/ML Services", "Data Analytics", "Application Services"]
    }
  ];

  const useCases = [
    {
      title: "Fleet Management",
      description: "Real-time monitoring and optimization of vehicle fleets",
      benefits: ["Route optimization", "Predictive maintenance", "Fuel efficiency", "Driver safety"]
    },
    {
      title: "Smart City Integration",
      description: "Integration with urban infrastructure and services",
      benefits: ["Traffic flow optimization", "Emergency response", "Environmental monitoring", "Urban planning"]
    },
    {
      title: "Autonomous Driving Support",
      description: "Cloud-enhanced decision making for autonomous vehicles",
      benefits: ["HD map updates", "Collective intelligence", "Scenario learning", "Safety validation"]
    }
  ];

  return (
    <section id="cloud" className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Cloud Integration Architecture</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Scalable cloud infrastructure enabling intelligent processing, analytics, and global connectivity for V2X systems
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {cloudServices.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-blue-100 to-teal-100 p-4 rounded-lg w-fit mb-6">
                <service.icon className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <Zap className="h-4 w-4 text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Cloud-V2X Architecture Layers</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {architectureLayers.map((layer, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-b from-blue-500 to-teal-500 text-white p-6 rounded-t-lg">
                  <h4 className="text-lg font-semibold">{layer.name}</h4>
                  <p className="text-blue-100 text-sm mt-2">{layer.description}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-b-lg">
                  <ul className="space-y-2 text-sm">
                    {layer.components.map((component, idx) => (
                      <li key={idx} className="text-gray-700">{component}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {useCases.map((useCase, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
              <h4 className="text-xl font-semibold text-gray-900 mb-3">{useCase.title}</h4>
              <p className="text-gray-600 mb-4">{useCase.description}</p>
              <div className="space-y-2">
                {useCase.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                    <span className="text-gray-700 text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Performance Metrics</h3>
            <p className="text-blue-100">Key performance indicators for cloud-integrated V2X systems</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">&lt;1ms</div>
              <div className="text-blue-200">Edge Latency</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">99.9%</div>
              <div className="text-blue-200">Availability</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">10M+</div>
              <div className="text-blue-200">Messages/sec</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">256-bit</div>
              <div className="text-blue-200">Encryption</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CloudIntegration;
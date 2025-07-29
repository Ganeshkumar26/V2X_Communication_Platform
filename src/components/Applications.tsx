import React from 'react';
import { Car, AlertTriangle, Navigation, Fuel, Clock, Users } from 'lucide-react';

const Applications: React.FC = () => {
  const applications = [
    {
      category: "Safety Applications",
      icon: AlertTriangle,
      color: "red",
      items: [
        {
          name: "Forward Collision Warning",
          description: "Alerts drivers of potential frontal collisions",
          impact: "Up to 40% reduction in rear-end collisions"
        },
        {
          name: "Intersection Movement Assist",
          description: "Prevents collisions at intersections",
          impact: "25% reduction in intersection accidents"
        },
        {
          name: "Emergency Electronic Brake Light",
          description: "Warning for sudden braking ahead",
          impact: "15% reduction in chain collisions"
        }
      ]
    },
    {
      category: "Mobility Applications",
      icon: Navigation,
      color: "blue",
      items: [
        {
          name: "Adaptive Traffic Signal Control",
          description: "Optimizes signal timing based on real-time traffic",
          impact: "20-30% reduction in travel time"
        },
        {
          name: "Dynamic Route Guidance",
          description: "Real-time route optimization",
          impact: "15% improvement in network efficiency"
        },
        {
          name: "Connected Eco-Driving",
          description: "Speed advisories for fuel efficiency",
          impact: "10-15% fuel savings"
        }
      ]
    },
    {
      category: "Environmental Applications",
      icon: Fuel,
      color: "green",
      items: [
        {
          name: "Eco-Signal Priority",
          description: "Priority for eco-friendly vehicles",
          impact: "12% reduction in CO2 emissions"
        },
        {
          name: "Green Wave Coordination",
          description: "Synchronized signals for smooth traffic flow",
          impact: "18% reduction in stops and emissions"
        },
        {
          name: "Low Emission Zones",
          description: "Access control for environmental protection",
          impact: "30% improvement in air quality"
        }
      ]
    }
  ];

  const deploymentStats = [
    { metric: "Global V2X Deployments", value: "150+", description: "Cities with active V2X projects" },
    { metric: "Connected Vehicles", value: "50M+", description: "Vehicles with V2X capability by 2024" },
    { metric: "ROI Timeline", value: "3-5", description: "Years for full return on investment" },
    { metric: "Accident Reduction", value: "40%", description: "Potential reduction in traffic accidents" }
  ];

  const implementationPhases = [
    {
      phase: "Phase 1: Basic Safety",
      timeline: "2024-2026",
      focus: "Core V2V safety applications",
      features: ["Collision warnings", "Emergency braking", "Basic traffic alerts"]
    },
    {
      phase: "Phase 2: Traffic Efficiency",
      timeline: "2026-2028",
      focus: "V2I traffic optimization",
      features: ["Signal optimization", "Route guidance", "Congestion management"]
    },
    {
      phase: "Phase 3: Autonomous Integration",
      timeline: "2028-2030",
      focus: "Full autonomous vehicle support",
      features: ["Cooperative driving", "Platooning", "Smart infrastructure"]
    },
    {
      phase: "Phase 4: Smart Cities",
      timeline: "2030+",
      focus: "Integrated urban mobility",
      features: ["Multi-modal transport", "Environmental optimization", "Predictive systems"]
    }
  ];

  return (
    <section id="applications" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Real-World Applications</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Practical implementations of V2X technology delivering measurable benefits in safety, mobility, and environmental impact
          </p>
        </div>

        <div className="space-y-12 mb-16">
          {applications.map((category, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className={`bg-${category.color}-100 p-3 rounded-lg mr-4`}>
                  <category.icon className={`h-8 w-8 text-${category.color}-600`} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{category.category}</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {category.items.map((item, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">{item.name}</h4>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    <div className={`bg-${category.color}-50 border-l-4 border-${category.color}-500 p-3 rounded`}>
                      <p className={`text-${category.color}-800 font-medium text-sm`}>{item.impact}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Global Deployment Statistics</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {deploymentStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-lg font-semibold mb-1">{stat.metric}</div>
                <div className="text-blue-200 text-sm">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border-2 border-gray-200 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Implementation Roadmap</h3>
          <div className="space-y-6">
            {implementationPhases.map((phase, index) => (
              <div key={index} className="flex flex-col md:flex-row items-start md:items-center p-6 bg-gray-50 rounded-lg">
                <div className="md:w-1/4 mb-4 md:mb-0">
                  <h4 className="text-lg font-semibold text-blue-600">{phase.phase}</h4>
                  <p className="text-gray-600">{phase.timeline}</p>
                </div>
                <div className="md:w-1/2 md:px-6 mb-4 md:mb-0">
                  <p className="text-gray-900 font-medium mb-2">{phase.focus}</p>
                </div>
                <div className="md:w-1/4">
                  <ul className="space-y-1">
                    {phase.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-center">
                        <Clock className="h-3 w-3 mr-2 text-teal-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Applications;
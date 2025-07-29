import React, { useState } from 'react';
import { Shield, Key, Lock, Eye, AlertCircle, CheckCircle } from 'lucide-react';

const SecurityFramework: React.FC = () => {
  const [activeTab, setActiveTab] = useState('authentication');

  const securityLayers = [
    {
      level: "Application Layer",
      description: "End-to-end encryption and application-specific security measures",
      color: "blue"
    },
    {
      level: "Message Layer",
      description: "Digital signatures, message authentication, and integrity verification",
      color: "green"
    },
    {
      level: "Network Layer",
      description: "Secure routing protocols and network-level access control",
      color: "purple"
    },
    {
      level: "Physical Layer",
      description: "Hardware security modules and secure communication channels",
      color: "orange"
    }
  ];

  const threats = [
    { name: "Message Spoofing", severity: "High", description: "Attackers sending false V2X messages" },
    { name: "Eavesdropping", severity: "Medium", description: "Unauthorized interception of communications" },
    { name: "Replay Attacks", severity: "High", description: "Retransmission of valid messages at wrong times" },
    { name: "Jamming", severity: "Medium", description: "Disruption of wireless communications" },
    { name: "Privacy Invasion", severity: "High", description: "Tracking and profiling of vehicle movements" }
  ];

  const tabContent = {
    authentication: {
      title: "Authentication & Authorization",
      icon: Key,
      content: (
        <div className="space-y-6">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h4 className="text-lg font-semibold text-blue-900 mb-3">Public Key Infrastructure (PKI)</h4>
            <ul className="space-y-2 text-blue-800">
              <li>• Certificate Authority (CA) hierarchy for vehicle registration</li>
              <li>• Short-term certificates to protect privacy</li>
              <li>• Certificate revocation for compromised vehicles</li>
              <li>• Bootstrap trust through manufacturer certificates</li>
            </ul>
          </div>
          <div className="bg-green-50 p-6 rounded-lg">
            <h4 className="text-lg font-semibold text-green-900 mb-3">Message Authentication</h4>
            <ul className="space-y-2 text-green-800">
              <li>• ECDSA digital signatures for message integrity</li>
              <li>• Time-stamping to prevent replay attacks</li>
              <li>• Geographic constraints for message validity</li>
              <li>• Cryptographic hash functions for data verification</li>
            </ul>
          </div>
        </div>
      )
    },
    encryption: {
      title: "Encryption & Privacy",
      icon: Lock,
      content: (
        <div className="space-y-6">
          <div className="bg-purple-50 p-6 rounded-lg">
            <h4 className="text-lg font-semibold text-purple-900 mb-3">Data Encryption</h4>
            <ul className="space-y-2 text-purple-800">
              <li>• AES-256 for symmetric encryption of sensitive data</li>
              <li>• Elliptic Curve Cryptography (ECC) for key exchange</li>
              <li>• Perfect Forward Secrecy for session protection</li>
              <li>• Hardware Security Modules (HSM) for key storage</li>
            </ul>
          </div>
          <div className="bg-orange-50 p-6 rounded-lg">
            <h4 className="text-lg font-semibold text-orange-900 mb-3">Privacy Protection</h4>
            <ul className="space-y-2 text-orange-800">
              <li>• Pseudonym certificates to hide vehicle identity</li>
              <li>• Location obfuscation techniques</li>
              <li>• Anonymous credentials for service access</li>
              <li>• K-anonymity for trajectory privacy</li>
            </ul>
          </div>
        </div>
      )
    },
    monitoring: {
      title: "Threat Detection & Monitoring",
      icon: Eye,
      content: (
        <div className="space-y-6">
          <div className="bg-red-50 p-6 rounded-lg">
            <h4 className="text-lg font-semibold text-red-900 mb-3">Intrusion Detection</h4>
            <ul className="space-y-2 text-red-800">
              <li>• Behavioral analysis of V2X message patterns</li>
              <li>• Machine learning for anomaly detection</li>
              <li>• Real-time monitoring of communication channels</li>
              <li>• Collaborative threat intelligence sharing</li>
            </ul>
          </div>
          <div className="bg-teal-50 p-6 rounded-lg">
            <h4 className="text-lg font-semibold text-teal-900 mb-3">Response Mechanisms</h4>
            <ul className="space-y-2 text-teal-800">
              <li>• Automatic certificate revocation for malicious vehicles</li>
              <li>• Quarantine procedures for suspicious behavior</li>
              <li>• Emergency broadcast for security alerts</li>
              <li>• Forensic data collection for incident analysis</li>
            </ul>
          </div>
        </div>
      )
    }
  };

  return (
    <section id="security" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Security Framework</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive security measures ensuring safe, trusted, and private V2X communications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {securityLayers.map((layer, index) => (
            <div key={index} className="text-center">
              <div className={`bg-${layer.color}-100 p-4 rounded-lg mb-4`}>
                <Shield className={`h-8 w-8 text-${layer.color}-600 mx-auto`} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{layer.level}</h3>
              <p className="text-gray-600 text-sm">{layer.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Security Threats & Mitigation</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {threats.map((threat, index) => (
              <div key={index} className="bg-white p-4 rounded-lg border-l-4 border-red-500">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-gray-900">{threat.name}</h4>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    threat.severity === 'High' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {threat.severity}
                  </span>
                </div>
                <p className="text-gray-600 text-sm">{threat.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden">
          <div className="border-b border-gray-200">
            <nav className="flex">
              {Object.entries(tabContent).map(([key, tab]) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`flex items-center px-6 py-4 text-sm font-medium transition-colors ${
                    activeTab === key
                      ? 'border-b-2 border-blue-500 text-blue-600 bg-blue-50'
                      : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <tab.icon className="h-5 w-5 mr-2" />
                  {tab.title}
                </button>
              ))}
            </nav>
          </div>
          <div className="p-8">
            {tabContent[activeTab as keyof typeof tabContent].content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityFramework;
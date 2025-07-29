import React, { useEffect, useState } from 'react';
import { Car, Activity, Wifi, Shield, TrendingUp, MapPin, Clock } from 'lucide-react';
import axios from 'axios';
import { useAuth } from '../contexts/AuthContext';

interface DashboardStats {
  connectedVehicles: number;
  activeConnections: number;
  messagesProcessed: number;
  systemUptime: string;
}

interface Vehicle {
  id: number;
  model: string;
  status: string;
  location: string;
}

const Dashboard: React.FC = () => {
  const { user } = useAuth();
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const [dashboardResponse, vehiclesResponse] = await Promise.all([
          axios.get('/v2x/dashboard'),
          axios.get('/v2x/vehicles')
        ]);

        setStats(dashboardResponse.data.stats);
        setVehicles(vehiclesResponse.data.vehicles);
      } catch (error) {
        console.error('Failed to fetch dashboard data:', error);
      } finally {
        setLoading(false);
      }
    };

    if (user) {
      fetchDashboardData();
    }
  }, [user]);

  if (!user) {
    return (
     <section className="py-16 bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">V2X Dashboard</h2>
        <p className="text-xl text-gray-600 mb-8">Sign in to access your personalized V2X communication dashboard</p>
        <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md mx-auto">
          <Shield className="h-16 w-16 text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Secure Access Required</h3>
          <p className="text-gray-600 mb-6">Please sign in to view real-time V2X system statistics and connected vehicle data.</p>
          <button
          onClick={() => window.location.href = 'https://secure-cloud-vehicle-communication.vercel.app/'}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition"
      >
        Go to Dashboard
      </button>
    </div>
  </div>
</section>

    );
  }

  if (loading) {
    return (
      <section className="py-16 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading dashboard...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Welcome back, {user.name}!</h2>
          <p className="text-xl text-gray-600">Your V2X Communication Dashboard</p>
        </div>

        {stats && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Connected Vehicles</p>
                  <p className="text-3xl font-bold text-blue-600">{stats.connectedVehicles.toLocaleString()}</p>
                </div>
                <Car className="h-12 w-12 text-blue-600" />
              </div>
              <div className="mt-4 flex items-center">
                <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                <span className="text-sm text-green-600">+12% from last month</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Active Connections</p>
                  <p className="text-3xl font-bold text-teal-600">{stats.activeConnections.toLocaleString()}</p>
                </div>
                <Wifi className="h-12 w-12 text-teal-600" />
              </div>
              <div className="mt-4 flex items-center">
                <Activity className="h-4 w-4 text-green-500 mr-1" />
                <span className="text-sm text-green-600">Real-time</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Messages Processed</p>
                  <p className="text-3xl font-bold text-purple-600">{stats.messagesProcessed.toLocaleString()}</p>
                </div>
                <Activity className="h-12 w-12 text-purple-600" />
              </div>
              <div className="mt-4 flex items-center">
                <Clock className="h-4 w-4 text-blue-500 mr-1" />
                <span className="text-sm text-blue-600">Last 24 hours</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">System Uptime</p>
                  <p className="text-3xl font-bold text-green-600">{stats.systemUptime}</p>
                </div>
                <Shield className="h-12 w-12 text-green-600" />
              </div>
              <div className="mt-4 flex items-center">
                <Shield className="h-4 w-4 text-green-500 mr-1" />
                <span className="text-sm text-green-600">Highly reliable</span>
              </div>
            </div>
          </div>
        )}

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Connected Vehicles</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Vehicle</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Status</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Location</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                {vehicles.map((vehicle) => (
                  <tr key={vehicle.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-4">
                      <div className="flex items-center">
                        <Car className="h-5 w-5 text-gray-400 mr-3" />
                        <span className="font-medium text-gray-900">{vehicle.model}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        vehicle.status === 'connected' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {vehicle.status}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 text-gray-400 mr-2" />
                        <span className="text-gray-600">{vehicle.location}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                        View Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
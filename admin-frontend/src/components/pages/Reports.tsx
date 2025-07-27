import React, { useState } from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Download, Calendar, TrendingUp, DollarSign, Users, Car } from 'lucide-react';

const monthlyData = [
  { name: 'Jan', revenue: 45000, rides: 1200, drivers: 45 },
  { name: 'Feb', revenue: 52000, rides: 1400, drivers: 48 },
  { name: 'Mar', revenue: 48000, rides: 1300, drivers: 50 },
  { name: 'Apr', revenue: 61000, rides: 1600, drivers: 55 },
  { name: 'May', revenue: 58000, rides: 1550, drivers: 58 },
  { name: 'Jun', revenue: 67000, rides: 1800, drivers: 62 },
];

const cityData = [
  { name: 'Hitech City', value: 45, color: '#3B82F6' },
  { name: 'Gachibowli', value: 30, color: '#10B981' },
  { name: 'Banjara Hills', value: 15, color: '#F59E0B' },
  { name: 'Secunderabad', value: 10, color: '#EF4444' },
];

export default function Reports() {
  const [timeFilter, setTimeFilter] = useState('monthly');
  const [cityFilter, setCityFilter] = useState('all');

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Reports & Analytics</h1>
          <p className="mt-1 text-sm text-gray-500">Track performance metrics and generate detailed reports.</p>
        </div>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 inline-flex items-center">
          <Download className="h-4 w-4 mr-2" />
          Export CSV
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white shadow rounded-lg p-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex items-center space-x-2">
            <Calendar className="h-5 w-5 text-gray-400" />
            <select
              value={timeFilter}
              onChange={(e) => setTimeFilter(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
              <option value="yearly">Yearly</option>
            </select>
          </div>
          <div className="flex items-center space-x-2">
            <select
              value={cityFilter}
              onChange={(e) => setCityFilter(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="all">All Cities</option>
              <option value="hitech-city">Hitech City</option>
              <option value="gachibowli">Gachibowli</option>
              <option value="banjara-hills">Banjara Hills</option>
            </select>
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white shadow rounded-lg p-6">
          <div className="flex items-center">
            <div className="bg-green-100 p-3 rounded-lg">
              <DollarSign className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-2xl font-bold text-gray-900">₹5,00,000</h3>
              <p className="text-sm text-gray-500">Total Revenue</p>
              <p className="text-xs text-green-600 mt-1">+15.2% from last month</p>
            </div>
          </div>
        </div>
        <div className="bg-white shadow rounded-lg p-6">
          <div className="flex items-center">
            <div className="bg-blue-100 p-3 rounded-lg">
              <TrendingUp className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-2xl font-bold text-gray-900">1,800</h3>
              <p className="text-sm text-gray-500">Total Rides</p>
              <p className="text-xs text-green-600 mt-1">+12.8% from last month</p>
            </div>
          </div>
        </div>
        <div className="bg-white shadow rounded-lg p-6">
          <div className="flex items-center">
            <div className="bg-purple-100 p-3 rounded-lg">
              <Users className="h-6 w-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-2xl font-bold text-gray-900">542</h3>
              <p className="text-sm text-gray-500">Active Users</p>
              <p className="text-xs text-green-600 mt-1">+8.4% from last month</p>
            </div>
          </div>
        </div>
        <div className="bg-white shadow rounded-lg p-6">
          <div className="flex items-center">
            <div className="bg-orange-100 p-3 rounded-lg">
              <Car className="h-6 w-6 text-orange-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-2xl font-bold text-gray-900">62</h3>
              <p className="text-sm text-gray-500">Active Drivers</p>
              <p className="text-xs text-green-600 mt-1">+6.9% from last month</p>
            </div>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Trend */}
        <div className="bg-white shadow rounded-lg p-6">
          <div className="mb-4">
            <h3 className="text-lg font-medium text-gray-900">Revenue Trend</h3>
            <p className="text-sm text-gray-500">Monthly revenue over the past 6 months</p>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip formatter={(value) => [`₹${value?.toLocaleString()}`, 'Revenue']} />
                <Bar dataKey="revenue" fill="#10B981" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Rides Trend */}
        <div className="bg-white shadow rounded-lg p-6">
          <div className="mb-4">
            <h3 className="text-lg font-medium text-gray-900">Rides Trend</h3>
            <p className="text-sm text-gray-500">Number of rides completed monthly</p>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="rides" stroke="#3B82F6" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* City Distribution */}
        <div className="bg-white shadow rounded-lg p-6">
          <div className="mb-4">
            <h3 className="text-lg font-medium text-gray-900">Revenue by Area</h3>
            <p className="text-sm text-gray-500">Distribution of revenue across Hyderabad areas</p>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={cityData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {cityData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Driver Growth */}
        <div className="bg-white shadow rounded-lg p-6">
          <div className="mb-4">
            <h3 className="text-lg font-medium text-gray-900">Driver Growth</h3>
            <p className="text-sm text-gray-500">Number of active drivers over time</p>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="drivers" stroke="#F59E0B" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Performance Table */}
      <div className="bg-white shadow rounded-lg">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">Area Performance Summary</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Area</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Revenue</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rides</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Active Drivers</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Avg Fare</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Growth</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Hitech City</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">₹30,150</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">810</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">28</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">₹185</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">+18.5%</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Gachibowli</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">₹20,100</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">540</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">19</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">₹175</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">+12.3%</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Banjara Hills</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">₹15,050</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">270</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">10</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">₹195</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">+8.1%</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Secunderabad</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">₹12,700</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">180</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">5</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">₹165</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">+8.7%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
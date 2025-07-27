import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { TrendingUp, Users, Car, DollarSign, MapPin } from 'lucide-react';
import { dashboardStats, bookingTrends } from '../../data/mockData';

export default function DashboardOverview() {
  const stats = [
    {
      name: 'Total Bookings',
      value: dashboardStats.totalBookings.toLocaleString(),
      icon: MapPin,
      change: '+12%',
      changeType: 'positive'
    },
    {
      name: 'Active Drivers',
      value: dashboardStats.activeDrivers.toString(),
      icon: Car,
      change: '+5%',
      changeType: 'positive'
    },
    {
      name: 'Revenue Today',
      value: `₹${dashboardStats.revenueToday.toLocaleString()}`,
      icon: DollarSign,
      change: '+18%',
      changeType: 'positive'
    },
    {
      name: 'Ongoing Rides',
      value: dashboardStats.ongoingRides.toString(),
      icon: Users,
      change: '-3%',
      changeType: 'negative'
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
        <p className="mt-1 text-sm text-gray-500">Welcome back! Here's what's happening with VR Shuttle today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="bg-indigo-100 p-3 rounded-lg">
                    <stat.icon className="h-6 w-6 text-indigo-600" />
                  </div>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">{stat.name}</dt>
                    <dd className="flex items-baseline">
                      <div className="text-2xl font-semibold text-gray-900">{stat.value}</div>
                      <div className={`ml-2 flex items-baseline text-sm font-semibold ${
                        stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                      }`}>
                        <TrendingUp className="self-center flex-shrink-0 h-4 w-4" />
                        <span className="ml-1">{stat.change}</span>
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Booking Trends */}
        <div className="bg-white shadow rounded-lg p-6">
          <div className="mb-4">
            <h3 className="text-lg font-medium text-gray-900">Weekly Booking Trends</h3>
            <p className="text-sm text-gray-500">Number of bookings per day this week</p>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={bookingTrends}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="bookings" stroke="#4F46E5" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Revenue Chart */}
        <div className="bg-white shadow rounded-lg p-6">
          <div className="mb-4">
            <h3 className="text-lg font-medium text-gray-900">Daily Revenue</h3>
            <p className="text-sm text-gray-500">Revenue breakdown for this week</p>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={bookingTrends.map(day => ({ ...day, revenue: day.bookings * 23.5 }))}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip formatter={(value) => [`₹${value?.toLocaleString()}`, 'Revenue']} />
                <Bar dataKey="revenue" fill="#10B981" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white shadow rounded-lg">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">Recent Activity</h3>
        </div>
        <div className="p-6">
          <div className="flow-root">
            <ul className="-mb-8">
              <li className="pb-4">
                <div className="relative">
                  <div className="relative flex space-x-3">
                    <div className="bg-green-100 rounded-full p-2">
                      <Users className="h-4 w-4 text-green-600" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div>
                        <p className="text-sm text-gray-500">
                          <span className="font-medium text-gray-900">New user registered</span> - Sarah Wilson
                        </p>
                        <p className="mt-0.5 text-xs text-gray-400">2 minutes ago</p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="pb-4">
                <div className="relative">
                  <div className="relative flex space-x-3">
                    <div className="bg-blue-100 rounded-full p-2">
                      <Car className="h-4 w-4 text-blue-600" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div>
                        <p className="text-sm text-gray-500">
                          <span className="font-medium text-gray-900">Driver approved</span> - Alex Rodriguez
                        </p>
                        <p className="mt-0.5 text-xs text-gray-400">15 minutes ago</p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="relative">
                  <div className="relative flex space-x-3">
                    <div className="bg-yellow-100 rounded-full p-2">
                      <DollarSign className="h-4 w-4 text-yellow-600" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div>
                        <p className="text-sm text-gray-500">
                          <span className="font-medium text-gray-900">Payout processed</span> - ₹1750.50 to Ravi Teja
                        </p>
                        <p className="mt-0.5 text-xs text-gray-400">1 hour ago</p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
import React, { useState } from 'react';
import { Plus, Search, Building2, Users, MapPin, ToggleLeft, ToggleRight } from 'lucide-react';
import { cities } from '../../data/mockData';

export default function CityManagement() {
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);

  const filteredCities = cities.filter(city =>
    city.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">City Management</h1>
          <p className="mt-1 text-sm text-gray-500">Manage serviceable cities and zones for VR Shuttle.</p>
        </div>
        <button
          onClick={() => setShowAddForm(true)}
          className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 inline-flex items-center"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add City
        </button>
      </div>

      {/* Search */}
      <div className="bg-white shadow rounded-lg p-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Search cities..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
      </div>

      {/* Cities Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCities.map((city) => (
          <div key={city.id} className="bg-white shadow rounded-lg overflow-hidden">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <Building2 className="h-8 w-8 text-indigo-600" />
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-gray-900">{city.name}</h3>
                  </div>
                </div>
                <button className="text-gray-400 hover:text-gray-600">
                  {city.status === 'Active' ? (
                    <ToggleRight className="h-6 w-6 text-green-500" />
                  ) : (
                    <ToggleLeft className="h-6 w-6" />
                  )}
                </button>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Zones</span>
                  <span className="text-sm font-medium text-gray-900">{city.zones}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Active Drivers</span>
                  <span className="text-sm font-medium text-gray-900">{city.activeDrivers}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Coverage</span>
                  <span className="text-sm font-medium text-gray-900">{city.coverage}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Status</span>
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                    city.status === 'Active' ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {city.status}
                  </span>
                </div>
              </div>

              <div className="mt-6 flex space-x-2">
                <button className="flex-1 bg-gray-100 text-gray-700 px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-200">
                  Edit
                </button>
                <button className="flex-1 bg-indigo-100 text-indigo-700 px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-200">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add City Form Modal */}
      {showAddForm && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <div className="mt-3">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Add New City</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    City Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Enter city name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Number of Zones
                  </label>
                  <input
                    type="number"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Enter number of zones"
                  />
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="activeCity"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label htmlFor="activeCity" className="ml-2 block text-sm text-gray-900">
                    Activate city immediately
                  </label>
                </div>
                <div className="flex justify-end space-x-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowAddForm(false)}
                    className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
                  >
                    Add City
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Zone Management */}
      <div className="bg-white shadow rounded-lg">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">Zone Management</h3>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-gray-900">Downtown NYC</h4>
                  <p className="text-sm text-gray-500">Zone 1 • Manhattan</p>
                </div>
                <span className="bg-green-100 text-green-800 px-2 py-1 text-xs font-semibold rounded-full">
                  Active
                </span>
              </div>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-gray-900">Brooklyn Heights</h4>
                  <p className="text-sm text-gray-500">Zone 2 • Brooklyn</p>
                </div>
                <span className="bg-green-100 text-green-800 px-2 py-1 text-xs font-semibold rounded-full">
                  Active
                </span>
              </div>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-gray-900">Queens Plaza</h4>
                  <p className="text-sm text-gray-500">Zone 3 • Queens</p>
                </div>
                <span className="bg-red-100 text-red-800 px-2 py-1 text-xs font-semibold rounded-full">
                  Inactive
                </span>
              </div>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-gray-900">Bronx Central</h4>
                  <p className="text-sm text-gray-500">Zone 4 • Bronx</p>
                </div>
                <span className="bg-green-100 text-green-800 px-2 py-1 text-xs font-semibold rounded-full">
                  Active
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
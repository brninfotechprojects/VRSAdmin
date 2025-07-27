import React, { useState } from 'react';
import { Save, DollarSign, Clock, MapPin, TrendingUp } from 'lucide-react';

export default function PricingSettings() {
  const [baseFare, setBaseFare] = useState('2.50');
  const [perKmRate, setPerKmRate] = useState('1.20');
  const [perMinRate, setPerMinRate] = useState('0.25');
  const [surgeEnabled, setSurgeEnabled] = useState(true);
  const [surgeMultiplier, setSurgeMultiplier] = useState('1.5');

  const handleSave = () => {
    // Save pricing settings
    console.log('Saving pricing settings...');
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Pricing Settings</h1>
        <p className="mt-1 text-sm text-gray-500">Configure fare rates and surge pricing for your shuttle service.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Basic Pricing */}
        <div className="bg-white shadow rounded-lg p-6">
          <div className="flex items-center mb-6">
            <div className="bg-green-100 p-2 rounded-lg">
              <DollarSign className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="ml-3 text-lg font-medium text-gray-900">Basic Fare Structure</h3>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Base Fare (₹)
              </label>
              <input
                type="number"
                step="0.01"
                value={baseFare}
                onChange={(e) => setBaseFare(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
              <p className="mt-1 text-sm text-gray-500">Initial fare for every ride</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Per Kilometer Rate (₹)
              </label>
              <input
                type="number"
                step="0.01"
                value={perKmRate}
                onChange={(e) => setPerKmRate(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
              <p className="mt-1 text-sm text-gray-500">Rate charged per kilometer traveled</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Per Minute Rate (₹)
              </label>
              <input
                type="number"
                step="0.01"
                value={perMinRate}
                onChange={(e) => setPerMinRate(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
              <p className="mt-1 text-sm text-gray-500">Rate charged per minute of ride time</p>
            </div>
          </div>
        </div>

        {/* Surge Pricing */}
        <div className="bg-white shadow rounded-lg p-6">
          <div className="flex items-center mb-6">
            <div className="bg-orange-100 p-2 rounded-lg">
              <TrendingUp className="h-6 w-6 text-orange-600" />
            </div>
            <h3 className="ml-3 text-lg font-medium text-gray-900">Surge Pricing</h3>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-medium text-gray-900">Enable Surge Pricing</h4>
                <p className="text-sm text-gray-500">Automatically increase fares during high demand</p>
              </div>
              <button
                type="button"
                className={`${
                  surgeEnabled ? 'bg-indigo-600' : 'bg-gray-200'
                } relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
                onClick={() => setSurgeEnabled(!surgeEnabled)}
              >
                <span
                  className={`${
                    surgeEnabled ? 'translate-x-5' : 'translate-x-0'
                  } pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200`}
                />
              </button>
            </div>

            {surgeEnabled && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Surge Multiplier
                </label>
                <input
                  type="number"
                  step="0.1"
                  value={surgeMultiplier}
                  onChange={(e) => setSurgeMultiplier(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
                <p className="mt-1 text-sm text-gray-500">
                  Multiply base rates by this factor during surge periods
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Current Rates Preview */}
      <div className="bg-white shadow rounded-lg p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Current Rate Structure</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center">
              <DollarSign className="h-5 w-5 text-gray-400 mr-2" />
              <span className="text-sm font-medium text-gray-700">Base Fare</span>
            </div>
            <p className="text-2xl font-bold text-gray-900">₹{baseFare}</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center">
              <MapPin className="h-5 w-5 text-gray-400 mr-2" />
              <span className="text-sm font-medium text-gray-700">Per KM</span>
            </div>
            <p className="text-2xl font-bold text-gray-900">₹{perKmRate}</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center">
              <Clock className="h-5 w-5 text-gray-400 mr-2" />
              <span className="text-sm font-medium text-gray-700">Per Minute</span>
            </div>
            <p className="text-2xl font-bold text-gray-900">₹{perMinRate}</p>
          </div>
        </div>
      </div>

      {/* Example Fare Calculation */}
      <div className="bg-white shadow rounded-lg p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Example Fare Calculation</h3>
        <div className="bg-blue-50 p-4 rounded-lg">
          <h4 className="font-medium text-blue-900 mb-2">Sample 10km, 20-minute ride:</h4>
          <div className="space-y-1 text-sm text-blue-800">
            <div className="flex justify-between">
              <span>Base fare:</span>
              <span>₹{baseFare}</span>
            </div>
            <div className="flex justify-between">
              <span>Distance (10km × ₹{perKmRate}):</span>
              <span>₹{(10 * parseFloat(perKmRate)).toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Time (20min × ₹{perMinRate}):</span>
              <span>₹{(20 * parseFloat(perMinRate)).toFixed(2)}</span>
            </div>
            <hr className="my-2 border-blue-200" />
            <div className="flex justify-between font-semibold">
              <span>Total:</span>
              <span>₹{(parseFloat(baseFare) + 10 * parseFloat(perKmRate) + 20 * parseFloat(perMinRate)).toFixed(2)}</span>
            </div>
            {surgeEnabled && (
              <div className="flex justify-between text-orange-600">
                <span>During surge (×{surgeMultiplier}):</span>
                <span>₹{((parseFloat(baseFare) + 10 * parseFloat(perKmRate) + 20 * parseFloat(perMinRate)) * parseFloat(surgeMultiplier)).toFixed(2)}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end">
        <button
          onClick={handleSave}
          className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 inline-flex items-center"
        >
          <Save className="h-4 w-4 mr-2" />
          Save Pricing Settings
        </button>
      </div>
    </div>
  );
}
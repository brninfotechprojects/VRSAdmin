import React, { useState } from 'react';
import { Send, Users, Car, Bell, CheckCircle } from 'lucide-react';

export default function Notifications() {
  const [audience, setAudience] = useState('all');
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    // Send notification logic
    console.log('Sending notification...', { audience, title, message });
    // Reset form
    setTitle('');
    setMessage('');
  };

  const recentNotifications = [
    {
      id: 1,
      title: 'New Surge Pricing Active',
      message: 'Surge pricing is now active in downtown area due to high demand.',
      audience: 'drivers',
      date: '2024-02-15 10:30 AM',
      status: 'sent'
    },
    {
      id: 2,
      title: 'Weekend Bonus Available',
      message: 'Complete 10 rides this weekend and earn a $50 bonus!',
      audience: 'drivers',
      date: '2024-02-14 2:15 PM',
      status: 'sent'
    },
    {
      id: 3,
      title: 'Service Update',
      message: 'We are expanding our service to new areas. Check out the updated coverage map.',
      audience: 'customers',
      date: '2024-02-13 9:00 AM',
      status: 'sent'
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Push Notifications</h1>
        <p className="mt-1 text-sm text-gray-500">Send targeted notifications to drivers and customers.</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white shadow rounded-lg p-6">
          <div className="flex items-center">
            <div className="bg-blue-100 p-3 rounded-lg">
              <Bell className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-2xl font-bold text-gray-900">24</h3>
              <p className="text-sm text-gray-500">Notifications Sent Today</p>
            </div>
          </div>
        </div>
        <div className="bg-white shadow rounded-lg p-6">
          <div className="flex items-center">
            <div className="bg-green-100 p-3 rounded-lg">
              <CheckCircle className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-2xl font-bold text-gray-900">87%</h3>
              <p className="text-sm text-gray-500">Delivery Rate</p>
            </div>
          </div>
        </div>
        <div className="bg-white shadow rounded-lg p-6">
          <div className="flex items-center">
            <div className="bg-purple-100 p-3 rounded-lg">
              <Users className="h-6 w-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-2xl font-bold text-gray-900">1,234</h3>
              <p className="text-sm text-gray-500">Active Recipients</p>
            </div>
          </div>
        </div>
      </div>

      {/* Send Notification Form */}
      <div className="bg-white shadow rounded-lg p-6">
        <div className="flex items-center mb-6">
          <div className="bg-indigo-100 p-2 rounded-lg">
            <Send className="h-6 w-6 text-indigo-600" />
          </div>
          <h3 className="ml-3 text-lg font-medium text-gray-900">Send New Notification</h3>
        </div>

        <form onSubmit={handleSend} className="space-y-6">
          {/* Audience Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Select Audience
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="relative">
                <input
                  type="radio"
                  id="all"
                  name="audience"
                  value="all"
                  checked={audience === 'all'}
                  onChange={(e) => setAudience(e.target.value)}
                  className="sr-only"
                />
                <label
                  htmlFor="all"
                  className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                    audience === 'all'
                      ? 'border-indigo-500 bg-indigo-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <Users className="h-6 w-6 text-gray-400 mr-3" />
                  <div>
                    <div className="font-medium text-gray-900">All Users</div>
                    <div className="text-sm text-gray-500">Drivers + Customers</div>
                  </div>
                </label>
              </div>

              <div className="relative">
                <input
                  type="radio"
                  id="drivers"
                  name="audience"
                  value="drivers"
                  checked={audience === 'drivers'}
                  onChange={(e) => setAudience(e.target.value)}
                  className="sr-only"
                />
                <label
                  htmlFor="drivers"
                  className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                    audience === 'drivers'
                      ? 'border-indigo-500 bg-indigo-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <Car className="h-6 w-6 text-gray-400 mr-3" />
                  <div>
                    <div className="font-medium text-gray-900">Drivers Only</div>
                    <div className="text-sm text-gray-500">62 active drivers</div>
                  </div>
                </label>
              </div>

              <div className="relative">
                <input
                  type="radio"
                  id="customers"
                  name="audience"
                  value="customers"
                  checked={audience === 'customers'}
                  onChange={(e) => setAudience(e.target.value)}
                  className="sr-only"
                />
                <label
                  htmlFor="customers"
                  className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                    audience === 'customers'
                      ? 'border-indigo-500 bg-indigo-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <Users className="h-6 w-6 text-gray-400 mr-3" />
                  <div>
                    <div className="font-medium text-gray-900">Customers Only</div>
                    <div className="text-sm text-gray-500">542 active users</div>
                  </div>
                </label>
              </div>
            </div>
          </div>

          {/* Message Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Notification Title
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter notification title..."
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message Body
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your message..."
                required
              />
            </div>
          </div>

          {/* Preview */}
          {(title || message) && (
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="text-sm font-medium text-gray-900 mb-2">Preview</h4>
              <div className="bg-white p-4 rounded-lg border border-gray-200 max-w-sm">
                <div className="flex items-center mb-2">
                  <div className="bg-indigo-100 p-1 rounded">
                    <Bell className="h-4 w-4 text-indigo-600" />
                  </div>
                  <span className="ml-2 text-xs font-medium text-gray-900">VR Shuttle</span>
                </div>
                {title && <div className="text-sm font-medium text-gray-900 mb-1">{title}</div>}
                {message && <div className="text-sm text-gray-600">{message}</div>}
              </div>
            </div>
          )}

          {/* Send Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={!title || !message}
              className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center"
            >
              <Send className="h-4 w-4 mr-2" />
              Send Notification
            </button>
          </div>
        </form>
      </div>

      {/* Recent Notifications */}
      <div className="bg-white shadow rounded-lg">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">Recent Notifications</h3>
        </div>
        <div className="divide-y divide-gray-200">
          {recentNotifications.map((notification) => (
            <div key={notification.id} className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <h4 className="text-sm font-medium text-gray-900">{notification.title}</h4>
                    <span className={`ml-3 inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      notification.audience === 'drivers' ? 'bg-blue-100 text-blue-800' :
                      notification.audience === 'customers' ? 'bg-green-100 text-green-800' :
                      'bg-purple-100 text-purple-800'
                    }`}>
                      {notification.audience === 'drivers' ? 'Drivers' :
                       notification.audience === 'customers' ? 'Customers' : 'All Users'}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{notification.message}</p>
                  <p className="text-xs text-gray-400">{notification.date}</p>
                </div>
                <div className="flex items-center ml-4">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="ml-1 text-sm text-green-600">Sent</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
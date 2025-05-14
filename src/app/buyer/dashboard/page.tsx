'use client';

import { useState } from 'react';
// import Link from 'next/link';

export default function BuyerDashboard() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="min-h-screen pt-16 flex bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-green-700 text-white flex flex-col p-4 space-y-4 fixed top-16 left-0 bottom-0 z-40">
        <h2 className="text-2xl font-bold mb-4">Buyer Panel</h2>
        <button
          className={`text-left px-4 py-2 rounded-md hover:bg-green-800 transition ${
            activeTab === 'home' ? 'bg-green-800' : ''
          }`}
          onClick={() => setActiveTab('home')}
        >
          Dashboard Home
        </button>
        <button
          className={`text-left px-4 py-2 rounded-md hover:bg-green-800 transition ${
            activeTab === 'orders' ? 'bg-green-800' : ''
          }`}
          onClick={() => setActiveTab('orders')}
        >
          My Orders
        </button>
        <button
          className={`text-left px-4 py-2 rounded-md hover:bg-green-800 transition ${
            activeTab === 'products' ? 'bg-green-800' : ''
          }`}
          onClick={() => setActiveTab('products')}
        >
          Browse Products
        </button>
        <button
          className={`text-left px-4 py-2 rounded-md hover:bg-green-800 transition ${
            activeTab === 'profile' ? 'bg-green-800' : ''
          }`}
          onClick={() => setActiveTab('profile')}
        >
          My Profile
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64 p-8">
        {activeTab === 'home' && (
          <div>
            <h1 className="text-3xl font-bold mb-4">Welcome, Buyer!</h1>
            <p className="text-gray-700">This is your dashboard overview.</p>
          </div>
        )}
        {activeTab === 'orders' && (
          <div>
            <h1 className="text-3xl font-bold mb-4">Your Orders</h1>
            <p className="text-gray-700">You haven’t placed any orders yet.</p>
          </div>
        )}
        {activeTab === 'products' && (
          <div>
            <h1 className="text-3xl font-bold mb-4">Available Products</h1>
            <p className="text-gray-700">Browse and select products here.</p>
          </div>
        )}
        {activeTab === 'profile' && (
          <div>
            <h1 className="text-3xl font-bold mb-4">Your Profile</h1>
            <p className="text-gray-700">Update your buyer details here.</p>
          </div>
        )}
      </main>
    </div>
  );
}

"use client";

import { useState } from 'react';

export default function SettlementDashboard() {
  const [volume, setVolume] = useState('12450');

  return (
    <div className="max-w-3xl mx-auto mt-10 p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Stablecoin Settlement Layer</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 border rounded-2xl">
          <h2 className="font-semibold mb-4">24h Settlement Volume</h2>
          <div className="text-4xl font-bold text-green-600">${volume}</div>
          <p className="text-sm text-gray-500 mt-1">USDC settled on Arc</p>
        </div>

        <div className="p-6 border rounded-2xl">
          <h2 className="font-semibold mb-4">Quick Actions</h2>
          <button className="w-full bg-blue-600 text-white py-3 rounded-2xl mb-3">Initiate Settlement</button>
          <button className="w-full border py-3 rounded-2xl">View History</button>
        </div>
      </div>
    </div>
  );
}
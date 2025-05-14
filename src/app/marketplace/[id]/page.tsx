'use client'

import React, { useMemo } from 'react';
import { useParams } from 'next/navigation';
import { ShareIcon } from '@heroicons/react/outline';

interface Product {
  id: number;
  name: string;
  quantity: number; // in MT
  country: string;
  price: number; // USD per ton
  image: string;
}

// Dummy products - in real app fetch based on ID
const dummyProducts: Product[] = Array.from({ length: 16 }, (_, i) => ({
  id: i + 1,
  name: ['PET','HDPE','PVC','LDPE','PP','PS','ABS','PC'][i % 8] + ' Plastic',
  country: ['USA','Germany','China','Brazil','India','Canada','Australia','Japan'][i % 8],
  quantity: Math.floor(Math.random() * 91) + 10,
  price: Math.floor(Math.random() * 901) + 100,
  image: 'product.jpg',
}));

export default function ProductPage() {
  const params = useParams();
  const id = Number(params.id);

  const product = useMemo(
    () => dummyProducts.find(p => p.id === id) || null,
    [id]
  );

  if (!product) {
    return <p className="p-6 text-center text-gray-600">Product not found.</p>;
  }

  const listedOn = 'May 1, 2025';
  const totalLoads = Math.ceil(product.quantity / 10);
  const remainingLoads = totalLoads - 2; // example consumed loads
  const description = 'High-quality recycled plastic suitable for industrial applications.';

  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';

  return (
    <div className="w-full h-screen p-6 bg-white shadow-lg rounded-lg">
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src="/product.jpg"
          alt={product.name}
          className="w-full md:w-1/2 h-auto object-cover rounded-lg"
        />
        <div className="flex-1 space-y-4">
          <h1 className="text-3xl font-bold text-[#1F4529]">{product.name}</h1>
          <p className="text-sm text-gray-600">Listing ID: <span className="font-medium">#{product.id}</span></p>
          <p className="text-sm text-gray-600">Listed on: <span className="font-medium">{listedOn}</span></p>
          <p className="text-base text-gray-800">{description}</p>

          <div className="grid grid-cols-2 gap-4 text-gray-700">
            <p><span className="font-semibold">Quantity:</span> {product.quantity} MT</p>
            <p><span className="font-semibold">Country:</span> {product.country}</p>
            <p><span className="font-semibold">Price:</span> ${product.price} / T</p>
            <p><span className="font-semibold">Total Loads:</span> {totalLoads}</p>
            <p><span className="font-semibold">Remaining Loads:</span> {remainingLoads}</p>
          </div>

          <div className="mt-6 flex items-center space-x-4">
            <ShareIcon className="w-6 h-6 text-[#47663B]" />
            <span className="text-[#47663B] font-medium">Share this listing:</span>
            <div className="flex space-x-3">
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Facebook
              </a>
              <a
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                Twitter
              </a>
              <a
                href={`mailto:?subject=Check out this listing&body=${encodeURIComponent(currentUrl)}`}
                className="text-red-600 hover:underline"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
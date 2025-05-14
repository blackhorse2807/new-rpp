'use client'

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { SearchIcon, FilterIcon } from '@heroicons/react/outline';

interface Product {
  id: number;
  name: string;
  quantity: number; // in MT
  country: string;
  price: number; // USD per ton
  image: string;
}

export default function MarketplacePage() {
  // State for products and filters
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState('');
  const [filterName, setFilterName] = useState('');
  const [filterCountry, setFilterCountry] = useState('');
  const [filterMinQty, setFilterMinQty] = useState('');
  const [filterMaxPrice, setFilterMaxPrice] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  // Generate dummy data on client side only
  useEffect(() => {
    const plastics: string[] = ['PCR rPP', 'PIR rPP'];
    const countries = ['UK', 'Germany', 'Spain', 'Italy', 'France', 'Portugal'];
    const images = ['/product1.jpg', '/product2.jpg', '/product3.jpg', '/product4.jpg'];
    const data: Product[] = Array.from({ length: 7 }, (_, i) => {
      const name = `${plastics[i % plastics.length]} Plastic`;
      const country = countries[i % countries.length];
      const quantity = Math.floor(Math.random() * 91) + 10;
      const price = Math.floor(Math.random() * 901) + 100;
      const image = images[Math.floor(Math.random() * images.length)];
      return { id: i + 1, name, quantity, country, price, image};
    });
    setProducts(data);
  }, []);

  // Filtering logic
  const filtered = useMemo(() => {
    return products.filter(p =>
      p.name.toLowerCase().includes(search.toLowerCase()) &&
      (filterName ? p.name === filterName : true) &&
      (filterCountry ? p.country === filterCountry : true) &&
      (filterMinQty ? p.quantity >= Number(filterMinQty) : true) &&
      (filterMaxPrice ? p.price <= Number(filterMaxPrice) : true)
    );
  }, [products, search, filterName, filterCountry, filterMinQty, filterMaxPrice]);

  const uniqueNames = Array.from(new Set(products.map(p => p.name)));
  const uniqueCountries = Array.from(new Set(products.map(p => p.country)));

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 pt-16">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-[#1B442E] to-[#2C5A3F] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4 tracking-tight">Marketplace</h1>
          <p className="text-lg text-gray-200 max-w-3xl leading-relaxed">
            Browse our curated selection of high-quality recycled plastics from verified suppliers worldwide.
          </p>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            {/* Search Bar */}
            <div className="flex-1 w-full relative">
              <input
                type="text"
                placeholder="Search plastics..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full px-6 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#1B442E] focus:border-transparent outline-none text-gray-700 placeholder-gray-400"
              />
              <SearchIcon className="w-5 h-5 text-gray-400 absolute right-6 top-1/2 transform -translate-y-1/2" />
            </div>
            {/* Filter Toggle Button */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-6 py-4 bg-gradient-to-r from-[#1B442E] to-[#2C5A3F] text-white rounded-xl hover:from-[#153420] hover:to-[#254A33] transition-all duration-300 shadow-md"
            >
              <FilterIcon className="w-5 h-5" />
              <span className="font-medium">Filters</span>
            </button>
          </div>

          {/* Filters Panel */}
          {showFilters && (
            <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6 pt-6 border-t border-gray-100">
              <select
                value={filterName}
                onChange={e => setFilterName(e.target.value)}
                className="px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#1B442E] focus:border-transparent outline-none text-gray-700 bg-gray-50"
              >
                <option value="">All Types</option>
                {uniqueNames.map(n => <option key={n} value={n}>{n}</option>)}
              </select>
              <select
                value={filterCountry}
                onChange={e => setFilterCountry(e.target.value)}
                className="px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#1B442E] focus:border-transparent outline-none text-gray-700 bg-gray-50"
              >
                <option value="">All Countries</option>
                {uniqueCountries.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
              <input
                type="number"
                placeholder="Min Quantity (MT)"
                value={filterMinQty}
                onChange={e => setFilterMinQty(e.target.value)}
                className="px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#1B442E] focus:border-transparent outline-none text-gray-700 bg-gray-50"
              />
              <input
                type="number"
                placeholder="Max Price (USD/T)"
                value={filterMaxPrice}
                onChange={e => setFilterMaxPrice(e.target.value)}
                className="px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#1B442E] focus:border-transparent outline-none text-gray-700 bg-gray-50"
              />
            </div>
          )}
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map(p => (
            <Link
              key={p.id}
              href={`/products/${p.id}`}
              className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 transform hover:-translate-y-1"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <img
                  src={p.image}
                  alt={p.name}
                  className="h-56 w-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/95 px-4 py-2 rounded-full text-sm font-semibold text-[#1B442E] shadow-lg border border-[#1B442E]/10">
                  ${p.price}/T
                </div>
              </div>
              <div className="p-8 bg-gradient-to-br from-white to-gray-50">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-[#1B442E] transition-colors">{p.name}</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500 font-medium">Quantity Available:</span>
                    <span className="font-semibold text-[#1B442E]">{p.quantity} MT</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500 font-medium">Origin:</span>
                    <span className="font-semibold text-[#1B442E]">{p.country}</span>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <button className="w-full text-center py-3 px-6 bg-gradient-to-r from-[#1B442E] to-[#2C5A3F] text-white rounded-lg font-medium hover:from-[#153420] hover:to-[#254A33] transform transition-all duration-300 shadow-md group-hover:shadow-lg">
                    View Details
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 bg-white rounded-xl shadow-md border border-gray-100">
            <p className="text-gray-600 text-lg">No products found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}
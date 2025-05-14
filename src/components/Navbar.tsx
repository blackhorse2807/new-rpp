'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { FaUser } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [dashboardOpen, setDashboardOpen] = useState(false);
  
  const { user, isAuthenticated, logout } = useAuth();
  
  // Create refs for dropdown containers
  const companyRef = useRef(null);
  const dashboardRef = useRef(null);
  
  // Create timers for delayed closing
  const companyTimerRef = useRef<NodeJS.Timeout | null>(null);
  const dashboardTimerRef = useRef<NodeJS.Timeout | null>(null);
  
  // Cleanup timers when component unmounts
  useEffect(() => {
    return () => {
      if (companyTimerRef.current) clearTimeout(companyTimerRef.current);
      if (dashboardTimerRef.current) clearTimeout(dashboardTimerRef.current);
    };
  }, []);
  
  // Handle company dropdown
  const handleCompanyMouseEnter = () => {
    if (companyTimerRef.current) clearTimeout(companyTimerRef.current);
    setCompanyOpen(true);
  };
  
  const handleCompanyMouseLeave = () => {
    companyTimerRef.current = setTimeout(() => {
      setCompanyOpen(false);
    }, 300); // 300ms delay before closing
  };
  
  // Handle dashboard dropdown
  const handleDashboardMouseEnter = () => {
    if (dashboardTimerRef.current) clearTimeout(dashboardTimerRef.current);
    setDashboardOpen(true);
  };
  
  const handleDashboardMouseLeave = () => {
    dashboardTimerRef.current = setTimeout(() => {
      setDashboardOpen(false);
    }, 300); // 300ms delay before closing
  };

  const handleLogout = () => {
    logout();
    window.location.href = '/'; // Redirect to the landing page
  };

  return (
    <nav className="bg-white text-green-700 shadow-md fixed top-0 left-0 right-0 z-50 border-b border-gray-100 py-0">
      <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 transition-transform duration-300 hover:scale-105">
          <img src="/logo1.png" alt="VelebitGreen Logo" className="h-20 w-auto" />
        </Link>

        {/* Hamburger for mobile */}
        <button
          className="md:hidden text-green-700 focus:outline-none text-2xl hover:text-green-800 transition-colors duration-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Center Menu */}
        <div
          className={`flex-col md:flex md:flex-row md:items-center gap-4 md:gap-8 transition-all duration-300 ease-in-out ${
            isOpen ? 'flex mt-4 absolute top-16 left-0 right-0 bg-white p-4 shadow-md z-50' : 'hidden md:flex'
          } mx-auto font-lora tracking-wide`}
        >
          {/* Company Dropdown */}
          <div
            ref={companyRef}
            className="relative group"
            onMouseEnter={handleCompanyMouseEnter}
            onMouseLeave={handleCompanyMouseLeave}
          >
            <button className="px-3 py-2 text-lg font-medium uppercase relative group transition-all duration-300 ease-in-out flex items-center hover:text-green-800">
              Company
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className={`h-4 w-4 ml-1 transition-transform duration-300 ${companyOpen ? 'rotate-180' : ''}`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-700 transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
            </button>
            {companyOpen && (
              <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-md shadow-lg py-2 z-50 animate-fadeIn border border-gray-100 transform transition-all duration-300 ease-in-out">
                {[
                  { href: '/aboutus', label: 'About Us' },
                  { href: '/team', label: 'Meet the Team' },
                  { href: '/contact', label: 'Contact Us' },
                ].map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className="block px-4 py-2 hover:bg-green-50 hover:text-green-800 transition-all duration-300 relative group"
                  >
                    <span className="relative z-10">{label}</span>
                    <span className="absolute inset-0 bg-gradient-to-r from-green-50 to-green-100 transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Dashboard Dropdown - Only shown when user is authenticated */}
          {isAuthenticated && (
            <div
              ref={dashboardRef}
              className="relative group"
              onMouseEnter={handleDashboardMouseEnter}
              onMouseLeave={handleDashboardMouseLeave}
            >
              <button className="px-3 py-2 text-lg font-medium uppercase relative group transition-all duration-300 ease-in-out flex items-center hover:text-green-800">
                Dashboard
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className={`h-4 w-4 ml-1 transition-transform duration-300 ${dashboardOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-700 transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
              </button>
              {dashboardOpen && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-md shadow-lg py-2 z-50 animate-fadeIn border border-gray-100 transform transition-all duration-300 ease-in-out">
                  {[
                    { href: '/seller/dashboard', label: 'Seller Dashboard' },
                    { href: '/buyer/dashboard', label: 'Buyer Dashboard' },
                  ].map(({ href, label }) => (
                    <Link
                      key={href}
                      href={href}
                      className="block px-4 py-2 hover:bg-green-50 hover:text-green-800 transition-all duration-300 relative group"
                    >
                      <span className="relative z-10">{label}</span>
                      <span className="absolute inset-0 bg-gradient-to-r from-green-50 to-green-100 transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Marketplace Link */}
          <Link
            href="/marketplace"
            className="px-3 py-2 text-lg font-medium uppercase relative group transition-all duration-300 ease-in-out hover:text-green-800"
          >
            Market Place
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-700 transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
          </Link>
        </div>

        {/* Right Corner - Login / Signup or User Info */}
        <div className="hidden md:block">
          {isAuthenticated ? (
            <div className="flex items-center space-x-3">
              <span className="text-green-700">{user?.email}</span>
              <button
                onClick={handleLogout}
                className="bg-red-600 text-white font-medium px-5 py-2 rounded-md hover:bg-red-700 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-md"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link 
              href="/login" 
              className="text-green-700 hover:text-green-800 transition-all duration-300 ease-in-out transform hover:scale-110"
            >
              <FaUser className="w-6 h-6" />
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
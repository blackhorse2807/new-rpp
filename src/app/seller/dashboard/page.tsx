"use client";

import { useState, ChangeEvent, FormEvent } from "react";

interface Product {
  name: string;
  description: string;
  category: string;
  price: string;
  currency: string;
  quantity: string;
  notes: string;
  files: File[];
  status: string;
}

export default function SellerDashboard() {
  const [activeTab, setActiveTab] = useState<
    | "dashboard"
    | "request"
    | "products"
    | "analytics"
    | "messages"
    | "settings"
    | "logout"
  >("request");

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    price: "",
    currency: "INR",
    quantity: "",
    notes: "",
    files: [] as File[],
  });

  const [products, setProducts] = useState<Product[]>([]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setProducts([...products, { ...formData, status: "Pending" }]);
    setFormData({
      name: "",
      description: "",
      category: "",
      price: "",
      currency: "INR",
      quantity: "",
      notes: "",
      files: [],
    });
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setFormData({ ...formData, files });
  };

  return (
    <div className="min-h-screen pt-16 flex bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-green-800 text-white h-full fixed top-16 left-0 shadow-lg">
        <div className="p-6 font-bold text-xl border-b border-green-600">
          Seller Panel
        </div>
        <ul className="space-y-2 p-4 text-sm">
          <li
            onClick={() => setActiveTab("dashboard")}
            className={`cursor-pointer p-2 rounded hover:bg-green-600 ${activeTab === "dashboard" ? "bg-green-700" : ""}`}
          >
            Dashboard Home
          </li>
          <li
            onClick={() => setActiveTab("request")}
            className={`cursor-pointer p-2 rounded hover:bg-green-600 ${activeTab === "request" ? "bg-green-700" : ""}`}
          >
            Request to Sell
          </li>
          <li
            onClick={() => setActiveTab("products")}
            className={`cursor-pointer p-2 rounded hover:bg-green-600 ${activeTab === "products" ? "bg-green-700" : ""}`}
          >
            Your Products
          </li>
          <li
            onClick={() => setActiveTab("analytics")}
            className={`cursor-pointer p-2 rounded hover:bg-green-600 ${activeTab === "analytics" ? "bg-green-700" : ""}`}
          >
            Sales Analytics
          </li>
          <li
            onClick={() => setActiveTab("messages")}
            className={`cursor-pointer p-2 rounded hover:bg-green-600 ${activeTab === "messages" ? "bg-green-700" : ""}`}
          >
            Messages from Admin
          </li>
          <li
            onClick={() => setActiveTab("settings")}
            className={`cursor-pointer p-2 rounded hover:bg-green-600 ${activeTab === "settings" ? "bg-green-700" : ""}`}
          >
            Settings
          </li>
          <li
            onClick={() => setActiveTab("logout")}
            className="cursor-pointer p-2 rounded hover:bg-red-600 text-red-300"
          >
            Logout
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="ml-64 w-full p-8">
        <h1 className="text-3xl font-semibold mb-6">Welcome, Seller</h1>

        {activeTab === "request" && (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">
              Request to List a Product
            </h2>
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <input
                type="text"
                name="name"
                placeholder="Product Name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="p-2 border rounded"
              />

              <div className="flex gap-2">
                <input
                  type="number"
                  name="price"
                  placeholder="Price"
                  value={formData.price}
                  onChange={handleInputChange}
                  required
                  className="p-2 border rounded w-2/3"
                />
                <select
                  name="currency"
                  value={formData.currency}
                  onChange={handleInputChange}
                  className="p-2 border rounded w-1/3"
                >
                  <option value="INR">INR</option>
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                  <option value="JPY">JPY</option>
                  <option value="GBP">GBP</option>
                </select>
              </div>

              <input
                type="number"
                name="quantity"
                placeholder="Quantity"
                value={formData.quantity}
                onChange={handleInputChange}
                required
                className="p-2 border rounded"
              />

              <select
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                required
                className="p-2 border rounded"
              >
                <option value="">Select Category</option>
                <option value="Plastic Bottles">Plastic Bottles</option>
                <option value="Plastic Bags">Plastic Bags</option>
                <option value="Recycled Pellets">Recycled Pellets</option>
                <option value="Plastic Sheets">Plastic Sheets</option>
                <option value="Furniture/Decor">Furniture/Decor</option>
                <option value="Other">Other</option>
              </select>

              <textarea
                name="description"
                placeholder="Product Description"
                value={formData.description}
                onChange={handleInputChange}
                className="p-2 border rounded col-span-1 md:col-span-2"
              />

              <textarea
                name="notes"
                placeholder="Additional Notes (optional)"
                value={formData.notes}
                onChange={handleInputChange}
                className="p-2 border rounded col-span-1 md:col-span-2"
              />

              <div className="col-span-1 md:col-span-2">
                <label className="block mb-1 font-medium">
                  Upload Product Images (max 5)
                </label>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleFileChange}
                  className="p-2 border rounded w-contain bg-gray-300 cursor-pointer"
                />
                <div className="mt-2 text-sm text-gray-600">
                  {formData.files.length > 0 && (
                    <ul className="list-disc list-inside">
                      {formData.files.map((file, idx) => (
                        <li key={idx}>{file.name}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

              <button
                type="submit"
                className="bg-green-700 text-white py-2 px-4 rounded hover:bg-green-800 col-span-1 md:col-span-2 transition"
              >
                Submit for Approval
              </button>
            </form>
          </div>
        )}

        {activeTab === "products" && (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">
              Your Submitted Products
            </h2>
            {products.length === 0 ? (
              <p className="text-gray-600">
                You haven&apos;t submitted any products yet.
              </p>
            ) : (
              <table className="w-full table-auto border">
                <thead>
                  <tr className="bg-green-100 text-left">
                    <th className="p-2 border">Name</th>
                    <th className="p-2 border">Category</th>
                    <th className="p-2 border">Price</th>
                    <th className="p-2 border">Currency</th>
                    <th className="p-2 border">Quantity</th>
                    <th className="p-2 border">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((p, idx) => (
                    <tr key={idx}>
                      <td className="p-2 border">{p.name}</td>
                      <td className="p-2 border">{p.category}</td>
                      <td className="p-2 border">{p.price}</td>
                      <td className="p-2 border">{p.currency}</td>
                      <td className="p-2 border">{p.quantity}</td>
                      <td className="p-2 border">{p.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        )}

        {activeTab === "analytics" && (
          <div className="bg-white p-6 rounded-lg shadow-md text-gray-600">
            <h2 className="text-xl font-semibold mb-4">Sales Analytics</h2>
            <p>
              This feature will be added soon to show your sales, revenue, and
              performance.
            </p>
          </div>
        )}

        {activeTab === "messages" && (
          <div className="bg-white p-6 rounded-lg shadow-md text-gray-600">
            <h2 className="text-xl font-semibold mb-4">Messages from Admin</h2>
            <p>
              No messages yet. We&apos;ll notify you if there&apos;s any update about your
              products.
            </p>
          </div>
        )}

        {activeTab === "settings" && (
          <div className="bg-white p-6 rounded-lg shadow-md text-gray-600">
            <h2 className="text-xl font-semibold mb-4">Settings</h2>
            <p>
              Settings page coming soon (profile, email, password updates etc.)
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

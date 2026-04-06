'use client'

import { useEffect, useState } from "react";

export default function ClientData() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function getUsers() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
          throw new Error("Something went wrong");
        }

        const userData = await response.json();
        setData(userData);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    }

    getUsers();
  }, []);

  if (loading) {
    return (
      <div className="min-h-[calc(100vh-80px)] bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Loading User Data...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-[calc(100vh-80px)] bg-red-50 flex items-center justify-center">
        <div className="text-center bg-white rounded-lg shadow-lg p-8 max-w-md">
          <p className="text-red-600 text-lg font-semibold">Error: {error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-80px)] bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Users</h1>
          <p className="text-lg text-gray-600">Browse user directory and information</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.map((user) => (
            <div key={user.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border-t-4 border-blue-600">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{user.name}</h3>
              <p className="text-gray-600 mb-3"><span className="font-semibold">Email:</span> {user.email}</p>
              <p className="text-gray-600 mb-3"><span className="font-semibold">Phone:</span> {user.phone}</p>
              <p className="text-gray-600"><span className="font-semibold">Company:</span> {user.company?.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
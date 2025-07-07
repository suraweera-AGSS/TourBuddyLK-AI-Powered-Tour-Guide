import React, { useEffect, useState } from 'react';
import { getPackages, deletePackage } from '../../api/packageApi';

export default function PackageList() {
  const [packagesData, setPackagesData] = useState([]);

  useEffect(() => {
    loadPackages();
  }, []);

  const loadPackages = async () => {
    const res = await getPackages();
    setPackagesData(res.data);
  };

  const handleDelete = async (id) => {
    await deletePackage(id);
    loadPackages();
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-center">Our Packages</h2>

      <div className="grid gap-6 md:grid-cols-2">
        {packagesData.map((pkg) => (
          <div
            key={pkg._id}
            className="bg-white shadow rounded overflow-hidden flex flex-col md:flex-row"
          >
            {/* Image */}
            <img
              src={pkg.imageUrl || 'https://via.placeholder.com/300x200'}
              alt={pkg.name}
              className="w-full md:w-1/2 object-cover"
            />

            {/* Content */}
            <div className="flex-1 p-4 flex flex-col">
              <h3 className="text-xl font-semibold mb-2">{pkg.name}</h3>

              {/* Duration + Price */}
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-gray-700 text-white text-sm px-3 py-1 rounded">
                  {pkg.duration}
                </span>
                <span className="bg-yellow-400 text-black text-sm px-3 py-1 rounded">
                  Price on Request
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-600 flex-1">
                {pkg.description ||
                  'Experience the best of Sri Lanka with our exclusive tour package.'}
              </p>

              {/* Actions */}
              <div className="flex gap-2 mt-4 flex-wrap">
                <button className="px-4 py-2 bg-slate-600 text-white rounded hover:bg-slate-700">
                  Find Out More
                </button>
                <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                  Inquire Now
                </button>
                <button
                  className="ml-auto px-3 py-1 bg-red-500 text-white text-xs rounded hover:bg-red-600"
                  onClick={() => handleDelete(pkg._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

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
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Packages</h2>
      <ul className="space-y-2">
        {packagesData.map(pkg => (
          <li key={pkg._id} className="flex flex-col md:flex-row justify-between p-2 bg-gray-100 rounded">
            <span>
              {pkg.name} — ${pkg.price} — {pkg.duration}
            </span>
            <button
              className="bg-red-500 text-white px-2 py-1 rounded mt-2 md:mt-0"
              onClick={() => handleDelete(pkg._id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

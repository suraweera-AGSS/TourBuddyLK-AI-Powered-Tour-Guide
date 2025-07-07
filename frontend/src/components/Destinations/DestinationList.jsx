import React, { useEffect, useState } from 'react';
import { getDestinations, deleteDestination } from '../../api/destinationApi';

export default function DestinationList() {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    loadDestinations();
  }, []);

  const loadDestinations = async () => {
    const res = await getDestinations();
    setDestinations(res.data);
  };

  const handleDelete = async (id) => {
    await deleteDestination(id);
    loadDestinations();
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Destinations</h2>
      <ul className="space-y-2">
        {destinations.map(dest => (
          <li key={dest._id} className="flex justify-between p-2 bg-gray-100 rounded">
            <span>{dest.name} — {dest.district}</span>
            <button
              className="bg-red-500 text-white px-2 py-1 rounded"
              onClick={() => handleDelete(dest._id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

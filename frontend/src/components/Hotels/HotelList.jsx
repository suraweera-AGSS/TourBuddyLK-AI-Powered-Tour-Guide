import React, { useEffect, useState } from 'react';
import { getHotels, deleteHotel } from '../../api/hotelApi';

export default function HotelList() {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    loadHotels();
  }, []);

  const loadHotels = async () => {
    const res = await getHotels();
    setHotels(res.data);
  };

  const handleDelete = async (id) => {
    await deleteHotel(id);
    loadHotels();
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Hotccccccccccccccels</h2>
      <ul className="space-y-2">
        {hotels.map(hotel => (
          <li key={hotel._id} className="flex justify-between p-2 bg-gray-100 rounded">
            <span>
              {hotel.name} — ${hotel.price} — Rating: {hotel.rating || 'N/A'}
            </span>
            <button
              className="bg-red-500 text-white px-2 py-1 rounded"
              onClick={() => handleDelete(hotel._id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

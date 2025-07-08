import React, { useEffect, useState } from 'react';
import { getHotels, deleteHotel } from '../../api/hotelApi';
import './HotelList.css';

export default function HotelList() {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const loadHotels = async () => {
      try {
        const res = await getHotels();
        console.log("Hotels API Response:", res.data);
        setHotels(res.data);
      } catch (err) {
        console.error("Failed to load hotels", err);
      }
    };
    loadHotels();
  }, []);

  const handleDelete = async (id) => {
    await deleteHotel(id);
    setHotels((prev) => prev.filter((h) => h._id !== id));
  };

  return (
    <div className="hotel-page">
      <h2 className="hotel-title">Hotels</h2>

      {hotels.length === 0 ? (
        <p className="no-hotels">No hotels found</p>
      ) : (
        <div className="hotel-grid">
          {hotels.map((hotel) => (
            <div key={hotel._id} className="hotel-card">
              <img
                src={
                  hotel.imageUrl ||
                  // TODO: replace with a proper default hotel image
                  'https://via.placeholder.com/300x200?text=Hotel+Image'
                }
                alt={hotel.name}
                className="hotel-image"
              />
              <h3 className="hotel-name">{hotel.name}</h3>
              <p className="hotel-price">Price: ${hotel.price}</p>
              <p className="hotel-rating">Rating: {hotel.rating || 'N/A'}</p>
              <p className="hotel-features">
                Features: {hotel.features?.join(', ') || 'N/A'}
              </p>

              <button
                className="hotel-delete"
                onClick={() => handleDelete(hotel._id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

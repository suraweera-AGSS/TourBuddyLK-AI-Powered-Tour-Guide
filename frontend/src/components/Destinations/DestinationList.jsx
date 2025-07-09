import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getDestinations } from '../../api/destinationApi';
import './DestinationList.css';

export default function DestinationList() {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    const loadDestinations = async () => {
      try {
        const res = await getDestinations();
        console.log("API Response:", res.data);
        setDestinations(res.data);
      } catch (err) {
        console.error("Failed to load destinations", err);
      }
    };
    loadDestinations();
  }, []);

  return (
    <div className="destination-page">
      <div className="destination-header">
        <h2 className="destination-title">Destinations</h2>

        
      </div>

      {destinations.length === 0 ? (
        <p className="no-destinations">No destinations found</p>
      ) : (
        <div className="destination-grid">
          {destinations.map(dest => (
            <div key={dest._id} className="destination-card">
              {/* Image */}
              <img
                src={
                  dest.imageUrl ||
                  'https://via.placeholder.com/300x200?text=No+Image'
                }
                alt={dest.name}
                className="destination-image"
              />

              {/* Content */}
              <h3 className="destination-name">{dest.name}</h3>
              <p className="destination-description">{dest.description}</p>
              <p className="destination-location">
                {dest.district}, {dest.province}
              </p>
              <p className="destination-meta">
                <strong>Best Time:</strong> {dest.bestTimeToVisit}
              </p>
              <p className="destination-meta">
                <strong>Activities:</strong> {dest.activities?.join(', ') || 'N/A'}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

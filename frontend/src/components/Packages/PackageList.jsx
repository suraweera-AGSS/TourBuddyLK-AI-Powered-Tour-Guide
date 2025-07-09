import React, { useEffect, useState } from 'react';
import { getPackages, deletePackage } from '../../api/packageApi';
import './PackageList.css';

export default function PackageList() {
  const [packagesData, setPackagesData] = useState([]);

  useEffect(() => {
    const loadPackages = async () => {
      try {
        const res = await getPackages();
        console.log("Packages API Response:", res.data);
        setPackagesData(res.data);
      } catch (err) {
        console.error("Failed to load packages", err);
      }
    };
    loadPackages();
  }, []);

  const handleDelete = async (id) => {
    await deletePackage(id);
    setPackagesData((prev) => prev.filter((p) => p._id !== id));
  };

  return (
    <div className="package-page">
      <h2 className="package-title">Our Packages</h2>

      {packagesData.length === 0 ? (
        <p className="no-packages">No packages found</p>
      ) : (
        <div className="package-grid">
          {packagesData.map((pkg) => (
            <div key={pkg._id} className="package-card">
              <img
                src={
                  pkg.imageUrl || 'https://via.placeholder.com/300x200?text=Package+Image'
                }
                alt={pkg.name}
                className="package-image"
              />

              <div className="package-content">
                <h3 className="package-name">{pkg.name}</h3>

                <div className="package-meta">
                  <span className="package-duration">{pkg.duration}</span>
                  <span className="package-price">Price on Request</span>
                </div>

                <p className="package-description">
                  {pkg.description || 'Experience the best of Sri Lanka with our exclusive tour package.'}
                </p>

                <div className="package-actions">
                  <button className="package-button find">Find Out More</button>
                  <button className="package-button inquire">Inquire Now</button>
                  <button
                    className="package-button delete"
                    onClick={() => handleDelete(pkg._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

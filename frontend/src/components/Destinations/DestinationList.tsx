import React from 'react';

const DestinationList: React.FC = () => {
  return (
    <div className="mt-4">
      <h2 className="text-2xl font-semibold mb-4">Popular Destinations</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Destination cards will be mapped here */}
        <div className="border p-4 rounded-lg shadow">
          <h3 className="text-xl font-medium">Destination Name</h3>
          <p className="text-gray-600">Description will go here</p>
        </div>
      </div>
    </div>
  );
};

export default DestinationList;

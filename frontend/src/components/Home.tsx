import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">
        Welcome to Tour Buddy 🌴
      </h1>
      <p className="home-description">
        Discover the best destinations, hotels, and tour packages in Sri Lanka. Plan your trip easily with our smart and interactive platform.
      </p>

      <div className="home-buttons">
        <Link
          to="/destinations"
          className="home-button destinations"
        >
          Explore Destinations
        </Link>
        <Link
          to="/hotels"
          className="px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Find Hotels
        </Link>
        <Link
          to="/packages"
          className="px-6 py-3 bg-purple-600 text-white rounded hover:bg-purple-700"
        >
          View Packages
        </Link>
      </div>
    </div>
  );
};

export default Home;

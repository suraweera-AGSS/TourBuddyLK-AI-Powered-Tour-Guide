import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-hero">
      <div className="home-overlay">
        <div className="home-content animate-fade-in">
          <h1 className="home-title">
            Welcome to Tour Buddy 🌴
          </h1>

          <p className="home-description">
            Discover the best destinations, hotels, and tour packages in Sri Lanka.  
            Plan your trip easily with our smart and interactive platform.
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
              className="home-button hotels"
            >
              Find Hotels
            </Link>

            <Link
              to="/packages"
              className="home-button packages"
            >
              View Packages
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

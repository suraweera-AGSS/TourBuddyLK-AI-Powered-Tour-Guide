import { Link } from 'react-router-dom';
import './NavBar.css';


const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="hover:text-yellow-300">Home</Link>
      <Link to="/destinations" className="hover:text-yellow-300">Destinations</Link>
      <Link to="/hotels" className="hover:text-yellow-300">Hotels</Link>
      <Link to="/packages" className="hover:text-yellow-300">Packages</Link>
    </nav>
  );
};

export default Navbar;

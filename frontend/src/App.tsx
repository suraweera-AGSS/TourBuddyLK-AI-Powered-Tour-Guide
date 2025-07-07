import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DestinationList from './components/Destinations/DestinationList';
import Navbar from './components/NavBar/NavBar';
import Home from './components/Home';
import HotelList from './components/Hotels/HotelList';
import PackageList from './components/Packages/PackageList';
import './App.css'; // Assuming you have some global styles
//import './Home.css'; // Importing Home specific styles
import './components/NavBar/NavBar.css'; // Importing Navbar specific styles

function App() {
  return (
    <BrowserRouter>
      <Navbar />
       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<DestinationList />} />
          <Route path="/hotels" element={<HotelList />} />
          <Route path='/packages' element={<PackageList />} />
        </Routes>
      
    </BrowserRouter>
  );
}

export default App;

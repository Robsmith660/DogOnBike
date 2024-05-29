import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ContractAddressAndChart from './components/ContractAddressAndChart';
import About from './components/About';
import Buy from './components/Buy';
import Social from './components/Social';
import GalleryPage from './components/GalleryPage'; // Import the GalleryPage component
import '@fontsource/poetsen-one'; // Defaults to weight 400
import './index.css';  // Importing global styles

// Import the background image
import backgroundImage from './Images/giphy.webp'; // Adjust the path to ensure it's correct

function App() {
  return (
    <div className="relative">
      {/* Background */}
      <div className="background-img-container">
        <img src={backgroundImage} alt="Background" className="background-img" />
      </div>
      <Header />
      <Hero />
      <About />
      <GalleryPage /> {/* Insert the GalleryPage component here */}
      <Buy />
      <ContractAddressAndChart />
      <Social />
    </div>
  );
}

export default App;

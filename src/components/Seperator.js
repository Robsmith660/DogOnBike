import React from 'react';
import backgroundImage from '../Images/NFT1.png'; // Adjust the path as needed

function Separator() {
  return (
    <div
      className="relative w-full h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        border: '10px solid rgba(255, 255, 255, 0.3)',
        animation: 'zoomIn 1.5s ease-in-out',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"></div>
    </div>
  );
}

export default Separator;


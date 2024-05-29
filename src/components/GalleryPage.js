import React from 'react';
import Gallery from './Gallery'; // Adjust the import path as needed

// Import local images
import image1 from '../Images/NFT1.png';
import image2 from '../Images/NFT1.png';
import image3 from '../Images/NFT1.png';

function GalleryPage() {
  // Array of imported images
  const images = [image1, image2, image3];

  return (
    <div className="py-8">
      <h1 className="text-center text-2xl font-bold mb-6">Dog's On Bikes</h1>
      <Gallery images={images} />
    </div>
  );
}

export default GalleryPage;

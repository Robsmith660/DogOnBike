import React, { useState } from 'react';

function Gallery({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="flex justify-center items-center">
        <img src={images[currentIndex]} alt={`Gallery ${currentIndex}`} className="w-full h-auto rounded-lg shadow-lg" />
      </div>
      <div className="absolute inset-0 flex justify-between items-center">
        <button onClick={handlePrev} className="p-2 bg-gray-800 text-white hover:bg-gray-600 rounded-full">
          &#10094; {/* Left Arrow */}
        </button>
        <button onClick={handleNext} className="p-2 bg-gray-800 text-white hover:bg-gray-600 rounded-full">
          &#10095; {/* Right Arrow */}
        </button>
      </div>
      <div className="flex justify-center mt-4 space-x-2">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index}`}
            className={`w-16 h-16 rounded-lg cursor-pointer ${currentIndex === index ? 'border-4 border-blue-500' : ''}`}
            onClick={() => handleThumbnailClick(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Gallery;

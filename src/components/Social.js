import React from 'react';
import telegramIcon from '../Images/telegram.webp'; // Import the Instagram icon
import xIcon from '../Images/x.png'; // Import the Facebook icon

const Social = () => {
  return (
    <section id="social" className="py-20 text-center ">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-black mb-4">Follow Us</h2>
        <p className="text-lg text-black mb-4">Stay connected and follow us on social media.</p>
        <div className="flex justify-center space-x-4">
          
          {/* Telegram Icon */}
          <a href="https://t.me/+tc9vPr-YJW1hYjJk" target="_blank" rel="noopener noreferrer">
            <img src={telegramIcon} alt="telegram" className="w-12 h-12 hover:opacity-80 transition-opacity duration-300"/>
          </a>
          {/* x Icon */}
          <a href="https://x.com/DogOnBikeSol" target="_blank" rel="noopener noreferrer">
            <img src={xIcon} alt="x" className="w-12 h-12 hover:opacity-80 transition-opacity duration-300"/>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Social;

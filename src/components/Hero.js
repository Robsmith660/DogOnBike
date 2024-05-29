import React from 'react';
import heroImage from '../Images/NFT1.png'; // Import your hero image

const Hero = () => {
  return (
    <section id="About" className="py-20 text-white text-center relative overflow-hidden">
      
      {/* Hero Image */}
      <div className="container mx-auto px-4 z-10 relative">
        <img src={heroImage} alt="Hero" className="mx-auto mb-8 h-64 w-64 object-cover rounded-full shadow-xl" />

        {/* Hero Title */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-wider">
          Join the revolution of joy and freedom with Dog On Bike Coin!
        </h1>

        {/* Hero Description */}
        <p className="text-xl md:text-2xl mb-6 font-light leading-relaxed">
          Dog On Bike Coin isn't just another cryptocurrency; it's a movement. Embrace the spirit of adventure and fun as we pedal our way to unique blockchain solutions. Invest in your joy, support exciting projects, and become part of a community that celebrates every moment with a tail wag and a bike bell ding.
          <span role="img" aria-label="biker">🚴‍♂️</span> Why wait? Hop on and let's ride to the moon! <span role="img" aria-label="moon">🌕</span>
        </p>

        {/* Action Buttons */}
        <div className="flex justify-center space-x-4">
          <Button link="#" label="Dexscreener" colorScheme="purple-pink"/>
          <Button link="#" label="Dextools" colorScheme="blue-green"/>
        </div>
      </div>
    </section>
  );
};

const Button = ({ link, label, colorScheme }) => (
  <a href={link} className={`inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium rounded-lg text-white bg-gradient-to-br from-${colorScheme.split('-')[0]}-500 to-${colorScheme.split('-')[1]}-500 hover:from-${colorScheme.split('-')[0]}-600 hover:to-${colorScheme.split('-')[1]}-600 focus:outline-none focus:ring-4 focus:ring-${colorScheme.split('-')[0]}-200 dark:focus:ring-${colorScheme.split('-')[0]}-800 transition-all duration-150 ease-in-out`}>
    <span className="px-5 py-2.5 transition-all duration-75 bg-white dark:bg-gray-900 rounded-md hover:bg-opacity-0">
      {label}
    </span>
  </a>
);

export default Hero;

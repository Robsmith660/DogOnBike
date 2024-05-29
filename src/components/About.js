import React from 'react';
import heroImage from '../Images/1.png'; // Import your hero image
import heroImage2 from '../Images/2.png'; // Import your hero image
import heroImage3 from '../Images/3.png'; // Import your hero image


const About = () => {
  return (
    <section id="about" className="py-20  text-white text-center">
      <div className="container mx-auto px-4">
        {/* Title */}
        <h2 className="text-4xl md:text-6xl font-bold mb-8 shadow-lg p-3 rounded-lg bg-opacity-80 bg-black inline-block">
          About Dog on Bike Coin
        </h2>

        {/* Description Cards */}
        <div className="space-y-6 max-w-4xl mx-auto">
          {/* Each block includes an icon */}
          <div className="flex items-start space-x-4 bg-white p-4 rounded-lg shadow-lg text-gray-800">
            <img src={heroImage} alt="Inspiration Icon" className="h-12 w-12" /> {/* Example icon */}
            <div>
              <h3 className="text-2xl font-bold mb-2">Inspired by Joy and Freedom</h3>
              <p>
                Dog on Bike Coin was inspired by the playful spirit of a dog freely riding a bike, capturing our core values of freedom, joy, and the pursuit of happiness through simple pleasures.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4 bg-white p-4 rounded-lg shadow-lg text-gray-800">
            <img src={heroImage2} alt="Community Icon" className="h-12 w-12" /> {/* Example icon */}
            <div>
              <h3 className="text-2xl font-bold mb-2">Building Strong Community Bonds</h3>
              <p>
                As a cryptocurrency, Dog on  Bike Coin aims to foster a strong community bond among its holders, supporting causes that enhance the quality of life for dogs and their owners.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4 bg-white p-4 rounded-lg shadow-lg text-gray-800">
            <img src={heroImage3} alt="Mission Icon" className="h-12 w-12" /> {/* Example icon */}
            <div>
              <h3 className="text-2xl font-bold mb-2">A Mission for Betterment</h3>
              <p>
                Join us as we embark on this exciting journey, making the world a better place for both humans and their furry friends, one coin at a time, with a portion of all transaction fees going towards animal welfare initiatives.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-10">
          <a href="#buy" className="inline-block bg-black hover:bg-opacity-80 text-white font-bold py-3 px-6 rounded-lg transition duration-300 shadow-lg">
            Join the Movement
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;

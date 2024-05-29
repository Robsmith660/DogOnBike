import React from 'react';
import heroImage from '../Images/wallet-icon.png'; // Import your hero image
import heroImage2 from '../Images/money.png'; // Import your hero image
import heroImage3 from '../Images/exchange-icon.png'; // Import your hero image
import heroImage4 from '../Images/trade.png'; // Import your hero image

const Buy = () => {
  return (
    <section id="buy" className="py-20  text-white text-center">
      <div className="container mx-auto px-4">
        {/* Title */}
        <h2 className="text-4xl md:text-6xl font-bold mb-8 shadow-lg p-3 rounded-lg bg-opacity-80 bg-black inline-block">
          How to Ride with Dog on Bike Coin
        </h2>

        {/* Instructions with Icons */}
        <div className="max-w-4xl mx-auto text-left space-y-6">
          {/* Each step includes an icon */}
          <div className="flex items-start space-x-4 bg-white p-4 rounded-lg shadow-lg text-gray-800">
            <img src={heroImage} alt="Wallet Icon" className="h-12 w-12" /> {/* Example icon */}
            <div>
              <h3 className="text-2xl font-bold mb-2">Step 1: Set Up a Crypto Wallet</h3>
              <p>
                If you don’t already have a crypto wallet, choose one that supports the blockchain on which Dog on Bike Coin is based (e.g., MetaMask for Ethereum). Download and install your chosen wallet.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4 bg-white p-4 rounded-lg shadow-lg text-gray-800">
            <img src={heroImage2} alt="Funds Icon" className="h-12 w-12" /> {/* Example icon */}
            <div>
              <h3 className="text-2xl font-bold mb-2">Step 2: Add Funds to Your Wallet</h3>
              <p>
                Purchase cryptocurrency (like ETH) through your wallet or transfer it from another wallet or exchange. This crypto will be used to buy Dog on Bike Coin.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4 bg-white p-4 rounded-lg shadow-lg text-gray-800">
            <img src={heroImage3} alt="Exchange Icon" className="h-12 w-12" /> {/* Example icon */}
            <div>
              <h3 className="text-2xl font-bold mb-2">Step 3: Connect to a Decentralized Exchange (DEX)</h3>
              <p>
                Visit a DEX where Dog on Bike Coin is available. Connect your wallet to the DEX using the wallet’s connect feature.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4 bg-white p-4 rounded-lg shadow-lg text-gray-800">
            <img src={heroImage4} alt="Trade Icon" className="h-12 w-12" /> {/* Example icon */}
            <div>
              <h3 className="text-2xl font-bold mb-2">Step 4: Trade Cryptocurrency for Dog on Bike Coin</h3>
              <p>
                Once connected, you can trade your existing crypto (e.g., ETH) for Dog on Bike Coin. Follow the exchange's instructions to complete the transaction.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-10">
          <a  className="inline-block bg-black hover:bg-opacity-80 text-white font-bold py-3 px-6 rounded-lg transition duration-300 shadow-lg">
            Start Your Adventure
          </a>
        </div>
      </div>
    </section>
  );
};

export default Buy;

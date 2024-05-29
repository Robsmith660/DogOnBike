import React from 'react';

function ContractAddressAndChart() {
  return (
    <section className="py-20 text-center text-sparkling-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Contract Address & Chart</h2>
        
        <div className="mb-8">
          <h3 className="text-2xl mb-2">Contract Address</h3>
          <p className="text-lg font-mono break-all">0x1234567890abcdef1234567890abcdef12345678</p>
        </div>
        
        <div className="bg-yellow-300 p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl mb-4 text-black">Price Chart</h3>
          <p className="text-lg text-black">Coming Soon...</p>
        </div>
      </div>
    </section>
  );
}

export default ContractAddressAndChart;

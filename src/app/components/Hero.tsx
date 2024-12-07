import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="bg-gray-900 text-white text-center py-20">
      <div className="container mx-auto">
        <h1 className="text-4xl font-extrabold mb-4">Affordable Fragrances for Everyone</h1>
        <p className="text-lg mb-8">
          Explore our exclusive collection of perfumes for men, women, and unisex.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-blue-500 px-6 py-2 rounded hover:bg-blue-600">
            Shop Now
          </button>
          <button className="bg-gray-700 px-6 py-2 rounded hover:bg-gray-600">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

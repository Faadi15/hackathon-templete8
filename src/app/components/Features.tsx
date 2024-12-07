import React from "react";
import { FaRocket, FaLightbulb, FaHeart } from "react-icons/fa";

interface Feature {
  id: number;
  icon: React.ReactElement;
  title: string;
  description: string;
}

const features: Feature[] = [
  { id: 1, icon: <FaRocket className="text-blue-500 text-4xl mx-auto mb-4" />, title: "Men's Perfumes", description: "Bold, Fresh, and Timeless Fragrances for Him." },
  { id: 2, icon: <FaLightbulb className="text-yellow-500 text-4xl mx-auto mb-4" />, title: "Women's Perfumes", description: "Elegant Scents That Turn Heads." },
  { id: 3, icon: <FaHeart className="text-red-500 text-4xl mx-auto mb-4" />, title: "Unisex Perfumes", description: "Universal Scents for Every Personality." },
];

const Features: React.FC = () => {
  return (
    <section id="features" className="bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map(({ id, icon, title, description }) => (
            <div key={id} className="p-6 bg-white shadow rounded">
              {icon}
              <h3 className="text-xl font-bold">{title}</h3>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

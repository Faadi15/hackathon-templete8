import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto text-center">
        <p className="mb-4">&copy; 2024 Siddiqui Fragrances. All Rights Reserved.</p>
        <div className="flex justify-center space-x-4">
          <a href="#" className="hover:text-gray-400"><FaFacebook /></a>
          <a href="#" className="hover:text-gray-400"><FaTwitter /></a>
          <a href="#" className="hover:text-gray-400"><FaInstagram /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

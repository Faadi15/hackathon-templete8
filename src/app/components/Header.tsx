import Link from "next/link";
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-xl font-bold">Siddiqui Fragrances</h1>
        <nav className="flex space-x-4">
          <Link href="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link href="#features" className="hover:text-gray-300">Products </Link>
          <Link href="#about" className="hover:text-gray-300">About </Link>
          <Link href="#contact" className="hover:text-gray-300">Contact </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

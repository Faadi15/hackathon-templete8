import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="bg-white py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="mb-4">
            At Siddiqui Fragrances, we believe that everyone deserves access to high-quality perfumes. Our mission is to provide luxurious fragrances at affordable prices.
          </p>
          <p>
            We offer a range of scents inspired by French and Arabic impressions, crafted to suit every personality.
          </p>
        </div>
        <div className="md:w-1/2">
          <img
            src="/about-image.jpg"
            alt="About Us"
            className="rounded shadow"
          />
        </div>
      </div>
    </section>
  );
};

export default About;

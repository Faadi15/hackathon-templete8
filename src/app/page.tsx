import Head from "next/head";
import React from "react";

import Hero from "./components/Hero";
import Features from "./components/Features";
import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Siddiqui Fragrances</title>
        <meta
          name="description"
          content="Affordable perfumes for everyone - Siddiqui Fragrances."/>
      </Head>
      <Header />
      <Hero />
      <Features />
      <About />
      <Footer />
    </div>
  );
};

export default Home;

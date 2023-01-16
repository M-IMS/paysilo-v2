import React from "react";
import CompanyDevider from "./components/CompanyDevider";
import FAQ from "./components/FAQ";
import Features from "./components/Features";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Price from "./components/Price";
import Review from "./components/Review";

function App() {
  return (
    <div className="max-w-[1440px] m-auto">
      <NavBar />
      <Hero />
      <CompanyDevider />
      <Features />
      <Review />
      <Price />
      <FAQ />
    </div>
  );
}

export default App;

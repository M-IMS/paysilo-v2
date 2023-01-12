import React from "react";
import CompanyDevider from "./components/CompanyDevider";
import Features from "./components/Features";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <CompanyDevider />
      <Features />
    </div>
  );
}

export default App;

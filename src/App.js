import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import PropertyDetails from "./pages/PropertyDetails";
import { HouseContext } from "./components/HouseContext";

const App = () => {
  const { isDarkMode } = useContext(HouseContext);
  return (
    <div
      className={`max-w-[1440px] mx-auto ${
        isDarkMode ? "bg-slate-800 text-white" : "bg-white"
      }`}
    >
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

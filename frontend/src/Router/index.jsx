import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About } from "../Page/About/index.jsx";
import { Contact } from "../Page/Contact/index.jsx";
import { Home } from "../Page/Home/index.jsx";

export const RoutePath = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};
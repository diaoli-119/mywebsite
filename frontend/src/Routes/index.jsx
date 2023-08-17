import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About } from "../Page/About/index";
import { Contact } from "../Page/Contact/index";
import { Home } from "../Page/Home/index";

const RoutePath = () => {
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

export default RoutePath;

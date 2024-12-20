import React from "react";
import Navbar from "./components/Navbar/Navbar";

import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import ReciepeDetails from "./components/ReciepeDetails/ReciepeDetails";
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/receipe/:id" element={<ReciepeDetails />}></Route>
      </Routes>
    </div>
  );
};

export default App;

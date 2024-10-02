// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import MovieDescription from "./MovieDescription";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/movie/:id" element={<MovieDescription />} />
      </Routes>
    </Router>
  );
};

export default App;

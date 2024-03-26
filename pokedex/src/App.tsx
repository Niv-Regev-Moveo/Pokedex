import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import FavoritePage from "./components/FavoritePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/favorite" element={<FavoritePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/Pokedex/HomePage/HomePage";
import FavoritePage from "./components/Pokedex/FavoritePage";
import MyMapPage from "./components/GoogleMap/MyMapPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/favorite/:id" element={<FavoritePage />} />
          <Route path="/My-Map" element={<MyMapPage isLoad={true} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

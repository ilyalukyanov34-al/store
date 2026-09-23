import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ProductPage from "./Pages/ProductPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/store" element={<HomePage />} />
      <Route path="/product/:id" element={<ProductPage />} />
      <Route path="/store/product/:id" element={<ProductPage />} />
    </Routes>
  );
};

export default App;
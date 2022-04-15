import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Product from "./components/Product";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Products" element={<Products />} />
        <Route exact path="/Products/:id" element={<Product />} />
      </Routes>
    </>
  );
}

export default App;

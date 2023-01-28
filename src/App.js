import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import { useState } from "react";


function App() {

  const [cart, setCart] = useState([]);


  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />}>
        </Route>
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

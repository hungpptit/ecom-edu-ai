// src/App.tsx
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Header from "./components/Header"; 
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ChatWidget from "./components/ChatWidget";
import ProductDetail from "./pages/ProductDetail";


const App = () => {
  return (
    <>
      <Header />
      
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </main>
      <ChatWidget />
    </>
  );
};

export default App;

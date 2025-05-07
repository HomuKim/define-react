import React from 'react';
import './styles/global.css';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import Home from "./pages/Home/Home";
import FadePage from "../src/components/FadePage"; // FadePage 컴포넌트 import

function AppContent() {
  const location = useLocation();

  return (
    <div>
      <Header />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route 
            path="/" 
            element={
              <FadePage>
                <Home />
              </FadePage>
            } 
          />
          {/* 다른 페이지도 동일한 패턴으로 적용 */}
          {/* 
          <Route 
            path="/event" 
            element={
              <FadePage>
                <Event />
              </FadePage>
            } 
          />
          */}
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;

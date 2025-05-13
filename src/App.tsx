import React from 'react';
import './styles/global.css';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import Home from "./pages/Home/Home";
import Event from "./pages/Event/Event";
import Trainers from "./pages/Trainers/Trainers";
import Facilities from "./pages/Facilities/Facilities";
import Contact from "./pages/Contact/Contact";
import FadePage from "../src/components/FadePage";

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
          <Route
            path="/Event"
            element={
              <FadePage>
                <Event />
              </FadePage>
            }
          />
          <Route
            path="/Trainers"
            element={
              <FadePage>
                <Trainers />
              </FadePage>
            }
          />
          <Route
            path="/Facilities"
            element={
              <FadePage>
                <Facilities />
              </FadePage>
            }
          />
          <Route
            path="/Contact"
            element={
              <FadePage>
                <Contact />
              </FadePage>
            }
          />
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

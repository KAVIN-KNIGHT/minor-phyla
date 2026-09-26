import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import BackToTop from './components/BackToTop';
import Home from './pages/Home';
import Phyla from './pages/Phyla';
import PhylumDetail from './pages/PhylumDetail';
import About from './pages/About';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="app-layout">
          <ScrollToTop />
          <Navbar />
          <main className="main-content-area" id="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/phyla" element={<Phyla />} />
              <Route path="/phyla/:id" element={<PhylumDetail />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <BackToTop />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

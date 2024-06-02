import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import Features from './components/Features';
import About from './pages/About';
import NFTs from './pages/NFTs';
import Token from './pages/Token';
import Roadmap from './pages/Roadmap';
import Community from './pages/Community';
import Contact from './pages/Contact';
import './global.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Introduction />
            <Features />
          </>
        } />
        <Route path="/about" element={<About />} />
        <Route path="/nfts" element={<NFTs />} />
        <Route path="/token" element={<Token />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/community" element={<Community />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;


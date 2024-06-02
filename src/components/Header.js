import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">eBuds</div>
      <nav className="navigation">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/nfts">NFTs</Link>
        <Link to="/token">Token</Link>
        <Link to="/roadmap">Roadmap</Link>
        <Link to="/community">Community</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;


import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Compass, Menu, X, Sun, Moon, Search, BookOpen, Layers } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Track scroll for subtle glass shadow
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`site-header ${isScrolled ? 'is-scrolled' : ''}`}>
      <div className="site-header-container">
        {/* Brand Logo */}
        <Link to="/" className="site-logo" aria-label="Minor Phyla Encyclopedia Home">
          <div className="logo-badge">
            <Compass className="logo-icon" size={24} />
          </div>
          <div className="logo-text">
            <span className="logo-title">Minor Phyla</span>
            <span className="logo-subtitle">Encyclopedia</span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav" aria-label="Main navigation">
          <NavLink
            to="/"
            end
            className={({ isActive }) => `nav-link ${isActive ? 'is-active' : ''}`}
          >
            Home
          </NavLink>
          <NavLink
            to="/phyla"
            className={({ isActive }) => `nav-link ${isActive ? 'is-active' : ''}`}
          >
            <Layers size={16} />
            <span>All Phyla (24)</span>
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => `nav-link ${isActive ? 'is-active' : ''}`}
          >
            <BookOpen size={16} />
            <span>About</span>
          </NavLink>
        </nav>

        {/* Right Action Tools */}
        <div className="nav-actions">
          <Link to="/phyla" className="nav-search-btn" title="Search all phyla">
            <Search size={18} />
            <span className="search-hint">Search</span>
          </Link>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="theme-toggle-btn"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? <Moon size={19} /> : <Sun size={19} />}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-menu-btn"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="mobile-nav-drawer" role="dialog" aria-modal="true">
          <nav className="mobile-nav-links">
            <NavLink
              to="/"
              end
              className={({ isActive }) => `mobile-nav-link ${isActive ? 'is-active' : ''}`}
            >
              Home
            </NavLink>
            <NavLink
              to="/phyla"
              className={({ isActive }) => `mobile-nav-link ${isActive ? 'is-active' : ''}`}
            >
              Explore All 24 Phyla
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => `mobile-nav-link ${isActive ? 'is-active' : ''}`}
            >
              About the Encyclopedia
            </NavLink>
          </nav>

          <div className="mobile-nav-footer">
            <div className="mobile-theme-row">
              <span>Theme: {theme === 'light' ? 'Light Mode' : 'Dark Mode'}</span>
              <button onClick={toggleTheme} className="theme-toggle-btn-small">
                {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

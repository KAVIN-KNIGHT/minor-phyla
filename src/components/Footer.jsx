import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Dna, ExternalLink, Heart, ShieldCheck, Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top-wave" />
      <div className="footer-container">
        <div className="footer-grid">
          {/* Brand info */}
          <div className="footer-col footer-brand">
            <Link to="/" className="site-logo">
              <div className="logo-badge">
                <Compass size={22} />
              </div>
              <div className="logo-text">
                <span className="logo-title">Minor Phyla</span>
                <span className="logo-subtitle">Encyclopedia</span>
              </div>
            </Link>
            <p className="footer-description">
              An authoritative digital compendium documenting the 22 minor phyla of the Animal Kingdom. Exploring body plans, bizarre anatomies, evolutionary enigmas, and biodiversity.
            </p>
            <div className="footer-taxo-badge">
              <Dna size={16} />
              <span>Kingdom Animalia • Metazoan Taxonomy</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4 className="footer-heading">Navigation</h4>
            <ul className="footer-links">
              <li><Link to="/">Home Landing</Link></li>
              <li><Link to="/phyla">All 22 Minor Phyla</Link></li>
              <li><Link to="/about">About This Project</Link></li>
              <li><Link to="/about#disclaimer">Taxonomic Disclaimer</Link></li>
            </ul>
          </div>

          {/* Featured Phyla */}
          <div className="footer-col">
            <h4 className="footer-heading">Featured Lineages</h4>
            <ul className="footer-links">
              <li><Link to="/phyla/tardigrada">Tardigrada (Water Bears)</Link></li>
              <li><Link to="/phyla/placozoa">Placozoa (Trichoplax)</Link></li>
              <li><Link to="/phyla/onychophora">Onychophora (Velvet Worms)</Link></li>
              <li><Link to="/phyla/chaetognatha">Chaetognatha (Arrow Worms)</Link></li>
              <li><Link to="/phyla/loricifera">Loricifera (Corset Animals)</Link></li>
              <li><Link to="/phyla/rotifera">Rotifera (Wheel Animals)</Link></li>
            </ul>
          </div>

          {/* Zoological Note */}
          <div className="footer-col">
            <h4 className="footer-heading">Zoological Context</h4>
            <p className="footer-note">
              "Minor phyla" are defined by evolutionary distinctiveness and species richness compared to dominant major phyla (Arthropoda, Mollusca, Chordata). Their body architectures are key to deciphering the Tree of Life.
            </p>
            <div className="footer-stats-pill">
              <Sparkles size={15} />
              <span>22 Distinct Body Architectures</span>
            </div>
          </div>
        </div>

        {/* Bottom copyright & attribution */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} Minor Phyla Encyclopedia. Designed for educational, comparative zoological, and reference purposes.
          </p>
          <div className="footer-bottom-links">
            <Link to="/about">Methodology</Link>
            <span className="dot">•</span>
            <Link to="/phyla">Taxonomy Index</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

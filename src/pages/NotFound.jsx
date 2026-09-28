import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, ArrowLeft, Home, Layers, HelpCircle } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="not-found-page">
      <div className="section-container">
        <div className="not-found-card">
          <div className="not-found-icon-box">
            <HelpCircle size={64} />
          </div>
          <span className="not-found-code">Error 404</span>
          <h1 className="not-found-title">Page or Phylum Not Found</h1>
          <p className="not-found-desc">
            The page or taxonomic specimen you requested could not be located in our encyclopedia. 
            The taxon might have been renamed or the URL may be mistyped.
          </p>

          <div className="not-found-btn-group">
            <Link to="/phyla" className="hero-cta-primary">
              <Layers size={18} />
              <span>Explore All 22 Phyla</span>
            </Link>
            <Link to="/" className="hero-cta-secondary">
              <Home size={18} />
              <span>Return Home</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

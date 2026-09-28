import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Sparkles, BookOpen, ArrowDown, Dna, Layers, ShieldCheck, Microscope } from 'lucide-react';

export default function Hero({ onExploreClick }) {
  const stats = [
    { value: "22", label: "Minor Phyla", icon: Layers, desc: "Distinct metazoan body plans" },
    { value: "Animalia", label: "Kingdom", icon: Dna, desc: "Basal & spiralian lineages" },
    { value: "540+ Ma", label: "Deep History", icon: Sparkles, desc: "Roots in the Cambrian Explosion" },
    { value: "Diverse", label: "Comparative Anatomy", icon: Microscope, desc: "From plates to water bears" },
  ];

  return (
    <section className="hero-section">
      {/* Decorative bioluminescent gradient backdrop */}
      <div className="hero-glow-1" />
      <div className="hero-glow-2" />
      <div className="hero-grid-pattern" />

      <div className="hero-container">
        {/* Floating taxonomy tag */}
        <div className="hero-badge">
          <Sparkles size={15} className="hero-badge-icon" />
          <span>Interactive Metazoan Taxonomy Compendium</span>
        </div>

        {/* Hero Main Heading */}
        <h1 className="hero-title">
          Explore the <span className="hero-title-highlight">Minor Phyla</span> of the Animal Kingdom
        </h1>

        {/* Subtitle */}
        <p className="hero-subtitle">
          An authoritative, educational visual guide to Earth’s lesser-known animal lineages. 
          Discover radical body architectures, extreme cryptobiosis, deep-sea paradoxes, and evolutionary keystones that redefined our understanding of animal life.
        </p>

        {/* CTA Buttons */}
        <div className="hero-cta-group">
          {onExploreClick ? (
            <button
              onClick={onExploreClick}
              className="hero-cta-primary"
            >
              <span>Explore the Phyla</span>
              <ArrowDown size={18} />
            </button>
          ) : (
            <Link to="/phyla" className="hero-cta-primary">
              <span>Explore the Phyla</span>
              <ArrowDown size={18} />
            </Link>
          )}

          <Link to="/about" className="hero-cta-secondary">
            <BookOpen size={18} />
            <span>Learn More</span>
          </Link>
        </div>

        {/* Statistics Section */}
        <div className="hero-stats-grid">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div key={i} className="hero-stat-card">
                <div className="stat-card-icon">
                  <Icon size={22} />
                </div>
                <div className="stat-card-content">
                  <div className="stat-card-value">{stat.value}</div>
                  <div className="stat-card-label">{stat.label}</div>
                  <div className="stat-card-desc">{stat.desc}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

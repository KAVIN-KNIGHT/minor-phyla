import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { phylaData } from '../data/phyla';
import Hero from '../components/Hero';
import SearchBar from '../components/SearchBar';
import FilterBar from '../components/FilterBar';
import PhylumGrid from '../components/PhylumGrid';
import { 
  ArrowRight, 
  Sparkles, 
  Dna, 
  GitMerge, 
  Compass, 
  Microscope, 
  HelpCircle,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [symmetryFilter, setSymmetryFilter] = useState('All');
  const [habitatFilter, setHabitatFilter] = useState('All');
  const [cavityFilter, setCavityFilter] = useState('All');

  const scrollToGrid = () => {
    const el = document.getElementById('phyla-catalog');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const hasActiveFilters = Boolean(
    searchQuery ||
    symmetryFilter !== 'All' ||
    habitatFilter !== 'All' ||
    cavityFilter !== 'All'
  );

  const handleResetFilters = () => {
    setSearchQuery('');
    setSymmetryFilter('All');
    setHabitatFilter('All');
    setCavityFilter('All');
  };

  // Filter logic
  const filteredPhyla = useMemo(() => {
    return phylaData.filter(phylum => {
      // Search matching: name, commonName, description, representative organisms
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchesName = phylum.name.toLowerCase().includes(query);
        const matchesCommon = phylum.commonName && phylum.commonName.toLowerCase().includes(query);
        const matchesDesc = phylum.shortDescription.toLowerCase().includes(query);
        const matchesOrganisms = phylum.representativeOrganisms && phylum.representativeOrganisms.some(org =>
          org.name.toLowerCase().includes(query) || org.scientificName.toLowerCase().includes(query)
        );

        if (!matchesName && !matchesCommon && !matchesDesc && !matchesOrganisms) {
          return false;
        }
      }

      // Symmetry filter
      if (symmetryFilter !== 'All') {
        if (symmetryFilter === 'Asymmetrical' && !phylum.symmetry.toLowerCase().includes('asymmetrical')) {
          return false;
        }
        if (symmetryFilter === 'Bilateral' && !phylum.symmetry.toLowerCase().includes('bilateral')) {
          return false;
        }
      }

      // Habitat filter
      if (habitatFilter !== 'All') {
        if (!phylum.habitat.toLowerCase().includes(habitatFilter.toLowerCase())) {
          return false;
        }
      }

      // Body cavity filter
      if (cavityFilter !== 'All') {
        if (!phylum.bodyCavity.toLowerCase().includes(cavityFilter.toLowerCase())) {
          return false;
        }
      }

      return true;
    });
  }, [searchQuery, symmetryFilter, habitatFilter, cavityFilter]);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <Hero onExploreClick={scrollToGrid} />

      {/* Featured Introduction Section */}
      <section className="featured-section">
        <div className="section-container">
          <div className="featured-intro-box">
            <div className="featured-badge">
              <Sparkles size={16} />
              <span>Comparative Zoology</span>
            </div>
            <h2 className="section-title">
              Discover the Lesser-Known Branches of Animal Life
            </h2>
            <p className="featured-intro-text">
              While conventional biology textbooks frequently center their curricula around dominant phyla such as Arthropoda, Mollusca, and Chordata, over <strong>twenty additional distinct phyla</strong> populate our planet. These "minor" lineages possess extraordinary body architectures—ranging from two-cell-layered flat plates and 8-legged microscopic survivors of outer space to glass-clear oceanic arrows and lobsters’ microscopic mouth-part symbionts.
            </p>
          </div>
        </div>
      </section>

      {/* Phyla Catalog Section */}
      <section className="catalog-section" id="phyla-catalog">
        <div className="section-container">
          <div className="catalog-header">
            <div className="catalog-heading-group">
              <span className="section-kicker">Interactive Taxonomy Matrix</span>
              <h2 className="catalog-title">Explore the Minor Phyla</h2>
              <p className="catalog-subtitle">
                Browse all 22 recognized minor phyla with live filtering across morphology, body cavity, and habitats.
              </p>
            </div>
          </div>

          {/* Search & Filter Controls */}
          <div className="catalog-controls">
            <SearchBar
              value={searchQuery}
              onChange={setSearchQuery}
              onClear={() => setSearchQuery('')}
              totalCount={phylaData.length}
              filteredCount={filteredPhyla.length}
            />

            <FilterBar
              symmetry={symmetryFilter}
              setSymmetry={setSymmetryFilter}
              habitat={habitatFilter}
              setHabitat={setHabitatFilter}
              bodyCavity={cavityFilter}
              setBodyCavity={setCavityFilter}
              onReset={handleResetFilters}
              hasActiveFilters={hasActiveFilters}
            />
          </div>

          {/* Phylum Grid Display */}
          <PhylumGrid
            phyla={filteredPhyla}
            onResetFilters={handleResetFilters}
          />
        </div>
      </section>

      {/* Educational Section: Why Study Minor Phyla */}
      <section className="educational-section">
        <div className="section-container">
          <div className="edu-header">
            <span className="section-kicker">Evolutionary Insights</span>
            <h2 className="section-title">Why Study Minor Phyla?</h2>
            <p className="edu-subtitle">
              Minor phyla are not merely evolutionary curiosities. They are indispensable keys to decoding how multicellularity, symmetry, nervous systems, and organ specializations arose in ancient oceans.
            </p>
          </div>

          <div className="edu-grid">
            <div className="edu-card">
              <div className="edu-card-icon-box icon-emerald">
                <Dna size={24} />
              </div>
              <h3 className="edu-card-title">Roots of Multicellularity</h3>
              <p className="edu-card-desc">
                Organisms like <em>Trichoplax</em> (Placozoa) reveal the minimum genetic and cellular requirements for animal multicellularity—coordinating locomotion, digestion, and behavior without neurons or synapses.
              </p>
            </div>

            <div className="edu-card">
              <div className="edu-card-icon-box icon-teal">
                <GitMerge size={24} />
              </div>
              <h3 className="edu-card-title">Body-Plan Diversity</h3>
              <p className="edu-card-desc">
                From the 32-element moving jaws of <em>Micrognathozoa</em> to the hydrostatic eversible proboscis of <em>Priapulida</em> and the unjointed walking lobopods of <em>Onychophora</em>, minor phyla showcase the boundary limits of morphological design.
              </p>
            </div>

            <div className="edu-card">
              <div className="edu-card-icon-box icon-blue">
                <Sparkles size={24} />
              </div>
              <h3 className="edu-card-title">Extreme Adaptations</h3>
              <p className="edu-card-desc">
                <em>Tardigrades</em> withstand the vacuum and radiation of space through anhydrobiosis, while newly discovered deep-sea <em>Loricifera</em> complete their entire life cycle in permanently anoxic, sulfidic basins without mitochondria.
              </p>
            </div>

            <div className="edu-card">
              <div className="edu-card-icon-box icon-purple">
                <Microscope size={24} />
              </div>
              <h3 className="edu-card-title">Keystone Trophic Roles</h3>
              <p className="edu-card-desc">
                Arrow worms (<em>Chaetognatha</em>) dominate global zooplankton predation, while microscopic <em>Rotifera</em> and <em>Gastrotricha</em> serve as essential nutrient bridges connecting bacterial biofilms to commercial fisheries.
              </p>
            </div>
          </div>

          {/* Bottom CTA Banner */}
          <div className="edu-cta-banner">
            <div className="edu-cta-content">
              <h3 className="edu-cta-title">Ready to explore all 22 lineages in detail?</h3>
              <p className="edu-cta-desc">
                Access comprehensive anatomical profiles, high-resolution scientific specimens, and evolutionary histories for every phylum.
              </p>
            </div>
            <Link to="/phyla" className="edu-cta-btn">
              <span>Explore All Phyla</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

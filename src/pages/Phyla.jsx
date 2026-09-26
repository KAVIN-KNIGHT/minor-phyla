import React, { useState, useMemo } from 'react';
import { phylaData } from '../data/phyla';
import Breadcrumbs from '../components/Breadcrumbs';
import SearchBar from '../components/SearchBar';
import FilterBar from '../components/FilterBar';
import PhylumGrid from '../components/PhylumGrid';
import { Layers, ArrowUpDown, Sparkles } from 'lucide-react';

export default function Phyla() {
  const [searchQuery, setSearchQuery] = useState('');
  const [symmetryFilter, setSymmetryFilter] = useState('All');
  const [habitatFilter, setHabitatFilter] = useState('All');
  const [cavityFilter, setCavityFilter] = useState('All');
  const [sortBy, setSortBy] = useState('default'); // 'default', 'name-asc', 'name-desc'

  const hasActiveFilters = Boolean(
    searchQuery ||
    symmetryFilter !== 'All' ||
    habitatFilter !== 'All' ||
    cavityFilter !== 'All' ||
    sortBy !== 'default'
  );

  const handleResetFilters = () => {
    setSearchQuery('');
    setSymmetryFilter('All');
    setHabitatFilter('All');
    setCavityFilter('All');
    setSortBy('default');
  };

  const filteredPhyla = useMemo(() => {
    let result = phylaData.filter(phylum => {
      // Search matching
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

      // Cavity filter
      if (cavityFilter !== 'All') {
        if (!phylum.bodyCavity.toLowerCase().includes(cavityFilter.toLowerCase())) {
          return false;
        }
      }

      return true;
    });

    // Sorting
    if (sortBy === 'name-asc') {
      result = [...result].sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'name-desc') {
      result = [...result].sort((a, b) => b.name.localeCompare(a.name));
    }

    return result;
  }, [searchQuery, symmetryFilter, habitatFilter, cavityFilter, sortBy]);

  return (
    <div className="phyla-page">
      <div className="page-header-banner">
        <div className="section-container">
          <Breadcrumbs items={[{ label: 'All Minor Phyla' }]} />

          <div className="page-header-content">
            <div className="page-kicker-tag">
              <Layers size={16} />
              <span>Full Taxonomic Directory</span>
            </div>
            <h1 className="page-title">The 24 Minor Phyla</h1>
            <p className="page-lead">
              A comprehensive educational catalog of the lesser-known animal phyla. 
              Each card below represents a distinct morphological body plan shaped by hundreds of millions of years of evolutionary trial and specialization.
            </p>
          </div>
        </div>
      </div>

      <div className="section-container phyla-page-body">
        {/* Search, Filter & Sort Toolbar */}
        <div className="catalog-controls">
          <div className="controls-top-row">
            <SearchBar
              value={searchQuery}
              onChange={setSearchQuery}
              onClear={() => setSearchQuery('')}
              totalCount={phylaData.length}
              filteredCount={filteredPhyla.length}
              placeholder="Search by phylum name, common name, or organism..."
            />

            <div className="sort-dropdown-box">
              <label htmlFor="sort-select" className="sort-label">
                <ArrowUpDown size={15} />
                <span>Sort:</span>
              </label>
              <select
                id="sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="sort-select"
              >
                <option value="default">Taxonomic Order (1-24)</option>
                <option value="name-asc">Alphabetical (A → Z)</option>
                <option value="name-desc">Alphabetical (Z → A)</option>
              </select>
            </div>
          </div>

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
    </div>
  );
}

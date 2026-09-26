import React from 'react';
import { Filter, RotateCcw } from 'lucide-react';

export default function FilterBar({
  symmetry,
  setSymmetry,
  habitat,
  setHabitat,
  bodyCavity,
  setBodyCavity,
  onReset,
  hasActiveFilters
}) {
  const symmetryOptions = ['All', 'Bilateral', 'Asymmetrical'];
  const habitatOptions = ['All', 'Marine', 'Freshwater', 'Terrestrial', 'Parasitic'];
  const cavityOptions = ['All', 'Acoelomate', 'Pseudocoelomate', 'Coelomate'];

  return (
    <div className="filter-bar">
      <div className="filter-header">
        <div className="filter-title">
          <Filter size={16} />
          <span>Taxonomic & Ecological Filters</span>
        </div>
        {hasActiveFilters && (
          <button
            onClick={onReset}
            className="filter-reset-btn"
            title="Reset all filters"
          >
            <RotateCcw size={14} />
            <span>Reset Filters</span>
          </button>
        )}
      </div>

      <div className="filter-groups">
        {/* Symmetry Filter */}
        <div className="filter-group">
          <label className="filter-label">Symmetry:</label>
          <div className="filter-pills">
            {symmetryOptions.map(option => (
              <button
                key={option}
                type="button"
                className={`filter-pill ${symmetry === option ? 'is-active' : ''}`}
                onClick={() => setSymmetry(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        {/* Habitat Filter */}
        <div className="filter-group">
          <label className="filter-label">Habitat:</label>
          <div className="filter-pills">
            {habitatOptions.map(option => (
              <button
                key={option}
                type="button"
                className={`filter-pill ${habitat === option ? 'is-active' : ''}`}
                onClick={() => setHabitat(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        {/* Body Cavity Filter */}
        <div className="filter-group">
          <label className="filter-label">Coelom / Cavity:</label>
          <div className="filter-pills">
            {cavityOptions.map(option => (
              <button
                key={option}
                type="button"
                className={`filter-pill ${bodyCavity === option ? 'is-active' : ''}`}
                onClick={() => setBodyCavity(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

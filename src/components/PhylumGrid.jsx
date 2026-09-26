import React from 'react';
import PhylumCard from './PhylumCard';
import { SearchX, RotateCcw } from 'lucide-react';

export default function PhylumGrid({ phyla = [], onResetFilters }) {
  if (phyla.length === 0) {
    return (
      <div className="phylum-empty-state">
        <div className="empty-state-icon">
          <SearchX size={48} />
        </div>
        <h3 className="empty-state-title">No Matching Phyla Found</h3>
        <p className="empty-state-desc">
          We couldn't find any minor phyla matching your current search query and filter criteria.
        </p>
        {onResetFilters && (
          <button
            onClick={onResetFilters}
            className="empty-state-reset-btn"
          >
            <RotateCcw size={16} />
            <span>Reset All Search & Filters</span>
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="phylum-grid" id="phylum-grid-section">
      {phyla.map((phylum, index) => (
        <PhylumCard
          key={phylum.id}
          phylum={phylum}
          index={index}
        />
      ))}
    </div>
  );
}

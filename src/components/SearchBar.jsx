import React, { useRef } from 'react';
import { Search, X } from 'lucide-react';

export default function SearchBar({
  value,
  onChange,
  onClear,
  totalCount,
  filteredCount,
  placeholder = "Search a phylum (e.g., Tardigrada, Arrow Worm, Rotifer)..."
}) {
  const inputRef = useRef(null);

  const handleClear = () => {
    if (onClear) {
      onClear();
    } else if (onChange) {
      onChange('');
    }
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      handleClear();
    }
  };

  return (
    <div className="search-bar-wrapper">
      <div className="search-bar-box">
        <Search className="search-input-icon" size={20} />
        <input
          ref={inputRef}
          type="text"
          className="search-input"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          aria-label="Search minor phyla"
        />
        {value && (
          <button
            type="button"
            className="search-clear-btn"
            onClick={handleClear}
            aria-label="Clear search input"
            title="Clear search"
          >
            <X size={16} />
          </button>
        )}
      </div>

      <div className="search-meta">
        <span className="search-count-badge">
          Showing <strong>{filteredCount}</strong> of {totalCount} phyla
        </span>
        {value && (
          <span className="search-query-tag">
            Matching: <em>"{value}"</em>
          </span>
        )}
      </div>
    </div>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export default function Breadcrumbs({ items = [] }) {
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb navigation">
      <ol className="breadcrumbs-list">
        <li className="breadcrumbs-item">
          <Link to="/" className="breadcrumbs-link breadcrumbs-home">
            <Home size={15} />
            <span>Home</span>
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="breadcrumbs-item">
              <ChevronRight size={14} className="breadcrumbs-separator" />
              {isLast ? (
                <span className="breadcrumbs-current" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link to={item.to} className="breadcrumbs-link">
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

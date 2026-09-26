import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass, Shield, Sparkles } from 'lucide-react';
import PhylumImage from './PhylumImage';

export default function PhylumCard({ phylum, index }) {
  const {
    id,
    name,
    commonName,
    image,
    shortDescription,
    clade,
    symmetry,
    bodyCavity,
    accentColor
  } = phylum;

  return (
    <article
      className="phylum-card"
      style={{ '--card-accent': accentColor || '#0d9488' }}
    >
      <Link to={`/phyla/${id}`} className="phylum-card-link-wrapper">
        {/* Card Header Media */}
        <div className="phylum-card-media">
          <PhylumImage
            src={image}
            alt={`${name} representative specimen`}
            id={id}
            name={name}
            accentColor={accentColor}
            aspectRatio="16/10"
          />
          <div className="card-badge-row">
            <span className="card-index-tag">#{index + 1}</span>
            {clade && (
              <span className="card-clade-tag">
                {clade.split('/')[0].trim()}
              </span>
            )}
          </div>
        </div>

        {/* Card Content Body */}
        <div className="phylum-card-body">
          <div className="card-title-group">
            <h3 className="card-phylum-name">{name}</h3>
            {commonName && (
              <span className="card-common-name">{commonName}</span>
            )}
          </div>

          <p className="card-description">{shortDescription}</p>

          {/* Quick attribute tags */}
          <div className="card-meta-tags">
            <span className="card-meta-tag tag-symmetry">
              {symmetry.includes('Asymmetrical') ? 'Asymmetrical' : 'Bilateral'}
            </span>
            <span className="card-meta-tag tag-cavity">
              {bodyCavity.split(' ')[0]}
            </span>
          </div>

          {/* Action Footer */}
          <div className="card-action-footer">
            <span className="card-explore-btn">
              <span>Explore</span>
              <ArrowRight size={16} className="card-arrow-icon" />
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}

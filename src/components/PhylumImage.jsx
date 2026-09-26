import React, { useState } from 'react';

// Scientific stylized vector fallback illustrations for each phylum
function PhylumSvgVector({ id, name, color = '#0f766e' }) {
  const c = color;
  
  // Custom SVG path and visual representation based on anatomy
  let content = null;
  switch (id) {
    case 'placozoa':
      content = (
        <g>
          {/* Amorphous flat disc crawling */}
          <path d="M50 100 C70 40, 160 50, 220 80 C270 110, 260 170, 210 200 C150 230, 80 220, 50 170 Z" fill={c} fillOpacity="0.25" stroke={c} strokeWidth="4" />
          <path d="M70 110 C90 70, 150 80, 190 100 C230 120, 220 160, 180 180 C130 200, 90 190, 70 150 Z" fill={c} fillOpacity="0.4" />
          {/* Cilia fringe */}
          <circle cx="90" cy="110" r="4" fill="#facc15" />
          <circle cx="140" cy="130" r="5" fill="#facc15" />
          <circle cx="170" cy="150" r="4" fill="#facc15" />
          <circle cx="120" cy="160" r="6" fill="#facc15" />
          <circle cx="190" cy="115" r="3" fill="#38bdf8" />
          <text x="150" y="240" textAnchor="middle" fill="currentColor" fontSize="13" fontWeight="600" opacity="0.8">Trichoplax plate disc</text>
        </g>
      );
      break;

    case 'tardigrada':
      content = (
        <g>
          {/* Water bear barrel body */}
          <ellipse cx="140" cy="130" rx="80" ry="46" fill={c} fillOpacity="0.3" stroke={c} strokeWidth="4" />
          {/* Head & snout */}
          <ellipse cx="65" cy="130" rx="25" ry="20" fill={c} fillOpacity="0.4" stroke={c} strokeWidth="3" />
          <circle cx="48" cy="124" r="3" fill="#1e293b" />
          <circle cx="42" cy="130" r="6" fill="#38bdf8" stroke={c} strokeWidth="2" />
          {/* 4 pairs of stubby legs with claws */}
          <rect x="80" y="165" width="22" height="36" rx="10" fill={c} stroke={c} strokeWidth="2" />
          <rect x="120" y="165" width="22" height="36" rx="10" fill={c} stroke={c} strokeWidth="2" />
          <rect x="160" y="165" width="22" height="36" rx="10" fill={c} stroke={c} strokeWidth="2" />
          <rect x="200" y="155" width="22" height="36" rx="10" fill={c} stroke={c} strokeWidth="2" />
          {/* Little claws */}
          <path d="M82 201 L76 210 M92 201 L92 212 M100 201 L106 210" stroke="#facc15" strokeWidth="3" strokeLinecap="round" />
          <path d="M122 201 L116 210 M132 201 L132 212 M140 201 L146 210" stroke="#facc15" strokeWidth="3" strokeLinecap="round" />
          <path d="M162 201 L156 210 M172 201 L172 212 M180 201 L186 210" stroke="#facc15" strokeWidth="3" strokeLinecap="round" />
          <path d="M202 191 L196 200 M212 191 L212 202 M220 191 L226 200" stroke="#facc15" strokeWidth="3" strokeLinecap="round" />
          <text x="150" y="240" textAnchor="middle" fill="currentColor" fontSize="13" fontWeight="600" opacity="0.8">8-legged lobopod water bear</text>
        </g>
      );
      break;

    case 'brachiopoda':
      content = (
        <g>
          {/* Pedicle stalk */}
          <path d="M150 180 C150 210, 160 230, 150 250" stroke="#ca8a04" strokeWidth="12" strokeLinecap="round" />
          {/* Dorsal & ventral shells */}
          <path d="M70 160 C70 90, 110 50, 150 50 C190 50, 230 90, 230 160 C210 185, 90 185, 70 160 Z" fill={c} fillOpacity="0.3" stroke={c} strokeWidth="4" />
          <path d="M85 155 C90 100, 120 70, 150 70 C180 70, 210 100, 215 155" fill="none" stroke={c} strokeWidth="2" strokeDasharray="3 3" />
          {/* Radial ribs */}
          <path d="M150 50 L110 170 M150 50 L130 175 M150 50 L150 178 M150 50 L170 175 M150 50 L190 170" stroke={c} strokeWidth="1.5" opacity="0.7" />
          <text x="150" y="240" textAnchor="middle" fill="currentColor" fontSize="13" fontWeight="600" opacity="0.8">Bivalved lamp shell with pedicle</text>
        </g>
      );
      break;

    case 'chaetognatha':
      content = (
        <g>
          {/* Streamlined glass arrow body */}
          <path d="M40 120 C90 105, 210 105, 260 120 C210 135, 90 135, 40 120 Z" fill={c} fillOpacity="0.25" stroke={c} strokeWidth="3" />
          {/* Grasping head spines */}
          <path d="M45 110 L30 114 M45 115 L26 120 M45 125 L26 124 M45 130 L30 126" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round" />
          {/* Lateral fins & tail fin */}
          <polygon points="120,105 170,90 180,105" fill={c} fillOpacity="0.5" />
          <polygon points="120,135 170,150 180,135" fill={c} fillOpacity="0.5" />
          <polygon points="245,120 275,98 275,142" fill={c} fillOpacity="0.6" stroke={c} strokeWidth="2" />
          <circle cx="58" cy="116" r="3" fill="#0f172a" />
          <text x="150" y="235" textAnchor="middle" fill="currentColor" fontSize="13" fontWeight="600" opacity="0.8">Raptorial arrow worm</text>
        </g>
      );
      break;

    case 'rotifera':
      content = (
        <g>
          {/* Corona wheels */}
          <circle cx="120" cy="70" r="22" fill={c} fillOpacity="0.2" stroke={c} strokeWidth="3" strokeDasharray="5 3" />
          <circle cx="180" cy="70" r="22" fill={c} fillOpacity="0.2" stroke={c} strokeWidth="3" strokeDasharray="5 3" />
          {/* Cilia tufts */}
          <path d="M120 44 L120 38 M102 54 L98 50 M138 54 L142 50" stroke="#38bdf8" strokeWidth="3" strokeLinecap="round" />
          <path d="M180 44 L180 38 M162 54 L158 50 M198 54 L202 50" stroke="#38bdf8" strokeWidth="3" strokeLinecap="round" />
          {/* Lorica & mastax */}
          <path d="M100 85 C100 140, 110 180, 135 200 L140 230 L148 245 M160 230 L152 245 L165 200 C190 180, 200 140, 200 85 Z" fill={c} fillOpacity="0.3" stroke={c} strokeWidth="3" />
          <polygon points="142,100 158,100 150,115" fill="#f59e0b" stroke="#d97706" strokeWidth="2" />
          <text x="150" y="240" textAnchor="middle" fill="currentColor" fontSize="13" fontWeight="600" opacity="0.8">Wheel corona & mastax jaws</text>
        </g>
      );
      break;

    case 'onychophora':
      content = (
        <g>
          {/* Velvet worm body */}
          <path d="M50 140 C100 130, 200 130, 250 140 C240 160, 200 165, 50 160 Z" fill={c} fillOpacity="0.35" stroke={c} strokeWidth="3" />
          {/* Antennae */}
          <path d="M52 142 C40 130, 30 115, 20 110" stroke={c} strokeWidth="3" strokeLinecap="round" fill="none" />
          <path d="M56 140 C48 125, 42 110, 38 100" stroke={c} strokeWidth="3" strokeLinecap="round" fill="none" />
          {/* Slime jet */}
          <path d="M48 152 C35 158, 20 150, 10 165" stroke="#38bdf8" strokeWidth="2" strokeDasharray="3 2" />
          {/* Lobopod legs */}
          {[70, 95, 120, 145, 170, 195, 220].map((x, i) => (
            <g key={i}>
              <path d={`M${x} 160 L${x - 4} 190 L${x + 6} 190`} fill={c} stroke={c} strokeWidth="2" />
              <circle cx={x + 1} cy="191" r="2" fill="#facc15" />
            </g>
          ))}
          <text x="150" y="240" textAnchor="middle" fill="currentColor" fontSize="13" fontWeight="600" opacity="0.8">Velvet worm with lobopods</text>
        </g>
      );
      break;

    case 'phoronida':
      content = (
        <g>
          {/* Chitinous tube */}
          <rect x="135" y="110" width="30" height="130" rx="4" fill="#a16207" fillOpacity="0.4" stroke="#854d0e" strokeWidth="2" />
          {/* Horseshoe double coiled lophophore */}
          <path d="M125 110 C100 80, 80 50, 120 35 C145 25, 150 65, 150 100 C150 65, 155 25, 180 35 C220 50, 200 80, 175 110" fill="none" stroke={c} strokeWidth="5" strokeLinecap="round" />
          {/* Ciliated tentacles */}
          {[...Array(14)].map((_, i) => {
            const angle = (i / 13) * Math.PI;
            const x = 150 + Math.cos(angle) * 45;
            const y = 65 - Math.sin(angle) * 35;
            return <line key={i} x1={x} y1={y} x2={x + (x - 150) * 0.25} y2={y - 10} stroke="#2dd4bf" strokeWidth="2" strokeLinecap="round" />;
          })}
          <text x="150" y="240" textAnchor="middle" fill="currentColor" fontSize="13" fontWeight="600" opacity="0.8">Horseshoe lophophore crown</text>
        </g>
      );
      break;

    default:
      content = (
        <g>
          {/* Universal elegant marine invertebrate diagram */}
          <circle cx="150" cy="120" r="55" fill={c} fillOpacity="0.2" stroke={c} strokeWidth="3" />
          <path d="M110 120 C110 80, 190 80, 190 120 C190 160, 110 160, 110 120 Z" fill={c} fillOpacity="0.3" stroke={c} strokeWidth="2" />
          <circle cx="150" cy="120" r="16" fill="#facc15" fillOpacity="0.7" />
          {/* Radiating sensory cilia */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => {
            const rad = (deg * Math.PI) / 180;
            const x1 = 150 + Math.cos(rad) * 58;
            const y1 = 120 + Math.sin(rad) * 58;
            const x2 = 150 + Math.cos(rad) * 72;
            const y2 = 120 + Math.sin(rad) * 72;
            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" />;
          })}
          <text x="150" y="235" textAnchor="middle" fill="currentColor" fontSize="13" fontWeight="600" opacity="0.8">{name} morphology</text>
        </g>
      );
      break;
  }

  return (
    <svg viewBox="0 0 300 260" className="phylum-svg-fallback" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id={`grad-${id}`} cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0.35" />
        </radialGradient>
        <pattern id="grid-dots" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1" fill="currentColor" opacity="0.15" />
        </pattern>
      </defs>
      <rect width="300" height="260" fill={`url(#grad-${id})`} />
      <rect width="300" height="260" fill="url(#grid-dots)" />
      
      {/* Specimen watermark grid lines */}
      <circle cx="150" cy="120" r="85" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" opacity="0.2" />
      <line x1="20" y1="120" x2="280" y2="120" stroke="currentColor" strokeWidth="1" strokeDasharray="2 4" opacity="0.15" />
      <line x1="150" y1="20" x2="150" y2="220" stroke="currentColor" strokeWidth="1" strokeDasharray="2 4" opacity="0.15" />

      {content}

      {/* Scientific scale bar */}
      <g transform="translate(20, 235)">
        <line x1="0" y1="0" x2="40" y2="0" stroke="currentColor" strokeWidth="2" opacity="0.5" />
        <line x1="0" y1="-3" x2="0" y2="3" stroke="currentColor" strokeWidth="2" opacity="0.5" />
        <line x1="40" y1="-3" x2="40" y2="3" stroke="currentColor" strokeWidth="2" opacity="0.5" />
        <text x="20" y="-5" textAnchor="middle" fill="currentColor" fontSize="9" fontFamily="monospace" opacity="0.6">SCALE</text>
      </g>
    </svg>
  );
}

export default function PhylumImage({
  src,
  alt,
  id,
  name,
  accentColor = '#0d9488',
  className = '',
  aspectRatio = '16/10'
}) {
  const [hasError, setHasError] = useState(!src);
  const [isLoading, setIsLoading] = useState(Boolean(src));

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return (
    <div
      className={`phylum-image-container ${className}`}
      style={{ aspectRatio }}
    >
      {isLoading && (
        <div className="phylum-image-skeleton">
          <div className="skeleton-pulse" />
          <span className="skeleton-label">Loading specimen...</span>
        </div>
      )}

      {hasError ? (
        <div className="phylum-image-fallback" title={`${name} scientific schematic`}>
          <PhylumSvgVector id={id} name={name} color={accentColor} />
          <div className="fallback-badge">
            <span>Morphological Diagram</span>
          </div>
        </div>
      ) : (
        <img
          src={src}
          alt={alt || `${name} representative specimen`}
          loading="lazy"
          onLoad={handleLoad}
          onError={handleError}
          className={`phylum-image-content ${isLoading ? 'is-loading' : 'is-loaded'}`}
        />
      )}
    </div>
  );
}

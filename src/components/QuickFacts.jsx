import React from 'react';
import { 
  Dna, 
  Layers, 
  Shapes, 
  ShieldAlert, 
  MapPin, 
  Utensils, 
  HeartHandshake, 
  Activity,
  Sparkles
} from 'lucide-react';

export default function QuickFacts({ phylum }) {
  const {
    kingdom = "Animalia",
    name,
    symmetry,
    germLayers,
    bodyCavity,
    habitat,
    feeding,
    reproduction,
    representativeOrganisms = []
  } = phylum;

  const facts = [
    { label: "Kingdom", value: kingdom, icon: Dna },
    { label: "Phylum", value: name, icon: Layers },
    { label: "Body Symmetry", value: symmetry, icon: Shapes },
    { label: "Germ Layers", value: germLayers, icon: ShieldAlert },
    { label: "Body Cavity (Coelom)", value: bodyCavity, icon: Activity },
    { label: "Ecological Habitat", value: habitat, icon: MapPin },
    { label: "Trophic / Feeding Mode", value: feeding, icon: Utensils },
    { label: "Reproduction & Life Cycle", value: reproduction, icon: HeartHandshake },
  ];

  return (
    <div className="quick-facts-panel">
      <div className="quick-facts-header">
        <div className="quick-facts-title-group">
          <Sparkles className="quick-facts-icon" size={20} />
          <h3 className="quick-facts-title">Taxonomic Quick Facts</h3>
        </div>
        <span className="quick-facts-badge">Curated Zoology Reference</span>
      </div>

      <div className="quick-facts-grid">
        {facts.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className="quick-fact-item">
              <div className="quick-fact-icon-box">
                <Icon size={18} />
              </div>
              <div className="quick-fact-content">
                <span className="quick-fact-label">{item.label}</span>
                <span className="quick-fact-value">{item.value}</span>
              </div>
            </div>
          );
        })}
      </div>

      {representativeOrganisms.length > 0 && (
        <div className="quick-facts-org-summary">
          <span className="org-summary-label">Key Model Organisms:</span>
          <span className="org-summary-list">
            {representativeOrganisms.map(o => o.name).join(' • ')}
          </span>
        </div>
      )}
    </div>
  );
}

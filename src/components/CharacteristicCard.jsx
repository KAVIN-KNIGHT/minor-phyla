import React from 'react';
import { 
  Layers, 
  Shapes, 
  GitBranch, 
  Cpu, 
  Activity, 
  Wind, 
  Heart, 
  Footprints,
  ShieldCheck
} from 'lucide-react';

const ICON_MAP = {
  "Body Organization": Layers,
  "Symmetry": Shapes,
  "Digestive System": GitBranch,
  "Nervous System": Cpu,
  "Circulatory System": Activity,
  "Respiratory System": Wind,
  "Reproduction": Heart,
  "Locomotion": Footprints,
  "Default": ShieldCheck
};

export default function CharacteristicCard({ title, description, category }) {
  const Icon = ICON_MAP[category] || ICON_MAP[title] || ICON_MAP["Default"];

  return (
    <div className="characteristic-card">
      <div className="char-card-header">
        <div className="char-icon-wrapper">
          <Icon size={18} />
        </div>
        <h4 className="char-card-title">{title}</h4>
      </div>
      <p className="char-card-description">{description}</p>
    </div>
  );
}

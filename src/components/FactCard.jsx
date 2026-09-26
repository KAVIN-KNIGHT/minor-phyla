import React from 'react';
import { Lightbulb, Sparkles } from 'lucide-react';

export default function FactCard({ fact, index }) {
  return (
    <div className="fact-card">
      <div className="fact-card-glow" />
      <div className="fact-card-number">
        <span>0{index + 1}</span>
      </div>
      <div className="fact-card-content">
        <div className="fact-icon-badge">
          <Lightbulb size={16} />
          <span>Fascinating Fact</span>
        </div>
        <p className="fact-card-text">{fact}</p>
      </div>
    </div>
  );
}

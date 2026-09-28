import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { getPhylumById, getAdjacentPhyla } from '../data/phyla';
import Breadcrumbs from '../components/Breadcrumbs';
import PhylumImage from '../components/PhylumImage';
import QuickFacts from '../components/QuickFacts';
import CharacteristicCard from '../components/CharacteristicCard';
import FactCard from '../components/FactCard';
import { 
  ChevronLeft, 
  ChevronRight, 
  Compass, 
  Sparkles, 
  Dna, 
  Layers, 
  Microscope, 
  Globe, 
  HelpCircle, 
  ArrowLeft,
  BookOpen,
  Info
} from 'lucide-react';

export default function PhylumDetail() {
  const { id } = useParams();
  const phylum = getPhylumById(id);

  if (!phylum) {
    return (
      <div className="phylum-not-found-page section-container">
        <div className="not-found-box">
          <HelpCircle size={64} className="not-found-icon" />
          <h1 className="not-found-title">Phylum Not Found</h1>
          <p className="not-found-desc">
            We couldn't locate a minor phylum with the identifier "<strong>{id}</strong>". 
            Please check the taxonomy spelling or explore our complete catalog.
          </p>
          <Link to="/phyla" className="not-found-btn">
            <ArrowLeft size={18} />
            <span>Return to All 22 Phyla</span>
          </Link>
        </div>
      </div>
    );
  }

  const { prev, next } = getAdjacentPhyla(phylum.id);

  // Anatomical systems list for characteristic cards
  const systemCards = [
    { title: "Body Organization", description: phylum.bodyOrganization, category: "Body Organization" },
    { title: "Digestive System", description: phylum.digestiveSystem, category: "Digestive System" },
    { title: "Nervous System", description: phylum.nervousSystem, category: "Nervous System" },
    { title: "Circulatory System", description: phylum.circulatorySystem, category: "Circulatory System" },
    { title: "Respiratory System", description: phylum.respiratorySystem, category: "Respiratory System" },
    { title: "Locomotion & Motility", description: phylum.locomotion, category: "Locomotion" },
    { title: "Reproduction & Life Cycle", description: phylum.reproduction, category: "Reproduction" },
    { title: "Feeding & Trophic Mode", description: phylum.feeding, category: "Default" },
  ];

  return (
    <div className="phylum-detail-page" style={{ '--phylum-theme': phylum.accentColor || '#0d9488' }}>
      {/* Detail Header Hero */}
      <section className="detail-hero">
        <div className="section-container">
          <Breadcrumbs
            items={[
              { label: 'All Phyla', to: '/phyla' },
              { label: phylum.name }
            ]}
          />

          <div className="detail-hero-grid">
            {/* Left: Phylum Identity & Intro */}
            <div className="detail-hero-info">
              <div className="detail-tag-row">
                <span className="detail-clade-badge">
                  <Dna size={14} />
                  <span>{phylum.clade}</span>
                </span>
                <span className="detail-symmetry-badge">
                  {phylum.symmetry}
                </span>
              </div>

              <h1 className="detail-phylum-name">{phylum.name}</h1>
              {phylum.commonName && (
                <div className="detail-common-name">{phylum.commonName}</div>
              )}

              {/* Pronunciation & Etymology */}
              <div className="detail-etymology-box">
                {phylum.pronunciation && (
                  <span className="etymology-pronounce">
                    <strong>Pronunciation:</strong> {phylum.pronunciation}
                  </span>
                )}
                {phylum.etymology && (
                  <span className="etymology-meaning">
                    <strong>Etymology:</strong> {phylum.etymology}
                  </span>
                )}
              </div>

              <p className="detail-short-desc">{phylum.shortDescription}</p>

              {/* Quick classification pill row */}
              <div className="detail-pill-row">
                <div className="detail-pill">
                  <span className="pill-title">Cavity:</span>
                  <span className="pill-value">{phylum.bodyCavity.split(' ')[0]}</span>
                </div>
                <div className="detail-pill">
                  <span className="pill-title">Germ Layers:</span>
                  <span className="pill-value">{phylum.germLayers.split(' ')[0]}</span>
                </div>
                <div className="detail-pill">
                  <span className="pill-title">Habitat:</span>
                  <span className="pill-value">{phylum.habitat.split(' ')[0]}</span>
                </div>
              </div>
            </div>

            {/* Right: Specimen Image Card */}
            <div className="detail-hero-media">
              <div className="detail-specimen-card">
                <PhylumImage
                  src={phylum.image}
                  alt={`${phylum.name} high-resolution scientific specimen`}
                  id={phylum.id}
                  name={phylum.name}
                  accentColor={phylum.accentColor}
                  aspectRatio="4/3"
                  className="detail-main-image"
                />
                <div className="specimen-caption">
                  <span className="caption-label">Representative Specimen</span>
                  <span className="caption-taxon">{phylum.representativeOrganisms[0]?.scientificName || phylum.name}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <div className="section-container detail-main-content">
        {/* Quick Facts Panel */}
        <section className="detail-section">
          <QuickFacts phylum={phylum} />
        </section>

        {/* Overview Section */}
        <section className="detail-section">
          <div className="detail-section-header">
            <span className="section-kicker">Taxonomic Synthesis</span>
            <h2 className="detail-section-title">Overview & General Morphology</h2>
          </div>
          <div className="detail-overview-card">
            <p className="detail-overview-lead">
              The phylum <strong>{phylum.name}</strong> ({phylum.commonName || 'minor lineage'}) occupies a distinctive place in metazoan taxonomy. 
              Classified under <em>{phylum.subkingdom || 'Bilateria'}</em>, members of this phylum display an extraordinary body plan that distinguishes them from all other animal groups.
            </p>
            <p className="detail-overview-text">
              {phylum.shortDescription} Adaptations such as their {phylum.bodyOrganization.toLowerCase()} and specialized {phylum.locomotion.toLowerCase()} allow them to thrive within their primary niche: {phylum.habitat.toLowerCase()}.
            </p>
          </div>
        </section>

        {/* Key Characteristics & Anatomical Systems */}
        <section className="detail-section">
          <div className="detail-section-header">
            <span className="section-kicker">Physiology & Systems</span>
            <h2 className="detail-section-title">Key Anatomical Systems</h2>
            <p className="detail-section-desc">
              Comparative analysis of primary organ systems across the {phylum.name} body plan.
            </p>
          </div>
          <div className="characteristics-grid">
            {systemCards.map((sys, idx) => (
              <CharacteristicCard
                key={idx}
                title={sys.title}
                description={sys.description}
                category={sys.category}
              />
            ))}
          </div>
        </section>

        {/* Detailed Body Structure Section */}
        <section className="detail-section">
          <div className="detail-section-header">
            <span className="section-kicker">Morphological Blueprint</span>
            <h2 className="detail-section-title">Body Structure & Anatomy</h2>
          </div>
          <div className="body-structure-card">
            {phylum.image && phylum.image.startsWith('/images/phyla/') && (
              <div className="body-structure-visual">
                <img
                  src={phylum.image}
                  alt={`${phylum.name} detailed morphological schematic`}
                  className="body-structure-img"
                  loading="lazy"
                />
                <div className="structure-img-badge">
                  <span>Labelled Anatomical Blueprint</span>
                </div>
              </div>
            )}
            <div className="structure-content">
              <p className="structure-text">{phylum.bodyStructure}</p>
              <div className="structure-highlights">
                <div className="structure-highlight-item">
                  <div className="highlight-bullet" />
                  <div>
                    <strong>Symmetry Alignment:</strong> {phylum.symmetry}
                  </div>
                </div>
                <div className="structure-highlight-item">
                  <div className="highlight-bullet" />
                  <div>
                    <strong>Embryological Tissues:</strong> {phylum.germLayers}
                  </div>
                </div>
                <div className="structure-highlight-item">
                  <div className="highlight-bullet" />
                  <div>
                    <strong>Internal Cavity (Coelom):</strong> {phylum.bodyCavity}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Habitat and Distribution Section */}
        <section className="detail-section">
          <div className="detail-section-header">
            <span className="section-kicker">Biogeography</span>
            <h2 className="detail-section-title">Habitat & Global Distribution</h2>
          </div>
          <div className="habitat-card">
            <div className="habitat-icon-box">
              <Globe size={28} />
            </div>
            <div className="habitat-info">
              <h3 className="habitat-title">{phylum.habitat}</h3>
              <p className="habitat-desc">
                Organisms of the phylum {phylum.name} are distributed according to strict environmental and ecological parameters. 
                Their feeding mechanism—{phylum.feeding.toLowerCase()}—is directly tuned to extracting nutrients from this microenvironment, establishing vital trophic connections within local benthic or parasitic food webs.
              </p>
            </div>
          </div>
        </section>

        {/* Representative Organisms */}
        {phylum.representativeOrganisms && phylum.representativeOrganisms.length > 0 && (
          <section className="detail-section">
            <div className="detail-section-header">
              <span className="section-kicker">Type Taxa</span>
              <h2 className="detail-section-title">Representative Organisms</h2>
              <p className="detail-section-desc">
                Prominent genera and model species studied in laboratory and field zoology.
              </p>
            </div>
            <div className="organisms-grid">
              {phylum.representativeOrganisms.map((org, idx) => (
                <div key={idx} className="organism-card">
                  <div className="organism-media">
                    <PhylumImage
                      src={org.image}
                      alt={org.name}
                      id={phylum.id}
                      name={org.name}
                      accentColor={phylum.accentColor}
                      aspectRatio="16/9"
                    />
                  </div>
                  <div className="organism-body">
                    <h3 className="organism-name">{org.name}</h3>
                    <div className="organism-scientific">{org.scientificName}</div>
                    <p className="organism-desc">{org.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Key Evolutionary Characteristics */}
        {phylum.keyCharacteristics && phylum.keyCharacteristics.length > 0 && (
          <section className="detail-section">
            <div className="detail-section-header">
              <span className="section-kicker">Diagnostic Traits</span>
              <h2 className="detail-section-title">Defining Phylum Characteristics</h2>
            </div>
            <div className="diagnostic-traits-grid">
              {phylum.keyCharacteristics.map((trait, idx) => (
                <div key={idx} className="diagnostic-trait-card">
                  <div className="trait-icon-wrapper">
                    <Sparkles size={16} />
                  </div>
                  <div>
                    <h4 className="trait-title">{trait.title}</h4>
                    <p className="trait-desc">{trait.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Interesting Facts */}
        {phylum.interestingFacts && phylum.interestingFacts.length > 0 && (
          <section className="detail-section">
            <div className="detail-section-header">
              <span className="section-kicker">Zoological Curiosities</span>
              <h2 className="detail-section-title">Interesting Facts</h2>
            </div>
            <div className="facts-grid">
              {phylum.interestingFacts.map((fact, idx) => (
                <FactCard key={idx} fact={fact} index={idx} />
              ))}
            </div>
          </section>
        )}

        {/* Scientific Importance */}
        <section className="detail-section">
          <div className="detail-section-header">
            <span className="section-kicker">Phylogenetics & Research</span>
            <h2 className="detail-section-title">Scientific Importance</h2>
          </div>
          <div className="scientific-importance-card">
            <div className="importance-icon-wrapper">
              <Microscope size={28} />
            </div>
            <div className="importance-content">
              <h3 className="importance-title">Why {phylum.name} Matters in Modern Science</h3>
              <p className="importance-text">{phylum.scientificImportance}</p>
            </div>
          </div>
        </section>

        {/* Bottom Pagination & Navigation */}
        <section className="phylum-nav-footer">
          <div className="phylum-nav-grid">
            {prev && (
              <Link to={`/phyla/${prev.id}`} className="phylum-nav-item nav-prev">
                <ChevronLeft size={20} className="nav-arrow" />
                <div className="nav-item-content">
                  <span className="nav-label">Previous Phylum</span>
                  <span className="nav-name">{prev.name}</span>
                </div>
              </Link>
            )}

            <Link to="/phyla" className="phylum-nav-all">
              <Layers size={18} />
              <span>Back to All 22 Phyla</span>
            </Link>

            {next && (
              <Link to={`/phyla/${next.id}`} className="phylum-nav-item nav-next">
                <div className="nav-item-content">
                  <span className="nav-label">Next Phylum</span>
                  <span className="nav-name">{next.name}</span>
                </div>
                <ChevronRight size={20} className="nav-arrow" />
              </Link>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}

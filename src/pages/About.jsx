import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import { 
  Compass, 
  Dna, 
  GitMerge, 
  Layers, 
  ShieldCheck, 
  BookOpen, 
  Info, 
  ArrowRight,
  Sparkles,
  TreePine,
  CheckCircle2
} from 'lucide-react';

export default function About() {
  return (
    <div className="about-page">
      <div className="page-header-banner">
        <div className="section-container">
          <Breadcrumbs items={[{ label: 'About' }]} />

          <div className="page-header-content">
            <div className="page-kicker-tag">
              <BookOpen size={16} />
              <span>Project Overview & Zoology Reference</span>
            </div>
            <h1 className="page-title">About the Minor Phyla Encyclopedia</h1>
            <p className="page-lead">
              A curated digital educational resource designed to illuminate the underappreciated, bizarre, and foundational lineages of the Animal Kingdom.
            </p>
          </div>
        </div>
      </div>

      <div className="section-container about-page-body">
        {/* Purpose Section */}
        <section className="about-section">
          <div className="about-grid">
            <div className="about-text-col">
              <span className="section-kicker">Core Mission</span>
              <h2 className="about-section-title">Purpose of This Encyclopedia</h2>
              <p>
                In standard biology education, the immense diversity of the Animal Kingdom (Metazoa) is almost universally illustrated using a handful of "major" phyla: <em>Arthropoda</em> (insects, crustaceans, spiders), <em>Mollusca</em> (snails, squids, clams), <em>Chordata</em> (vertebrates), and <em>Cnidaria</em> (jellies, corals).
              </p>
              <p>
                However, nature is far more inventive than textbooks suggest. Beyond these dominant branches lie <strong>approximately 24 to 28 minor phyla</strong>—groups containing fewer species or restricted geographic ranges, yet exhibiting breathtaking anatomical specializations and radical evolutionary experiments.
              </p>
              <p>
                The <strong>Minor Phyla Encyclopedia</strong> was built to provide students, educators, and curious naturalists with a unified, visually engaging, and scientifically rigorous reference for these remarkable organisms.
              </p>
            </div>

            <div className="about-card-col">
              <div className="about-highlight-card">
                <div className="highlight-card-header">
                  <Compass size={24} className="text-teal" />
                  <h3>Encyclopedia Highlights</h3>
                </div>
                <ul className="about-check-list">
                  <li>
                    <CheckCircle2 size={18} className="check-icon" />
                    <span><strong>22 Core Minor Phyla:</strong> Exhaustive profiles spanning Placozoa to Hemichordata.</span>
                  </li>
                  <li>
                    <CheckCircle2 size={18} className="check-icon" />
                    <span><strong>Centralized Taxonomic Data:</strong> Standardized anatomical, ecological, and genetic metrics.</span>
                  </li>
                  <li>
                    <CheckCircle2 size={18} className="check-icon" />
                    <span><strong>Zero Broken Visuals:</strong> Dynamic high-resolution scientific media backed by vector morphological schematics.</span>
                  </li>
                  <li>
                    <CheckCircle2 size={18} className="check-icon" />
                    <span><strong>Full Dynamic Filtering:</strong> Instantly filter by symmetry, coelom status, and ecological niche.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Tree of Life Graphic & Concept */}
        <section className="about-section">
          <div className="phylogenetic-diagram-box">
            <div className="diagram-header">
              <TreePine size={24} className="text-emerald" />
              <h3>The Metazoan Tree of Life</h3>
              <p className="diagram-subtitle">Where do the minor phyla fit into animal evolution?</p>
            </div>

            <div className="diagram-tree-visual">
              <div className="tree-node node-root">
                <span className="node-title">Kingdom Animalia (Metazoa)</span>
                <span className="node-sub">Ancestral colonial choanoflagellates (~600+ Ma)</span>
              </div>

              <div className="tree-branches">
                {/* Branch 1: Basal Non-Bilateria */}
                <div className="tree-branch-col">
                  <div className="tree-branch-badge badge-basal">Basal Non-Bilateria</div>
                  <div className="tree-branch-card">
                    <h4>Placozoa</h4>
                    <p>Flat plate organisms, 2 cell sheets, no gut or nervous system.</p>
                  </div>
                </div>

                {/* Branch 2: Xenacoelomorpha */}
                <div className="tree-branch-col">
                  <div className="tree-branch-badge badge-xena">Xenacoelomorpha</div>
                  <div className="tree-branch-card">
                    <h4>Acoelomorpha & Xenoturbellida</h4>
                    <p>Basal bilaterians without anus or coelom; deep phylogenetic roots.</p>
                  </div>
                </div>

                {/* Branch 3: Spiralia / Lophotrochozoa */}
                <div className="tree-branch-col">
                  <div className="tree-branch-badge badge-spir">Spiralia / Lophotrochozoa</div>
                  <div className="tree-branch-card">
                    <h4>Lophophorates & Gnathifera</h4>
                    <p>Brachiopoda, Phoronida, Bryozoa, Rotifera, Nemertea, Sipuncula, Echiura.</p>
                  </div>
                </div>

                {/* Branch 4: Ecdysozoa */}
                <div className="tree-branch-col">
                  <div className="tree-branch-badge badge-ecdy">Ecdysozoa (Molting)</div>
                  <div className="tree-branch-card">
                    <h4>Scalidophora & Panarthropoda</h4>
                    <p>Tardigrada, Onychophora, Priapulida, Kinorhyncha, Loricifera, Nematomorpha.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Are They Important */}
        <section className="about-section">
          <span className="section-kicker">Zoological Value</span>
          <h2 className="about-section-title">Why Study Minor Phyla?</h2>
          
          <div className="about-values-grid">
            <div className="about-val-card">
              <div className="val-icon-box">
                <Dna size={22} />
              </div>
              <h3>Resolving Evolutionary Transitions</h3>
              <p>
                Phyla like <em>Onychophora</em> (velvet worms) preserve soft-bodied anatomical transitions between annelid worms and jointed arthropods. Meanwhile, <em>Brachiopoda</em> and <em>Phoronida</em> reveal how suspension-feeding lophophores evolved.
              </p>
            </div>

            <div className="about-val-card">
              <div className="val-icon-box">
                <Sparkles size={22} />
              </div>
              <h3>Biomedical & Biomaterial Discoveries</h3>
              <p>
                The damage suppressor (Dsup) proteins of <em>Tardigrada</em> are being applied to human cell preservation. The bio-glues of <em>Onychophora</em> and anti-cancer bryostatins from <em>Ectoprocta</em> drive next-generation therapeutics.
              </p>
            </div>

            <div className="about-val-card">
              <div className="val-icon-box">
                <GitMerge size={22} />
              </div>
              <h3>Challenging Biological Dogmas</h3>
              <p>
                In 2010, the discovery of living, reproducing <em>Loricifera</em> in oxygen-free Mediterranean deep-sea basins shattered the long-standing belief that all multicellular animals require oxygen to survive.
              </p>
            </div>
          </div>
        </section>

        {/* Educational Disclaimer Section */}
        <section className="about-section" id="disclaimer">
          <div className="disclaimer-callout">
            <div className="disclaimer-icon-wrapper">
              <Info size={24} />
            </div>
            <div className="disclaimer-content">
              <h3 className="disclaimer-title">Educational & Taxonomic Disclaimer</h3>
              <p>
                Biological taxonomy is inherently dynamic. With the continuous advance of phylogenomics, high-throughput transcriptomics, and microscopic discovery, classifications and phylogenetic placements evolve over time.
              </p>
              <p>
                For example, while classical zoology treated <strong>Sipuncula</strong> and <strong>Echiura</strong> as independent phyla, contemporary molecular phylogenetics confirms they are secondarily unsegmented lineages nested deeply within the phylum Annelida. Similarly, <strong>Acanthocephala</strong> is now widely recognized as highly derived parasitic Rotifera (together forming Syndermata).
              </p>
              <p>
                In this encyclopedia, these lineages are maintained as discrete educational entries to honor their historical zoological descriptions, unique morphology, and immense comparative significance.
              </p>
            </div>
          </div>
        </section>

        {/* CTA to start browsing */}
        <div className="about-bottom-cta">
          <h2>Ready to Begin Your Zoological Journey?</h2>
          <p>Explore our complete catalog of all 22 minor phyla with live filters and anatomical breakdowns.</p>
          <Link to="/phyla" className="hero-cta-primary">
            <span>Browse All 22 Phyla</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
}

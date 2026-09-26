# Minor Phyla Encyclopedia 🔬🪱

An authoritative, modern educational visual encyclopedia documenting the **24 minor phyla of the Animal Kingdom (Metazoa)**.

Explore unique body plans, radical morphology, deep phylogenetic roots, extreme cryptobiosis, and keystone ecological roles across Earth's lesser-known animal branches.

🌐 **Live Deployment:** [https://temporary-rushing-maroon-ymzjqfs.vercel.app](https://temporary-rushing-maroon-ymzjqfs.vercel.app)

---

## 🌟 Features

- **24 Minor Phyla Covered:** Comprehensive profiles for *Placozoa, Mesozoa, Acoelomorpha, Xenoturbellida, Gastrotricha, Gnathostomulida, Micrognathozoa, Rotifera, Acanthocephala, Cycliophora, Entoprocta, Ectoprocta (Bryozoa), Phoronida, Brachiopoda, Chaetognatha, Nemertea, Priapulida, Kinorhyncha, Loricifera, Sipuncula, Echiura, Tardigrada, Onychophora, and Nematomorpha*.
- **Live Search & Filtering:** Dynamic instant query filtering across phylum names, common names, descriptions, and representative model organisms.
- **Multidimensional Filters:** Filter by Body Symmetry (*Bilateral, Asymmetrical*), Habitat (*Marine, Freshwater, Terrestrial, Parasitic*), and Coelom/Cavity (*Acoelomate, Pseudocoelomate, Coelomate*).
- **In-Depth Individual Phylum Pages (`/phyla/:id`):**
  - High-resolution scientific specimens with automatic SVG morphological diagram fallbacks
  - Pronunciation & etymology
  - 8-point Quick Facts taxonomic panel
  - 8 anatomical system cards (Body organization, digestive, nervous, circulatory, respiratory, locomotion, reproduction, feeding)
  - Morphological structure & body blueprint
  - Biogeographical distribution & ecology
  - Type taxa & representative model organisms
  - Curated interesting biological facts
  - Scientific importance in evolution, comparative zoology, and medicine
  - Sequential previous/next navigation
- **Bioluminescent Dark & Light Mode:** Toggleable theme with persistent storage in `localStorage`.
- **Phylogenetic Tree of Life:** Educational breakdown of Metazoan clades (*Basal Non-Bilateria, Xenacoelomorpha, Spiralia / Lophotrochozoa, Ecdysozoa*).
- **Responsive Architecture:** Optimized for desktop, tablet, and mobile with accessible navigation.
- **Zero Broken Images:** Resilient `PhylumImage` component featuring skeleton loading and custom vector schematics.

---

## 🛠️ Tech Stack

- **Framework:** React 19 + Vite
- **Routing:** React Router DOM (v7)
- **Icons:** Lucide React
- **Styling:** Modern Vanilla CSS (CSS variables, glassmorphism, responsive CSS grid)
- **Deployment:** Vercel (SPA rewrites configured in `vercel.json`)
- **Data Source:** Static centralized taxonomy dataset (`src/data/phyla.js`)

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/KAVIN-KNIGHT/minor-phyla-encyclopedia.git

# Navigate into the project directory
cd minor-phyla-encyclopedia

# Install dependencies
npm install
```

### Running Locally

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build

```bash
npm run build
npm run preview
```

---

## 📁 Project Structure

```
minor-phyla/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── BackToTop.jsx
│   │   ├── Breadcrumbs.jsx
│   │   ├── CharacteristicCard.jsx
│   │   ├── FactCard.jsx
│   │   ├── FilterBar.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── PhylumCard.jsx
│   │   ├── PhylumGrid.jsx
│   │   ├── PhylumImage.jsx
│   │   ├── QuickFacts.jsx
│   │   ├── ScrollToTop.jsx
│   │   └── SearchBar.jsx
│   ├── context/
│   │   └── ThemeContext.jsx
│   ├── data/
│   │   └── phyla.js            # Centralized dataset for all 24 phyla
│   ├── pages/
│   │   ├── About.jsx           # Educational overview & Tree of Life
│   │   ├── Home.jsx            # Interactive catalog & highlights
│   │   ├── NotFound.jsx        # 404 handler
│   │   ├── Phyla.jsx           # Full taxonomy directory & sorting
│   │   └── PhylumDetail.jsx    # Dynamic individual phylum profile
│   ├── App.jsx
│   ├── index.css               # Design system & dark mode
│   └── main.jsx
├── vercel.json                 # SPA rewrite rules
├── package.json
└── vite.config.js
```

---

## 📜 License

Created for educational, reference, and academic exploration under the MIT License.

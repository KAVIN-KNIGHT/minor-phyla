// Minor Phyla of the Animal Kingdom
// Comprehensive educational taxonomy dataset

export const phylaData = [
  {
    id: "placozoa",
    name: "Placozoa",
    commonName: "Flat Plate Animals",
    pronunciation: "/ˌplæk.oʊˈzoʊ.ə/",
    etymology: "Greek 'plakos' (flat plate) + 'zoion' (animal)",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Trichoplax_adhaerens_photograph.png/640px-Trichoplax_adhaerens_photograph.png",
    accentColor: "#059669",
    shortDescription: "The structurally simplest non-parasitic animals on Earth, consisting of two thin epithelial cell layers without distinct organs, mouth, or nervous system.",
    kingdom: "Animalia",
    subkingdom: "Parazoa / Non-Bilateria",
    clade: "Placozoa",
    symmetry: "Asymmetrical",
    germLayers: "Two epithelial sheets (functionally diploblastic)",
    bodyCavity: "Acoelomate (absent)",
    habitat: "Tropical & subtropical marine benthic (shallow coastal reefs, intertidal biofilm)",
    bodyOrganization: "Cellular-tissue grade (approx. 6 cell types total)",
    digestiveSystem: "None; external ventral digestion by secreting enzymes onto substrate and phagocytosing dissolved nutrients",
    nervousSystem: "No neurons or synapses; peptidergic paracrine coordination and crystal cells functioning as gravity sensors",
    circulatorySystem: "Absent (diffusion sufficient across < 2 mm microscopic flat body)",
    respiratorySystem: "Cutaneous diffusion across cell layers",
    reproduction: "Asexual vegetative fission and swarmer budding; capable of sexual oocyte production",
    locomotion: "Ciliary gliding driven by thousands of monociliated ventral column cells; continuous amoeboid shape alterations",
    feeding: "Ventral glandular lysis of microalgae, cyanobacteria, and organic detritus biofilms",
    bodyStructure: "Body is an irregular, constantly shifting disc rarely exceeding 1-2 mm in diameter. It comprises an upper ciliated epithelium (dorsal), an intermediate fluid-filled fiber syncytium with contractile connective cells, and a dense ventral columnar epithelium armed with secretory gland cells and digestive cells.",
    representativeOrganisms: [
      {
        name: "Trichoplax adhaerens",
        scientificName: "Trichoplax adhaerens (Schulze, 1883)",
        description: "The classic model placozoan discovered crawling on aquarium walls in Graz, Austria. Holds one of the smallest animal nuclear genomes ever sequenced (~11,500 genes).",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Trichoplax_adhaerens_photograph.png/640px-Trichoplax_adhaerens_photograph.png"
      },
      {
        name: "Hong Kong Flat Placozoan",
        scientificName: "Hoilungia hongkongensis (Eitel et al., 2018)",
        description: "Described from brackish mangrove waters of Hong Kong, validating deep genetic divergence and cryptic speciation across placozoan lineages.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Hoilungia_hongkongensis.jpg/640px-Hoilungia_hongkongensis.jpg"
      }
    ],
    keyCharacteristics: [
      { title: "Minimal Cell Diversity", description: "Contains only six confirmed morphological cell types, representing the simplest multicellular animal architecture known." },
      { title: "No Gut or Anus", description: "Lacks any internal digestive cavity; feeds by arching its body over algae to form a temporary external digestive pocket." },
      { title: "Aneurogenic Coordination", description: "Coordinates directional gliding, pauses, and feeding without a single neuron, using peptide secretion and calcium fluxes." },
      { title: "Crystal Cells as Statoliths", description: "Bears specialized cells harboring mobile birefringent calcite crystals that act as primitive gravity-sensing statocysts." },
      { title: "Plastic Shape", description: "Constantly reshapes its fluid boundaries like a giant multicellular amoeba as it crawls over rocky surfaces." },
      { title: "Compact Genome", description: "Possesses an ultra-compact genome with primitive regulatory intron architectures and ancestral animal gene cascades." }
    ],
    interestingFacts: [
      "Placozoans can tear themselves in half to reproduce asexually, regenerating two fully functional organisms in mere hours.",
      "Despite having no nerve cells, they produce many neuropeptides identical to those found in human brains (such as RFamide and endorphin-like signals).",
      "Trichoplax was initially mistaken for a bizarre amoeba or a larval stage of hydrozoans before its true metazoan nature was established.",
      "Placozoan cells can be mechanically dissociated through fine mesh, after which the dispersed individual cells reaggregate into healthy living organisms."
    ],
    scientificImportance: "Placozoans occupy a foundational branch near the very root of the Metazoan phylogenetic tree. Investigating their genome has revealed how fundamental animal traits—such as epithelial adhesion, cell-to-cell signaling, and developmental signaling pathways like Wnt and Notch—evolved prior to the advent of true tissues, brains, and bilateral symmetry."
  },
  {
    id: "mesozoa",
    name: "Mesozoa",
    commonName: "Middle Animals / Rhombozoans & Orthonectids",
    pronunciation: "/ˌmɛz.oʊˈzoʊ.ə/",
    etymology: "Greek 'mesos' (middle) + 'zoion' (animal), once thought to bridge protozoa and metazoa",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Dicyema_macrocephalum.png/640px-Dicyema_macrocephalum.png",
    accentColor: "#d97706",
    shortDescription: "Enigmatic, ultra-simplified ciliated endoparasites dwelling inside the renal appendages of cephalopods and tissues of marine invertebrates.",
    kingdom: "Animalia",
    subkingdom: "Bilateria (secondarily reduced)",
    clade: "Spiralia / Lophotrochozoa",
    symmetry: "Bilateral (secondarily modified cylindrical/radial)",
    germLayers: "Two cell layers (outer ciliated somatoderm and central axial cell)",
    bodyCavity: "Acoelomate (absent)",
    habitat: "Endoparasitic in renal organs of benthic octopuses, squids, and tissues of echinoderms/brittle stars",
    bodyOrganization: "Extremely reduced cellular grade (~20 to 40 cells total per individual)",
    digestiveSystem: "Absent; microvillar somatoderm directly pinocytoses and absorbs low-molecular-weight nutrients from host renal fluid",
    nervousSystem: "Entirely absent; no ganglia, nerve cords, or sensory receptors",
    circulatorySystem: "Absent",
    respiratorySystem: "Cutaneous diffusion directly across host urine interface",
    reproduction: "Alternation of asexual phases (nematogens producing vermiform larvae) and sexual phases (rhombogens producing infusoriform larvae)",
    locomotion: "Ciliary swimming using external spiraling somatoderm rows",
    feeding: "Direct trans-membrane osmotic absorption of amino acids and glucose inside cephalopod kidneys",
    bodyStructure: "The adult rhombozoan body comprises a single gigantic axial cell containing reproductive cells, enclosed by a single layer of 20–30 ciliated outer somatic cells (somatoderm). The anterior polar cells form a calotte used to anchor into the host renal folds.",
    representativeOrganisms: [
      {
        name: "Giant Cuttlefish Dicyemid",
        scientificName: "Dicyema macrocephalum (van Beneden, 1876)",
        description: "Parasite of benthic cuttlefish and octopuses, exhibiting a swollen anterior calotte anchoring to host renal appendages.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Dicyema_macrocephalum.png/640px-Dicyema_macrocephalum.png"
      },
      {
        name: "Ophiuroid Orthonectid",
        scientificName: "Rhopalura ophiocomae (Giard, 1877)",
        description: "An orthonectid that forms multinucleated syncytial plasmodia within the gonads and coelom of brittle stars, castrating the host.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Rhopalura_ophiocomae.png/640px-Rhopalura_ophiocomae.png"
      }
    ],
    keyCharacteristics: [
      { title: "Constant Cell Number (Eutely)", description: "Each species exhibits a strictly determined, uniform count of somatic cells in the adult stage." },
      { title: "Complete Lack of Organs", description: "Lacks mouth, gut, anus, muscles, coelom, excretory nephridia, and nervous architecture." },
      { title: "Ciliated Outer Layer", description: "Body covered by a single-layered jacket of ciliated cells that power swimming when released." },
      { title: "Axial Central Cell", description: "Interior houses one or two colossal elongate axial cells inside which embryonic agametocytes proliferate." },
      { title: "Host-Synchronized Life Cycle", description: "Switches from asexual production to sexual disperser larvae when the cephalopod host approaches sexual maturity." },
      { title: "Extreme Secondary Reduction", description: "Genomic sequencing proves they are degenerated spiralian worms rather than primitive 'missing links'." }
    ],
    interestingFacts: [
      "In the 19th century, zoologists believed Mesozoa were living fossils linking unicellular protozoa to multicellular animals.",
      "Modern phylogenomics confirmed they are actually heavily simplified spiralian worms related to annelids and mollusks that shed their organs for parasitism.",
      "Virtually every wild benthic octopus specimen collected carries thousands of dicyemids in its kidneys without apparent illness.",
      "The infusorigens (hermaphroditic sexual structures) develop entirely inside the cytoplasm of the giant axial cell."
    ],
    scientificImportance: "Mesozoa represent one of the most drastic examples of evolutionary morphological degeneration (simplification through parasitism) in the Metazoa, demonstrating how complex bilaterian genomes can discard whole organ systems while retaining precise developmental cycles."
  },
  {
    id: "acoelomorpha",
    name: "Acoelomorpha",
    commonName: "Acoel Flatworms & Nemertodermatids",
    pronunciation: "/eɪˌsiː.loʊˈmɔːr.fə/",
    etymology: "Greek 'a-' (without) + 'koilos' (cavity) + 'morphe' (form)",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Symsagittifera_roscoffensis.jpg/640px-Symsagittifera_roscoffensis.jpg",
    accentColor: "#0284c7",
    shortDescription: "Small, soft-bodied bilateral marine worms lacking a gut lumen, brain, and coelom, holding a crucial position near the base of bilaterian animal evolution.",
    kingdom: "Animalia",
    subkingdom: "Bilateria",
    clade: "Xenacoelomorpha",
    symmetry: "Bilateral",
    germLayers: "Triploblastic (ectoderm, mesoderm, endoderm-derived tissue)",
    bodyCavity: "Acoelomate (solid cellular parenchyma)",
    habitat: "Marine sediment interstitial spaces, mud flats, coral reefs, and shallow intertidal sands",
    bodyOrganization: "Organ-system grade (without true cavities or through-gut)",
    digestiveSystem: "Incomplete; ventral mouth leading into a pharynx and a syncytial central digestive mass without an epithelial lining or anus",
    nervousSystem: "Subepidermal nerve plexus with anterior brain-like commissural rings and an anterior statocyst containing a single statolith",
    circulatorySystem: "Absent",
    respiratorySystem: "Cutaneous diffusion across ciliated epidermis",
    reproduction: "Simultaneous hermaphrodites; internal fertilization via copulatory stylets or hypodermic impregnation; direct development",
    locomotion: "Ciliary beating across ventral surface combined with smooth longitudinal muscle contractions",
    feeding: "Carnivorous on micro-meiofauna, diatoms, or sustained entirely by symbiotic photosynthetic microalgae",
    bodyStructure: "Minute flattened or cylindrical worms typically under 2-3 mm. Completely ciliated epidermis with interconnecting rootlets. Interior consists of a syncytial digestive parenchyma where food particles are engulfed directly by mobile phagocytic cells.",
    representativeOrganisms: [
      {
        name: "Roscoff Green Worm",
        scientificName: "Symsagittifera roscoffensis (Graff, 1891)",
        description: "Famous photosynthetic marine acoel harboring millions of endosymbiotic Tetraselmis microalgae in Brittany and Atlantic intertidal sands.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Symsagittifera_roscoffensis.jpg/640px-Symsagittifera_roscoffensis.jpg"
      },
      {
        name: "Red Acoel Worm",
        scientificName: "Convolutriloba retrogemma (Hendelberg & Åkesson, 1988)",
        description: "A common pest in marine reef aquaria known for shield-shaped lobes and rapid asexual budding.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Convolutriloba_hastifera.jpg/640px-Convolutriloba_hastifera.jpg"
      }
    ],
    keyCharacteristics: [
      { title: "No Gut Cavity", description: "Food enters directly into a syncytial digestive mass that lacks any formal epithelial boundary." },
      { title: "Frontal Organ", description: "Possesses a prominent anterior sensory glandular complex used for mucus trail formation and orientation." },
      { title: "Statocyst with Single Statolith", description: "Diagnostic balance organ with one mineralized lithocyte (in Acoela) or two (in Nemertodermatida)." },
      { title: "Interconnected Ciliary Rootlets", description: "Epidermal cilia possess characteristic interconnected rootlets that reinforce coordinated swimming." },
      { title: "High Regenerative Capacity", description: "Possesses neoblast-like stem cells enabling regeneration of lost body segments and heads." },
      { title: "No Protonephridia", description: "Completely lacks specialized excretory flame cells or nephridia." }
    ],
    interestingFacts: [
      "Symsagittifera roscoffensis sunbathes on beaches at low tide, turning entire beaches emerald green before burrowing before the incoming surf.",
      "Adult Symsagittifera stop eating food entirely and obtain 100% of their nutrition from the sunlight harvested by their symbiotic algae.",
      "Acoelomorphs were long grouped with flatworms (Platyhelminthes), but molecular phylogenetics demonstrated they split off hundreds of millions of years earlier.",
      "Their nervous system lacks a true myelin sheath, and their neurons are scattered throughout a diffuse basiepithelial network."
    ],
    scientificImportance: "Acoelomorpha is pivotal in evolutionary zoology: scientists fiercely debate whether they represent the ancestral, pre-coelomic bilaterian archetype ('Urbilateria') or a secondarily simplified lineage within deuterostomes (Xenambulacraria)."
  },
  {
    id: "xenoturbellida",
    name: "Xenoturbellida",
    commonName: "Strange Flatworms / Purple Sock Worms",
    pronunciation: "/ˌzɛn.oʊ.tɜːrˈbɛl.ɪ.də/",
    etymology: "Greek 'xenos' (strange/alien) + 'turbella' (little whirlpool, flatworm genus)",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Xenoturbella_monstrosa.jpg/640px-Xenoturbella_monstrosa.jpg",
    accentColor: "#9333ea",
    shortDescription: "Marine benthic animals resembling discarded socks, famously perplexing taxonomists with their baffling lack of gut cavity, brain, or gonads.",
    kingdom: "Animalia",
    subkingdom: "Bilateria",
    clade: "Xenacoelomorpha",
    symmetry: "Bilateral",
    germLayers: "Triploblastic",
    bodyCavity: "Acoelomate (solid parenchymal core)",
    habitat: "Cold, deep marine muds and hydrothermal/cold seep vents (up to 3,700 m deep)",
    bodyOrganization: "Organ-grade (remarkably devoid of complex organ systems)",
    digestiveSystem: "Blind-ended sac with a mid-ventral mouth; no through-gut, no intestine, and no anus",
    nervousSystem: "Basiepithelial nerve net without cephalic ganglia (no brain) or distinct longitudinal nerve cords",
    circulatorySystem: "Absent",
    respiratorySystem: "Cutaneous diffusion across thick, ciliated epidermis",
    reproduction: "Hermaphroditic; gametes shed freely into the parenchymal body tissues and released through the mouth; direct lecithotrophic development",
    locomotion: "Slow ciliary gliding through benthic sediments aided by longitudinal and circular muscular contractions",
    feeding: "Feeds on deep-sea bivalve mollusks (possibly taking in mucus, eggs, or decomposing tissues)",
    bodyStructure: "Flaccid, furrowed cylindrical body ranging from a few centimeters up to 20 cm in length. External epidermis is densely ciliated with a subepidermal basement membrane, an intraepidermal nerve net, and an anterior statocyst containing multiple flagellated statoliths.",
    representativeOrganisms: [
      {
        name: "Bock's Strange Worm",
        scientificName: "Xenoturbella bocki (Westblad, 1949)",
        description: "The original species discovered in Gullmarsfjorden, Sweden, measuring ~1-3 cm with yellowish-white coloration.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Xenoturbella_bocki.jpg/640px-Xenoturbella_bocki.jpg"
      },
      {
        name: "Monstrous Deep-Sea Sock",
        scientificName: "Xenoturbella monstrosa (Rouse et al., 2016)",
        description: "A deep-sea giant (up to 20 cm) discovered by ROV in Monterey Bay and Gulf of California, earning the viral moniker 'deep-sea purple sock'.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Xenoturbella_monstrosa.jpg/640px-Xenoturbella_monstrosa.jpg"
      }
    ],
    keyCharacteristics: [
      { title: "Statocyst with Mobile Statoliths", description: "Bears a unique apical statocyst filled with multiple oscillating round statoliths." },
      { title: "No Brain or Centralization", description: "The nervous system is an uncentralized net embedded entirely inside the base of the outer epidermis." },
      { title: "No Excretory Organs", description: "Lacks flame cells, nephridia, or any specialized organs for waste filtration." },
      { title: "No Permanent Gonads", description: "Eggs and sperm develop diffusely within the mesenchyme and exit via the digestive aperture." },
      { title: "Lateral Sensory Grooves", description: "Possesses distinct longitudinal and ring-like ciliated furrows suspected to function in chemosensation." },
      { title: "Deep-Sea Specialization", description: "Adapted to bathyal benthic sediments, hydrothermal fields, and whale fall ecosystems." }
    ],
    interestingFacts: [
      "In the late 1990s, DNA sequencing mistakenly grouped Xenoturbella inside Mollusca—it was later realized researchers had sequenced bivalve larvae the worm had eaten!",
      "Marine biologists nicknamed newly filmed deep-sea species 'purple socks' because of their wrinkled, limp, and toe-like appearance on the ocean floor.",
      "Despite reaching 20 cm in length, it has no heart, no brain, no bones, no eyes, and only a single ventral opening that serves as both entrance and exit.",
      "Only six living species have ever been formally described worldwide."
    ],
    scientificImportance: "Xenoturbellida has been called one of zoology's greatest taxonomic enigmas. Identifying its true evolutionary position (united with Acoelomorpha as Xenacoelomorpha) provides critical insights into the ancestral body plan of all Bilateria before the radiation of protostomes and deuterostomes."
  },
  {
    id: "gastrotricha",
    name: "Gastrotricha",
    commonName: "Hairybacks / Belly-Haired Worms",
    pronunciation: "/ˌɡæs.troʊˈtraɪ.kə/",
    etymology: "Greek 'gaster' (stomach/belly) + 'thrix' (hair), referring to ventral ciliation",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Chaetonotus_sp.jpg/640px-Chaetonotus_sp.jpg",
    accentColor: "#14b8a6",
    shortDescription: "Microscopic, bowling-pin-shaped aquatic invertebrates featuring a ciliated gliding belly, ornate cuticular scales/spines, and posterior duo-gland adhesive tubes.",
    kingdom: "Animalia",
    subkingdom: "Bilateria",
    clade: "Spiralia / Lophotrochozoa",
    symmetry: "Bilateral",
    germLayers: "Triploblastic",
    bodyCavity: "Acoelomate to pseudocoelomate (fluid-filled blastocoelomic space)",
    habitat: "Freshwater ponds, lakes, mosses, interstitial marine sand grains worldwide",
    bodyOrganization: "Organ-system grade with strict eutely (constant cell count in many tissues)",
    digestiveSystem: "Complete straight through-gut: subterminal mouth, muscular triradiate pumping pharynx, glandular intestine, and posterior anus",
    nervousSystem: "Bilobed cerebral ganglion flanking the pharynx, connected to paired lateral longitudinal nerve cords; tactile bristles and ciliary tufts",
    circulatorySystem: "Absent; nutrients and gases circulate through the interstitial body fluid",
    respiratorySystem: "Cutaneous diffusion across external cuticle",
    reproduction: "Simultaneous hermaphrodites in marine forms; obligate parthenogenesis (all-female populations) common in freshwater lineages",
    locomotion: "Smooth, rapid ciliary gliding on ventral bands; looping crawl using alternating cement and de-adhesive glands in the forked tail",
    feeding: "Vortical suction feeding of diatoms, microalgae, bacteria, and protozoa using the muscular pharynx",
    bodyStructure: "Body measures between 0.05 to 1.5 mm. Distinct head, neck, and elongate trunk ending in a characteristic forked furca. The cuticle is sculpted into complex overlapping shingles, scales, or barbed hooks. The tail features adhesive duo-gland tubes producing glue and dissolver chemicals.",
    representativeOrganisms: [
      {
        name: "Common Spiny Hairyback",
        scientificName: "Chaetonotus larus (Müller, 1773)",
        description: "Ubiquitous freshwater species covered in bifurcated cuticular spines, grazing on bacterial biofilms in pond detritus.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Chaetonotus_sp.jpg/640px-Chaetonotus_sp.jpg"
      },
      {
        name: "Marine Strap-Worm Gastrotrich",
        scientificName: "Macrodasys caudatus (Remane, 1927)",
        description: "Elongate interstitial marine gastrotrich with dozens of lateral adhesive tubes navigating deep intertidal sand pores.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Macrodasys_sp.png/640px-Macrodasys_sp.png"
      }
    ],
    keyCharacteristics: [
      { title: "Ventral Ciliary Bands", description: "Propelled smoothly by dense longitudinal tracts of locomotor cilia lining the underside of the trunk." },
      { title: "Duo-Gland Adhesive System", description: "Bears tail tubes with twin glands: one secretes immediate cement to anchor, the other secretes solvent to detach." },
      { title: "Triradiate Muscular Pharynx", description: "Powerful Y-shaped muscular suction pharynx adapted for inhaling microbial prey like a vacuum." },
      { title: "Ornate Cuticular Scales", description: "Non-chitinous cuticular armor displays intricate microscopic plates, needles, or curved anchors." },
      { title: "Eutelic Development", description: "Individual organs cease cell division following embryonic development, growing only via cell enlargement." },
      { title: "Instant Hatching", description: "Freshwater females lay durable resting eggs capable of surviving years of freezing and desiccation." }
    ],
    interestingFacts: [
      "Gastrotrichs have one of the shortest lifespans in the animal kingdom—most live, reproduce, and die in just 3 to 10 days.",
      "Their adhesive tail glands allow them to lock onto a sand grain in milliseconds, resisting turbulent surf before releasing instantly.",
      "Many freshwater species have abandoned males entirely for millions of years, reproducing purely through unfertilized diploid eggs.",
      "Under high-power microscopy, their gliding motion appears eerie and mechanical, like tiny swimming armadillos."
    ],
    scientificImportance: "Gastrotrichs are key constituents of benthic microbial food webs, bridging bacterial and protist production with higher trophic levels. Evolutionarily, their cuticle architecture and spiral cleavage provide crucial comparative benchmarks for Spiralian phylogenetics."
  },
  {
    id: "gnathostomulida",
    name: "Gnathostomulida",
    commonName: "Jaw Worms",
    pronunciation: "/ˌnæθ.oʊ.stəˈmjuː.lɪ.də/",
    etymology: "Greek 'gnathos' (jaw) + 'stoma' (mouth) + Latin '-ula' (diminutive)",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Gnathostomula_paradoxa.png/640px-Gnathostomula_paradoxa.png",
    accentColor: "#f59e0b",
    shortDescription: "Delicate, translucent marine interstitial worms equipped with hardened cuticular grasping jaws and a rasping basal plate for grazing anoxic black sand beds.",
    kingdom: "Animalia",
    subkingdom: "Bilateria",
    clade: "Gnathifera / Spiralia",
    symmetry: "Bilateral",
    germLayers: "Triploblastic",
    bodyCavity: "Acoelomate (tightly packed interstitial parenchyma)",
    habitat: "Marine interstitial sands, thriving in sulphide-rich, dysoxic/anoxic layers beneath the sediment surface",
    bodyOrganization: "Organ-system grade",
    digestiveSystem: "Incomplete; ventral mouth with hardened chitin-like jaws and basal plate, leading to a blind-ending sac-like intestine; no true anus",
    nervousSystem: "Basiepithelial nervous system with a frontal sensory organ, paired apical ganglia, and subepidermal longitudinal cords",
    circulatorySystem: "Absent",
    respiratorySystem: "Cutaneous diffusion; exceptionally adapted to low oxygen and high hydrogen sulphide environments",
    reproduction: "Hermaphrodites; internal fertilization via cuticularized copulatory stylet or hypodermic sperm injection; single large egg produced at a time",
    locomotion: "Ciliary gliding driven by monociliated epidermal cells, capable of swimming backwards by reversing ciliary stroke",
    feeding: "Grazes epibenthic bacteria, fungal hyphae, and diatoms off sand grains using articulated pincer jaws and a comb-like basal plate",
    bodyStructure: "Slender, ribbon-like body between 0.5 and 3 mm in length, divided into a sensory rostrum, head, and trunk. The epidermis is entirely monociliated (each cell bears only a single cilium, an ancient trait). The pharynx houses complex articulated pincer jaws.",
    representativeOrganisms: [
      {
        name: "Paradoxical Jaw Worm",
        scientificName: "Gnathostomula paradoxa (Ax, 1956)",
        description: "The seminal species described by Peter Ax, unlocking the discovery of this entire previously hidden phylum.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Gnathostomula_paradoxa.png/640px-Gnathostomula_paradoxa.png"
      },
      {
        name: "Clawed Jaw Worm",
        scientificName: "Onychognathia rhombocephala",
        description: "Distinguished by diamond-shaped rostrum and raptorial curved jaw pincers for tearing microbial mats.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Gnathostomulida_anatomy.png/640px-Gnathostomulida_anatomy.png"
      }
    ],
    keyCharacteristics: [
      { title: "Monociliated Epidermal Cells", description: "Uniquely among higher bilaterians, each epidermal cell bears only one single cilium, similar to cnidarians." },
      { title: "Hardened Pharyngeal Jaws", description: "Bears complex paired jaws with denticles and a serrated basal plate used to scrape microflora off grains." },
      { title: "Anoxic Thiotrophic Specialists", description: "Inhabits the chemocline (the boundary between oxygenated and black sulfidic sediments) where few animals survive." },
      { title: "Reversible Locomotion", description: "Able to instantly reverse the beat of its monocilia to back out of tight interstitial sand labyrinths." },
      { title: "Blind Digestive Sac", description: "Lacks an anus; digested residues are expelled back through the mouth or absorbed across parenchymal cells." },
      { title: "Sperm Morphology Diversity", description: "Exhibits wild sperm shapes, from non-motile giant spheres to spiral flagellated needles." }
    ],
    interestingFacts: [
      "Because they live deep in dark, smelly sulfidic marine muds, jaw worms were completely unknown to science until 1956.",
      "Their jaws are made of cross-linked cuticular proteins that survive unchanged long after the rest of the soft body decomposes.",
      "Each mature individual produces just one egg at a time, which ruptures through the body wall when laid, after which the mother heals.",
      "Gnathostomulids can tolerate concentrations of poisonous hydrogen sulfide that would be instantly lethal to fish and crabs."
    ],
    scientificImportance: "Gnathostomulids are foundational to the Gnathifera clade (which includes Rotifera, Micrognathozoa, and Chaetognatha). Their cuticular pharyngeal apparatus provides morphological proof of the deep evolutionary radiation of jawed microscopic bilaterians."
  },
  {
    id: "micrognathozoa",
    name: "Micrognathozoa",
    commonName: "Tiny Jaw Animals",
    pronunciation: "/ˌmaɪ.kroʊ.næθ.oʊˈzoʊ.ə/",
    etymology: "Greek 'mikros' (small) + 'gnathos' (jaw) + 'zoion' (animal)",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Limnognathia_maerski.jpg/640px-Limnognathia_maerski.jpg",
    accentColor: "#6366f1",
    shortDescription: "One of the newest animal phyla (described in 2000) from subarctic springs, bearing an astonishingly intricate jaw apparatus of 32 movable cuticular elements.",
    kingdom: "Animalia",
    subkingdom: "Bilateria",
    clade: "Gnathifera",
    symmetry: "Bilateral",
    germLayers: "Triploblastic",
    bodyCavity: "Acoelomate / blastocoelomate",
    habitat: "Cold, pristine subpolar freshwater moss springs and icy streams (Greenland, Crozet Islands)",
    bodyOrganization: "Organ-system grade",
    digestiveSystem: "Complete with mouth, 32-element jaw mastax, pharynx, stomach, and temporary dorsal anus formed during defecation",
    nervousSystem: "Cerebral ganglion with paired ventral nerve cords, sensory ciliated sensory pits, and stiff tactile bristles",
    circulatorySystem: "Absent",
    respiratorySystem: "Cutaneous diffusion across thin dorsal plates",
    reproduction: "Presumed parthenogenetic (only females discovered to date); produces both thin-shelled and thick-shelled resting eggs",
    locomotion: "Ciliary swimming using distinct ventral ciliary fields and an adhesive posterior pad",
    feeding: "Raptorial scraper of diatoms, microalgae, and cyanobacteria from moss fronds using its articulated jaw basket",
    bodyStructure: "Microscopic body (~100 to 150 µm long) divided into head, thorax, and abdomen with an expandable concertina bellows-like body wall. The head houses the jaw complex composed of fibrolamellar chitin plates and denticulated pincers. The ventral tail features a ciliated adhesive pad.",
    representativeOrganisms: [
      {
        name: "Mærsk's Dwarf Jaw",
        scientificName: "Limnognathia maerski (Kristensen & Funch, 2000)",
        description: "The sole described species of the phylum, collected from icy cold springs on Disko Island, Western Greenland.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Limnognathia_maerski.jpg/640px-Limnognathia_maerski.jpg"
      }
    ],
    keyCharacteristics: [
      { title: "32-Piece Jaw Apparatus", description: "Possesses the most structurally complex jaw system of any microscopic organism, featuring 32 distinct articulated cuticular elements." },
      { title: "Accordion Body Wall", description: "Thoracic and abdominal cuticle is pleated into flexible plates that extend and contract like a bellows when feeding." },
      { title: "Transient Dorsal Anus", description: "Lacks a permanent anal pore; an opening forms on the dorsal surface strictly when wastes need to be eliminated." },
      { title: "Subarctic Cold Adaptation", description: "Thrives in frigid moss seeps near 0°C to 4°C, dying quickly if water temperatures rise above 10°C." },
      { title: "All-Female Populations", description: "Hundreds of individuals have been surveyed without finding a single male specimen, indicating continuous parthenogenesis." },
      { title: "Adhesive Posterior Pad", description: "Posterior pole bears a specialized disc with adhesive glandular secretions to anchor against spring currents." }
    ],
    interestingFacts: [
      "Micrognathozoa is one of the most recent animal phyla erected, established in the year 2000 by Danish zoologists Reinhardt Kristensen and Peter Funch.",
      "Despite being barely one-tenth of a millimeter long, its jaw contains more individually moving parts than a human skull.",
      "The entire phylum currently comprises just one formally named species: Limnognathia maerski.",
      "Its jaw elements are so tiny that scanning electron microscopes and synchrotron micro-tomography were required to map how they mesh."
    ],
    scientificImportance: "Micrognathozoa filled a massive missing link between Rotifera and Gnathostomulida. Their jaw structure proved that cuticular, syncytial pharyngeal jaws evolved early in spiralian history, establishing the superphylum Gnathifera as a premier evolutionary radiation."
  },
  {
    id: "rotifera",
    name: "Rotifera",
    commonName: "Wheel Animals / Rotifers",
    pronunciation: "/roʊˈtɪf.ər.ə/",
    etymology: "Latin 'rota' (wheel) + 'ferre' (to bear), describing their spinning ciliary corona",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Rotifer_2.jpg/640px-Rotifer_2.jpg",
    accentColor: "#0ea5e9",
    shortDescription: "Ubiquitous microscopic aquatic animals boasting a rotating ciliated wheel-organ (corona), a muscular chewing pharynx (mastax), and extreme cryptobiotic resilience.",
    kingdom: "Animalia",
    subkingdom: "Bilateria",
    clade: "Gnathifera / Syndermata",
    symmetry: "Bilateral",
    germLayers: "Triploblastic",
    bodyCavity: "Pseudocoelomate (fluid-filled hemocoel)",
    habitat: "Freshwater lakes, vernal ponds, damp mosses, lichens, puddles, and coastal marine bays",
    bodyOrganization: "Organ-system grade with strict eutely (~1,000 somatic cells per individual)",
    digestiveSystem: "Complete: mouth within corona, muscular mastax with trophi jaws, ciliated esophagus, stomach with digestive glands, intestine, and cloacal anus",
    nervousSystem: "Bilobed brain above mastax, lateral nerve cords, cerebral eye-spots, sensory antennae, and tactile bristles",
    circulatorySystem: "Absent; pseudocoelomic fluid circulates nutrients through body contractions",
    respiratorySystem: "Cutaneous diffusion across syncytial intracytoplasmic lamina",
    reproduction: "Cyclical or obligate parthenogenesis (amictic diploid eggs) and sexual mictic haploid cycles; bdelloids have been asexual for 80 million years",
    locomotion: "Ciliary swimming via coronal cilia; 'inchworm' creeping using foot toes and adhesive pedal glands",
    feeding: "Suspension feeding on phytoplankton and bacteria via ciliary vortex; raptorial species grab and pierce larger prey with grasping trophi",
    bodyStructure: "Body divided into head with corona, trunk, and a posterior telescoping foot with 1 to 4 toes containing cement glands. The epidermis is a syncytium reinforced by an internal proteinaceous skeletal lamina (lorica). The pharynx houses calcified jaws called trophi.",
    representativeOrganisms: [
      {
        name: "Pond Wheel Animal",
        scientificName: "Brachionus plicatilis (Müller, 1786)",
        description: "Extensively cultivated in aquaculture worldwide as the premier live starter feed for marine fish and crustacean larvae.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Rotifer_2.jpg/640px-Rotifer_2.jpg"
      },
      {
        name: "Common Bdelloid Rotifer",
        scientificName: "Philodina roseola (Ehrenberg, 1832)",
        description: "A champion of desiccation tolerance (anhydrobiosis), surviving decades frozen or dried in moss tufts.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Philodina_acuticornis.jpg/640px-Philodina_acuticornis.jpg"
      }
    ],
    keyCharacteristics: [
      { title: "Ciliated Corona", description: "Metachronal beating of ciliary rings creates the optical illusion of spinning wheels while drawing food into the mouth." },
      { title: "Muscular Mastax with Trophi", description: "Internal chewing pharynx armed with hard cuticular jaws that crush, grind, or pierce prey." },
      { title: "Cryptobiosis / Anhydrobiosis", description: "Bdelloid rotifers can lose 99% of their body water, entering suspended animation to endure space vacuum and extreme radiation." },
      { title: "Cellular Eutely", description: "Adults possess an invariant number of cells; damaged or lost limbs cannot be regenerated via cell division." },
      { title: "Horizontal Gene Transfer", description: "Bdelloids actively absorb and incorporate foreign genes from bacteria, fungi, and plants into their own genomes." },
      { title: "Telescoping Foot and Toes", description: "Jointed foot segments can retract like a telescope, equipped with pedal glue glands to anchor in currents." }
    ],
    interestingFacts: [
      "Bdelloid rotifers are deemed an 'evolutionary scandal' because they have survived and diversified into hundreds of species without sexual reproduction for over 60 million years.",
      "They can absorb massive bursts of ionizing radiation that would disintegrate human chromosomes, then mend their fractured DNA back together.",
      "A living rotifer was successfully revived from 24,000-year-old Siberian permafrost in 2021, and immediately began reproducing.",
      "The 'spinning wheels' seen through the microscope were among the first spectacles described by Antonie van Leeuwenhoek in 1702."
    ],
    scientificImportance: "Rotifers serve as indispensable ecological primary consumers in freshwater food webs. They are pioneering model systems for aging research, radiation resistance, DNA repair mechanisms, and the genetic puzzles of long-term asexuality."
  },
  {
    id: "acanthocephala",
    name: "Acanthocephala",
    commonName: "Thorny-Headed Worms / Spiny-Headed Worms",
    pronunciation: "/əˌkæn.θoʊˈsɛf.ə.lə/",
    etymology: "Greek 'akanthos' (thorn/spine) + 'kephale' (head)",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Corynosoma_weGeneri.jpg/640px-Corynosoma_weGeneri.jpg",
    accentColor: "#dc2626",
    shortDescription: "Obligate parasitic worms that anchor into the intestinal mucosa of vertebrate hosts using a formidable eversible proboscis studded with recurved hooks.",
    kingdom: "Animalia",
    subkingdom: "Bilateria",
    clade: "Gnathifera / Syndermata",
    symmetry: "Bilateral",
    germLayers: "Triploblastic",
    bodyCavity: "Pseudocoelomate (fluid-filled body cavity with lemnisci)",
    habitat: "Endoparasites: intermediate hosts in aquatic/terrestrial arthropods; definitive hosts in fish, birds, marine mammals, and livestock",
    bodyOrganization: "Organ-system grade",
    digestiveSystem: "Completely absent; absorbs all digested nutrients from the host intestine across an intricate syncytial microvillous tegument with lacunar channels",
    nervousSystem: "Single ventral cephalic ganglion in the proboscis receptacle, sending paired nerves through lateral cords",
    circulatorySystem: "Absent; unique lacunar system of fluid-filled channels embedded inside the body wall transports nutrients",
    respiratorySystem: "Cutaneous anaerobic metabolism within host intestinal lumen",
    reproduction: "Dioecious (separate sexes); copulatory bursa in males; internal fertilization; eggs expelled with host feces",
    locomotion: "Limited motility within host gut; anchors permanently using recurved hooked proboscis",
    feeding: "Nutrient absorption of host chyme across syncytial tegument via active transport and pinocytosis",
    bodyStructure: "Elongate cylindrical body ranging from a few millimeters to over 60 cm in length. Anterior features an eversible cylindrical proboscis equipped with rows of sclerotized curved hooks that retract into a muscular proboscis sheath. The body wall contains a lacunar canal network.",
    representativeOrganisms: [
      {
        name: "Duck Thorny-Headed Worm",
        scientificName: "Polymorphus minutus (Zeder, 1800)",
        description: "Infests amphipods (Gammarus), altering their behavior to swim toward light where they are eaten by ducks and swans.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Polymorphus_minutus.jpg/640px-Polymorphus_minutus.jpg"
      },
      {
        name: "Seal Spiny Worm",
        scientificName: "Corynosoma strumosum (Rudolphi, 1802)",
        description: "Common intestinal parasite of seals, sea lions, and cetaceans throughout polar and temperate oceans.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Corynosoma_weGeneri.jpg/640px-Corynosoma_weGeneri.jpg"
      }
    ],
    keyCharacteristics: [
      { title: "Hooked Eversible Proboscis", description: "Bears dozens to hundreds of hardened backward-pointing hooks that lock tenaciously into intestinal walls." },
      { title: "No Digestive Tract", description: "Lacks mouth, pharynx, stomach, intestine, and anus; relies 100% on trans-tegumentary absorption." },
      { title: "Lacunar Circulatory System", description: "Unique network of fluid canals running inside the fibrous tegument that distributes nutrients throughout the parasite." },
      { title: "Lemnisci Organ", description: "Paired elongate sacks hanging inside the body cavity that pump fluid to evert and retract the proboscis." },
      { title: "Host Manipulation", description: "Alters the neurochemistry of intermediate arthropod hosts to make them reckless and easy prey for definitive hosts." },
      { title: "Cement Glands", description: "Males possess cement glands that plug the female's reproductive tract after copulation to prevent competing matings." }
    ],
    interestingFacts: [
      "Acanthocephalans are famous mind-controllers: infected freshwater shrimp abandon dark hiding places and swim directly into the open jaws of ducks.",
      "Phylogenetic studies have proven that thorny-headed worms are actually heavily modified parasitic rotifers that lost their wheels and guts.",
      "The hooks on their proboscis inspired modern biomimetic surgical needle adhesives that attach to soft tissue with minimal scarring.",
      "Large species like Macracanthorhynchus hirudinaceus can grow over half a meter long inside the intestine of pigs."
    ],
    scientificImportance: "Acanthocephalans are prime models for the evolution of complex multi-host parasitic life cycles and parasitic behavioral manipulation of hosts. In veterinary medicine and wildlife conservation, they cause significant intestinal ulceration and mortality in aquatic birds and marine mammals."
  },
  {
    id: "cycliophora",
    name: "Cycliophora",
    commonName: "Wheel-Wearers / Lobster Symbionts",
    pronunciation: "/ˌsaɪ.kliˈɒf.ər.ə/",
    etymology: "Greek 'kyklos' (wheel) + 'pherein' (to carry), alluding to the circular ciliated mouth ring",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Symbion_pandora.jpg/640px-Symbion_pandora.jpg",
    accentColor: "#10b981",
    shortDescription: "Minute flask-shaped epibionts discovered in 1995 living exclusively on the bristly mouthparts of clawed lobsters, possessing one of the most intricate life cycles known.",
    kingdom: "Animalia",
    subkingdom: "Bilateria",
    clade: "Spiralia / Rouphozoa",
    symmetry: "Bilateral",
    germLayers: "Triploblastic",
    bodyCavity: "Acoelomate / pseudocoelomate",
    habitat: "Obligate epibionts attached to the setae and mouthparts of marine nephropid lobsters",
    bodyOrganization: "Organ-system grade",
    digestiveSystem: "U-shaped gut: circular ciliated mouth ring, pharynx, stomach, and anus opening near the collar outside the buccal funnel",
    nervousSystem: "Cerebral ganglion in larvae; reduced nervous network in sessile adults",
    circulatorySystem: "Absent",
    respiratorySystem: "Cutaneous diffusion across thin cuticular envelope",
    reproduction: "Remarkable alternation between sessile trophic stages, internal budding of replacement feeding heads, free-swimming Pandora larvae, dwarf males, and chordoid dispersal larvae",
    locomotion: "Sessile adults attached via an adhesive stalk; free-swimming ciliated Pandora and chordoid larvae disperse during lobster molts",
    feeding: "Suspension feeding on food particles and scraps dropped by the host lobster during feeding",
    bodyStructure: "Flask-shaped body (~350 µm) with a mobile buccal funnel bordered by a circle of cilia, a cylindrical trunk, and a basal stalk terminating in an adhesive attachment disc glued to lobster bristles. Internal digestive machinery is routinely shed and regenerated from an internal bud.",
    representativeOrganisms: [
      {
        name: "Pandora's Symbiont",
        scientificName: "Symbion pandora (Funch & Kristensen, 1995)",
        description: "The type species discovered on the mouthparts of the Norway lobster (Nephrops norvegicus) in Danish waters.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Symbion_pandora.jpg/640px-Symbion_pandora.jpg"
      },
      {
        name: "American Lobster Symbiont",
        scientificName: "Symbion americanus (Obst et al., 2006)",
        description: "Inhabits the mouthparts of the American lobster (Homarus americanus) along the North American Atlantic coast.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Symbion_americanus.jpg/640px-Symbion_americanus.jpg"
      }
    ],
    keyCharacteristics: [
      { title: "Circular Ciliated Funnel", description: "Bears a contractile anterior funnel with a ring of compound cilia used to sweep food scraps into the mouth." },
      { title: "Dwarf Males", description: "Miniature microscopic males attach directly onto the female body, delivering sperm to an internal embryo." },
      { title: "Continual Head Regeneration", description: "When the feeding apparatus becomes worn or clogged, an internal bud grows and replaces the entire brain and gut." },
      { title: "Molt-Synchronized Life Cycle", description: "Triggers sexual reproduction and mobile dispersal larvae precisely when the host lobster begins its molt." },
      { title: "Adhesive Peduncle Disc", description: "Produces a specialized biological epoxy that glues the stalk permanently to chitinous lobster hairs." },
      { title: "Exclusive Host Specificity", description: "Found only on the mouthparts of clawed lobsters and nowhere else in the ocean." }
    ],
    interestingFacts: [
      "The discovery of Cycliophora in 1995 by Peter Funch and Reinhardt Kristensen was hailed as the zoological discovery of the decade.",
      "Inside a single feeding adult, you can simultaneously find a developing Pandora larva, an internal replacement head bud, and an attached dwarf male!",
      "They escape destruction when the lobster sheds its exoskeleton by releasing free-swimming chordoid larvae that immediately colonize the new shell.",
      "The genus was named 'Symbion' because of its intimate partnership with lobsters, and 'pandora' because its internal buds opened like Pandora's box."
    ],
    scientificImportance: "Cycliophora provided definitive proof that entirely new animal phyla could still be discovered in the late 20th century, even on familiar seafood species. Their developmental complexity and cyclic regeneration offer rich research opportunities in organogenesis and symbiosis."
  },
  {
    id: "entoprocta",
    name: "Entoprocta",
    commonName: "Goblet Worms / Kamptozoa",
    pronunciation: "/ˌɛn.toʊˈprɒk.tə/",
    etymology: "Greek 'entos' (inside) + 'proktos' (anus), because both mouth and anus lie within the tentacle crown",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Barentsia_benedeni.jpg/640px-Barentsia_benedeni.jpg",
    accentColor: "#059669",
    shortDescription: "Delicate, stalked solitary or colonial suspension feeders featuring a goblet-shaped calyx crowned by solid ciliated tentacles that enclose both mouth and anus.",
    kingdom: "Animalia",
    subkingdom: "Bilateria",
    clade: "Spiralia / Lophotrochozoa",
    symmetry: "Bilateral",
    germLayers: "Triploblastic",
    bodyCavity: "Pseudocoelomate (fluid-filled gelatinous parenchyma)",
    habitat: "Marine benthic attached to rocks, shells, algae, bryozoans, and worm tubes; one freshwater genus (Urnatella)",
    bodyOrganization: "Organ-system grade",
    digestiveSystem: "Complete U-shaped gut: mouth at one side of the vestibule, curved stomach, intestine, and anus discharging inside the tentacular ring",
    nervousSystem: "Central subenteric ganglion located between mouth and anus, with radiating nerves to calyx, stalk, and tentacles",
    circulatorySystem: "Absent",
    respiratorySystem: "Cutaneous diffusion across tentacle crown epithelium",
    reproduction: "Simultaneous or protandric hermaphrodites; asexual budding produces dense colonies or dispersive clones; free-swimming creeping trochophore-like larva",
    locomotion: "Adults are sessile and anchored by an adhesive foot or stolon; solitary species (Loxosoma) can creep slowly on an adhesive foot",
    feeding: "Ciliary suspension feeding: lateral tentacle cilia generate a water current driving suspended particles down into the vestibular groove",
    bodyStructure: "Body comprises a cup-shaped calyx perched on a slender, muscular, flexible stalk attached to an adhesive basal disc or creeping stolon network. The calyx rim bears a circular crown of 8 to 36 solid ciliated tentacles whose tips can fold inward for protection.",
    representativeOrganisms: [
      {
        name: "Nodding Goblet Worm",
        scientificName: "Barentsia benedeni (Foettinger, 1887)",
        description: "Colonial species with muscular nodes along the stalk that rhythmically twitch and bow the calyx in response to water currents.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Barentsia_benedeni.jpg/640px-Barentsia_benedeni.jpg"
      },
      {
        name: "Freshwater Goblet Worm",
        scientificName: "Urnatella gracilis (Leidy, 1851)",
        description: "The only known freshwater entoproct, forming segmented colonies on stones and mussel shells in fast-flowing rivers.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Urnatella_gracilis.jpg/640px-Urnatella_gracilis.jpg"
      }
    ],
    keyCharacteristics: [
      { title: "Anus Inside Tentacles", description: "Unlike true bryozoans, the anus opens directly inside the circle of tentacles alongside the mouth." },
      { title: "Solid Tentacles", description: "Tentacles are solid cellular extensions (no coelomic cavity inside) that roll inward when threatened." },
      { title: "Twitching Stalks", description: "Stalks feature muscular swellings that snap and sway back and forth to dislodge sediment or enhance feeding." },
      { title: "Water Current Direction", description: "Cilia pump water from the outside of the crown inward and upward, opposite to ectoprocts." },
      { title: "Asexual Budding", description: "Proliferates rapidly via lateral buds along creeping root-like stolons, forming miniature marine forests." },
      { title: "Trochophore Larvae", description: "Produces free-swimming ciliated larvae proving their genuine spiralian ancestry." }
    ],
    interestingFacts: [
      "The name 'Kamptozoa' comes from Greek for 'bending animals', referring to how whole colonies bow and twitch synchronously like blades of grass.",
      "Though they resemble miniature sea anemones or bryozoans, their internal anatomy is that of a specialized bilaterian worm sitting on a stalk.",
      "Many species are commensal on marine polychaetes and sipunculans, living right at the edge of the host's burrow to catch food leftovers.",
      "When injured, an entoproct can cast off its entire calyx (head) and grow a brand-new one from the stalk in just a few days."
    ],
    scientificImportance: "Entoprocta provides vital comparative data for distinguishing superficial convergent adaptations in suspension-feeding lophophorate body plans from true evolutionary homologies within Lophotrochozoa."
  },
  {
    id: "ectoprocta",
    name: "Ectoprocta (Bryozoa)",
    commonName: "Moss Animals / Bryozoans",
    pronunciation: "/ˌɛk.toʊˈprɒk.tə/",
    etymology: "Greek 'ektos' (outside) + 'proktos' (anus), because the anus lies outside the lophophore tentacle crown",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Bugula_neritina.jpg/640px-Bugula_neritina.jpg",
    accentColor: "#0284c7",
    shortDescription: "Colonial aquatic invertebrates that construct calcified or chitinous modular apartments (zoecia), capturing plankton with an eversible horseshoe or circular lophophore.",
    kingdom: "Animalia",
    subkingdom: "Bilateria",
    clade: "Lophophorata / Lophotrochozoa",
    symmetry: "Bilateral",
    germLayers: "Triploblastic",
    bodyCavity: "Coelomate (eucoelomate with distinct body and lophophore cavities)",
    habitat: "Marine coral reefs, kelp fronds, ship hulls, rocky shores; also freshwater lakes and quiet rivers",
    bodyOrganization: "Organ-system grade forming interconnected colonial superorganisms",
    digestiveSystem: "Complete U-shaped gut: mouth inside lophophore, muscular pharynx, stomach with cecum, intestine, and anus positioned outside the tentacular crown",
    nervousSystem: "Subepidermal nerve ganglion between mouth and anus, with fine nerves supplying each lophophore tentacle",
    circulatorySystem: "Absent; coelomic fluid with amoebocytes distributes nutrients across colonial zooids via pore plates",
    respiratorySystem: "Lophophore tentacles provide extensive surface area for respiratory gas exchange",
    reproduction: "Colonies are hermaphroditic; sexual reproduction yields swimming coronate larvae; asexual budding expands colonies; freshwater forms produce statoblasts",
    locomotion: "Colonies are permanently sessile; individual polypides extend and retract rapidly into protective mineral zoecia using retractor muscles",
    feeding: "Suspension filter feeding: ciliated lophophore tentacles create a downward water current driving microplankton directly into the mouth",
    bodyStructure: "Each individual (zooid) consists of a polypide (the gut, lophophore, and viscera) housed inside a cystid (an extracellular box or tube of calcium carbonate, chitin, or gelatin). Specialized zooids (heterozooids) include defensive pinching avicularia and root-like vibracula.",
    representativeOrganisms: [
      {
        name: "Brown Bryozoan",
        scientificName: "Bugula neritina (Linnaeus, 1758)",
        description: "A common bushy marine fouling organism renowned in cancer research for harboring bacterial symbionts producing bryostatins.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Bugula_neritina.jpg/640px-Bugula_neritina.jpg"
      },
      {
        name: "Magnificent Freshwater Bryozoan",
        scientificName: "Pectinatella magnifica (Leidy, 1851)",
        description: "Forms colossal gelatinous submerged blobs up to 2 meters across in warm freshwater lakes and reservoirs.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Pectinatella_magnifica_1.jpg/640px-Pectinatella_magnifica_1.jpg"
      }
    ],
    keyCharacteristics: [
      { title: "Anus Outside Lophophore", description: "Unlike Entoprocta, the anus opens cleanly outside the circle of tentacles, preventing fecal contamination of food currents." },
      { title: "Coelomic Lophophore", description: "Tentacles are hollow, fluid-filled extensions of the mesocoel, powered by hydrostatic coelomic pressure." },
      { title: "Polymorphic Zooids", description: "Colonies feature division of labor: feeding autozooids, defensive snapping avicularia (bird-beak pincers), and whiplike vibracula." },
      { title: "Brown Body Formation", description: "Periodically degenerates its entire gut and lophophore into a compact dark mass (brown body), regenerating fresh organs." },
      { title: "Calcified Zoaria", description: "Many species build rigid lace-like reefs and mineral crusts that contribute massively to marine limestone deposits." },
      { title: "Dormant Statoblasts", description: "Freshwater species survive freezing winters as durable chitinous pods that hatch into new colonies each spring." }
    ],
    interestingFacts: [
      "The compound 'bryostatin-1', derived from the marine bryozoan Bugula neritina, is one of the most promising pharmaceutical candidates for Alzheimer's and cancer therapy.",
      "Freshwater colonies of Pectinatella magnifica can grow larger than a basketball, shocking boaters who mistake them for giant alien eggs or sea monsters.",
      "Defensive avicularia look and behave exactly like miniature mechanical bird beaks that snap shut on passing parasites.",
      "Bryozoans possess an exceptional fossil record stretching back over 480 million years to the Early Ordovician."
    ],
    scientificImportance: "Ectoprocts are premier subjects for studying colonial evolution, division of labor, modular developmental genetics, and paleoclimatology through their extensive calcified fossil track record."
  },
  {
    id: "phoronida",
    name: "Phoronida",
    commonName: "Horseshoe Worms",
    pronunciation: "/fəˈrɒn.ɪ.də/",
    etymology: "Named after Phoronis, an epithet of the mythological Egyptian/Greek goddess Io",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Phoronis_hippocrepia.jpg/640px-Phoronis_hippocrepia.jpg",
    accentColor: "#0d9488",
    shortDescription: "Slender marine tube-dwelling worms anchored in chitinous cylinders, crowned by a breathtaking, double-coiled horseshoe-shaped lophophore.",
    kingdom: "Animalia",
    subkingdom: "Bilateria",
    clade: "Lophophorata / Brachiozoa",
    symmetry: "Bilateral",
    germLayers: "Triploblastic",
    bodyCavity: "Coelomate (compartmentalized into protocoel, mesocoel, and metacoel)",
    habitat: "Shallow to moderate-depth marine sands, muds, and boreholes in limestone or mollusk shells worldwide",
    bodyOrganization: "Organ-system grade",
    digestiveSystem: "Complete U-shaped gut: mouth at lophophore base covered by epistome, long descending esophagus, stomach, ascending intestine, and anus near the mouth outside tentacles",
    nervousSystem: "Subepidermal nerve ring between mouth and anus, with a colossal giant axon running the entire body length to power lightning-fast tube retraction",
    circulatorySystem: "Closed circulatory system with red blood containing true hemoglobin inside cellular erythrocytes, powered by contractile vessels",
    respiratorySystem: "High-efficiency gas exchange occurs across the dense ciliated tentacles of the lophophore",
    reproduction: "Hermaphroditic or dioecious; gametes released into coelom and discharged via metanephridia; develops through a free-swimming actinotroch larva",
    locomotion: "Sessile within permanent, self-secreted chitinous tubes; capable of rapid withdrawal via longitudinal retractor muscles",
    feeding: "Ciliary suspension filter feeding: lophophore cilia create vortices drawing phytoplankton down along food grooves into the mouth",
    bodyStructure: "Cylindrical body ranging from 2 cm to 50 cm, ending in an ampulla that anchors in the tube. The anterior end bears a majestic, spirally coiled or horseshoe-shaped lophophore with hundreds of slender ciliated tentacles.",
    representativeOrganisms: [
      {
        name: "Horseshoe Phoronid",
        scientificName: "Phoronis hippocrepia (Wright, 1856)",
        description: "Bores into limestone rocks and oyster shells, spreading intertwined colonies of red-tentacled lophophores.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Phoronis_hippocrepia.jpg/640px-Phoronis_hippocrepia.jpg"
      },
      {
        name: "California Giant Horseshoe Worm",
        scientificName: "Phoronopsis californica (Hilton, 1930)",
        description: "A large solitary species living in sandy mud tubes up to 45 cm long, with bright orange lophophores having up to 1,500 tentacles.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Phoronopsis_harmeri.jpg/640px-Phoronopsis_harmeri.jpg"
      }
    ],
    keyCharacteristics: [
      { title: "Magnificent Horseshoe Lophophore", description: "Bears a double-coiled spiral crown of up to 1,500 ciliated tentacles used for both feeding and breathing." },
      { title: "True Hemoglobin", description: "Possesses a closed circulatory system loaded with genuine hemoglobin-bearing red blood corpuscles." },
      { title: "Chitinous Residence Tube", description: "Lives within a tough, flexible self-secreted tube cemented with sand grains and shell fragments." },
      { title: "Giant Retractor Axon", description: "Houses one of the fastest conducting giant nerve fibers in the animal kingdom, snapping the worm into its tube in milliseconds." },
      { title: "U-Shaped Gut", description: "Deep descending and ascending digestive tract allows waste elimination without exiting the burrow tube." },
      { title: "Actinotroch Larva", description: "Produces an elegant transparent pelagic larva adorned with ciliated swimming arms and a larval tentacle hood." }
    ],
    interestingFacts: [
      "There are fewer than 15 valid living species of Phoronida known on Earth, making it one of the most species-poor phyla in the animal kingdom.",
      "Their blood is bright red, just like human blood, because of the high concentration of iron-rich hemoglobin carrying oxygen in deep sand burrows.",
      "If a fish bites off their lophophore, the worm can completely regenerate a full new crown of tentacles in under two weeks.",
      "The actinotroch larva undergoes a catastrophic metamorphosis in minutes: its adult body literally turns inside out from a larval pouch!"
    ],
    scientificImportance: "Phoronids represent the sister group to Brachiopoda, forming the clade Brachiozoa. Their developmental body plan and closed circulatory anatomy provide key evidence deciphering the ancestral lophophorate archetype."
  },
  {
    id: "brachiopoda",
    name: "Brachiopoda",
    commonName: "Lamp Shells",
    pronunciation: "/ˌbræk.iˈɒp.ə.də/",
    etymology: "Greek 'brachion' (arm) + 'pous' (foot), referring to the tentacle arms of their lophophore",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Lingula_anatina.jpg/640px-Lingula_anatina.jpg",
    accentColor: "#b45309",
    shortDescription: "Ancient bivalved marine invertebrates encased in dorsal-ventral shells, anchoring to the sea floor with a muscular fleshy stalk (pedicle) and feeding via a grand lophophore.",
    kingdom: "Animalia",
    subkingdom: "Bilateria",
    clade: "Lophophorata / Brachiozoa",
    symmetry: "Bilateral (plane of symmetry passes through the midline of both valves)",
    germLayers: "Triploblastic",
    bodyCavity: "Coelomate (large spacious metacoel divided by mesenteries)",
    habitat: "Exclusively marine benthic, from shallow tide pools to abyssal ocean trenches worldwide",
    bodyOrganization: "Organ-system grade",
    digestiveSystem: "U-shaped gut: mouth at lophophore base, esophagus, stomach with digestive diverticula; blind-ending intestine without anus in articulate brachiopods, functional anus present in inarticulates",
    nervousSystem: "Circumoesophageal nerve ring with subenteric ganglion sending nerves to mantle lobes, pedicle, and lophophore tentacles",
    circulatorySystem: "Open circulatory system with a small contractile dorsal heart and blood channels containing hemerythrin pigment",
    respiratorySystem: "Gas exchange across extensive mantle lobe surfaces and lophophore tentacles",
    reproduction: "Mainly dioecious; gametes released into coelom and expelled via nephridia; free-swimming ciliated mantle larva",
    locomotion: "Sessile adults permanently anchored by fleshy pedicle stalk or cemented directly to rock substrates",
    feeding: "Suspension feeding: lateral cilia on the lophophore generate powerful water currents through the open shell gap, sieving diatoms and organic particles",
    bodyStructure: "Body enclosed within two unequal mineralized valves: a larger ventral (pedicle) valve and a smaller dorsal (brachial) valve. A fleshy pedicle stalk emerges from the posterior umbo to anchor the animal. The anterior mantle cavity is dominated by a majestic pair of spiraled lophophore arms.",
    representativeOrganisms: [
      {
        name: "Lingula / Living Fossil",
        scientificName: "Lingula anatina (Lamarck, 1801)",
        description: "The quintessential 'living fossil', maintaining an almost unchanged phosphatic shell and burrowing pedicle for over 450 million years.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Lingula_anatina.jpg/640px-Lingula_anatina.jpg"
      },
      {
        name: "Northern Lamp Shell",
        scientificName: "Terebratulina septentrionalis (Couthouy, 1838)",
        description: "An articulate brachiopod with a calcified hinged shell anchoring by a short pedicle to rocky subtidal ledges.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Terebratulina_septentrionalis.jpg/640px-Terebratulina_septentrionalis.jpg"
      }
    ],
    keyCharacteristics: [
      { title: "Dorsoventral Shell Alignment", description: "Unlike bivalve mollusks (whose shells are lateral left/right), brachiopod shells cover the top (dorsal) and bottom (ventral) sides." },
      { title: "Muscular Pedicle", description: "Anchored to rocks or burrowed in sand via a tough, contractile stalk protruding through the pedicle valve." },
      { title: "Large Internal Lophophore", description: "Over two-thirds of the internal shell volume is occupied by the intricate, spiraled ciliated lophophore feeding arms." },
      { title: "Diductor Muscles", description: "Uses unique opposing adductor and diductor muscle pairs to actively lever the shell open and snap it shut." },
      { title: "Mantle Setae", description: "Mantle borders are ringed with stiff chitinous bristles that channel water flows and repel larger sediment grains." },
      { title: "Two Major Classes", description: "Divided into Inarticulata (unhinged phosphatic shells) and Articulata (calcareous shells with tooth-and-socket hinges)." }
    ],
    interestingFacts: [
      "During the Paleozoic Era (250-500 million years ago), brachiopods utterly dominated sea floors with over 30,000 fossil species—today only ~350 species survive.",
      "They are called 'lamp shells' because their curved ventral valve with a pedicle pore looks remarkably like an ancient Roman oil lamp with a wick.",
      "Lingula was famously cited by Charles Darwin in 'On the Origin of Species' as an archetype of an evolutionary living fossil.",
      "Unlike clams, brachiopods have a very low metabolic rate and can survive for months without food by subsisting on dissolved organic matter."
    ],
    scientificImportance: "Brachiopods are among the most valuable index fossils in geology, used extensively for biostratigraphic dating of rock strata, tracking past mass extinctions (such as the Permian-Triassic extinction), and studying ancient ocean temperatures through shell isotope analysis."
  },
  {
    id: "chaetognatha",
    name: "Chaetognatha",
    commonName: "Arrow Worms",
    pronunciation: "/ˌkiː.tɒɡˈnæθ.ə/",
    etymology: "Greek 'chaite' (long hair/bristle) + 'gnathos' (jaw)",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Sagitta_elegans.jpg/640px-Sagitta_elegans.jpg",
    accentColor: "#06b6d4",
    shortDescription: "Streamlined, glass-clear planktonic marine predators armed with deadly grasping chitinous head hooks, darting through the water column to ambush copepods and fish larvae.",
    kingdom: "Animalia",
    subkingdom: "Bilateria",
    clade: "Gnathifera / Protostomia",
    symmetry: "Bilateral",
    germLayers: "Triploblastic",
    bodyCavity: "Coelomate (compartmentalized into head, trunk, and tail coelomic chambers)",
    habitat: "Marine pelagic worldwide, dominating oceanic plankton from sunlit surface waters down to abyssal depths",
    bodyOrganization: "Organ-system grade",
    digestiveSystem: "Complete straight through-gut: subterminal mouth with eversible hood and grasping spines, muscular pharynx, straight intestine, and ventral anus at trunk-tail junction",
    nervousSystem: "Large dorsal cerebral ganglion connected by circumesophageal connectives to a colossal ventral subepithelial ganglion; compound eyes and ciliary vibration receptors",
    circulatorySystem: "Absent; coelomic fluid circulates nutrients through body undulations",
    respiratorySystem: "Cutaneous diffusion across extremely thin, transparent multilayered cuticle",
    reproduction: "Simultaneous hermaphrodites; paired ovaries in trunk and paired testes in tail coelom; internal fertilization; direct planktonic development (no larval stage)",
    locomotion: "Explosive darting swimming powered by longitudinal swimming muscles and stabilization from horizontal lateral and tail fins",
    feeding: "Voracious ambush predators: senses hydrodynamic vibrations of copepods, lunges forward in milliseconds, and impales prey with grasping chitinous spines",
    bodyStructure: "Torpedo-shaped transparent body (1 to 10 cm) divided into three distinct segments: head, trunk, and tail. Head possesses 4 to 14 curved, serrated chitinous grasping spines that fold beneath a protective epidermal hood when swimming. Trunk bears 1 or 2 pairs of lateral horizontal fins and a terminal horizontal caudal fin.",
    representativeOrganisms: [
      {
        name: "Elegant Arrow Worm",
        scientificName: "Sagitta elegans (Verrill, 1873)",
        description: "The classic cold-water oceanic arrow worm, acting as a keystone planktonic predator across North Atlantic and Arctic seas.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Sagitta_elegans.jpg/640px-Sagitta_elegans.jpg"
      },
      {
        name: "Benthic Arrow Worm",
        scientificName: "Spadella cephaloptera (Busch, 1851)",
        description: "A sedentary coastal species that anchors itself to seaweeds and rocks with adhesive papillae to ambush passing crustaceans.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Spadella_cephaloptera.png/640px-Spadella_cephaloptera.png"
      }
    ],
    keyCharacteristics: [
      { title: "Raptorial Head Spines", description: "Bears menacing arrays of curved, chitinous grasping hooks flanking the mouth that snap shut on prey like a bear trap." },
      { title: "Glass-Like Transparency", description: "Nearly 100% optical transparency renders them virtually invisible to both prey and predators in the open ocean." },
      { title: "Torpedo Hydrodynamics", description: "Stiff body with horizontal rayed fins acts like a living underwater arrow, achieving lightning-fast ambush lunges." },
      { title: "Hydrodynamic Vibration Sensors", description: "Lines of sensitive ciliary fence receptors along the trunk detect minute water vibrations made by swimming copepod antennas." },
      { title: "Protective Head Hood", description: "Folds an epidermal collar over its jaw spines while swimming to reduce hydrodynamic drag, unfurling it to strike." },
      { title: "Tetrodotoxin Venom", description: "Certain species harbor symbiotic bacteria that synthesize tetrodotoxin (TTX) to paralyze prey instantly." }
    ],
    interestingFacts: [
      "Arrow worms are so abundant that their combined biomass in the world's oceans exceeds that of all whales and dolphins combined.",
      "Their ambush strike lasts less than 20 milliseconds, making it one of the fastest recorded feeding strikes in marine biology.",
      "Because they are almost completely transparent, the only part of a living arrow worm you can see in a jar of seawater is the black pigment of its tiny eyes.",
      "Despite sharing deuterostome-like cleavage, recent phylogenomics proved they are specialized basal protostomes closely allied with the gnathiferans."
    ],
    scientificImportance: "Arrow worms play a monumental role in marine food webs, consuming up to 30% of global copepod production and transferring that energy to commercial pelagic fisheries (cod, herring, salmon). They also serve as important bioindicators for distinguishing major ocean currents."
  },
  {
    id: "nemertea",
    name: "Nemertea",
    commonName: "Ribbon Worms / Proboscis Worms",
    pronunciation: "/nɪˈmɜːr.ti.ə/",
    etymology: "Named after Nemertes, one of the Nereid sea nymphs in Greek mythology",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Lineus_longissimus.jpg/640px-Lineus_longissimus.jpg",
    accentColor: "#ec4899",
    shortDescription: "Extremely elongate, unsegmented predatory worms armed with an explosive eversible proboscis stored within an internal hydraulic fluid chamber (rhynchocoel).",
    kingdom: "Animalia",
    subkingdom: "Bilateria",
    clade: "Spiralia / Lophotrochozoa",
    symmetry: "Bilateral",
    germLayers: "Triploblastic",
    bodyCavity: "True coelomate space restricted to the rhynchocoel; remainder filled with dense parenchyma",
    habitat: "Mostly marine benthic under rocks, mud, and kelp holdfasts; some pelagic, freshwater, and humid terrestrial species",
    bodyOrganization: "Organ-system grade",
    digestiveSystem: "Complete through-gut: ventral mouth, ciliated esophagus, stomach, straight intestine with lateral diverculae, and posterior terminal anus",
    nervousSystem: "Four-lobed brain (paired dorsal and ventral ganglia) encircling the rhynchocoel, giving rise to paired lateral nerve cords; eyespots, cephalic slits, and frontal organs",
    circulatorySystem: "Closed circulatory system with contractile lateral vessels and colorless or hemoglobin-bearing blood cells, but without a central heart",
    respiratorySystem: "Cutaneous diffusion across ciliated glandular epidermis",
    reproduction: "Mostly dioecious; external fertilization; extensive regeneration (some fragment when handled); pill-shaped pilidium larva in heteronemerteans",
    locomotion: "Gliding smoothly over mucus trails powered by epidermal cilia; vigorous muscular peristalsis and swimming undulations",
    feeding: "Raptorial carnivores: shoots out an eversible proboscis that wraps around crabs, annelids, and fish, often piercing them with a venomous calcified stylet",
    bodyStructure: "Body is ribbon-like, highly elastic, and unsegmented, ranging from a few millimeters to tens of meters. Above the gut sits a unique fluid-filled cavity (rhynchocoel) housing a long, muscular eversible proboscis. In hoplonemerteans, the proboscis tip bears a sharp calcified dagger (stylet).",
    representativeOrganisms: [
      {
        name: "Bootlace Worm",
        scientificName: "Lineus longissimus (Gunnerus, 1770)",
        description: "One of the longest known animals on Earth, with specimens reaching up to 30–55 meters stretched out beneath North Sea boulders.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Lineus_longissimus.jpg/640px-Lineus_longissimus.jpg"
      },
      {
        name: "Milky Ribbon Worm",
        scientificName: "Cerebratulus lacteus (Leidy, 1851)",
        description: "A wide, ribbon-like swimming predator of intertidal mudflats that hunts clams and polychaete worms.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Cerebratulus_lacteus.jpg/640px-Cerebratulus_lacteus.jpg"
      }
    ],
    keyCharacteristics: [
      { title: "Eversible Proboscis in Rhynchocoel", description: "Possesses a specialized hydraulic chamber (rhynchocoel) above the gut that fires an eversible hunting proboscis inside-out in a fraction of a second." },
      { title: "Venomous Armed Stylet", description: "Hoplonemerteans feature a replaceable, nail-like mineral stylet on the proboscis to stab prey and inject neurotoxins." },
      { title: "Closed Blood Vascular System", description: "Among the simplest animals to possess a true closed circulatory system with muscular contractile vessel walls." },
      { title: "Extreme Elasticity", description: "Capable of stretching to ten times its resting length or contracting down into a dense slimy knot." },
      { title: "Complete Through-Gut", description: "Pioneered the evolution of an efficient one-way digestive tract with a separate mouth and posterior anus." },
      { title: "Helmet-Shaped Pilidium Larva", description: "Heteronemerteans develop via a characteristic swimming pilidium larva resembling an ornate colonial bicorne hat." }
    ],
    interestingFacts: [
      "A specimen of Lineus longissimus washed ashore in St. Andrews, Scotland in 1864 measured over 55 meters (180 feet) long—longer than a Blue Whale!",
      "The bootlace worm produces a pungent toxic mucus containing nemertide neurotoxins that can paralyze crabs and deter predators.",
      "The proboscis is entirely separate from the mouth—nemerteans have two separate anterior openings: one for eating, one for firing weapons.",
      "If a ribbon worm's mineral stylet breaks during a hunt, reserve stylets stored in adjacent side pockets immediately snap into position to replace it."
    ],
    scientificImportance: "Nemertea is crucial for evolutionary biology as one of the earliest spiralian lineages to evolve a closed vascular system, rhynchocoel coelom, and a complete unidirectional through-gut, illuminating the transition toward complex organ-grade bilaterian architectures."
  },
  {
    id: "priapulida",
    name: "Priapulida",
    commonName: "Penis Worms / Priapulids",
    pronunciation: "/ˌpraɪ.əˈpjuː.lɪ.də/",
    etymology: "Named after Priapus, the ancient Greek god of fertility, referring to their phallic body shape",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Priapulus_caudatus.jpg/640px-Priapulus_caudatus.jpg",
    accentColor: "#ea580c",
    shortDescription: "Stout, cylindrical marine benthic burrowers equipped with a toothed, eversible introvert proboscis and an armor of molted chitinous cuticle.",
    kingdom: "Animalia",
    subkingdom: "Bilateria",
    clade: "Ecdysozoa / Cycloneuralia",
    symmetry: "Bilateral (secondarily radial in introvert morphology)",
    germLayers: "Triploblastic",
    bodyCavity: "Coelomate or pseudocoelomate (spacious fluid-filled hemocoel)",
    habitat: "Cold, deep, or muddy marine sediments worldwide; often dominating anoxic, hydrogen sulphide-rich ocean muds",
    bodyOrganization: "Organ-system grade",
    digestiveSystem: "Complete straight through-gut: terminal mouth on eversible introvert, muscular pharynx armed with concentric rings of chitinous teeth, straight intestine, and posterior anus",
    nervousSystem: "Circumoral nerve ring around the pharynx connected to a single unsegmented ventral nerve cord with subepidermal nerve plexus",
    circulatorySystem: "Absent; large coelom/hemocoel filled with corpuscles containing hemerythrin pigment transports oxygen",
    respiratorySystem: "Cutaneous diffusion enhanced by posterior caudal appendages resembling hollow hollow branchial tufts",
    reproduction: "Dioecious; external fertilization; shed gametes directly into seawater; develops via a loricate benthic larva",
    locomotion: "Hydrostatic burrowing: repeatedly everts its spiny toothed introvert into mud, expands the anchor bulb, and pulls its heavy trunk forward",
    feeding: "Carnivorous and detritivorous: everts toothed pharynx to swallow slow-moving marine worms and crustaceans whole",
    bodyStructure: "Cylindrical body (0.5 mm to 40 cm) divided into a spiny eversible anterior introvert, a trunk ringed with superficial annuli and sensory flosculi, and one or two posterior vesicular caudal appendages. The mouth is armed with concentric pentagonal rings of curved scalid teeth.",
    representativeOrganisms: [
      {
        name: "Caudate Penis Worm",
        scientificName: "Priapulus caudatus (Lamarck, 1816)",
        description: "The classic Northern cold-water priapulid, burrowing in oxygen-poor muddy bottoms of Baltic and Arctic seas.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Priapulus_caudatus.jpg/640px-Priapulus_caudatus.jpg"
      },
      {
        name: "Ottoia / Burgess Shale Fossil",
        scientificName: "Ottoia prolifica (Walcott, 1911)",
        description: "One of the most abundant Cambrian fossils from the Burgess Shale (508 Ma), confirming priapulids ruled early animal seafloors.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Ottoia_prolifica_fossil.jpg/640px-Ottoia_prolifica_fossil.jpg"
      }
    ],
    keyCharacteristics: [
      { title: "Toothed Eversible Introvert", description: "Anterior proboscis can turn inside out, studded with sharp cuticular scalid teeth that drag prey into the gut." },
      { title: "Chitinous Molting (Ecdysis)", description: "Encased in an extracellular chitinous cuticle that is periodically shed and replaced as the animal grows." },
      { title: "Hemerythrin Respiratory Pigment", description: "Blood cells circulating in the body cavity carry pinkish-violet hemerythrin to extract oxygen from anoxic mud." },
      { title: "Caudal Appendages", description: "Bears hollow, grapelike posterior caudal vesicles thought to assist in gas exchange and sensory perception." },
      { title: "Loricate Larval Stage", description: "Free-living larvae inhabit a rigid, box-like cuticular lorica before metamorphosing into the adult worm." },
      { title: "Extreme Hydrogen Sulfide Tolerance", description: "Thrives in black, foul-smelling sediments with near-zero oxygen where most other marine life dies." }
    ],
    interestingFacts: [
      "In the Cambrian explosion 505 million years ago, priapulids were apex predators and accounted for up to 80% of all benthic animals on the seafloor.",
      "Fossil specimens of Ottoia from the Burgess Shale have been discovered with other worms—and even smaller members of their own species—fossilized inside their guts!",
      "Their blood changes color from transparent to violet-pink when exposed to atmospheric oxygen due to their hemerythrin pigment.",
      "Today, only about 20 living species survive, acting as relict survivors of a once-mighty evolutionary empire."
    ],
    scientificImportance: "Priapulids are foundational to understanding the origin of Ecdysozoa (the superphylum containing arthropods and nematodes). Their conservative anatomy provides a living blueprint of the ancestral ecdysozoan body plan from half a billion years ago."
  },
  {
    id: "kinorhyncha",
    name: "Kinorhyncha",
    commonName: "Mud Dragons",
    pronunciation: "/ˌkaɪ.noʊˈrɪŋ.kə/",
    etymology: "Greek 'kinein' (to move) + 'rhynchos' (snout), describing their retractable moving head",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Echinoderes_hwiizaa.jpg/640px-Echinoderes_hwiizaa.jpg",
    accentColor: "#ca8a04",
    shortDescription: "Minute, armored sediment-dwelling worms segmented into 11-13 cuticular rings (zonites) with an eversible head crown of recurved spine-like scalids.",
    kingdom: "Animalia",
    subkingdom: "Bilateria",
    clade: "Ecdysozoa / Scalidophora",
    symmetry: "Bilateral",
    germLayers: "Triploblastic",
    bodyCavity: "Pseudocoelomate (fluid-filled body cavity with amoebocytes)",
    habitat: "Marine benthic sediments, intertidal mudflats, and abyssal oceanic ooze worldwide",
    bodyOrganization: "Organ-system grade",
    digestiveSystem: "Complete straight gut: mouth cone with stylets, muscular sucking pharynx, straight microvillous intestine, and posterior anus in the terminal zonite",
    nervousSystem: "Peripharyngeal 10-lobed brain ring surrounding the pharynx, connected to a single unsegmented ventral nerve cord with ganglionic cell clusters in each zonite",
    circulatorySystem: "Absent",
    respiratorySystem: "Cutaneous diffusion across thin articular inter-zonite membranes",
    reproduction: "Dioecious; internal fertilization with copulatory spines in males; females lay single protected eggs; 6 juvenile instars separated by molts",
    locomotion: "Stepping anchor burrowing: thrusts spiny head into mud, flares curved scalids like an umbrella to anchor, and pulls the segmented armored trunk forward",
    feeding: "Feeds on diatoms, organic detritus, and bacteria vacuumed up from sediment muds using oral stylets",
    bodyStructure: "Body is under 1 mm long, divided into 13 distinct cuticular segments called zonites. Zonite 1 is an eversible head armed with rings of curved scalids; Zonite 2 forms a neck lined with closing plates (placids); Zonites 3 to 13 make up the rigid trunk covered by paired tergal and sternal plates.",
    representativeOrganisms: [
      {
        name: "Common Interstitial Mud Dragon",
        scientificName: "Echinoderes dujardinii (Claparède, 1863)",
        description: "A widespread mud dragon inhabiting coastal muddy sands and algae worldwide, measuring less than half a millimeter.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Echinoderes_hwiizaa.jpg/640px-Echinoderes_hwiizaa.jpg"
      },
      {
        name: "Deep Mud Dragon",
        scientificName: "Pycnophyes kielensis (Zelinka, 1928)",
        description: "A larger, heavily armored kinorhynch with prominent lateral spines, crawling through Baltic Sea sediments.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Pycnophyes_dentatus.png/640px-Pycnophyes_dentatus.png"
      }
    ],
    keyCharacteristics: [
      { title: "13 Body Zonites", description: "Body exhibits distinct superficial segmentation into 13 armored cuticular rings with articulated plates." },
      { title: "Rings of Scalid Spines", description: "The eversible head bears up to 90 spinose scalids arranged in concentric rings used for sensory perception and traction." },
      { title: "Neck Placids (Closing Hatch)", description: "The second zonite has specialized cuticular plates that fold tightly like a trapdoor when the head retracts inside the trunk." },
      { title: "Periodic Ecdysis", description: "Juveniles undergo six distinct molting stages, shedding their rigid cuticular armor to allow growth." },
      { title: "No External Cilia", description: "Completely lacks external locomotory cilia, relying entirely on cuticular spines and internal muscle bands." },
      { title: "Oral Stylets", description: "Mouth cone is surrounded by rings of fine piercing stylets to pierce diatom frustules and bacterial cells." }
    ],
    interestingFacts: [
      "Under a scanning electron microscope, a kinorhynch looks like a miniature Chinese dragon or medieval mace, earning them the nickname 'mud dragons'.",
      "When alarmed, the head and neck are pulled completely inside the trunk, and the neck plates fold closed like the hatch of a submarine.",
      "They cannot swim at all; if suspended in open water, they sink helplessly until they hit muddy bottom.",
      "Despite their microscopic size, they possess individual striated and smooth muscle bands for each zonite, allowing remarkable articulation."
    ],
    scientificImportance: "Together with Priapulida and Loricifera, Kinorhyncha forms the Scalidophora. Their structured zonites and scalid head rings provide key evidence into how segmentation and ecdysis evolved prior to the origin of arthropods."
  },
  {
    id: "loricifera",
    name: "Loricifera",
    commonName: "Corset Animals / Girdle-Wearers",
    pronunciation: "/ˌlɒr.ɪˈsɪf.ər.ə/",
    etymology: "Latin 'lorica' (cuirass/corset) + 'ferre' (to bear), referring to their armored girdle",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Spinoloricus_cinziae.jpg/640px-Spinoloricus_cinziae.jpg",
    accentColor: "#0284c7",
    shortDescription: "Minute sediment dwellers discovered in 1983, encased in a cuticular corset (lorica) with hundreds of sensory scalids, including the only known animals living without oxygen.",
    kingdom: "Animalia",
    subkingdom: "Bilateria",
    clade: "Ecdysozoa / Scalidophora",
    symmetry: "Bilateral",
    germLayers: "Triploblastic",
    bodyCavity: "Pseudocoelomate / acoelomate (tightly packed internal organs)",
    habitat: "Interstitial marine gravels, deep-sea benthic plains, and permanently anoxic hypersaline deep-sea basins",
    bodyOrganization: "Organ-system grade",
    digestiveSystem: "Complete through-gut: mouth cone with oral stylets, muscular sucking pharynx, straight midgut, and posterior anus",
    nervousSystem: "Large circumpharyngeal brain filling the head, paired longitudinal cords, and complex innervation of sensory clavoscalids",
    circulatorySystem: "Absent",
    respiratorySystem: "Cutaneous diffusion; anaerobic species utilize hydrogenosome-like organelles instead of mitochondria",
    reproduction: "Dioecious; internal fertilization; produces a specialized Higgins larva with swimming appendages and caudal toes; some exhibit pedogenesis",
    locomotion: "Crawling and burrowing through sand grains using eversible head scalids; larvae swim using posterior flipper plates",
    feeding: "Suctorial grazing on bacteria and protozoans using an eversible mouth cone armed with piercing stylets",
    bodyStructure: "Microscopic body (100 to 500 µm) divided into head (introvert) with up to 400 specialized scalids, flexible neck, thorax, and an armored abdomen encased in a 6-to-30-plate cuticular corset (lorica). The entire head and thorax can telescope completely inside the protective lorica.",
    representativeOrganisms: [
      {
        name: "Mystic Corset Animal",
        scientificName: "Nanaloricus mysticus (Kristensen, 1983)",
        description: "The seminal species that revealed the entire phylum, discovered adhering tightly to shell gravel off the French coast.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Nanaloricus_mysticus.jpg/640px-Nanaloricus_mysticus.jpg"
      },
      {
        name: "Anaerobic Deep-Sea Loriciferan",
        scientificName: "Spinoloricus cinziae (Danovaro et al., 2010)",
        description: "The first multicellular animal discovered living and reproducing in permanently anoxic, sulfide-saturated ocean basins without mitochondria.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Spinoloricus_cinziae.jpg/640px-Spinoloricus_cinziae.jpg"
      }
    ],
    keyCharacteristics: [
      { title: "Protective Lorica Corset", description: "Abdomen is sheathed within a rigid or flexible cuticular corset assembled from 6 to 30 sculpted plates." },
      { title: "Hundreds of Specialized Scalids", description: "The introvert bears up to 400 scalids differentiated into sensory clavoscalids, spinoscalids, and locomotory hooks." },
      { title: "Telescoping Head Retraction", description: "The head and thorax can telescope completely inside the lorica, locking like a tightly sealed bottle." },
      { title: "Mitochondria-Free Anaerobiosis", description: "Certain deep-sea species possess hydrogenosomes instead of mitochondria, spending their entire lifecycle without free oxygen." },
      { title: "Higgins Larva", description: "Bears a unique larval stage equipped with a pair of posterior swimming paddle toes and leaf-like locomotor appendages." },
      { title: "Tenacious Sand Adhesion", description: "Binds so firmly to marine sand grains that researchers historically washed over them without noticing them." }
    ],
    interestingFacts: [
      "Loricifera was discovered by accident in 1983 when Danish biologist Reinhardt Kristensen washed marine gravel with freshwater instead of seawater, shocking the animals into releasing their grip!",
      "Spinoloricus cinziae made worldwide headlines in 2010 as the first metazoan animal capable of living and reproducing in a habitat totally devoid of oxygen.",
      "Their larvae look so radically different from the adults that they were initially suspected to belong to another phylum.",
      "The entire adult animal is barely larger than a single-celled Paramecium, yet contains a brain, nerves, striated muscles, gut, and gonads."
    ],
    scientificImportance: "Loriciferans revolutionized biological dogmas regarding animal oxygen requirements. Their evolutionary architecture sheds crucial light on miniaturization limits and deep-sea extreme adaptations in Ecdysozoa."
  },
  {
    id: "sipuncula",
    name: "Sipuncula",
    commonName: "Peanut Worms",
    pronunciation: "/sɪˈpʌŋ.kjʊ.lə/",
    etymology: "Latin 'siphunculus' (little pipe/siphon)",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Phascolosoma_perlucens.jpg/640px-Phascolosoma_perlucens.jpg",
    accentColor: "#15803d",
    shortDescription: "Unsegmented marine worms featuring a plump, muscular trunk and a retractable anterior proboscis (introvert) crowned with tentacles, contracting into a peanut shape when disturbed.",
    kingdom: "Animalia",
    subkingdom: "Bilateria",
    clade: "Spiralia / Annelida (secondarily unsegmented)",
    symmetry: "Bilateral",
    germLayers: "Triploblastic",
    bodyCavity: "Coelomate (spacious, unpartitioned, fluid-filled coelom)",
    habitat: "Marine burrows in mud, sand, crevice rock boreholes, coral rubble, and empty snail shells worldwide",
    bodyOrganization: "Organ-system grade",
    digestiveSystem: "Complete U-shaped gut: terminal mouth on introvert, esophagus, long double-spiral twisted intestine, and dorsal anus situated anteriorly on the trunk",
    nervousSystem: "Bilobed cerebral brain behind tentacles, paired circumesophageal connectives, and a single unsegmented ventral nerve cord with no segmental ganglia",
    circulatorySystem: "Lacks blood vessels; spacious coelomic fluid contains abundant hemerythrin-bearing erythrocytes that transport oxygen",
    respiratorySystem: "Gas exchange across tentacle crown and thin areas of the muscular trunk wall",
    reproduction: "Mostly dioecious; external fertilization; gametes stored in coelom and discharged via metanephridia; develops through a swimming pelagosphera larva",
    locomotion: "Burrows actively through sediment using hydrostatically driven introvert eversion and peristaltic trunk contractions",
    feeding: "Deposit or suspension feeding: spreads ciliated tentacles across the sediment surface to capture organic detritus and diatoms",
    bodyStructure: "Body divided into an unsegmented plump muscular trunk and an anterior slender retractable introvert that can be pulled completely inside the body by large retractor muscles. The introvert tip bears a crown of ciliated tentacles or lobes encircling the mouth. The anus opens near the anterior base of the trunk.",
    representativeOrganisms: [
      {
        name: "Common Peanut Worm",
        scientificName: "Phascolosoma agassizii (Keferstein, 1866)",
        description: "Abundant Pacific intertidal species living inside rock crevices and mussel beds, sporting dark banded rings on its introvert.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Phascolosoma_perlucens.jpg/640px-Phascolosoma_perlucens.jpg"
      },
      {
        name: "Naked Peanut Worm",
        scientificName: "Sipunculus nudus (Linnaeus, 1766)",
        description: "A large, smooth, edible burrowing worm reaching 25-30 cm in clean sandy shores, famous as a seafood delicacy in southern China.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Sipunculus_nudus.jpg/640px-Sipunculus_nudus.jpg"
      }
    ],
    keyCharacteristics: [
      { title: "Peanut-Shaped Contraction", description: "When threatened, retractor muscles yank the introvert completely into the trunk, producing a firm peanut-shaped blob." },
      { title: "U-Shaped Twisted Intestine", description: "Gut descends to the rear of the body and coils tightly back up, exiting at a dorsal anus located conveniently near the burrow mouth." },
      { title: "Pelagosphera Larva", description: "Many species develop via a unique long-lived pelagosphera larva capable of drifting across entire ocean basins for months." },
      { title: "Urn Cells (Coelomic Janitors)", description: "Coelomic fluid contains unique swimming ciliated cellular 'urns' that collect cellular debris and neutralize microbes." },
      { title: "No Body Segmentation", description: "Lacks any internal septa or external rings, exhibiting completely continuous musculature and coelom." },
      { title: "Hemerythrin Coelomic Blood", description: "Contains pinkish-purple hemerythrin pigment in circulating corpuscles providing high-affinity oxygen storage." }
    ],
    interestingFacts: [
      "In Fujian and Guangdong, China, Sipunculus nudus is gathered from tidal flats and cooked into a renowned culinary delicacy known as 'sand worm jelly'.",
      "Sipunculan pelagosphera larvae can survive drifting across the Atlantic Ocean for over a year before metamorphosing into benthic adults.",
      "Their swimming 'urn cells' behave like self-propelled biological vacuum cleaners, sweeping up foreign bacteria from the coelomic cavity.",
      "Though previously considered an independent phylum, modern phylogenomics showed sipunculans are actually annelids that completely lost segmentation."
    ],
    scientificImportance: "Sipuncula serves as a paramount case study in the evolutionary loss of segmentation within Annelida. Their unique coelomic defense urns and durable hemerythrin respiratory systems make them valuable in immunology and comparative biochemistry."
  },
  {
    id: "echiura",
    name: "Echiura",
    commonName: "Spoon Worms / Innkeeper Worms",
    pronunciation: "/ˌɛk.iˈjʊər.ə/",
    etymology: "Greek 'echis' (viper) + 'oura' (tail)",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Bonellia_viridis.jpg/640px-Bonellia_viridis.jpg",
    accentColor: "#059669",
    shortDescription: "Plump marine burrowing worms boasting a non-retractable, ribbon-like or spoon-shaped muscular proboscis used to vacuum organic detritus from surrounding seafloors.",
    kingdom: "Animalia",
    subkingdom: "Bilateria",
    clade: "Spiralia / Annelida (secondarily unsegmented)",
    symmetry: "Bilateral",
    germLayers: "Triploblastic",
    bodyCavity: "Coelomate (large unsegmented coelom)",
    habitat: "Marine soft sediments, muddy burrows, rock crevices, and coral reefs from intertidal shallows to deep ocean trenches",
    bodyOrganization: "Organ-system grade",
    digestiveSystem: "Complete highly convoluted through-gut: mouth at the base of the proboscis gutter, pharynx, lengthy coiled intestine with siphon, and posterior anus with anal sacs",
    nervousSystem: "Nerve ring around mouth, long unsegmented ventral nerve cord without ganglia, sensory cells along the proboscis margin",
    circulatorySystem: "Closed circulatory system with dorsal, ventral, and ring vessels, though blood pigment is often absent or localized",
    respiratorySystem: "Gas exchange across thin proboscis epithelium and through cloacal irrigation (pumping seawater through the hindgut)",
    reproduction: "Dioecious; external fertilization; develops through a swimming ciliated trochophore larva; extreme environmental sex determination in Bonellia",
    locomotion: "Sedentary within permanent U-shaped mud burrows; expands and contracts muscular trunk walls to irrigate burrows",
    feeding: "Deposit feeding: extends its elongate, flexible proboscis over the sediment to sweep organic particles along a ciliated ventral gutter to the mouth",
    bodyStructure: "Body consists of a sausage-like unsegmented muscular trunk and an anterior, highly mobile, non-retractable proboscis that can expandหลาย times the body length. The anterior trunk bears a pair of ventral hooked setae, and the posterior bears one or two rings of anal chaetae.",
    representativeOrganisms: [
      {
        name: "Green Bonellia",
        scientificName: "Bonellia viridis (Rolando, 1821)",
        description: "Famous for its vibrant green bonellin pigment and extreme sexual dimorphism: females reach 15 cm with a 1-meter proboscis, while dwarf males are 1 mm long.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Bonellia_viridis.jpg/640px-Bonellia_viridis.jpg"
      },
      {
        name: "Fat Innkeeper Worm",
        scientificName: "Urechis caupo (Fisher & MacGinitie, 1928)",
        description: "Known as the 'innkeeper' because its spacious U-shaped burrow serves as a permanent communal home for crabs, scale worms, and fish.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Urechis_caupo.jpg/640px-Urechis_caupo.jpg"
      }
    ],
    keyCharacteristics: [
      { title: "Non-Retractable Proboscis", description: "Unlike peanut worms, the spoon worm's proboscis cannot be drawn inside the body, extending outward like a flexible tongue." },
      { title: "Innkeeper Burrows", description: "Constructs spacious U-shaped burrows that provide shelter to a diverse community of commensal crabs, worms, and clams." },
      { title: "Extreme Sex Dimorphism (Bonellia)", description: "Larvae that land on open seabed become large females; larvae that land on a female's proboscis become microscopic parasitic dwarf males living inside her body." },
      { title: "Bonellin Pigment", description: "Produces a brilliant green toxic porphyrin pigment (bonellin) that possesses potent antibiotic and biocidal properties." },
      { title: "Mucus Net Feeding", description: "Urechis secretes a fine mucus slime bag inside its burrow, pumping water through it to sieve plankton before eating the entire net." },
      { title: "Anal Chaetae Rings", description: "Posterior end bears a ring of stiff chitinous bristles used to brace against burrow walls while excavating mud." }
    ],
    interestingFacts: [
      "In Bonellia viridis, sex is determined 100% by where the baby larva lands: touching an adult female transforms the larva into a dwarf male that lives inside her uterus for life!",
      "Urechis caupo is so hospitable to other creatures that up to four different animal species routinely lodge inside its burrow without paying rent.",
      "The proboscis of a 10 cm female Bonellia can stretch over one meter across the seafloor, feeling like a living velvet ribbon.",
      "Like sipunculans, echiurans were classified as an independent phylum for decades before genomic research revealed they are modified annelid worms."
    ],
    scientificImportance: "Echiurans are keystones of marine benthic ecosystem engineering, bioturbating deep sediments and creating essential microhabitats for countless commensal species. Bonellia viridis remains the textbook model for environmental sex determination (ESD)."
  },
  {
    id: "tardigrada",
    name: "Tardigrada",
    commonName: "Water Bears / Moss Piglets",
    pronunciation: "/ˌtɑːr.dɪˈɡreɪ.də/",
    etymology: "Latin 'tardus' (slow) + 'gradi' (to step), meaning 'slow steppers'",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Waterbear.jpg/640px-Waterbear.jpg",
    accentColor: "#0284c7",
    shortDescription: "Legendary microscopic eight-legged animals famous for near-indestructible cryptobiosis, withstanding absolute zero, outer space, and lethal radiation doses.",
    kingdom: "Animalia",
    subkingdom: "Bilateria",
    clade: "Ecdysozoa / Panarthropoda",
    symmetry: "Bilateral",
    germLayers: "Triploblastic",
    bodyCavity: "Hemocoel (true coelom reduced to gonad cavity)",
    habitat: "Damp mosses, lichens, forest leaf litter, soil, freshwater lakes, and marine sediments from the Himalayas to deep sea trenches",
    bodyOrganization: "Organ-system grade with strict eutely (~40,000 cells per adult)",
    digestiveSystem: "Complete straight gut: mouth with piercing cuticular stylets, muscular sucking pharynx, midgut, hindgut, and terminal cloaca",
    nervousSystem: "Lobed dorsal brain connected via circumesophageal connectives to a paired ventral nerve cord with four subesophageal/trunk ganglia; simple photoreceptor eyespots",
    circulatorySystem: "Absent; hemolymph in hemocoel bathes organs directly, propelled by body movements",
    respiratorySystem: "Cutaneous diffusion across permeable, non-calcified chitinous/proteinaceous cuticle",
    reproduction: "Dioecious and parthenogenetic; females often lay eggs inside the shed exuvia (old molted skin); direct development without larval stages",
    locomotion: "Deliberate walking on four pairs of stubby, unjointed lobopodous legs armed with 4 to 8 curved claws or adhesive discs",
    feeding: "Pierces plant cells, algae, nematodes, and rotifers with oral stylets, sucking out intracellular fluids with its muscular pharynx",
    bodyStructure: "Plump cylindrical body (0.1 to 1.5 mm) with a head and four distinct trunk segments. Each segment bears a pair of unjointed, ventrolateral clawed legs. The body is wrapped in an elastic chitinous cuticle molted throughout life. The mouth features sharp mineralized stylets.",
    representativeOrganisms: [
      {
        name: "Exemplary Water Bear",
        scientificName: "Hypsibius exemplaris (Gąsiorek et al., 2018)",
        description: "The primary sequenced laboratory model species for studying developmental genetics, cryptobiosis, and space survival.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Waterbear.jpg/640px-Waterbear.jpg"
      },
      {
        name: "Carnivorous Tardigrade",
        scientificName: "Milnesium tardigradum (Doyère, 1840)",
        description: "A large predatory water bear that actively hunts nematodes and rotifers, celebrated for surviving exposure to open space vacuum.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Milnesium_tardigradum.jpg/640px-Milnesium_tardigradum.jpg"
      }
    ],
    keyCharacteristics: [
      { title: "Tun State (Cryptobiosis)", description: "Can lose 97% of body water, fold its legs inward, and contract into a glassy 'tun' that suspends metabolic activity entirely." },
      { title: "Extreme Radiation Tolerance", description: "Tardigrade-unique Dsup (Damage suppressor) protein shields nuclear DNA from lethal ionizing X-rays and cosmic rays." },
      { title: "Four Pairs of Clawed Legs", description: "Walks with a charming, lumbering bear-like gait on eight unjointed legs tipped with hooked claws." },
      { title: "Space Vacuum Survival", description: "In 2007, tardigrades became the first multicellular animals to survive direct exposure to the vacuum and solar UV rays of open space." },
      { title: "Piercing Oral Stylets", description: "Bears a pair of sharp, mineralized buccal stylets that thrust forward to puncture cells like hypodermic needles." },
      { title: "Glass-Forming TDPs", description: "Synthesizes tardigrade disordered proteins (TDPs) that vitrify into protective biological glass during desiccation." }
    ],
    interestingFacts: [
      "Tardigrades can survive being chilled to -272°C (just 1 degree above absolute zero) or heated to 150°C, well above the boiling point of water!",
      "When dry, a tardigrade can withstand 1,000 times more ionizing radiation than a human being.",
      "In 2007, European Space Agency's FOTON-M3 mission launched live tardigrades into low Earth orbit for 10 days; upon return, they rehydrated and reproduced normally.",
      "Their endearing waddling walk led German pastor Johann Goeze to christen them 'kleiner Wasserbär' (little water bear) in 1773."
    ],
    scientificImportance: "Tardigrades are revolutionary model organisms for astrobiology, cellular preservation, cryonics, and DNA protection. Their Dsup and TDP proteins are actively engineered into human cells and pharmaceuticals to stabilize vaccines without refrigeration."
  },
  {
    id: "onychophora",
    name: "Onychophora",
    commonName: "Velvet Worms",
    pronunciation: "/ˌɒn.ɪˈkɒf.ər.ə/",
    etymology: "Greek 'onyx' (claw) + 'pherein' (to bear), referring to the claws on their stumpy legs",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Peripatus_sp.jpg/640px-Peripatus_sp.jpg",
    accentColor: "#16a34a",
    shortDescription: "Nocturnal, soft-bodied terrestrial predators coated in water-repellent velvet papillae, firing high-speed twin streams of glue to snare crickets and spiders.",
    kingdom: "Animalia",
    subkingdom: "Bilateria",
    clade: "Ecdysozoa / Panarthropoda",
    symmetry: "Bilateral",
    germLayers: "Triploblastic",
    bodyCavity: "Hemocoel (open circulatory body cavity)",
    habitat: "Moist, humid microhabitats in tropical and temperate rainforests: rotting logs, leaf litter, and deep soil caves",
    bodyOrganization: "Organ-system grade",
    digestiveSystem: "Complete straight through-gut: ventral mouth flanked by jaw claws, salivary slime glands, muscular pharynx, straight midgut, and posterior anus",
    nervousSystem: "Large bilobed brain, paired ring-commissured widely separated ventral nerve cords (ladder-like), and prominent sensory antennae with basal eyespots",
    circulatorySystem: "Open circulatory system with a dorsal tubular heart bearing paired ostia, pumping colorless hemolymph through the hemocoel",
    respiratorySystem: "Tracheal system with permanently open spiracles scattered over the body, requiring constant 100% environmental humidity",
    reproduction: "Dioecious; internal fertilization; includes oviparity, ovoviviparity, and true placental viviparity (nourishing embryos via mammalian-like placentas)",
    locomotion: "Smooth, fluid walking on 13 to 43 pairs of unjointed conical lobopod legs tipped with dual chitinous claws",
    feeding: "Predatory carnivores: shoots sticky proteinaceous slime from oral papillae to immobilize prey, injects digestive saliva, and sucks out liquefied tissues",
    bodyStructure: "Cylindrical body (1 to 20 cm) covered in thousands of microscopic dermal papillae bearing sensory bristles, creating a soft velvet texture. The head features fleshy annulated antennae, small eyes, and a pair of oral slime papillae. The trunk bears unjointed stumpy lobopods.",
    representativeOrganisms: [
      {
        name: "New Zealand Velvet Worm",
        scientificName: "Peripatoides novaezealandiae (Hutton, 1876)",
        description: "A 15-legged nocturnal velvet worm inhabiting rotting beech logs across New Zealand rainforests.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Peripatus_sp.jpg/640px-Peripatus_sp.jpg"
      },
      {
        name: "Trinidad Placental Velvet Worm",
        scientificName: "Epiperipatus trinidadensis (Bouvier, 1899)",
        description: "Renowned for developing true placental connections that nourish developing embryos inside the mother for up to 11 months.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Epiperipatus_sp.jpg/640px-Epiperipatus_sp.jpg"
      }
    ],
    keyCharacteristics: [
      { title: "Slime Cannon Predation", description: "Fires twin oscillating jets of sticky proteinaceous hydrogel from oral papillae up to 30 cm in milliseconds, snaring prey in an instant net." },
      { title: "Velvet Papillae Coat", description: "Skin is carpeted with millions of microscopic water-repellent scales and sensory bristles, giving it an iridescent matte velvet feel." },
      { title: "Unjointed Lobopods", description: "Walks smoothly on paired, cushion-like fleshy legs (lobopods) armed with sharp dual claws, stepping without rigid joint articulation." },
      { title: "Permanently Open Spiracles", description: "Tracheal breathing pores cannot close, making velvet worms highly vulnerable to desiccation outside saturated humidity." },
      { title: "Placental Viviparity", description: "Several species nourish their embryos via uterine placental tissues that exchange nutrients directly from maternal blood." },
      { title: "Ancient Living Fossils", description: "Remarkably little changed from Cambrian lobopodians like Hallucigenia and Aysheaia from 500 million years ago." }
    ],
    interestingFacts: [
      "The slime ejected by velvet worms is liquid while flowing inside the gland, but spontaneously cross-links and hardens into glass-brittle fibers the second it contacts air!",
      "Females of some placental species carry their young for nearly a year—a gestation period longer than that of human beings.",
      "They are so sensitive to light and dry air that being placed under an ordinary desk lamp can dehydrate and kill a velvet worm in under thirty minutes.",
      "Velvet worms are among the most famous 'missing links' in biology, preserving traits intermediate between segmented annelid worms and jointed arthropods."
    ],
    scientificImportance: "Onychophorans hold an indispensable phylogenetic position as the sister group to Arthropoda. Their brain neuroanatomy, slime biochemistry, and fossil continuity illuminate the ancestral transition from soft-bodied marine worms to armored terrestrial arthropods."
  },
  {
    id: "nematomorpha",
    name: "Nematomorpha",
    commonName: "Horsehair Worms / Gordian Worms",
    pronunciation: "/ˌnɛm.ə.toʊˈmɔːr.fə/",
    etymology: "Greek 'nema' (thread) + 'morphe' (form), referring to their thread-like thin bodies",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Gordian_worm.jpg/640px-Gordian_worm.jpg",
    accentColor: "#d97706",
    shortDescription: "Ultra-slender, thread-like parasitoids of crickets and praying mantises that famously hijack host brains, driving them to drown themselves so the adult worms can emerge into water.",
    kingdom: "Animalia",
    subkingdom: "Bilateria",
    clade: "Ecdysozoa / Nematoida",
    symmetry: "Bilateral",
    germLayers: "Triploblastic",
    bodyCavity: "Pseudocoelomate (fluid-filled body cavity largely occluded by mesenchyme in adults)",
    habitat: "Adults free-living in freshwater streams, rivers, ponds, and puddles; larvae are endoparasitic inside terrestrial arthropods",
    bodyOrganization: "Organ-system grade",
    digestiveSystem: "Non-functional and vestigial in adults: mouth is absent or closed by cuticle; lacks a functional gut; absorbs nutrients directly across skin during parasitic larval phase",
    nervousSystem: "Peripharyngeal circumoral nerve ring connected to a single unsegmented ventral nerve cord running down the trunk; lacks complex eyes",
    circulatorySystem: "Absent",
    respiratorySystem: "Cutaneous diffusion across tough collagenous cuticle",
    reproduction: "Dioecious; adults assemble into writhing mating balls ('Gordian knots') in water; males possess bifurcated tail lobes to clasp females; females lay millions of white egg strings",
    locomotion: "Adults swim clumsily by slow sinusoidal thrashing and coiling; larvae bore through arthropod hosts using hooks",
    feeding: "Non-feeding as adults; juvenile parasitic phase absorbs host hemolymph proteins and fat bodies across its permeable cuticle",
    bodyStructure: "Extraordinarily thin (1-3 mm wide) yet remarkably long (up to 1 meter) cylindrical body. Uniformly dark brown or black with a lighter rounded head (calotte). The outer body is sheathed in a heavy, collagenous cuticle covered in microscopic polygonal tubercles called areoles.",
    representativeOrganisms: [
      {
        name: "Common Horsehair Worm",
        scientificName: "Gordius aquaticus (Linnaeus, 1758)",
        description: "Widespread in freshwater springs and streams across Europe and North America, mating in tight tangled clusters.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Gordian_worm.jpg/640px-Gordian_worm.jpg"
      },
      {
        name: "Cricket-Controlling Worm",
        scientificName: "Paragordius tricuspidatus (Dufour, 1828)",
        description: "Famous for synthesizing neurochemicals that hijack woodland crickets, compelling them to leap into swimming pools and rivers.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Paragordius_tricuspidatus.jpg/640px-Paragordius_tricuspidatus.jpg"
      }
    ],
    keyCharacteristics: [
      { title: "Neuro-Behavioral Host Hijacking", description: "Alters cricket and mantis brain signaling, compelling land-dwelling insects to commit 'suicide' by jumping into water." },
      { title: "Gordian Knot Mating", description: "Adults congregate in freshwater shallows, coiling their thread-like bodies together into dense tangled knots to mate." },
      { title: "Extreme Aspect Ratio", description: "Can reach over 100 cm in length while remaining barely 1 mm in diameter, resembling a stiff dark horse's hair." },
      { title: "Vestigial Adult Gut", description: "The adult digestive tract has degenerated completely into a solid non-functional cord; adults live solely on larval energy reserves." },
      { title: "Collagenous Areoles", description: "The thick outer cuticle is paved with microscopic raised platforms (areoles) providing structural stiffness and traction." },
      { title: "Aquatic-Terrestrial Bridge", description: "Bridges aquatic ecosystems with terrestrial insect food webs, cycling massive pulses of nutrients into forest streams." }
    ],
    interestingFacts: [
      "Centuries ago, people genuinely believed horsehair worms were real horse hairs from a stallion's tail that had magically come to life after falling into watering troughs.",
      "The common name 'Gordian worm' honors the ancient Greek legend of the Gordian Knot, which was so tangled nobody could untie it.",
      "When an infected cricket hits the water, the adult worm bursts through the insect's abdomen in mere seconds, swimming away while leaving the host behind.",
      "In trout streams, crickets driven into the water by horsehair worms can provide over 60% of the endangered fish's seasonal diet!"
    ],
    scientificImportance: "Nematomorphs are premier models in behavioral neuro-parasitology, demonstrating how parasites synthesize functional molecular mimics of host neurotrophic factors to override complex innate animal behaviors and drive ecosystem-scale trophic cascades."
  }
];

// Helper functions for data access and filtering
export function getAllPhyla() {
  return phylaData;
}

export function getPhylumById(id) {
  if (!id) return null;
  return phylaData.find(p => p.id.toLowerCase() === id.toLowerCase()) || null;
}

export function getAdjacentPhyla(id) {
  const index = phylaData.findIndex(p => p.id.toLowerCase() === id.toLowerCase());
  if (index === -1) return { prev: null, next: null };
  const prev = index > 0 ? phylaData[index - 1] : phylaData[phylaData.length - 1];
  const next = index < phylaData.length - 1 ? phylaData[index + 1] : phylaData[0];
  return { prev, next };
}

// Category extraction helpers for filters
export function getUniqueSymmetries() {
  const list = phylaData.map(p => {
    if (p.symmetry.includes("Asymmetrical")) return "Asymmetrical";
    if (p.symmetry.includes("Bilateral")) return "Bilateral";
    return "Radial / Other";
  });
  return ["All", ...Array.from(new Set(list))];
}

export function getUniqueHabitats() {
  return ["All", "Marine", "Freshwater", "Terrestrial", "Parasitic"];
}

export function getUniqueBodyCavities() {
  return ["All", "Acoelomate", "Pseudocoelomate", "Coelomate"];
}

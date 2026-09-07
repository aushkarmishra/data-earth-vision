/**
 * =============================================================
 * EDIT YOUR WEBSITE CONTENT HERE
 * -------------------------------------------------------------
 * Everything on the site (contact details, services, portfolio,
 * pricing, testimonials, FAQ) is defined in this single file.
 * Change the text between the quotes and the site updates.
 * =============================================================
 */

export const brand = {
  name: "The Research Companion",
  tagline: "Turning Research Data into Clear, Powerful Visuals.",
  subTagline: "GIS • Geospatial Analysis • Scientific Visualization • Research Support",
  philosophy: "Complex research deserves clear communication.",
};

/* ---------- 1. CONTACT DETAILS (edit these) ---------- */
export const contact = {
  email: "[aushkarmishra@gmail.com]",
  phone: "[8544432069]",
  location: "[Srinagar, Uttarakhand, India]",
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/aushkar-mishra-8766a82b6/" },
    { label: "Instagram", href: "https://www.instagram.com/aushkarmishra?stkn=MWFyaXpvenZrYmTxdQ==" },
  ],
};

/* ---------- 2. NAVIGATION ---------- */
export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

/* ---------- 3. STATS STRIP (placeholder values) ---------- */
export const stats = [
  { label: "Projects Completed", value: 30, suffix: "+" },
  { label: "Research Areas", value: 4, suffix: "+" },
];

export const specializations = [
  "GIS & Remote Sensing",
  "Scientific Visualization",
  "Geospatial Analysis",
  "Research Support",
];

/* ---------- 4. SERVICES ---------- */
export type Service = {
  id: string;
  number: string;
  title: string;
  summary: string;
  deliverables: string[];
  workflow: string[];
};

export const services: Service[] = [
  {
    id: "map-making",
    number: "01",
    title: "Custom Map Making",
    summary: "Professional geological, geographical, environmental and research maps.",
    deliverables: ["Print-ready map layouts (PDF / PNG / TIFF)", "Editable project files", "Legend, scale bar and north arrow", "Coordinate system documentation"],
    workflow: ["Define map purpose and extent", "Prepare and project base data", "Symbolise layers and build layout", "Review, refine and export"],
  },
  {
    id: "data-viz",
    number: "02",
    title: "Data Visualization",
    summary: "Transform spreadsheets, survey results and scientific datasets into clear visual stories.",
    deliverables: ["Charts and plots at publication resolution", "Consistent visual style guide", "Source data and script files"],
    workflow: ["Understand the variables and message", "Select the right chart type", "Design and iterate", "Export in required formats"],
  },
  {
    id: "data-cleaning",
    number: "03",
    title: "Data Manipulation & Cleaning",
    summary: "Clean, organize, transform and prepare research datasets for analysis.",
    deliverables: ["Cleaned, structured dataset", "Processing log / documentation", "Reusable scripts where relevant"],
    workflow: ["Audit the raw data", "Handle gaps, errors and duplicates", "Restructure and standardise", "Validate and hand over"],
  },
  {
    id: "research-writing",
    number: "04",
    title: "Research Writing & Documentation",
    summary: "Research-focused writing, technical documentation, figure descriptions and report assistance.",
    deliverables: ["Structured report or section drafts", "Figure captions and descriptions", "Methodology write-ups"],
    workflow: ["Clarify scope and audience", "Draft with your data and notes", "Revise with your feedback", "Deliver formatted document"],
  },
  {
    id: "web-maps",
    number: "05",
    title: "Interactive Web Maps",
    summary: "Interactive maps for research projects, field surveys, environmental studies and presentations.",
    deliverables: ["Hosted or self-contained interactive map", "Layer toggles, popups and legends", "Mobile-friendly viewing"],
    workflow: ["Structure the spatial data", "Design layers and interactions", "Build and test the map", "Deploy and document"],
  },
  {
    id: "diagrams",
    number: "06",
    title: "Scientific Diagrams & Figures",
    summary: "Publication-ready scientific illustrations, workflows, cross-sections, conceptual diagrams and graphical abstracts.",
    deliverables: ["Vector figures (SVG / AI / PDF)", "High-resolution raster exports", "Journal-specific formatting"],
    workflow: ["Sketch the concept together", "Build the vector figure", "Refine labels and typography", "Export to journal specs"],
  },
  {
    id: "research-assistance",
    number: "07",
    title: "General Research Assistance",
    summary: "Support with research data preparation, visualization, GIS workflows, documentation and presentation.",
    deliverables: ["Task-based support", "Workflow guidance and templates", "Presentation-ready material"],
    workflow: ["Scope the task", "Agree on outputs and timeline", "Work iteratively", "Deliver and review"],
  },
];

/* ---------- 5. TOOLS ---------- */
export const tools = [
  "QGIS",
  "ArcGIS",
  "Python",
  "Remote Sensing",
  "Google Earth Engine",
  "Excel",
  "GIS",
  "Cartography",
  "Data Visualization",
];

/* ---------- 6. PORTFOLIO ---------- */
export type Project = {
  id: string;
  title: string;
  category: "GIS" | "Remote Sensing" | "Geology" | "Data" | "Scientific Figures";
  description: string;
  detail: string;
  tags: string[];
};

export const portfolioFilters = ["All", "GIS", "Remote Sensing", "Geology", "Data", "Scientific Figures"] as const;

export const projects: Project[] = [
  {
    id: "geo-mapping",
    title: "Geological Mapping & Spatial Analysis",
    category: "Geology",
    description: "Professional geological mapping and spatial interpretation.",
    detail:
      "Field observations, lithological boundaries and structural measurements compiled into a coherent geological map with an accompanying interpretation of the spatial relationships.",
    tags: ["QGIS", "Structural data", "Cartography"],
  },
  {
    id: "ert",
    title: "ERT Survey Data Visualization",
    category: "Data",
    description: "Clear visualization of electrical resistivity tomography survey results.",
    detail:
      "Inverted resistivity sections rendered with a consistent colour scale, annotated for subsurface interpretation and prepared for inclusion in a report.",
    tags: ["Geophysics", "Sections", "Python"],
  },
  {
    id: "lulc",
    title: "Remote Sensing & LULC Mapping",
    category: "Remote Sensing",
    description: "Land-use / land-cover analysis using satellite imagery.",
    detail:
      "Multi-temporal satellite imagery classified into land-cover classes, with change statistics and a clean map series suitable for publication.",
    tags: ["Satellite imagery", "Classification", "Change detection"],
  },
  {
    id: "geohydro",
    title: "Interactive Geohydrology Map",
    category: "GIS",
    description: "Interactive visualization of regional hydrogeological information.",
    detail:
      "A browser-based map with toggleable aquifer, water-level and borehole layers, popups for site information and a printable static companion map.",
    tags: ["Web map", "Hydrogeology", "Layers"],
  },
  {
    id: "dem",
    title: "DEM & Terrain Analysis",
    category: "GIS",
    description: "Elevation, slope, aspect and terrain-based scientific visualization.",
    detail:
      "Digital elevation models processed into slope, aspect and hillshade derivatives, combined into a terrain visualisation that supports geomorphological interpretation.",
    tags: ["DEM", "Hillshade", "Terrain"],
  },
  {
    id: "figure",
    title: "Scientific Research Figure",
    category: "Scientific Figures",
    description: "Publication-ready conceptual diagrams and scientific workflows.",
    detail:
      "Conceptual models and workflow diagrams rebuilt as clean vector figures with consistent typography, sized to journal column widths.",
    tags: ["Vector", "Graphical abstract", "Workflow"],
  },
];

/* ---------- 7. PROCESS ---------- */
export const processSteps = [
  { number: "01", title: "Understand", text: "Understand the research objective, dataset and required output." },
  { number: "02", title: "Process", text: "Clean, organize and analyse the data." },
  { number: "03", title: "Visualize", text: "Transform the information into maps, figures, charts or interactive visualizations." },
  { number: "04", title: "Deliver", text: "Provide polished, research-ready outputs." },
];

/* ---------- 8. WHY ---------- */
export const advantages = [
  { title: "Research-Focused", text: "Designed specifically around scientific and academic workflows." },
  { title: "Visual Clarity", text: "Complex information is simplified without losing scientific meaning." },
  { title: "Data-Driven", text: "Outputs are based on structured and reproducible workflows." },
  { title: "Detail-Oriented", text: "Accuracy and presentation quality are treated equally." },
  { title: "Collaborative", text: "Work closely with the researcher rather than simply delivering a generic template." },
];

/* ---------- 9. PRICING (placeholder prices — edit freely) ---------- */
export const pricing = [
  {
    name: "Map Making",
    blurb: "For mapping tasks",
    price: "Starting ₹500",
    featured: false,
    items: ["Study Area Map", "Sample sites map", "Remote Sensing data Maps","Interactive web maps"],
    cta: "Get a Quote",
  },
  {
    name: "Research",
    blurb: "For complete research visualization and writing projects.",
    price: "₹1000 - ₹10000",
    featured: true,
    items: ["Excel Data Manipulation", "Data visualization", "Trend Analysis", "Research Writing"],
    cta: "Get a Quote",
  },
  {
    name: "Custom",
    blurb: "For complex or multi-stage projects.",
    price: "Let's Discuss",
    featured: false,
    items: ["Custom workflow", "Multiple deliverables", "Advanced visualization", "Interactive outputs"],
    cta: "Discuss Your Project",
  },
];

/* ---------- 10. TESTIMONIALS ---------- */
// export const testimonials = [
//   {
//     quote: "Placeholder testimonial text describing how the research outputs were delivered clearly and on time.",
//     name: "Client Name",
//     role: "Researcher",
//   },
//   {
//     quote: "Placeholder testimonial text about map quality, communication and attention to scientific detail.",
//     name: "Client Name",
//     role: "Student",
//   },
//   {
//     quote: "Placeholder testimonial text about turning a complex dataset into a figure that reviewers understood.",
//     name: "Client Name",
//     role: "Organization",
//   },
// ];

/* ---------- 11. FAQ ---------- */
export const faqs = [
  {
    q: "What type of research projects do you work with?",
    a: "Geology, environmental science, hydrogeology, geography, engineering, biology, social studies and related fields — essentially any project with spatial or scientific data that needs to be analysed and communicated clearly.",
  },
  {
    q: "Can you work with my existing GIS/data files?",
    a: "Yes. Shapefiles, GeoPackages, rasters, CSV and Excel tables, GPS exports and most common formats can be used directly. If a format is unusual, it can usually still be converted.",
  },
  {
    q: "Can you create publication-ready figures?",
    a: "Yes. Figures can be prepared to journal specifications, including column widths, resolution, font sizes and vector formats.",
  },
  {
    q: "Can you create interactive web maps?",
    a: "Yes. Interactive maps with layer controls, popups and legends can be built for presentations, field projects or online publication.",
  },
  {
    q: "How do I send my research data?",
    a: "Any cloud link works — Google Drive, OneDrive, Dropbox or WeTransfer. Simply share the folder link along with a short description of the dataset.",
  },
  {
    q: "How is project pricing determined?",
    a: "Pricing are flexible and depends on the scope, the state of the data and the number of deliverables. Share your project details and you will receive a clear quote before work begins.",
  },
  {
    q: "Can I request a custom service?",
    a: "Yes. If your requirement does not fit the listed services, describe it in the mail and a custom workflow can be arranged.",
  },
];

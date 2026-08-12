import { ServiceItem, IndustryItem, GalleryItem, Testimonial, FaqItem } from '../types';

export const COMPANY_DETAILS = {
  name: 'ALKANET HOLDINGS (PTY) LTD',
  registrationNumber: '2020 / 123456 / 07',
  email: 'info@alkanet.co.za',
  phones: [
    { display: '071 885 4474', raw: '27718854474' },
    { display: '083 951 7504', raw: '27839517504' },
  ],
  whatsapp: '27718854474',
  primaryFocus: ['Pretoria', 'Johannesburg', 'Gauteng'],
  coverage: 'Nationwide Service across South Africa',
  businessHours: {
    weekdays: 'Monday – Friday: 07:30 – 17:00',
    saturday: 'Saturday: 08:00 – 13:00',
    sunday: 'Sunday & Public Holidays: Closed (On-demand project shifts available)',
  },
  address: 'Unit 4, Gateway Industrial Park, Centurion, Pretoria / Johannesburg Hub, Gauteng, 0157, South Africa',
  tagline: "South Africa's hands-on production partner — Hand Assembly, Packaging & Kitting",
  slogan: "Mapping Solutions Through Innovation",
  summary: "Alkanet Holdings takes the manual work off your production line — folding, packing, kitting, labelling and finishing — so your team gets back to the work only they can do.",
};

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'hand-assembly',
    slug: 'hand-assembly',
    title: 'Hand Assembly Solutions',
    shortDesc: 'Precision manual assembly for intricate products, component joining, mechanical sub-assemblies, and multi-part items.',
    fullDesc: 'ALKANET HOLDINGS delivers scalable, error-free hand assembly services tailored for complex products that automated machinery cannot handle. Our trained assembly workforce handles delicate components, multi-part kits, electrical fittings, and customized promotional items under strict quality management.',
    iconName: 'Wrench',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=1200',
    seoTitle: 'Hand Assembly Services South Africa | Pretoria & Johannesburg | ALKANET HOLDINGS',
    metaDescription: 'Expert hand assembly services in Pretoria, Johannesburg & Gauteng. Manual assembly solutions for intricate products, components, and multi-part kits.',
    benefits: [
      'Eliminate capital expenditure on automated assembly machinery',
      'Flexible workforce scaling for high-volume seasonal demand peaks',
      '100% manual quality check on every assembled unit',
      'Customized assembly process engineered to your exact specifications',
      'Fast turnaround times with daily production capacity reports'
    ],
    process: [
      { step: 1, title: 'Project Consultation & Sample Proofing', description: 'We analyze your product specifications, assemble sample units, and establish standard operating procedures.' },
      { step: 2, title: 'Component Batch Ingestion & Inventory Control', description: 'Raw components are cataloged, barcoded, and stored in our secure Gauteng facility.' },
      { step: 3, title: 'Supervised Hand Assembly', description: 'Our trained assembly teams construct products following meticulous step-by-step quality protocols.' },
      { step: 4, title: 'Inline & Final Quality Inspection', description: 'Dedicated QA inspectors verify tolerances, secure fasteners, and operational integrity.' },
      { step: 5, title: 'Bulk Packing & Nationwide Dispatch', description: 'Finished units are protective-wrapped, palletized, and dispatched across South Africa.' }
    ],
    faqs: [
      { question: 'What types of products can ALKANET hand assemble?', answer: 'We assemble mechanical components, electronic enclosures, plastic products, toys, stationery, promotional gift sets, point-of-sale displays, and hardware kits.' },
      { question: 'What is your minimum order quantity for hand assembly?', answer: 'We accommodate both pilot runs of 500 units and large-scale manufacturing runs exceeding 100,000 units.' }
    ],
    popularIndustries: ['Manufacturing', 'Retail', 'Electronics', 'Corporate Gifts', 'Toys & Goods']
  },
  {
    id: 'packaging',
    slug: 'packaging',
    title: 'Packaging & Repackaging',
    shortDesc: 'Complete contract packaging, shrink-wrapping, pouch sealing, and bulk product repackaging solutions.',
    fullDesc: 'From retail-ready shelf packaging to protective export repacking, ALKANET HOLDINGS provides comprehensive packaging services. We assist South African businesses with re-labeling, damaged carton transfers, bundling, and custom retail packaging.',
    iconName: 'Package',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200',
    seoTitle: 'Contract Packaging & Repackaging Services South Africa | ALKANET HOLDINGS',
    metaDescription: 'Leading packaging & repackaging company in Pretoria & Johannesburg. Shrink-wrapping, pouch sealing, retail bundling, and bulk repackaging services.',
    benefits: [
      'Rapid turnaround for urgent repackaging or damaged shipment remediation',
      'Customized protective packaging to prevent transit damage',
      'Retail compliance with Barcode, SAP, and retail distribution guidelines',
      'Eco-friendly and sustainable packaging options available',
      'Cost-effective high-volume batch processing'
    ],
    process: [
      { step: 1, title: 'Packaging Requirement Assessment', description: 'Determining optimal packaging substrates, dimensions, and sealing mechanisms.' },
      { step: 2, title: 'Depalletization & Inspection', description: 'Receiving bulk goods and evaluating product state before packaging.' },
      { step: 3, title: 'Manual & Assisted Packaging', description: 'Inserting goods into pouches, boxes, clamshells, or shrink-film.' },
      { step: 4, title: 'Sealing, Weight Verification & Labelling', description: 'Ensuring weight precision, tamper-evident seals, and barcode clarity.' },
      { step: 5, title: 'Palletization & Logistics Handover', description: 'Stacking, stretch-wrapping pallets, and loading transport trucks.' }
    ],
    faqs: [
      { question: 'Do you offer emergency or rush repackaging services?', answer: 'Yes, we specialize in emergency turnaround for rejected retail shipments or damaged sea containers arriving in Gauteng.' }
    ],
    popularIndustries: ['FMCG', 'Retail', 'Logistics', 'Pharmaceuticals', 'E-commerce']
  },
  {
    id: 'product-assembly',
    slug: 'product-assembly',
    title: 'Product Assembly',
    shortDesc: 'Full multi-stage product assembly, mechanical fastening, component fitting, and end-product testing.',
    fullDesc: 'Our product assembly division turns raw components and sub-parts into finished, retail-ready merchandise. We support local manufacturers and importers who require dependable manual dexterity, torque-controlled tools, and rigorous assembly standards.',
    iconName: 'Settings',
    image: '/src/assets/images/product_assembly_service_1785840042250.jpg',
    seoTitle: 'Product Assembly Services South Africa | Contract Manufacturing | ALKANET',
    metaDescription: 'Outsourced product assembly services in South Africa. Multi-part mechanical assembly, tool-assisted component fitting, and finished product verification.',
    benefits: [
      'Skilled assembly technicians trained in precise mechanical tolerances',
      'Eliminate capital investment in dedicated assembly line infrastructure',
      'Flexible production schedules customized for seasonal product launches',
      'Comprehensive quality tracking per batch serial number'
    ],
    process: [
      { step: 1, title: 'Technical Drawing Review', description: 'Analyzing product schematics, bill of materials (BOM), and assembly specs.' },
      { step: 2, title: 'Assembly Line Setup', description: 'Configuring ergonomic assembly tables with specialized jigs and tools.' },
      { step: 3, title: 'Sub-Assembly & Final Joinery', description: 'Executing mechanical joins, adhesive applications, or screw fastenings.' },
      { step: 4, title: 'Functional & Visual Testing', description: 'Testing moving parts, electrical continuity, or structural resilience.' },
      { step: 5, title: 'Final Unit Packaging', description: 'Protecting products in individual polybags, cartons, or blister packs.' }
    ],
    faqs: [
      { question: 'Can you handle electrical component fitting?', answer: 'Yes, we handle low-voltage wire harness connections, casing enclosures, battery placement, and LED fitting under anti-static protocols.' }
    ],
    popularIndustries: ['Manufacturing', 'Electronics', 'Automotive Aftermarket', 'Consumer Goods']
  },
  {
    id: 'box-assembly',
    slug: 'box-assembly',
    title: 'Box & Cardboard Assembly',
    shortDesc: 'High-speed manual cardboard box folding, corrugated box assembly, die-cut box erection, and display box setup.',
    fullDesc: 'ALKANET HOLDINGS specializes in high-volume cardboard box folding and rigid box assembly. Whether you need thousands of corrugated shipping cartons folded daily or luxury rigid presentation boxes erected for retail display, our workforce delivers speed and precision.',
    iconName: 'Box',
    image: '/src/assets/images/box_cardboard_assembly_1785840200000_jpg_1785840177499.jpg',
    seoTitle: 'Box Assembly & Cardboard Box Folding South Africa | ALKANET HOLDINGS',
    metaDescription: 'Cardboard box folding, corrugated carton assembly, and display box erection in Pretoria & Johannesburg. Fast turnaround box folding services.',
    benefits: [
      'Process tens of thousands of flat-packed boxes per week',
      'Save valuable in-house warehouse space by outsourcing box pre-erection',
      'Crisp folds, clean tape applications, and zero structural collapses',
      'Immediate delivery of pre-erected cartons to your logistics facility'
    ],
    process: [
      { step: 1, title: 'Flat Carton Reception', description: 'Receiving die-cut cardboard sheets or flat-packed corrugated cartons.' },
      { step: 2, title: 'Manual Creasing & Erection', description: 'Executing sharp crease folds and interlocking flap mechanisms.' },
      { step: 3, title: 'Taping / Adhesive Reinforcement', description: 'Applying heavy-duty box sealing tape or industrial glue tabs.' },
      { step: 4, title: 'Partition & Divider Insertion', description: 'Fitting internal corrugated dividers or custom cardboard inserts.' },
      { step: 5, title: 'Nested Stacking & Pallet Wrapping', description: 'Bundling boxes securely for immediate loading.' }
    ],
    faqs: [
      { question: 'Can you insert dividers and protective bubble wrap?', answer: 'Absolutely. We assemble complex box interiors, egg-crate style partitions, and protective foam/bubble liners.' }
    ],
    popularIndustries: ['Logistics', 'E-commerce', 'Pharmaceuticals', 'Beverage & Wine', 'Printing']
  },
  {
    id: 'file-folding',
    slug: 'file-folding',
    title: 'File & Folder Folding',
    shortDesc: 'Specialized manual paper folding, legal file folder assembly, medical chart binding, and custom document prep.',
    fullDesc: 'Outsource your high-volume document and file folder assembly to ALKANET. We provide precision file folding, metal clip/fastener installation, gusset expansion folder folding, and custom indexing for corporate offices, law firms, government departments, and printing houses.',
    iconName: 'FileText',
    image: 'https://images.unsplash.com/photo-1583521214690-73421a1829a9?auto=format&fit=crop&q=80&w=1200',
    seoTitle: 'File Folding & Folder Assembly Services South Africa | ALKANET HOLDINGS',
    metaDescription: 'Professional file folding, document folder assembly, and paper folding in Pretoria & Johannesburg. Serving printers, legal, government & corporate.',
    benefits: [
      'Clean crease lines without paper tearing or misalignment',
      'Accurate fitting of prongs, lever arches, and plastic index tabs',
      'High-speed processing for urgent printing press deadlines',
      'Strict confidentiality and document security protocols'
    ],
    process: [
      { step: 1, title: 'Unfolded Sheet Acceptance', description: 'Receiving printed board or heavy paper stock from printing presses.' },
      { step: 2, title: 'Precision Creasing & Folding', description: 'Folding along press score lines with bone folders for razor-sharp edges.' },
      { step: 3, title: 'Fastener & Hardware Fitting', description: 'Attaching metal file clips, self-adhesive prongs, or elastic bands.' },
      { step: 4, title: 'Tab Insertion & Collation', description: 'Inserting color-coded indexing tabs and internal sleeves.' },
      { step: 5, title: 'Carton Packing & Delivery', description: 'Bundling folders into labeled cartons for direct delivery.' }
    ],
    faqs: [
      { question: 'Do you work directly with printing companies?', answer: 'Yes! Printing companies regularly outsource complex post-press hand assembly and folder folding to us to keep their machines running 24/7.' }
    ],
    popularIndustries: ['Printing Companies', 'Government', 'Legal Sector', 'Schools & Universities', 'Corporate']
  },
  {
    id: 'kitting',
    slug: 'kitting-services',
    title: 'Kitting & Custom Bundling',
    shortDesc: 'Multi-SKU product kitting, promotional gift boxes, subscription boxes, and multi-component retail bundles.',
    fullDesc: 'Streamline your fulfillment operations with ALKANET’s custom product kitting services. We assemble multi-SKU combinations into single ready-to-ship packages, subscription boxes, marketing press kits, and retail gift sets.',
    iconName: 'Layers',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200',
    seoTitle: 'Product Kitting Services South Africa | Promotional & Subscription Boxes | ALKANET',
    metaDescription: 'Top-rated kitting & custom bundling services in Gauteng. Promotional kit assembly, subscription boxes, FMCG bundles, and retail gift packs.',
    benefits: [
      '100% component verification ensuring no missing items in any kit',
      'Custom void-fill, tissue paper wrapping, and aesthetic presentation',
      'Synchronized multi-item inventory management',
      'Scalable fulfillment support during holiday peaks & Black Friday sales'
    ],
    process: [
      { step: 1, title: 'Kit Architecture Design', description: 'Defining component placement, tissue wrapping, and box dimensions.' },
      { step: 2, title: 'Multi-SKU Pick & Sort', description: 'Gathering components from inventory bins with digital batch counts.' },
      { step: 3, title: 'Precise Pack Insertion', description: 'Placing items, marketing collateral, coupons, and tissue paper.' },
      { step: 4, title: 'Kit Audit & Final Seal', description: 'Auditing weight and visual presentation before applying security seals.' },
      { step: 5, title: 'Master Carton Packing', description: 'Packing finished kits into outer shipper boxes ready for courier collection.' }
    ],
    faqs: [
      { question: 'Can you handle fragile beauty or glass products in kits?', answer: 'Yes, our teams are experienced in handling fragile cosmetics, glassware, and bottled beverages with protective bubble wrapping and custom inserts.' }
    ],
    popularIndustries: ['E-commerce', 'Marketing Agencies', 'FMCG', 'Cosmetics & Beauty', 'Retail']
  },
  {
    id: 'labelling',
    slug: 'product-labelling',
    title: 'Labelling & Price Tagging',
    shortDesc: 'High-speed manual label application, barcode stickers, promotional overlays, price tagging, and compliance labels.',
    fullDesc: 'Ensure your products meet South African retail standards with accurate manual labelling services. ALKANET applies promotional stickers, barcode labels, ingredients lists, expiry dates, price tags, and multi-language country overlays.',
    iconName: 'Tag',
    image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=1200',
    seoTitle: 'Product Labelling & Barcode Tagging South Africa | ALKANET HOLDINGS',
    metaDescription: 'Manual barcode labelling, price tagging, ingredient overlays, and compliance stickers in Pretoria & Johannesburg. Fast & accurate labelling.',
    benefits: [
      'Straight, wrinkle-free, bubble-free label placement every time',
      'Barcode scan-test verification on every batch',
      'Relabelling service for imported goods with non-compliant labels',
      'Rapid turnaround for urgent promotional price markdowns'
    ],
    process: [
      { step: 1, title: 'Label & Product Alignment Prep', description: 'Calibrating label positioning guides and surface cleaning.' },
      { step: 2, title: 'Manual Precision Application', description: 'Applying pressure-sensitive labels, stickers, or hang-tags.' },
      { step: 3, title: 'Barcode Scannability Audit', description: 'Scanning random samples with handheld barcode readers.' },
      { step: 4, title: 'Repacking into Retail Packaging', description: 'Restoring products into original shelf-ready cartons.' }
    ],
    faqs: [
      { question: 'What if our imported batch has incorrect labels?', answer: 'We offer rapid over-labelling or label removal and re-application to ensure instant retail compliance.' }
    ],
    popularIndustries: ['Retail', 'FMCG', 'Pharmaceuticals', 'Apparel & Textiles', 'Import/Export']
  },
  {
    id: 'quality-inspection',
    slug: 'quality-inspection',
    title: 'Quality Inspection & Sorting',
    shortDesc: 'Thorough visual quality checks, product counting, defect sorting, batch auditing, and pre-shipment verification.',
    fullDesc: 'Protect your brand reputation with ALKANET’s independent quality inspection services. Our trained QA inspectors examine raw materials, imported goods, and manufactured batches for cosmetic flaws, structural defects, dimensional accuracy, and quantity counts.',
    iconName: 'CheckCircle2',
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&q=80&w=1200',
    seoTitle: 'Product Quality Inspection & Sorting Services South Africa | ALKANET',
    metaDescription: 'Independent quality control, product sorting, manual counting, and defect filtering in Gauteng. Ensure zero-defect shipments.',
    benefits: [
      'Comprehensive defect reports with photographs and breakdown statistics',
      'Sorting compliant vs non-compliant inventory before retail distribution',
      'Manual piece-by-piece physical inventory counting',
      'ISO-aligned inspection protocols and acceptance quality limits (AQL)'
    ],
    process: [
      { step: 1, title: 'Inspection Criteria Definition', description: 'Receiving client defect categories (Major, Minor, Critical).' },
      { step: 2, title: 'Piece-by-Piece Visual Audit', description: 'Examining finish, color consistency, function, and packaging.' },
      { step: 3, title: 'Segregation & Sorting', description: 'Separating approved units from quarantined defective stock.' },
      { step: 4, title: 'Detailed QA Report Generation', description: 'Issuing batch breakdown metrics, defect percentages, and photos.' },
      { step: 5, title: 'Approved Stock Dispatch', description: 'Re-sealing verified units and releasing for transport.' }
    ],
    faqs: [
      { question: 'Can you perform quality inspection at our warehouse?', answer: 'Yes! We can deploy trained quality inspectors directly to your facility or perform the inspection at our central hub.' }
    ],
    popularIndustries: ['Manufacturing', 'Pharmaceuticals', 'Automotive', 'Logistics', 'FMCG']
  },
  {
    id: 'promotional-packs',
    slug: 'promotional-packs',
    title: 'Promotional & Corporate Gift Assembly',
    shortDesc: 'Luxury gift wrapping, event pack stuffing, corporate hamper assembly, and high-impact marketing kits.',
    fullDesc: 'Create lasting impressions for corporate events, product launches, and seasonal celebrations. ALKANET handles ribbon tying, tissue paper wrapping, custom hamper arrangement, delegate bag stuffing, and high-touch promotional kit creation.',
    iconName: 'Gift',
    image: 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&q=80&w=1200',
    seoTitle: 'Promotional Packaging & Corporate Gift Assembly South Africa | ALKANET',
    metaDescription: 'Corporate gift assembly, event pack stuffing, promotional hampers, and gift wrapping services in Pretoria & Johannesburg.',
    benefits: [
      'White-glove care for premium corporate gifts and luxury items',
      'Custom ribbon tying, bow creation, and decorative wrapping',
      'Scalable throughput for conference delegate packs (1,000+ per day)',
      'Strict adherence to marketing campaign launch deadlines'
    ],
    process: [
      { step: 1, title: 'Unboxing & Item Prep', description: 'Sorting branded promotional items, booklets, and gifts.' },
      { step: 2, title: 'Aesthetic Assembly & Layout', description: 'Arranging items for maximum visual impact in boxes or bags.' },
      { step: 3, title: 'Decorative Finishing', description: 'Adding custom tissue paper, stickers, ribbons, and personalized cards.' },
      { step: 4, title: 'Protective Bulk Transport Packaging', description: 'Packing completed gift boxes into padded outer containers.' }
    ],
    faqs: [
      { question: 'Do you handle tight deadlines for upcoming conferences?', answer: 'Yes, we regularly assemble multi-thousand delegate packs overnight for major Johannesburg and Pretoria expo centers.' }
    ],
    popularIndustries: ['Marketing Agencies', 'Corporate Companies', 'Events', 'PR & Media', 'Hospitality']
  },
  {
    id: 'outsourced-labour',
    slug: 'outsourced-labour',
    title: 'Outsourced Manual Labour Solutions',
    shortDesc: 'Flexible, fully managed manual labour teams for warehouse processing, container offloading, and assembly operations.',
    fullDesc: 'Eliminate staffing overhead and labour compliance headaches with ALKANET’s outsourced labour solutions. We provide trained, managed, and reliable manual workers for short-term projects, seasonal spikes, or permanent warehouse assembly lines.',
    iconName: 'Users',
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=1200',
    seoTitle: 'Outsourced Labour Solutions South Africa | Manual Labour Provider | ALKANET',
    metaDescription: 'Reliable outsourced labour solutions in Gauteng. Contract warehouse workers, assembly staff, container offloading, and manual packaging teams.',
    benefits: [
      'Fully compliant with South African Labour Relations Act & BCEA',
      'Supervised teams with dedicated ALKANET team leaders on-site',
      'Zero HR or payroll administrative burden for your company',
      'Scale headcount up or down based on weekly production requirements'
    ],
    process: [
      { step: 1, title: 'Workforce Requirement Scoping', description: 'Identifying required headcount, skill sets, and shifts.' },
      { step: 2, title: 'Staff Vetting & Safety Induction', description: 'Deploying background-checked, safety-certified personnel.' },
      { step: 3, title: 'On-Site Team Lead Management', description: 'Assigning a dedicated supervisor to monitor output targets and quality.' },
      { step: 4, title: 'Daily Productivity Tracking', description: 'Providing daily attendance, output volume, and efficiency metrics.' }
    ],
    faqs: [
      { question: 'Are your workers vetted and insured?', answer: 'Yes, all ALKANET workforce members are background-vetted, insured, and trained in occupational health and safety standards.' }
    ],
    popularIndustries: ['Logistics & Warehousing', 'Manufacturing', 'Retail Distribution', 'FMCG']
  }
];

export const INDUSTRIES_LIST: IndustryItem[] = [
  {
    id: 'manufacturing',
    name: 'Manufacturing',
    description: 'Supporting South African factories with manual sub-assemblies, part fitting, and end-line packaging to maintain maximum machine utilization.',
    iconName: 'Factory',
    image: '/src/assets/images/manufacturing_assembly_line_1785844937177.jpg',
    useCases: ['Component assembly', 'Defect sorting', 'Export repackaging', 'Hardware kitting'],
    keyBenefits: ['Reduced operational overhead', 'Scalable production capacity', 'Strict AQL quality checks']
  },
  {
    id: 'retail',
    name: 'Retailers & Wholesalers',
    description: 'Delivering retail-ready product prep, promotional sticker application, price tagging, and shelf display assembly.',
    iconName: 'Store',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800',
    useCases: ['Price markdowns', 'Multi-buy bundling', 'Shelf display erection', 'Barcode labelling'],
    keyBenefits: ['Rapid retail distribution readiness', 'Zero compliance penalties from retailers', 'Flexible volume handling']
  },
  {
    id: 'logistics',
    name: 'Logistics & Warehousing',
    description: 'On-demand container offloading, carton rework, pallet restacking, and high-speed fulfillment support.',
    iconName: 'Truck',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800',
    useCases: ['Damaged carton transfers', 'Pallet stretch-wrapping', 'Container unpacking', 'SKU sorting'],
    keyBenefits: ['Immediate response to shipping emergencies', 'Dedicated warehouse teams', '24/7 operational capability']
  },
  {
    id: 'fmcg',
    name: 'FMCG & Consumer Goods',
    description: 'High-volume contract packaging, promotional twin-pack wrapping, sample pouch insertion, and seasonal gift packs.',
    iconName: 'ShoppingBag',
    image: '/src/assets/images/fmcg_consumer_goods_1785840300000_jpg_1785840318092.jpg',
    useCases: ['Twin-pack shrink wrapping', 'Sample collation', 'On-pack promotional offers', 'Multipack assembly'],
    keyBenefits: ['HACCP-aligned clean handling', 'High-speed throughput', 'Precision batch numbering']
  },
  {
    id: 'pharmaceutical',
    name: 'Pharmaceutical & Healthcare',
    description: 'Controlled environment outer-box packaging, medical file assembly, patient kit bundling, and leaflet insertion.',
    iconName: 'Activity',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800',
    useCases: ['Package insert placement', 'Outer carton assembly', 'Medical kit collating', 'Batch label check'],
    keyBenefits: ['Traceable quality protocols', 'Hygiene-focused workforce', 'Zero cross-contamination policy']
  },
  {
    id: 'printing',
    name: 'Printing Companies',
    description: 'Hand folding complex brochures, gusset folder erection, document inserting, envelope stuffing, and book spine gluing.',
    iconName: 'Printer',
    image: '/src/assets/images/printing_companies_industry_1785840495971.jpg',
    useCases: ['File folder assembly', 'Direct mail stuffing', 'Custom die-cut box assembly', 'Calendar binding'],
    keyBenefits: ['Offloads labour bottlenecks from press runs', 'Clean bone-folded creases', 'Met print deadlines']
  },
  {
    id: 'marketing',
    name: 'Marketing & PR Agencies',
    description: 'Handcrafting bespoke media press drops, influencer gift boxes, promotional launch kits, and conference packs.',
    iconName: 'Megaphone',
    image: '/src/assets/images/marketing_pr_agencies_industry_1785840767400.jpg',
    useCases: ['Influencer box assembly', 'VIP press packs', 'Conference delegate bags', 'Custom ribbon wrapping'],
    keyBenefits: ['Flawless aesthetic execution', 'Confidentiality under NDA', 'Overnight rush turnaround']
  },
  {
    id: 'ecommerce',
    name: 'E-Commerce Businesses',
    description: 'Subscription box kitting, customized unboxing presentation, barcode labelling, and return item sorting.',
    iconName: 'Globe',
    image: '/src/assets/images/ecommerce_warehouse_fulfillment_1785844210516.jpg',
    useCases: ['Subscription box assembly', 'Custom tissue wrapping', 'Return product inspection', 'Insert cards'],
    keyBenefits: ['Enhanced unboxing experience', 'Scales effortlessly for Black Friday', 'Reduces return rates']
  },
  {
    id: 'government-schools',
    name: 'Government & Education',
    description: 'Large-scale exam paper packet sealing, textbook distribution kitting, stationery set assembly, and tender file prep.',
    iconName: 'GraduationCap',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800',
    useCases: ['Tender document binding', 'Stationery kit packing', 'Exam envelope sealing', 'School pack collation'],
    keyBenefits: ['High security document controls', 'Large workforce capacity', 'B-BBEE compliant sourcing']
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Manual Document Folder Fastener Assembly & Clip Fitting',
    category: 'assembly',
    categoryLabel: 'Hand Assembly',
    image: '/src/assets/images/folder_clip_assembly_1785500402425.jpg',
    description: 'Precision manual installation of metal prong fastener clips into heavy-duty Manila document folders for legal and government file archives.',
    clientType: 'Legal & Printing Manufacturer (Pretoria)',
    beforeAfter: {
      beforeText: 'Flat un-punched Manila folder stock and loose metal prongs in bulk bags.',
      afterText: 'Over 50,000 document folders fitted with metal prongs, boxed, and palletized.',
      beforeImage: '/src/assets/images/folder_clip_assembly_1785500402425.jpg',
      afterImage: '/src/assets/images/worker_folder_assembly_1785500417760.jpg'
    }
  },
  {
    id: 'gal-2',
    title: 'Seated Folder Assembly & Quality Check Line',
    category: 'assembly',
    categoryLabel: 'Assembly Line',
    image: '/src/assets/images/worker_folder_assembly_1785500417760.jpg',
    description: 'Dedicated team member folding pre-scored Manila document folders and inspecting edge alignment for high-volume contract run.',
    clientType: 'Stationery & Office Supply Distributor (Gauteng)'
  },
  {
    id: 'gal-3',
    title: 'High-Volume Document Folder Collating & Stacking',
    category: 'kitting',
    categoryLabel: 'Collating & Kitting',
    image: '/src/assets/images/worker_folder_collating_1785500434349.jpg',
    description: 'Line worker operating along high-capacity assembly table collating multi-part index folders and filing tabs.',
    clientType: 'Education & Government Tender Partner'
  },
  {
    id: 'gal-4',
    title: 'Barcode Labelling & Compliance Overstickering',
    category: 'packaging',
    categoryLabel: 'Labelling',
    image: '/src/assets/images/worker_folder_labelling_1785500448792.jpg',
    description: 'Applied 100,000+ retail compliance barcode labels and serial stickers to paperboard products at our Gauteng facility.',
    clientType: 'National Office Supply Retailer'
  },
  {
    id: 'gal-5',
    title: 'Gift Set Kitting & Precision Packaging',
    category: 'quality',
    categoryLabel: 'Quality Control',
    image: '/src/assets/images/alkanet_kitting_quality_1785312428217.jpg',
    description: 'Collation of multi-item gift boxes with tactile inspection and zero-defect quality control.',
    clientType: 'Corporate FMCG & Gift Brand'
  },
  {
    id: 'gal-6',
    title: 'Bulk Box Folding & Shrink Wrapping Line',
    category: 'labour',
    categoryLabel: 'Outsourced Labour',
    image: '/src/assets/images/alkanet_hero_packaging_1785312412760.jpg',
    description: 'Managed workforce folding die-cut shipper boxes and stretch-wrapping pallet loads for urgent dispatch.',
    clientType: 'Third-Party Logistics (3PL)'
  },
  {
    id: 'gal-7',
    title: 'Multi-Part Product Assembly & Mechanical Fitting',
    category: 'assembly',
    categoryLabel: 'Product Assembly',
    image: '/src/assets/images/product_assembly_service_1785840042250.jpg',
    description: 'Manual component fitting, modular assembly, and structural inspection for retail and commercial products.',
    clientType: 'Commercial Goods & Furniture Importer'
  },
  {
    id: 'gal-8',
    title: 'Box & Cardboard Assembly Line',
    category: 'assembly',
    categoryLabel: 'Box Assembly',
    image: '/src/assets/images/box_cardboard_assembly_1785840200000_jpg_1785840177499.jpg',
    description: 'High-speed manual box wrapping, corrugated carton assembly, and die-cut box erection.',
    clientType: 'Packaging & E-commerce Logistics'
  },
  {
    id: 'gal-9',
    title: 'FMCG & Food Product Canning Line',
    category: 'packaging',
    categoryLabel: 'Contract Packaging',
    image: '/src/assets/images/fmcg_consumer_goods_1785840300000_jpg_1785840318092.jpg',
    description: 'High-speed contract canning, food-safe consumer goods packaging, and multipack collation.',
    clientType: 'FMCG & Food Producer'
  },
  {
    id: 'gal-10',
    title: 'Commercial Printing & Booklet Finishing Line',
    category: 'assembly',
    categoryLabel: 'File Folding & Collating',
    image: '/src/assets/images/printing_companies_industry_1785840495971.jpg',
    description: 'Post-press booklet collation, brochure bone-folding, and magazine insert packing for commercial printing houses.',
    clientType: 'Commercial Printing House (Gauteng)'
  },
  {
    id: 'gal-11',
    title: 'PR & Marketing Launch Kit Assembly',
    category: 'kitting',
    categoryLabel: 'Custom Kitting & PR drops',
    image: '/src/assets/images/marketing_pr_agencies_industry_1785840767400.jpg',
    description: 'Bespoke media drop packaging, influencer gift box prep, promotional unboxing kits, and custom ribbon wrapping.',
    clientType: 'Marketing & PR Agency (Johannesburg)'
  },
  {
    id: 'gal-12',
    title: 'E-Commerce Warehouse Fulfillment & Box Sorting',
    category: 'boxes',
    categoryLabel: 'E-Commerce Fulfillment',
    image: '/src/assets/images/ecommerce_warehouse_fulfillment_1785844210516.jpg',
    description: 'High-volume carton palletizing, subscription box assembly, and e-commerce shipping package preparation.',
    clientType: 'E-Commerce Retail Logistics'
  },
  {
    id: 'gal-13',
    title: 'Industrial Manufacturing Component Sub-Assembly',
    category: 'assembly',
    categoryLabel: 'Factory Sub-Assembly',
    image: '/src/assets/images/manufacturing_assembly_line_1785844937177.jpg',
    description: 'On-site factory component fitting, sub-assembly building, defect sorting, and export packaging.',
    clientType: 'Industrial Equipment Manufacturer (Pretoria)'
  }
];

export const TESTIMONIALS_LIST: Testimonial[] = [
  {
    id: 't-1',
    name: 'Penny Ncube',
    role: 'Operations Director',
    company: 'Apex Logistics & FMCG',
    location: 'Johannesburg, Gauteng',
    content: 'ALKANET HOLDINGS saved our peak season campaign! We needed 40,000 promotional gift packs assembled and barcode-labelled in 4 days. Their team was professional, accurate, and delivered zero defects. Truly South Africa\'s best hand assembly partner.',
    rating: 5,
    serviceUsed: 'Promotional Kit Assembly & Labelling'
  },
  {
    id: 't-2',
    name: 'Batandwa Mbeki',
    role: 'Supply Chain Manager',
    company: 'Gauteng Industrial Plastics',
    location: 'Pretoria',
    content: 'Outsourcing our box folding and product sorting to ALKANET allowed our main production factory to focus 100% on molding. Their quality inspection reports are thorough and their team supervisors are top-notch.',
    rating: 5,
    serviceUsed: 'Box Folding & Quality Inspection'
  },
  {
    id: 't-3',
    name: 'Modisa Maroleng',
    role: 'Managing Director',
    company: 'Verve Marketing Agency',
    location: 'Sandton, Johannesburg',
    content: 'We had a high-stakes influencer drop for a global cosmetic launch. ALKANET handled delicate tissue wrapping, ribbon tying, and custom box kitting impeccably. Every single box was a work of art.',
    rating: 5,
    serviceUsed: 'Corporate Gift & Kitting Assembly'
  },
  {
    id: 't-4',
    name: 'Dean Chetty',
    role: 'Production Lead',
    company: 'PrintCore Media South Africa',
    location: 'Centurion, Pretoria',
    content: 'As a commercial print house, we often get caught with intricate manual file folding jobs that our machines cannot handle. ALKANET takes the workload off our hands with incredible speed and accuracy.',
    rating: 5,
    serviceUsed: 'File Folding & Folder Assembly'
  }
];

export const FAQS_LIST: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'General',
    question: 'Where is ALKANET HOLDINGS located and what areas do you service?',
    answer: 'ALKANET HOLDINGS (PTY) LTD is strategically located in Gauteng with primary focus areas in Pretoria and Johannesburg. We provide hand assembly, packaging, and outsourced labour services across all provinces in South Africa, including Western Cape, KwaZulu-Natal, Eastern Cape, and nationwide.'
  },
  {
    id: 'faq-2',
    category: 'Pricing & Quotes',
    question: 'How do you calculate pricing for hand assembly and packaging projects?',
    answer: 'Pricing is structured transparently per unit assembled/packaged or on an hourly workforce basis. We take into account component complexity, batch quantities, packaging specifications, and turnaround deadlines. Contact us for a free, no-obligation quote within 2 hours.'
  },
  {
    id: 'faq-3',
    category: 'Quality & Turnaround',
    question: 'How do you guarantee quality control and prevent assembly errors?',
    answer: 'We operate under strict Quality Assurance (QA) protocols with inline checks, dedicated floor supervisors, and final AQL random sampling. Every job undergoes pilot sample approval before mass assembly begins.'
  },
  {
    id: 'faq-4',
    category: 'Labour Outsourcing',
    question: 'Can ALKANET provide outsourced workers directly at our facility?',
    answer: 'Yes! We offer both off-site hand assembly at our secure Gauteng facilities and fully managed, supervised on-site labour teams deployed directly to your factory or warehouse.'
  },
  {
    id: 'faq-5',
    category: 'Quality & Turnaround',
    question: 'What lead times can we expect for urgent packaging or assembly runs?',
    answer: 'We specialize in rapid turnaround. Depending on component availability, we can deploy teams within 24 hours for urgent repackaging, container offloading, or high-volume box folding jobs.'
  },
  {
    id: 'faq-6',
    category: 'Pricing & Quotes',
    question: 'What is your minimum project quantity requirement?',
    answer: 'We cater to businesses of all sizes — from pilot runs of 500 units for small businesses or e-commerce startups to multi-hundred-thousand unit contracts for corporate manufacturers and retailers.'
  }
];

export const KEY_STATS = [
  { value: '2M+', label: 'Units Assembled & Packaged', suffix: '' },
  { value: '99.8%', label: 'Quality Accuracy Rate', suffix: '' },
  { value: '50+', label: 'Corporate & Industrial Clients', suffix: '+' },
  { value: '24-48', label: 'Average Turnaround (Hours, based on workload)', suffix: 'hrs' },
];

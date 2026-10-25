export interface HeroSlide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  image: string;
  tag: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  highlights: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Interiors' | 'Curtains & Blinds' | 'Furnishing' | 'Exterior Spaces';
  image: string;
  description: string;
}

export const BUSINESS_INFO = {
  name: "CCA INTERIOR",
  tagline: "Interiors & Blinds World",
  address: "7/9 Lugard Road, Jos 930105, Plateau State, Nigeria",
  phone: "0803 366 2363",
  phoneFormatted: "+234 803 366 2363",
  whatsappUrl: "https://wa.me/2348033662363",
  telUrl: "tel:+2348033662363",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=7/9+Lugard+Road+Jos+Plateau+State+Nigeria",
  hours: "Mon - Sat: 9:00 AM - 6:00 PM",
};

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    tag: "01 / SPACES THAT INSPIRE",
    title: "SPACES THAT INSPIRE.",
    subtitle: "Sophisticated Living & Architectural Harmony",
    description: "Thoughtfully selected interiors, refined details, and beautiful surroundings that bring a space to life with warmth and distinction.",
    ctaText: "EXPLORE OUR SERVICES",
    ctaLink: "/services",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1920",
  },
  {
    id: 2,
    tag: "02 / THE ART OF FINISHING TOUCHES",
    title: "THE ART OF FINISHING TOUCHES.",
    subtitle: "Custom Curtains, Blinds & Window Treatments",
    description: "Discover how bespoke curtains, motorised blinds, layered textures, and carefully considered details transform the atmosphere of every room.",
    ctaText: "DISCOVER OUR SOLUTIONS",
    ctaLink: "/services",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1920",
  },
  {
    id: 3,
    tag: "03 / ELEVATE EVERY CORNER",
    title: "ELEVATE EVERY CORNER.",
    subtitle: "Refined Furnishing & Outdoor Living",
    description: "Explore exquisite furnishing, statement decor pieces, and elegant outdoor living areas tailored for comfort and enduring beauty.",
    ctaText: "LET'S DISCUSS YOUR SPACE",
    ctaLink: "/contact",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1920",
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: "interior-decoration",
    title: "Interior Decoration",
    category: "Decoration",
    shortDesc: "Complete spatial transformation through curated palettes, bespoke lighting, and balanced architectural styling.",
    fullDesc: "Our interior decoration service focuses on creating harmonious, deeply personal environments. We guide you through color selection, spatial flow, statement art placement, and accessory curation to give your home or office an unmistakable air of refinement.",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=1000",
    highlights: ["Bespoke spatial styling", "Color palette consulting", "Lighting & ambiance design", "Accessory & art curation"]
  },
  {
    id: "curtains-blinds",
    title: "Curtains & Blinds",
    category: "Window Treatments",
    shortDesc: "Exquisite window dressings crafted from premium fabrics, featuring motorized blinds and elegant drapery.",
    fullDesc: "As specialists in window finishing, CCA Interior provides handcrafted curtains and precision-engineered blinds. From sheer layered sheers to blackout motorized roller blinds, we elevate the light quality and privacy of your rooms.",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1000",
    highlights: ["Custom drapery & sheers", "Motorized & smart blinds", "Roman & Venetian shades", "Professional installation"]
  },
  {
    id: "furniture-furnishing",
    title: "Furniture & Furnishing",
    category: "Furnishing",
    shortDesc: "Handpicked statement furniture, plush upholstery, and exquisite soft furnishings tailored to your lifestyle.",
    fullDesc: "Furniture defines the utility and elegance of your spaces. We source and supply premium sofas, accent chairs, dining sets, and custom upholstery that marry ergonomic comfort with striking contemporary aesthetics.",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=1000",
    highlights: ["Custom upholstered seating", "Executive & living furniture", "Rugs & soft textiles", "Exclusive woodwork accents"]
  },
  {
    id: "space-styling",
    title: "Space Styling & Makeovers",
    category: "Consultation",
    shortDesc: "Rapid yet transformative room refreshes that revitalize your existing layout and furniture.",
    fullDesc: "Not every project requires a ground-up rebuild. Our space styling service breathes new life into your current rooms through strategic rearranging, new textiles, statement lighting, and fresh decorative accents.",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=1000",
    highlights: ["Room-by-room refreshes", "Textile & rug updates", "Wall art & mirror placement", "Turnkey styling day"]
  },
  {
    id: "exterior-decoration",
    title: "Exterior & Patio Living",
    category: "Outdoor",
    shortDesc: "Extend your refined aesthetic outdoors with weather-resistant furnishings and patio shading solutions.",
    fullDesc: "Create seamless transitions between indoor luxury and outdoor serenity. We design inviting patios, balcony sanctuaries, and shaded garden lounges built for relaxation and social gatherings.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000",
    highlights: ["Outdoor lounge seating", "Patio awnings & shades", "Landscape soft accents", "Weatherproof finishes"]
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Minimalist Warmth Living Room",
    category: "Interiors",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1000",
    description: "Neutral earth tones paired with bespoke wooden accents and warm atmospheric lighting."
  },
  {
    id: "gal-2",
    title: "Floor-to-Ceiling Luxury Drapery",
    category: "Curtains & Blinds",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1000",
    description: "Custom pleated ivory curtains softening natural daylight in a contemporary residence."
  },
  {
    id: "gal-3",
    title: "Executive Lounge Furnishing",
    category: "Furnishing",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=1000",
    description: "Curated leather and textured fabric seating arrangement designed for sophisticated comfort."
  },
  {
    id: "gal-4",
    title: "Serene Garden Patio Retreat",
    category: "Exterior Spaces",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000",
    description: "Weather-resistant seating and elegant shading for peaceful outdoor relaxation."
  },
  {
    id: "gal-5",
    title: "Contemporary Dining Sanctuary",
    category: "Interiors",
    image: "https://images.unsplash.com/photo-1617806118233-18e1c0c242ef?auto=format&fit=crop&q=80&w=1000",
    description: "Sophisticated dining space featuring sculptural pendant lighting and clean lines."
  },
  {
    id: "gal-6",
    title: "Motorized Roller Blinds",
    category: "Curtains & Blinds",
    image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&q=80&w=1000",
    description: "Sleek, automated window solutions providing effortless privacy and light control."
  },
  {
    id: "gal-7",
    title: "Master Bedroom Suite",
    category: "Furnishing",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&q=80&w=1000",
    description: "Layered textiles, upholstered headboard, and tranquil ambient illumination."
  },
  {
    id: "gal-8",
    title: "Architectural Balcony Lounge",
    category: "Exterior Spaces",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=1000",
    description: "An open-air relaxation spot crafted with weather-treated textures and greenery."
  },
];

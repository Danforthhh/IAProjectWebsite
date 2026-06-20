export type Product = {
  id: string
  name: string
  tagline: string
  creator: string
  aiTool: string
  aiColor: string
  accent: string
  accentLight: string
  emoji: string
  concept: string
  keyIngredients: string[]
  scores: {
    manufacturing: number
    differentiation: number
    consumerAppeal: number
    brandMarketing: number
    overall: number
  }
  highlight: string
  marketStat: string
  format: string
  isHero: boolean
}

export const products: Product[] = [
  {
    id: 'smashdchips',
    name: "Smash'd",
    tagline: "La Chip Végétale Sans Compromis",
    creator: "Karim",
    aiTool: "GPT-4",
    aiColor: "#10a37f",
    accent: "#ea580c",
    accentLight: "#fff7ed",
    emoji: "🌿",
    concept: "Chips de lentilles 100% végétales, saveur crème sure & oignon — sans produits laitiers, sans friture",
    keyIngredients: ["Farine de lentilles", "Fécule de tapioca", "Levure nutritionnelle", "Poudre d'oignon", "Acide citrique"],
    scores: {
      manufacturing: 4.5,
      differentiation: 5.0,
      consumerAppeal: 4.8,
      brandMarketing: 4.5,
      overall: 4.7,
    },
    highlight: "Seule chip végétale reproduisant exactement la saveur crème sure & oignon des leaders du marché",
    marketStat: "+47% croissance segment chips végétales (2019–2023)",
    format: "Chips, 40g",
    isHero: true,
  },
  {
    id: 'honeycrisp',
    name: "Honeycrisp",
    tagline: "Premium Root Vegetable Chips",
    creator: "Kevin",
    aiTool: "Claude",
    aiColor: "#d97706",
    accent: "#b45309",
    accentLight: "#fffbeb",
    emoji: "🍯",
    concept: "Chips premium de légumes racines (patate douce, betterave, panais) glacées au miel & sel de mer",
    keyIngredients: ["Patate douce", "Betterave", "Panais", "Miel liquide", "Sel de Guérande"],
    scores: {
      manufacturing: 3.5,
      differentiation: 4.0,
      consumerAppeal: 4.0,
      brandMarketing: 4.0,
      overall: 3.9,
    },
    highlight: "Profil sucré-salé quasi absent du rayon chips — friture sous vide à 100°C préserve couleurs et croquant",
    marketStat: "10.2% CAGR chips premium (2019–2023)",
    format: "Chips, 40–50g",
    isHero: false,
  },
  {
    id: 'kub',
    name: "KÜB",
    tagline: "Modern Pop Functional Snack",
    creator: "Gemeni",
    aiTool: "Google Gemini",
    aiColor: "#4285f4",
    accent: "#059669",
    accentLight: "#f0fdf4",
    emoji: "🟩",
    concept: "Cube géométrique bicouche — biscuit matcha ultra-croustillant sur cœur fudge fondant, enrichi aux adaptogènes",
    keyIngredients: ["Matcha grade A", "Maca", "Sarrasin soufflé", "Quinoa", "Purée amande blanche"],
    scores: {
      manufacturing: 4.5,
      differentiation: 5.0,
      consumerAppeal: 4.5,
      brandMarketing: 4.5,
      overall: 4.6,
    },
    highlight: "Format cube Instagrammable + adaptogènes (maca, matcha) = zone aveugle du snacking bien-être exploitée",
    marketStat: "Portion 25g = achat impulsif + portion control en 2026",
    format: "Cube 3×3cm, 25g",
    isHero: false,
  },
  {
    id: 'glowbar',
    name: "GlowBar",
    tagline: "Functional Lemon Wellness Bar",
    creator: "Copilot",
    aiTool: "Microsoft Copilot",
    aiColor: "#0078d4",
    accent: "#ca8a04",
    accentLight: "#fefce8",
    emoji: "🍋",
    concept: "Barre énergétique 40g au citron vrai — texture moelleux + craquant, 100% végétale, emballage compostable",
    keyIngredients: ["Avoine roulée", "Dattes Medjool", "Zeste citron frais", "Graines chia", "Riz brun soufflé"],
    scores: {
      manufacturing: 4.0,
      differentiation: 4.0,
      consumerAppeal: 4.0,
      brandMarketing: 4.0,
      overall: 4.0,
    },
    highlight: "Philosophie 'fruit-first' : citron vrai en ingrédient principal, aw<0.65, shelf-life 9 mois ambiant",
    marketStat: "Yield 500–800 kg/h, emballage cellulose compostable",
    format: "Barre 40g",
    isHero: false,
  },
  {
    id: 'pepite',
    name: "La Pépite",
    tagline: "The Golden Snack",
    creator: "Vincent",
    aiTool: "Claude",
    aiColor: "#d97706",
    accent: "#b45309",
    accentLight: "#fffbeb",
    emoji: "✨",
    concept: "Barre 3 couches signature — coque avoine-amande / garniture abricot sec / cœur caramel dattes, enrobage doré",
    keyIngredients: ["Flocons avoine", "Amandes grillées", "Abricot sec 65° Brix", "Dattes Medjool", "Fleur de sel", "Poudre d'or E175"],
    scores: {
      manufacturing: 4.0,
      differentiation: 5.0,
      consumerAppeal: 4.5,
      brandMarketing: 5.0,
      overall: 4.6,
    },
    highlight: "Enrobage doré (E175 + bêta-carotène) = visibilité rayon immédiate — architecture 3 couches unique",
    marketStat: "Marché $8.3B, top 3 < 31% revenus = opportunité challenger réelle",
    format: "Barre 40g, 210 kcal",
    isHero: false,
  },
]

export const dimensions = [
  { key: 'manufacturing', label: 'Production' },
  { key: 'differentiation', label: 'Différenciation' },
  { key: 'consumerAppeal', label: 'Attrait Conso.' },
  { key: 'brandMarketing', label: 'Marketing' },
] as const

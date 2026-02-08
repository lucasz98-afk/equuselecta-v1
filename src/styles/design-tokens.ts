// DESIGN SYSTEM TOKENS
// Import this logic into your WordPress `theme.json` or `variables.scss`

export const TOKENS = {
  colors: {
    // Backgrounds
    bg_body: '#FAFAF9', // stone-50
    bg_dark: '#050505', // boutique-navy
    
    // Text
    text_primary: '#18181b', // zinc-900
    text_secondary: '#71717a', // zinc-500
    text_light: '#a1a1aa', // zinc-400 (used for labels/uppercase)
    
    // Brand
    brand_gold: '#D4AF37', // boutique-gold
    brand_gold_light: '#F7E7CE', // champagne
    
    // UI
    border_light: 'rgba(0,0,0,0.1)',
    border_dark: 'rgba(255,255,255,0.1)',
  },

  typography: {
    families: {
      serif: '"Playfair Display", serif',
      sans: '"Manrope", sans-serif',
    },
    weights: {
      light: 300,
      regular: 400,
      medium: 500,
      bold: 700,
    },
    sizes: {
      // Desktop
      h1_hero: 'clamp(3rem, 5vw, 7rem)', 
      h2_section: 'clamp(2.5rem, 4vw, 5rem)',
      body_lg: '1.125rem', // 18px
      label: '0.625rem', // 10px (uppercase tracking-widest)
    }
  },

  layout: {
    container_max: '1440px',
    padding_x: 'clamp(1.5rem, 5vw, 4rem)', // Responsive padding
    section_spacing: 'clamp(5rem, 10vh, 10rem)', // Vertical spacing between sections
  },

  radii: {
    card: '24px',
    container: '40px',
    button: '9999px',
  },

  shadows: {
    card: '0 20px 50px -12px rgba(0,0,0,0.05)',
    glow_gold: '0 0 20px rgba(212,175,55,0.3)',
  },
  
  z_index: {
    nav_sticky: 50,
    modal: 100,
    dropdown: 40,
    background_deco: 0,
  }
};

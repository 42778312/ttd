---
name: Kinetic Glass
colors:
  surface: '#141313'
  surface-dim: '#141313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353434'
  on-surface: '#e5e2e1'
  on-surface-variant: '#e8bcbd'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#ae8789'
  outline-variant: '#5e3e40'
  surface-tint: '#ffb2b7'
  primary: '#ffb2b7'
  on-primary: '#67001b'
  primary-container: '#ff516a'
  on-primary-container: '#5b0017'
  inverse-primary: '#be0039'
  secondary: '#c3fffa'
  on-secondary: '#003735'
  secondary-container: '#00f0e8'
  on-secondary-container: '#006965'
  tertiary: '#c6c6c7'
  on-tertiary: '#2f3131'
  tertiary-container: '#909191'
  on-tertiary-container: '#282a2a'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdadb'
  primary-fixed-dim: '#ffb2b7'
  on-primary-fixed: '#40000d'
  on-primary-fixed-variant: '#92002a'
  secondary-fixed: '#29fcf3'
  secondary-fixed-dim: '#00ddd6'
  on-secondary-fixed: '#00201e'
  on-secondary-fixed-variant: '#00504d'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c7'
  on-tertiary-fixed: '#1a1c1c'
  on-tertiary-fixed-variant: '#454747'
  background: '#141313'
  on-background: '#e5e2e1'
  surface-variant: '#353434'
typography:
  headline-xl:
    fontFamily: Geist
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.2'
  body-md:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  body-sm:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  label-code:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: '1.4'
  label-caps:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.05em
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  base: 4px
  xs: 0.5rem
  sm: 1rem
  md: 1.5rem
  lg: 2.5rem
  xl: 4rem
  container-max: 1200px
  gutter: 24px
---

## Brand & Style
The design system is a high-performance, developer-centric framework that blends the high-energy aesthetics of social media with the precision of modern engineering tools. The visual language is deeply rooted in **Minimalism** and **Glassmorphism**, taking heavy inspiration from the utility-first clarity of Linear and the refined dark-mode surfaces of Vercel.

The personality is "Professional Kinetic"—it feels fast, responsive, and premium. The interface uses a "Deep Black" canvas to allow content and brand accents to vibrate with intensity. High-quality whitespace is used strategically to prevent the dark interface from feeling cramped, ensuring that developer utilities and data visualizations remain the primary focus.

## Colors
The palette is built on a foundation of "True Black" to maximize OLED efficiency and visual depth. 

- **Primary (TikTok Pink):** Reserved for critical actions, status indicators, and primary brand touchpoints. Used sparingly to maintain its impact.
- **Secondary (TikTok Aqua):** Used for focus states, success indicators, and interactive highlights. It provides a cooling contrast to the primary pink.
- **Surface & Glass:** Containers utilize a semi-transparent white tint at very low opacity (6-10%) to create the glass effect, paired with a 1px border that mimics the "specular edge" of physical glass.
- **Gradients:** Subtle, large-radius radial gradients in the background (15% opacity primary/secondary) should be used to create "atmospheric depth" without distracting from the UI.

## Typography
The system uses **Geist** for its technical precision and neutral, modern stance. It provides the "Vercel-like" feel that developers expect. For technical metadata, IDs, and code snippets, **JetBrains Mono** is utilized to reinforce the tool's utility.

Headlines should use tight letter-spacing to create a "locked-in" editorial look. Body text maintains a generous line height to ensure legibility against dark backgrounds. Use "label-caps" for small section headers and category identifiers to provide structural hierarchy.

## Layout & Spacing
This design system follows a **Fixed Grid** philosophy for desktop layouts, centering content within a 1200px container. On smaller viewports, it transitions to a fluid model with 24px side margins.

The spacing rhythm is based on a 4px baseline, but defaults to larger increments (16px, 24px, 40px) to create the "airy" feel characteristic of high-end SaaS products. Components should use generous internal padding to maintain the "Shortcut card" aesthetic. Elements within a card should be grouped using 8px or 12px gaps, while the cards themselves are separated by 24px or more.

## Elevation & Depth
Depth is achieved through **Backdrop Blurs** and **Tonal Layering** rather than traditional drop shadows.

- **Level 0 (Background):** Pure #010101.
- **Level 1 (Cards/Surfaces):** 6% White fill with a 20px backdrop-filter blur. 1px solid border at 10% white.
- **Level 2 (Popovers/Modals):** 12% White fill with 40px backdrop-filter blur. Subtle 0.5px border at 20% white. A very soft, large-spread black shadow (40px blur, 0.4 opacity) can be used to separate floating modals from the Level 1 surfaces.
- **Active States:** Elements being interacted with should increase in border-opacity rather than changing background color, maintaining the transparency effect.

## Shapes
The shape language is "Hyper-Rounded." This design system uses extreme corner radii (24px to 32px for large cards) to create a friendly, tactile feel that contrasts with the technical dark theme. 

- **Outer Containers:** 24px (rounded-lg) or 32px (rounded-xl).
- **Inner Components:** Buttons and inputs should use a 12px radius to maintain nesting harmony (inner radius = outer radius - padding).
- **Interactive Elements:** Small chips or tags use a fully pill-shaped (999px) radius.

## Components
- **Buttons:** Primary buttons use a solid #ff0050 fill with white text. On hover, apply a subtle outer glow using a box-shadow with the primary color at 30% opacity. Secondary buttons are glass-based with white text and a 1px white border.
- **Input Fields:** Minimalist design. A soft #ffffff08 background with no border in its default state. On focus, the border transitions to the Secondary Aqua (#00f2ea) with a 2px outer glow.
- **Shortcut Cards:** Inspired by iOS, these are the primary data containers. They feature a large icon or metric in the top left, a "label-caps" descriptor, and a 1px border. The entire card should have a 20ms transition on hover that slightly increases the border brightness.
- **Chips:** Highly compact, pill-shaped, using a semi-transparent version of the primary or secondary colors (e.g., #ff005015) with a matching text color.
- **Lists:** Clean rows separated by 1px transparent-white lines. Items should have a "hover-reveal" state where the background glass tint becomes slightly more opaque (10%).
- **Progress Bars:** Thin 4px tracks. The "filled" portion should use a linear gradient from Secondary Aqua to Primary Pink to represent the data flow/velocity of the downloader.
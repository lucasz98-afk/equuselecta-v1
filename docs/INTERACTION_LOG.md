# Interaction Log & Scripts Audit

## 1. Essential Libraries for WordPress
To replicate the "Luxury Feel" of the React app, enqueue these scripts in `functions.php`:

1.  **Lenis Scroll (RECOMMENDED):** 
    - *Reason:* The React app uses native smooth scroll, but for a high-end WP site, Lenis provides the best inertial scrolling normalization.
    - *Target:* Global (`body`).

2.  **GSAP (GreenSock) + ScrollTrigger:**
    - *Reason:* To replace `framer-motion`'s `useScroll` and `useTransform` used in the Horizontal Marketplace.
    - *Usage:* `Marketplace.tsx` horizontal scroll section.

3.  **Swiper.js:**
    - *Reason:* For the "Cross-Selling" slider in `HorseDetailPage` and potentially the Mobile Marketplace list.

## 2. Component-Specific Logic

### A. Navbar (`Navbar.tsx`)
- **Behavior:** Sticky on scroll > 30px.
- **Micro-interaction:** "Curtain" menu reveal.
- **WP Implementation:** Use CSS `position: fixed` with a JS class toggle `.is-scrolled` on `window.onscroll`. The curtain menu should be a full-screen `div` toggled via class `.is-open`.

### B. Marketplace Horizontal (`Marketplace.tsx`)
- **React Logic:** `framer-motion` maps vertical scroll progress to horizontal X transform.
- **WP Logic:** Use GSAP `ScrollTrigger`.
  ```javascript
  gsap.to(".horizontal-container", {
    xPercent: -100,
    x: () => window.innerWidth,
    ease: "none",
    scrollTrigger: {
      trigger: ".marketplace-section",
      pin: true,
      scrub: 1,
      end: "+=3000" // Adjust based on number of items
    }
  });
  ```

### C. Category Headers (`CategoryPage.tsx`)
- **Behavior:** Minimalist entry animations (Staggered fade-up).
- **WP Logic:** Use the `IntersectionObserver` API or a lightweight library like `AOS` (Animate On Scroll) configured with custom offsets.

### D. Horse Detail Gallery (`HorseDetailPage.tsx`)
- **Behavior:** Main image changes on thumbnail click + Lightbox.
- **WP Logic:** 
  - Simple JS tab logic for swapping the `src` of the main image.
  - Use a lightweight Lightbox library (e.g., GLightbox or Fancybox) for the full-screen view.

### E. Forms (`SellHorsePage.tsx`)
- **React Logic:** State management.
- **WP Logic:** Use **Contact Form 7** or **Gravity Forms**.
- **Styling:** You must override default CF7 styles to match the `design-tokens.ts` (transparent inputs, border-bottom only).

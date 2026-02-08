# Arquitectura WordPress & Hierarchy Map

## 1. Core Structure & Folder Mapping
| React Component Path | WordPress Template File | Functionality |
|-------------------------|-------------------------|--------------------|
| `src/components/home/Hero.tsx` | `template-parts/block-hero.php` | Hero Section (ACF) |
| `src/components/home/Marketplace.tsx` | `template-parts/home-marketplace.php` | Featured Horses List |
| `src/components/category/CategoryPage.tsx` | `taxonomy-horse_category.php` | **Doma Clásica & Salto Template** |
| `src/components/horse/HorseDetailPage.tsx` | `single-horse.php` | Detail Page Template |
| `src/components/sell/SellHorsePage.tsx` | `page-vender.php` | Sell Page Template |
| `src/components/layout/Navbar.tsx` | `header.php` | Global Header |
| `src/components/layout/Footer.tsx` | `footer.php` | Global Footer |

## 2. Custom Post Types (CPT)
### Slug: `horse`
- **Supports:** Title, Editor, Thumbnail (Featured Image).
- **Taxonomies:** 
  - `horse_category` (Doma, Salto).
  - `horse_level` (Básico, Medio, Alto).

## 3. Global Options (ACF Options Page)
Create an ACF Options Page called "Theme Settings" for:
- **Header:** Logo, Navigation Links repeater.
- **Footer:** Social Media Links, Address, Contact Email, "Ticker" text repeater.
- **WhatsApp:** Phone number for the floating widget.

## 4. Reusable Template Parts (`template-parts/`)
- `content-horse-card.php`: The vertical card used in lists.
- `content-horse-card-horizontal.php`: The horizontal card used in the Home Marketplace.
- `block-hero.php`: The main hero section.
- `block-services.php`: Services grid.

## 5. ACF Field Groups Plan
1. **Home Fields:** (Group: `page_home`)
   - Hero Repeater (Image, Title, Subtitle, Link).
   - Manifesto Text (Wysiwyg).
   - Services Repeater (Icon, Title, Desc).
   
2. **Horse Details:** (Group: `horse_details`)
   - `price` (Number/Text).
   - `age` (Number).
   - `height` (Text).
   - `breed` (Text).
   - `gender` (Select).
   - `gallery` (Gallery Field).
   - `video_url` (OEmbed/URL).
   - `video_vertical` (File/URL - for the mobile reel).
   - `ref_code` (Text).

3. **Taxonomy Fields:** (Group: `term_fields`)
   - `manifesto_text` (Text - "Harmony", "Power").
   - `description` (Textarea).

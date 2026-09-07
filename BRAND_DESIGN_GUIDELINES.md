# Yugatirtha Brand Design & Advertising Guidelines

A complete reference guide for typography, color schemes, design tokens, and visual assets designed for digital marketing, social media ads, print brochures, and brand consistency.

---

## 1. Brand Essence & Voice

- **Brand Name**: Yugatirtha
- **Tagline**: *Journeys Through Time*
- **Aesthetic**: Timeless Indian heritage, sacred reverence, slow luxury, unhurried discovery, authentic spiritual immersion.
- **Core Emotional Triggers**: Reverence, serenity, wonder, exclusivity, peace, cultural depth.

---

## 2. Typography System

The brand relies on an elegant pairing of a classical high-contrast serif and a crisp, modern geometric sans-serif.

### A. Primary Display Serif: **Cormorant Garamond**
- **Type**: Google Web Font
- **Source**: [Google Fonts — Cormorant Garamond](https://fonts.google.com/specimen/Cormorant+Garamond)
- **Weights Used**: 
  - `400 Regular`
  - `400 Italic` (for emotive words and poetic phrases)
  - `500 Medium`
  - `600 SemiBold`
  - `700 Bold`
- **CSS Class**: `font-serif`
- **Where It Is Used in the Codebase**:
  - Hero main headlines (`h1`) across all pages.
  - Section headers (`h2`) and major circuit titles.
  - Card titles (`h3`) in `CardsGrid.jsx` and `SpiritualCardsGrid.jsx`.
  - Founder's message and quotes in `About.jsx` and `Testimonials.jsx`.
  - Day numbers and destination names in `ItineraryDetail.jsx`.
  - Input field text in `EnquiryForm.jsx`.

#### Advertising Usage for Cormorant Garamond:
- **Hero Ad Headlines**: "Sacred India, Walked with Reverence."
- **Poetic Accents**: Always set emphasis words in *Italics* (e.g., "Journeys *beyond* time").
- **Recommended Kerning/Tracking**: Tight tracking (`tracking-tight` or `-0.02em`) for headlines above 32px to create a luxury editorial aesthetic.

---

### B. Primary Supporting Sans: **Inter**
- **Type**: Google Web Font
- **Source**: [Google Fonts — Inter](https://fonts.google.com/specimen/Inter)
- **Weights Used**:
  - `300 Light`
  - `400 Regular`
  - `500 Medium`
  - `600 SemiBold`
  - `700 Bold`
- **CSS Class**: `font-sans`
- **Where It Is Used in the Codebase**:
  - Body paragraphs, descriptive captions, and subtext.
  - Navigation bar links (`Navbar.jsx`) and footer links (`Footer.jsx`).
  - Eyebrows, badges, and category labels (`.eyebrow`).
  - Itinerary daily activities, bullet points, and inclusions list.
  - Price tags, duration badges, and season indicators.
  - Call-to-action (CTA) buttons (`.btn-filled`, `.pill-button`).

#### Advertising Usage for Inter:
- **Eyebrows & Badges**: Small caps, extra-wide letter-spacing (`uppercase tracking-[0.2em]` to `tracking-[0.4em]`).
- **Inclusions & Itinerary Summaries**: Clean, uncluttered 13px–15px body copy.
- **Button CTAs**: Bold uppercase with wide tracking: `EXPLORE ITINERARY`, `BOOK DARSHAN`.

---

## 3. Brand Color Palette

### A. Primary Brand Colors

| Color Role | Color Name | Hex Code | RGB | Tailwind Token | Application & Meaning |
|---|---|---|---|---|---|
| **Primary** | Sacred Saffron | `#F3821D` | `243, 130, 29` | `--color-primary` | Primary action color, CTA buttons, active states, consecrated fire. |
| **Accent Gold** | Antique Brass / Gold | `#D4A373` | `212, 163, 115` | Accent Highlight | Eyebrow badges, map highlights, circuit badges, border trims. |
| **Deep Ochre** | Warm Terracotta | `#D2955C` | `210, 149, 92` | `--color-accent` | Secondary decorative lines, subtle borders, warm sand tones. |
| **Temple Dark** | Consecrated Forest Green | `#003525` | `0, 53, 37` | `--color-dark` | Deepest contrast color, hero overlays, button hover states, sacred groves. |
| **Charcoal** | Temple Basalt | `#332D29` | `51, 45, 41` | `--color-charcoal` | Primary readable text color (richer & warmer than generic `#000000`). |

### B. Backgrounds & Neutral Canvas

| Color Role | Color Name | Hex Code | RGB | Usage |
|---|---|---|---|---|
| **Base Canvas** | Warm Parchment | `#F9F7F2` | `249, 247, 242` | Main website background; provides a warm, editorial, non-sterile reading canvas. |
| **Sub-nav / Panel** | Soft Bone | `#F5F3EF` | `245, 243, 239` | Sticky direction navbars, filter strips, and accordion headers. |
| **Pure White** | Card White | `#FFFFFF` | `255, 255, 255` | Card backgrounds, dropdown menus, and text on dark photography. |
| **Muted Grey** | Stone Grey | `#6B7280` | `107, 114, 128` | Secondary body text, dates, disclaimers, and durations. |

### C. Functional & Conversion Colors

| Color Role | Color Name | Hex Code | RGB | Usage |
|---|---|---|---|---|
| **Action CTA** | Amber Saffron | `#E2852B` | `226, 133, 43` | Primary "Enquire via WhatsApp" and booking conversion buttons. |
| **WhatsApp** | WhatsApp Green | `#25D366` | `37, 211, 102` | Floating chat button and direct WhatsApp contact anchors. |
| **Nature / Sacred** | Emerald Leaf | `#047857` | `4, 120, 87` | Price tags ("From ₹45,000") and verified status marks. |

---

## 4. Advertising & Marketing Color Schemes

Use these predefined color combinations when creating ads in Canva, Photoshop, Figma, or Premiere:

```
┌────────────────────────────────────────────────────────────────────────┐
│ THEME 1: THE CONSECRATED DAWN (Pilgrimages, Char Dham, Spiritual)       │
├────────────────────────────────────────────────────────────────────────┤
│ Background : #F9F7F2 (Warm Parchment)                                  │
│ Headline   : #003525 (Temple Forest Green)                             │
│ Eyebrow    : #D4A373 (Antique Gold)                                    │
│ Body Text  : #332D29 (Temple Basalt)                                   │
│ CTA Button : #F3821D (Sacred Saffron) with #FFFFFF text                │
└────────────────────────────────────────────────────────────────────────┘
```

```
┌────────────────────────────────────────────────────────────────────────┐
│ THEME 2: MIDNIGHT SANCTUM (Luxury, VIP Passes, Night Aarti Stays)      │
├────────────────────────────────────────────────────────────────────────┤
│ Background : #003525 (Consecrated Dark Green) or #111827 (Deep Night)  │
│ Headline   : #F9F7F2 (Warm Ivory Serif)                                │
│ Subtitle   : #D4A373 (Antique Brass)                                   │
│ Accent     : #F3821D (Saffron Gold)                                    │
│ CTA Button : #E2852B with #003525 text or #FFFFFF text                 │
└────────────────────────────────────────────────────────────────────────┘
```

```
┌────────────────────────────────────────────────────────────────────────┐
│ THEME 3: HIMALAYAN HORIZON (Ladakh, Spiti, Kashmir, Arunachal)         │
├────────────────────────────────────────────────────────────────────────┤
│ Background : #FFFFFF or Mountain Photo Background                      │
│ Text Scrim : linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8))│
│ Headline   : #FFFFFF (Cormorant Garamond)                              │
│ Tag / Pill : #D4A373 (Gold) or #F3821D (Saffron) with #FFFFFF text     │
│ Details    : #E5E7EB (Light Slate)                                     │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 5. Social Media & Display Ad Guidelines

### Image Gradient Scrims (For legibility over photography)
When placing text over high-resolution temple or landscape photography, always apply one of these scrim overlays:

- **Bottom Dark Scrim (Standard Card / Story Ad)**:
  ```css
  background: linear-gradient(to top, rgba(0, 53, 37, 0.85) 0%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0.1) 100%);
  ```
- **Radial Sanctum Glow**:
  ```css
  background: radial-gradient(circle at center, rgba(243, 130, 29, 0.15) 0%, rgba(0, 53, 37, 0.9) 100%);
  ```

---

## 6. Ad Typography Hierarchy Examples

### Example A: Single Image Instagram / Facebook Post (1080 × 1080)
1. **Eyebrow Tag** (Font: *Inter Bold*, 12pt, `#D4A373`, tracking: `0.3em`):
   `CHAR DHAM YATRA · VIP ASSISTED ACCESS`
2. **Main Headline** (Font: *Cormorant Garamond Regular & Italic*, 42pt, `#FFFFFF`):
   `The sacred peaks, walked with *reverence*.`
3. **Sub-caption** (Font: *Inter Regular*, 14pt, `#F9F7F2`):
   `Helicopter & road itineraries with confirmed temple darshan and oxygen-equipped mountain crew.`
4. **Duration & Price Badge** (Font: *Inter SemiBold*, 13pt, `#047857` or `#F3821D`):
   `9 Nights / 10 Days · Early Bookings Open`
5. **Call To Action Button** (Font: *Inter Bold*, 12pt, Background: `#F3821D`, Text: `#FFFFFF`):
   `ENQUIRE VIA WHATSAPP →`

---

### Example B: Story / Reel Cover (1080 × 1920)
1. **Top Badge**:
   `YUGATIRTHA · JOURNEYS THROUGH TIME` (Inter, 11pt, tracking: `0.4em`, `#D4A373`)
2. **Center Headline**:
   `Ujjain Mahakaleshwar: Witness the Dawn Bhasma Aarti` (Cormorant Garamond, 52pt, `#FFFFFF`)
3. **Bottom Floating Card**:
   - Background: `rgba(249, 247, 242, 0.95)` with blur
   - Text: `Confirmed Passes · Private Transfers · 2N/3D` (`#332D29`)
   - Button: `TAP TO VIEW ITINERARY` (`#003525`)

---

## 7. Direct Copy-Paste Assets for Designers

### Hex Code Quick Reference
- Saffron: `#F3821D`
- Amber CTA: `#E2852B`
- Antique Gold: `#D4A373`
- Terracotta: `#D2955C`
- Temple Green: `#003525`
- Warm Parchment: `#F9F7F2`
- Basalt Text: `#332D29`
- WhatsApp: `#25D366`

### Font CDN Links (for HTML Ads or Web Banners)
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

### CSS Font Rules
```css
font-family: 'Cormorant Garamond', Georgia, 'Times New Roman', serif;
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
```

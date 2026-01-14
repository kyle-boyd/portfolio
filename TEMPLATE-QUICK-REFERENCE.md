# Case Study Template - Quick Reference
## Modern Design System (v2)

## Setup
```bash
cp case-study-template.html your-project.html
# Edit and replace all [PLACEHOLDERS]
```

## Design System

### Typography
```html
Headings (Playfair Display serif):
  .hero-title-new       → 48-72px (page title)
  .hero-subtitle-new    → 24-36px (hero subtitle)
  .section-title-left   → 20px (section headings)
  .work-title-new       → 18px (card titles)

Body Text (Raleway, inline styles):
  font-size: 18px       → Large body text
  font-size: 16px       → Medium body text
  font-size: 14px       → Small/caption text
  
Emphasis:
  <strong>text</strong> → Bold
  <em>text</em>         → Italic (use sparingly)
```

### Colors
```css
var(--black)       → #000000
var(--white)       → #F4F4F4
var(--gray-dark)   → #333333 (primary text)
var(--gray-light)  → #999999 (secondary text)
var(--gray-bg)     → #F5F5F5 (backgrounds)
```

### Spacing
```html
Sections:           80px padding (automatic)
Large gap:          margin-bottom: 60px
Medium gap:         margin-bottom: 40px
Small gap:          margin-bottom: 24px
Grid gaps:          gap: 48px (two-column)
                    gap: 32px (cards)
```

## Layout Classes

### Containers
```html
.content-container    → Max-width 1024px, bordered sides, centered
.hero-container       → Hero section wrapper
.footer-container     → Footer content wrapper
```

### Sections
```html
.recent-work          → Standard section (80px padding top/bottom)
.hero-section-new     → Hero banner section
.black-footer         → Black footer with white text
```

### Cards & Grids
```html
.work-grid-new        → 3-column responsive card grid
.work-card            → Modern card with hover effect
.work-image-wrapper-new → 4:3 aspect ratio image wrapper
.work-info-new        → Card text content area
```

## Section Templates

### 1. Hero
```html
<section class="hero-section-new" style="min-height: 60vh;">
  <div class="hero-container">
    <div class="hero-content" style="margin-top: 120px;">
      <h1 class="hero-title-new serif">[Project Name]</h1>
      <p class="hero-subtitle-new serif">[One-liner]</p>
    </div>
  </div>
</section>
```

### 2. Overview (Meta + Description + Image)
```html
<section class="recent-work" style="padding-top: 60px;">
  <!-- Meta Grid -->
  <div class="project-meta-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 32px; margin-bottom: 0px;">
    <div class="meta-item">
      <p style="font-size: 14px; color: var(--gray-light); margin-bottom: 8px;">Role</p>
      <p style="font-size: 16px; font-weight: 500; color: var(--gray-dark);">Designer</p>
    </div>
  </div>
  
  <!-- Description -->
  <div style="max-width: 800px; margin-bottom: 60px;">
    <h2 class="section-title-left" style="margin-bottom: 24px;">Overview</h2>
    <p style="font-size: 18px; line-height: 1.7; color: var(--gray-dark);">Text</p>
  </div>
  
  <!-- Hero Image -->
  <img src="images/hero.png" style="width: 100%; border-radius: 16px; box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);">
</section>
```

### 3. Two-Column (Text + Box)
```html
<section class="recent-work">
  <h2 class="section-title-left" style="margin-bottom: 32px;">Title</h2>
  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 48px;">
    <div>
      <p style="font-size: 18px; line-height: 1.7; color: var(--gray-dark);">Text</p>
    </div>
    <div style="background: var(--gray-bg); padding: 32px; border-radius: 12px;">
      <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 16px;">Subhead</h3>
      <p>Content</p>
    </div>
  </div>
</section>
```

### 4. Two-Column (Image + Text)
```html
<section class="recent-work">
  <h2 class="section-title-left" style="margin-bottom: 32px;">Title</h2>
  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: center;">
    <div>
      <img src="images/image.png" style="width: 100%; border-radius: 12px;">
    </div>
    <div>
      <p style="font-size: 18px; line-height: 1.7; color: var(--gray-dark);">Text</p>
    </div>
  </div>
</section>
```

### 5. Feature Cards
```html
<section class="recent-work">
  <h2 class="section-title-left" style="margin-bottom: 32px;">Features</h2>
  <div class="work-grid-new">
    <div class="work-card" style="cursor: default;">
      <div class="work-image-wrapper-new">
        <img src="images/feature.png" class="work-image-new">
      </div>
      <div class="work-info-new">
        <h3 class="work-title-new">Title</h3>
        <p class="work-category-new">Description</p>
      </div>
    </div>
  </div>
</section>
```

### 6. Full-Width Image
```html
<section class="recent-work">
  <h2 class="section-title-left" style="margin-bottom: 32px;">Title</h2>
  <p style="font-size: 18px; line-height: 1.7; max-width: 800px; margin-bottom: 40px;">Intro</p>
  <img src="images/full.png" style="width: 100%; border-radius: 12px; box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);">
  <p style="font-size: 14px; color: var(--gray-light); text-align: center; margin-top: 16px;">Caption</p>
</section>
```

### 7. Impact/Metrics
```html
<section class="recent-work">
  <h2 class="section-title-left" style="margin-bottom: 32px;">Impact</h2>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 32px;">
    <div style="background: var(--gray-bg); padding: 32px; border-radius: 12px;">
      <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 12px;">Metric</h3>
      <p style="font-size: 16px; line-height: 1.6;"><strong>50%</strong> improvement</p>
    </div>
  </div>
</section>
```

## Image Styles

### Hero Image (Large, Dramatic)
```html
style="width: 100%; border-radius: 16px; box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);"
```

### Section Image (Standard)
```html
style="width: 100%; border-radius: 12px; box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);"
```

### Card Image (In work-card)
```html
<div class="work-image-wrapper-new">
  <img src="..." class="work-image-new">
</div>
```

## Common Patterns

### Background Box (Callout)
```html
<div style="background: var(--gray-bg); padding: 32px; border-radius: 12px;">
  Content
</div>
```

### Bullet List
```html
<ul style="list-style: none; padding: 0;">
  <li style="font-size: 16px; margin-bottom: 12px; padding-left: 24px; position: relative;">
    <span style="position: absolute; left: 0;">•</span>
    Item text
  </li>
</ul>
```

### Caption
```html
<p style="font-size: 14px; color: var(--gray-light); text-align: center;">
  Caption text
</p>
```

### Inline Bold
```html
<strong>bold text</strong>
```

### Max-Width Text Block
```html
<div style="max-width: 800px;">
  <p style="font-size: 18px; line-height: 1.7;">Content</p>
</div>
```

## Content Structure (Recommended)

1. **Hero** - Project name + tagline
2. **Overview** - Metadata + description + hero image
3. **Challenge** - Problem definition
4. **Approach** - Your process
5. **Solution** - Features (2-3 sections)
6. **Impact** - Results & metrics
7. **Reflection** - Key learnings (optional)

## Image Specs

- **Hero:** 2048px wide, 16:9 aspect
- **Section:** 1600px wide
- **Cards:** 1200px wide, 4:3 aspect
- **Format:** PNG/JPG, optimized
- **Resolution:** 2x for retina

## Responsive Breakpoints

- **Desktop:** >1024px (full layout)
- **Tablet:** 768-1024px (adjusted spacing)
- **Mobile:** <768px (single column)

Auto-responsive:
- Navigation (hides brand name)
- Card grids (3→2→1 columns)
- Two-column layouts (stack)

## Pre-Launch Checklist

- [ ] Page title updated
- [ ] All [PLACEHOLDERS] replaced
- [ ] Images added & optimized
- [ ] Alt text on all images
- [ ] Tested locally
- [ ] Mobile responsive checked
- [ ] Spell-checked
- [ ] Added to index.html

## File Locations

- **Template:** `case-study-template.html`
- **Full Guide:** `TEMPLATE-GUIDE.md`
- **Styles:** `styles.css`
- **Images:** `images/`

## Quick Tips

✅ Use `var(--gray-dark)` for body text
✅ Keep paragraphs under 800px wide
✅ Use `.serif` class for dramatic headings
✅ Add `cursor: default` to non-link cards
✅ Test at 768px and 375px widths

❌ Don't mix old/new design systems
❌ Don't forget image alt text
❌ Don't use tiny images (<1000px)
❌ Don't overcrowd sections

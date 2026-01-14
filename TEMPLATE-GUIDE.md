# Case Study Template Guide (Modern Design System)

This guide explains how to use `case-study-template.html` to create new project case studies using your **modern design system** from index.html.

## 🎨 Design System Overview

The template now uses your updated design system with:
- **Glassmorphic navigation** - Modern frosted glass effect with rounded corners
- **Playfair Display serif** - For headings and emphasis
- **Raleway sans-serif** - For body text
- **Card-based layouts** - Modern work cards with hover effects
- **Centered content container** - Max-width 1024px with bordered sides
- **Clean spacing** - Generous whitespace and modern proportions

---

## Quick Start

1. **Duplicate the template**
   ```bash
   cp case-study-template.html your-project-name.html
   ```

2. **Search for TODO comments** and replace all `[BRACKETED PLACEHOLDERS]`

3. **Add your images** to the `images/` folder

4. **Test locally** at `http://localhost:8000/your-project-name.html`

---

## Template Structure

### 1. Meta & Head (Lines 1-51)

**What to update:**
- Line 16: Update page title
  ```html
  <title>Kyle Boyd Portfolio | Your Project Name</title>
  ```

**Leave as-is:**
- Google Analytics and FullStory scripts
- Font imports (Playfair Display + Raleway)
- Styles and icons

---

### 2. Navigation Bar (Lines 54-72)

**Modern glassmorphic top menu** - No changes needed!
- Frosted glass effect
- Rounded pill shape
- Sticky positioning
- Active state indicators

---

### 3. Hero Section (Lines 79-94)

**Large, impactful project introduction**

```html
<section class="hero-section-new" style="min-height: 60vh;">
  <div class="hero-container">
    <div class="hero-content" style="margin-top: 120px;">
      <h1 class="hero-title-new serif">[Project Name]</h1>
      <p class="hero-subtitle-new serif">[Compelling one-liner]</p>
    </div>
  </div>
</section>
```

**Optional: Add background image**
```html
<!-- Uncomment for background image like index.html -->
<div class="hero-background" style="background-image: url('images/your-bg.jpg');"></div>
```

**Typography:**
- `.hero-title-new` - 48-72px, Playfair Display, dramatic
- `.hero-subtitle-new` - 24-36px, lighter weight

---

### 4. Content Container (Line 102)

**All main content goes inside:**
```html
<div class="content-container">
  <!-- All sections here -->
</div>
```

This creates:
- Max-width: 1024px
- Bordered sides (subtle gray)
- Centered alignment
- Consistent padding

---

## Section Types

### Section Type 1: Project Overview

**Project metadata + description + hero image**

```html
<section class="recent-work" style="padding-top: 60px;">
  
  <!-- Quick Facts Grid -->
  <div class="project-meta-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 32px; margin-bottom: 0px;">
    <div class="meta-item">
      <p style="font-size: 14px; color: var(--gray-light); margin-bottom: 8px;">Role</p>
      <p style="font-size: 16px; font-weight: 500; color: var(--gray-dark);">Product Designer</p>
    </div>
    <!-- Repeat for Client, Timeline, Focus Areas -->
  </div>

  <!-- Description -->
  <div style="max-width: 800px; margin-bottom: 60px;">
    <h2 class="section-title-left" style="margin-bottom: 24px;">Overview</h2>
    <p style="font-size: 18px; line-height: 1.7; color: var(--gray-dark);">
      Your content here...
    </p>
  </div>

  <!-- Hero Image -->
  <div style="margin-bottom: 80px;">
    <img src="images/hero.png" alt="Hero" style="width: 100%; border-radius: 16px; box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);">
  </div>

</section>
```

**Use for:** Project introduction, setting the stage

---

### Section Type 2: Problem/Challenge

**Two-column layout with text and highlighted pain points**

```html
<section class="recent-work">
  <h2 class="section-title-left" style="margin-bottom: 32px;">The Challenge</h2>
  
  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 48px; margin-bottom: 40px;">
    
    <!-- Left: Description -->
    <div>
      <p style="font-size: 18px; line-height: 1.7; color: var(--gray-dark); margin-bottom: 16px;">
        Main text explaining the challenge...
      </p>
    </div>
    
    <!-- Right: Pain Points Box -->
    <div style="background: var(--gray-bg); padding: 32px; border-radius: 12px;">
      <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 16px;">Key Pain Points</h3>
      <ul style="list-style: none; padding: 0;">
        <li style="font-size: 16px; margin-bottom: 12px; padding-left: 24px; position: relative;">
          <span style="position: absolute; left: 0;">•</span>
          Pain point 1
        </li>
      </ul>
    </div>
  </div>

  <!-- Section Image -->
  <img src="images/problem.png" style="width: 100%; border-radius: 12px; box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);">
  <p style="font-size: 14px; color: var(--gray-light); text-align: center;">Caption</p>
</section>
```

**Use for:** Explaining problems, challenges, or context

---

### Section Type 3: Process/Approach

**Image-text two-column layout**

```html
<section class="recent-work">
  <h2 class="section-title-left" style="margin-bottom: 32px;">Our Approach</h2>
  
  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: center;">
    
    <div>
      <img src="images/approach.png" style="width: 100%; border-radius: 12px;">
    </div>
    
    <div>
      <p style="font-size: 18px; line-height: 1.7; color: var(--gray-dark);">
        Explain your approach...
      </p>
    </div>
  </div>
</section>
```

**Note:** Swap column order to alternate image sides

**Use for:** Methodology, process, approach sections

---

### Section Type 4: Key Features

**Modern card grid (uses work-card from index.html)**

```html
<section class="recent-work">
  <h2 class="section-title-left" style="margin-bottom: 32px;">Key Features</h2>
  
  <div class="work-grid-new">
    
    <div class="work-card" style="cursor: default;">
      <div class="work-image-wrapper-new">
        <img src="images/feature1.png" class="work-image-new">
      </div>
      <div class="work-info-new">
        <h3 class="work-title-new">Feature Title</h3>
        <p class="work-category-new">Brief description</p>
      </div>
    </div>
    
    <!-- Repeat for 2-3 features -->
  </div>
</section>
```

**Features:**
- 3-column grid (auto-responsive)
- Hover effects (can disable with `cursor: default`)
- 4:3 aspect ratio images
- Rounded corners

**Use for:** Showcasing features, design decisions, or key screens

---

### Section Type 5: Full-Width Visual

**Large image with caption**

```html
<section class="recent-work">
  <h2 class="section-title-left" style="margin-bottom: 32px;">Design System</h2>
  
  <p style="font-size: 18px; line-height: 1.7; max-width: 800px; margin-bottom: 40px;">
    Introduction to what you're showing...
  </p>

  <div style="margin-bottom: 16px;">
    <img src="images/detail.png" style="width: 100%; border-radius: 12px; box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);">
  </div>
  <p style="font-size: 14px; color: var(--gray-light); text-align: center;">
    Caption explaining the image
  </p>
</section>
```

**Use for:** Design systems, detailed views, full designs

---

### Section Type 6: Impact/Results

**Metric cards grid + final image**

```html
<section class="recent-work">
  <h2 class="section-title-left" style="margin-bottom: 32px;">Impact & Results</h2>
  
  <p style="font-size: 18px; line-height: 1.7; max-width: 800px; margin-bottom: 48px;">
    Introduction to impact...
  </p>

  <!-- Metrics Grid -->
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 32px; margin-bottom: 60px;">
    
    <div style="background: var(--gray-bg); padding: 32px; border-radius: 12px;">
      <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 12px;">Metric Title</h3>
      <p style="font-size: 16px; line-height: 1.6;">
        Description with <strong>50% improvement</strong>
      </p>
    </div>
    
    <!-- Repeat for 2-3 metrics -->
  </div>

  <!-- Final Image -->
  <img src="images/final.png" style="width: 100%; border-radius: 12px;">
</section>
```

**Use for:** Showcasing results, metrics, and final outcomes

---

## Typography Reference

### Headings

| Class | Font | Size | Use For |
|-------|------|------|---------|
| `.hero-title-new` | Playfair Display | 48-72px | Page title only |
| `.hero-subtitle-new` | Playfair Display | 24-36px | Hero subtitle |
| `.section-title-left` | Playfair Display | 20px | Section headings |
| `.work-title-new` | Raleway | 18px | Card titles |

### Body Text

**Use inline styles for body text:**

```html
<!-- Large body text -->
<p style="font-size: 18px; line-height: 1.7; color: var(--gray-dark);">

<!-- Medium body text -->
<p style="font-size: 16px; line-height: 1.6; color: var(--gray-dark);">

<!-- Small/caption text -->
<p style="font-size: 14px; color: var(--gray-light);">
```

### Emphasis

```html
<strong>Bold text</strong>
<em>Italic text</em> (use sparingly with Playfair)
```

---

## Color Palette

```css
--black: #000000
--white: #F4F4F4
--gray-light: #999999
--gray-dark: #333333
--gray-bg: #F5F5F5
```

**Usage:**
- **Headings:** `var(--gray-dark)` or `var(--black)`
- **Body text:** `var(--gray-dark)`
- **Secondary text:** `var(--gray-light)`
- **Backgrounds:** `var(--white)` or `var(--gray-bg)`

---

## Image Guidelines

### Image Styling

**Hero images (large, dramatic):**
```html
<img src="..." style="width: 100%; border-radius: 16px; box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);">
```

**Section images (standard):**
```html
<img src="..." style="width: 100%; border-radius: 12px; box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);">
```

**Card images (in work-card):**
```html
<div class="work-image-wrapper-new">
  <img src="..." class="work-image-new">
</div>
```

### Image Specifications

- **Hero images:** 2048px wide, 16:9 or wider aspect ratio
- **Section images:** 1600px wide
- **Card images:** 1200px wide, 4:3 aspect ratio
- **Format:** PNG or JPG, optimized
- **Resolution:** 2x for retina displays

---

## Spacing Guidelines

### Section Spacing

```html
<!-- Between sections -->
<section class="recent-work"> <!-- Has 80px padding top/bottom by default -->

<!-- Between elements within a section -->
style="margin-bottom: 60px;" <!-- Large gap -->
style="margin-bottom: 40px;" <!-- Medium gap -->
style="margin-bottom: 24px;" <!-- Small gap -->
```

### Grid Gaps

```html
<!-- For card grids -->
<div class="work-grid-new"> <!-- 24px gap built-in -->

<!-- For custom grids -->
style="gap: 48px;" <!-- Two-column layouts -->
style="gap: 32px;" <!-- Metric cards -->
```

---

## Responsive Design

The template is fully responsive:

- **Desktop (>1024px):** Full two-column layouts
- **Tablet (768-1024px):** Slightly tighter spacing
- **Mobile (<768px):** Single column, stacked content

**Auto-responsive elements:**
- Navigation menu (hides brand name on mobile)
- Work card grids (3 → 2 → 1 columns)
- Two-column layouts (stacks on mobile)
- Hero content (adjusted margins)

**No additional work needed!** The CSS handles it automatically.

---

## Adding to Homepage

After creating your case study, add it to `index.html`:

```html
<div class="work-card">
  <a href="your-project-name" class="work-link-new">
    <div class="work-image-wrapper-new">
      <img src="images/your-thumb.png" alt="Project Name" class="work-image-new">
      <div class="work-overlay"></div>
    </div>
    <div class="work-info-new">
      <h3 class="work-title-new">Project Name</h3>
      <p class="work-category-new">Project type/description</p>
    </div>
  </a>
</div>
```

---

## Pre-Launch Checklist

- [ ] Updated page title in `<title>` tag
- [ ] Replaced all `[PLACEHOLDER]` text
- [ ] Added all images to `/images/` folder
- [ ] Optimized images (2x resolution, compressed)
- [ ] Updated all image paths and alt text
- [ ] Removed unused section templates
- [ ] Tested on localhost
- [ ] Checked mobile responsive design
- [ ] Verified all internal links work
- [ ] Spell-checked all content
- [ ] Added project to homepage (index.html)
- [ ] Tested navigation between pages

---

## Best Practices

### Content Structure

1. **Hero** - Project name + one-line hook
2. **Overview** - Context, challenge, outcome (with hero image)
3. **Problem** - Detailed challenge explanation
4. **Approach** - Your process and methodology
5. **Solution** - Key features/designs (2-3 sections)
6. **Impact** - Results and metrics
7. **Reflection** - (Optional) Key learnings

### Writing Tips

- **Keep it scannable:** Use clear headings, short paragraphs
- **Show, don't tell:** Let images do the heavy lifting
- **Lead with impact:** Start with the "so what?"
- **Use metrics:** Quantify results when possible
- **Tell a story:** Problem → Solution → Impact

### Visual Tips

- **Alternate layouts:** Mix image-left and image-right
- **Use captions:** Help viewers understand images
- **Consistent style:** Match the modern, clean aesthetic
- **Quality over quantity:** 6-8 great images > 20 mediocre ones
- **White space:** Let designs breathe, don't crowd

---

## Common Patterns

### Inline Bold Text
```html
<strong>50% improvement</strong>
```

### Link in Text
```html
<a href="/about" style="color: var(--gray-dark); text-decoration: underline;">contact me</a>
```

### Background Box (for callouts)
```html
<div style="background: var(--gray-bg); padding: 32px; border-radius: 12px;">
  Content here
</div>
```

### Centered Text
```html
<p style="text-align: center;">Centered text</p>
```

---

## Troubleshooting

**Images not showing?**
- Check file paths (should be `images/filename.png`)
- Verify images exist in images folder
- Check file extensions match (case-sensitive)

**Spacing looks off?**
- Check for unclosed `<div>` tags
- Verify `style` attributes have closing quote
- Use browser dev tools to inspect

**Responsive issues?**
- Test at different viewport sizes
- Check that custom grids use `repeat(auto-fit, ...)`
- Verify mobile styles aren't being overridden

---

## Quick Reference

### Section Classes
- `.recent-work` - Standard section with 80px padding
- `.work-grid-new` - 3-column card grid (auto-responsive)
- `.content-container` - Centered container with borders

### Typography
- `.serif` - Playfair Display font
- `.section-title-left` - Left-aligned section heading

### Colors
- `var(--gray-dark)` - Primary text
- `var(--gray-light)` - Secondary text
- `var(--gray-bg)` - Light background boxes

### Spacing
- `padding: 32px` - Medium padding
- `margin-bottom: 60px` - Large gap
- `gap: 48px` - Grid/flex gap

---

## Need Help?

- **View the template:** Open `case-study-template.html` in browser
- **Reference index.html:** See the design system in action
- **Check styles.css:** All classes defined there
- **Test locally:** `http://localhost:8000/your-file.html`

---

**Ready to create beautiful case studies! 🎨**

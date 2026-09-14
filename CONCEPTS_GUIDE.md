# Student Portfolio - Lab 2 Concepts Guide

## Overview
This single-page student portfolio demonstrates all key CSS and Bootstrap concepts from Lab 2.

---

## ✅ Concepts Demonstrated (5+ Required)

### 1. **Flexbox** ⭐
**File:** `style.css`

#### Navigation Bar (`.nav-container`)
```css
display: flex;
justify-content: space-between;
align-items: center;
```
- Flexible layout for navigation items
- Space distribution between logo, menu, and hamburger

#### Hero Section (`.hero-container`)
```css
display: flex;
justify-content: space-between;
align-items: center;
gap: 50px;
flex-wrap: wrap;
```
- Side-by-side layout for content and image
- Responsive wrapping on smaller screens

#### About Section (`.about-content`)
```css
display: flex;
align-items: center;
gap: 50px;
flex-wrap: wrap;
```
- Image and text arranged horizontally
- Wraps to vertical on mobile

#### Footer (`.footer-content`)
```css
display: flex;
justify-content: space-between;
align-items: flex-start;
flex-wrap: wrap;
gap: 40px;
```
- Multi-column footer layout
- Responsive wrapping

---

### 2. **CSS Positioning** ⭐
**File:** `style.css`

#### Fixed Navigation
```css
.navbar {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
}
```
- Navigation stays fixed at top during scroll
- High z-index keeps it above content

#### Achievement Card Badge
```css
.featured-badge {
    position: absolute;
    top: -15px;
    right: 30px;
    z-index: 10;
}
```
- Absolute positioning for featured badge
- Overlays on top-right corner of achievement card

#### Achievement Card Container
```css
.achievement-card {
    position: relative;
}
```
- Establishes positioning context for absolutely positioned children

---

### 3. **Pseudo-elements (::before, ::after)** ⭐
**File:** `style.css`

#### Navigation Link Underline (`.nav-link::after`)
```css
.nav-link::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--primary-color);
    transition: width 0.3s ease;
}

.nav-link:hover::after {
    width: 100%;
}
```
- Creates animated underline on hover
- Smooth width transition

#### Section Title Decorator (`.section-title::after`)
```css
.section-title::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
}
```
- Adds decorative gradient line below titles

#### Achievement Card Decorations
```css
.achievement-card::before {
    content: '';
    position: absolute;
    top: 0;
    height: 4px;
    background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
}

.achievement-card::after {
    content: '★';
    position: absolute;
    bottom: 20px;
    right: 30px;
    font-size: 2rem;
    color: var(--primary-color);
    opacity: 0.1;
}
```
- Top gradient line
- Watermark star in background

#### Badge Trophy Icon (`.badge-text::before`)
```css
.badge-text::before {
    content: '🏆';
    margin-right: 5px;
}
```
- Adds trophy emoji before badge text

#### Date Separator (`.date-label::after`)
```css
.date-label::after {
    content: '';
    width: 2px;
    height: 15px;
    background: var(--primary-color);
    display: inline-block;
    margin-left: 10px;
}
```
- Creates vertical line separator

---

### 4. **CSS Filters** ⭐
**File:** `style.css`

#### Project Card Images
```css
.project-image img {
    filter: grayscale(100%);
    transition: all 0.3s ease;
}

.project-card:hover .project-image img {
    filter: grayscale(0%) brightness(1.1);
    transform: scale(1.05);
}
```
- Images start in grayscale (black & white)
- On hover: color returns + brightness increases
- Also includes scale transform

#### Key Filters Applied:
- `grayscale(100%)` → Converts to black & white
- `grayscale(0%)` → Restores full color
- `brightness(1.1)` → Increases brightness

---

### 5. **CSS Transitions & Transforms** ⭐
**File:** `style.css`

#### Button Hover Effects
```css
.btn-primary {
    transition: all 0.3s ease;
}

.btn-primary:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
}
```
- Moves button up on hover
- Smooth shadow transition

#### Card Lift Effect
```css
.project-card {
    transition: all 0.3s ease;
}

.project-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
}
```
- Cards translate upward
- Enhanced shadow for depth

#### Image Hover Zoom
```css
.hero-image img {
    transition: transform 0.3s ease;
}

.hero-image img:hover {
    transform: scale(1.05);
}
```
- Images scale up 5% on hover

#### Dashboard Item Animations
```css
.dashboard-item {
    transition: all 0.3s ease;
}

.dashboard-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
}
```
- Subtle lift effect with shadow enhancement

#### Skill Card Combo Transform
```css
.skill-card:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
}
```
- Combines translateY and scale

---

### 6. **Bootstrap Flex Utilities** ⭐
**File:** `index.html` (Dashboard section)

#### Main Dashboard Container
```html
<div class="d-flex justify-content-between align-items-center flex-wrap gap-3 dashboard-container">
```

**Bootstrap Classes Used:**
- `d-flex` → `display: flex`
- `justify-content-between` → `justify-content: space-between`
- `align-items-center` → `align-items: center`
- `flex-wrap` → `flex-wrap: wrap`
- `gap-3` → `gap: 1rem` (spacing between items)

**Additional Bootstrap Classes Throughout:**
- `.d-flex` in footer: `d-flex justify-content-between align-items-start flex-wrap gap-4`
- `.d-flex` in about section: `d-flex align-items-center flex-wrap gap-5`

---

### 7. **Responsive Design** ⭐
**File:** `style.css`

#### Breakpoints Used:
1. **Desktop (> 1024px)** - Full layout, all items in row
2. **Tablet (768px - 1024px)** - 2-column grids, adjusted padding
3. **Mobile (480px - 768px)** - Single column, stack vertically
4. **Extra Small (< 480px)** - Further optimizations

#### Example Responsive Transitions:

**Desktop Navigation:**
```css
.nav-menu {
    display: flex;
    gap: 30px;
}
```

**Mobile Navigation:**
```css
@media (max-width: 768px) {
    .hamburger {
        display: flex;
    }
    .nav-menu {
        display: none;
    }
}
```

**Responsive Grid - Projects**
```css
.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

@media (max-width: 768px) {
    .projects-grid {
        grid-template-columns: 1fr;
    }
}
```

**Responsive Hero Layout**
```css
.hero-container {
    flex-wrap: wrap;
}

@media (max-width: 480px) {
    .hero-container {
        flex-direction: column;
        text-align: center;
    }
}
```

---

## 📋 Portfolio Sections

1. **Navigation Bar** - Fixed positioning, flexbox layout, responsive hamburger menu
2. **Hero Section** - Flexbox, transitions, responsive hero image
3. **About Section** - Flexbox, responsive stats layout
4. **Skills Section** - CSS Grid, transition hover effects
5. **Projects Section** - CSS filters, transitions, transforms
6. **Achievements Section** - Positioning, pseudo-elements, badges
7. **Dashboard Section** - Bootstrap flex utilities, responsive grid
8. **Footer Section** - Flexbox layout, responsive columns

---

## 🎨 Interactive Features

- Smooth scroll navigation
- Active link highlighting
- Hover animations (lift, scale, filter changes)
- Fade-in on scroll effects
- Project button alerts
- Responsive hamburger menu
- Dynamic navbar shadow on scroll

---

## ✨ Key CSS Techniques

- **CSS Variables** (Custom properties for colors and spacing)
- **Gradients** (Linear gradients for backgrounds and accents)
- **Box Shadows** (Layered shadows for depth)
- **Transitions** (All interactive elements smoothly animate)
- **Transforms** (Translate, scale, rotate effects)
- **Filters** (Grayscale, brightness adjustments)
- **Grid Layout** (For responsive skill and project cards)
- **Flexbox** (Primary layout method throughout)

---

## 🚀 How to Use

1. Open `index.html` in a web browser
2. Click navigation links to scroll to sections
3. Hover over cards and buttons to see animations
4. Resize window to see responsive design in action
5. Click project buttons and hero buttons for interactions

---

## 📱 Responsive Behavior

- **Desktop:** Full horizontal layouts with multiple columns
- **Tablet:** Adjusted spacing, 2-column grids where appropriate
- **Mobile:** Single column layout, stacked vertically
- **Extra Small:** Optimized sizing for small screens

All transitions and animations work smoothly across all breakpoints.

---

**Portfolio Created with:** HTML5, CSS3, Bootstrap 5, JavaScript
**Concepts Demonstrated:** 7 (Flexbox, Positioning, Pseudo-elements, Filters, Transitions/Transforms, Bootstrap Flex, Responsive Design)

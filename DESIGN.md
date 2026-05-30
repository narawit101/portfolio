# 🎨 Portfolio Design System & Architecture Document

This document describes the design tokens, architecture, folder layout, and component implementation patterns of this Next.js-based portfolio website.

---

## 🛠️ 1. Core Tech Stack & Infrastructure

The technology stack is selected to optimize load performance (LCP, SEO) and ensure smooth theme and language responsiveness:

*   **Framework:** [Next.js 16+ (App Router)](https://nextjs.org/)
    *   Leverages Server Components for layout structure and server-side data extraction (e.g., retrieving the initial language preference from cookies).
    *   Manages user interactivity and reactive UI elements inside client-side components (like `page-client.tsx`).
*   **Language:** [TypeScript](https://www.typescriptlang.org/) (Strict Mode)
*   **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
    *   Integrates with PostCSS for CSS compilation and optimization.
    *   Manages design tokens through standard CSS variables and the `@theme` directive in `globals.css`.
*   **Typography:** The font family `Kanit` is fetched from Google Fonts to deliver clean, modern, and readable typography for both English and Thai scripts.

---

## 🎨 2. Design Tokens & CSS Variables

Colors and surface textures are dynamically managed via CSS variables in [globals.css](file:///C:/D/cv/portfolio/app/globals.css), supporting both Dark and Light modes:

### 🌗 Theme Color Definitions

| CSS Variable | Dark Theme (Default) | Light Theme (`data-theme="light"`) | Description |
| :--- | :--- | :--- | :--- |
| `--color-primary` | `#f97316` (Orange) | `#f97316` (Orange) | Core brand accent color |
| `--theme-bg` | `#0a0a12` (Deep Navy) | `#f6efe6` (Warm Cream) | Main website background color |
| `--theme-surface` | `rgba(18, 18, 26, 0.92)` | `rgba(255, 250, 244, 0.94)` | Secondary backdrop surfaces for control widgets |
| `--theme-surface-card` | `rgba(16, 16, 23, 0.72)` | `rgba(255, 252, 247, 0.92)` | Card element backgrounds |
| `--theme-text` | `#ffffff` | `#1f1a15` | Core heading text color (Titles) |
| `--theme-text-body` | `#d1d5db` | `#4b3e31` | Body and paragraph text color |
| `--theme-text-muted` | `#9ca3af` | `#7a6a5d` | Muted and subtitle text color |
| `--theme-border` | `rgba(255, 255, 255, 0.08)` | `rgba(86, 68, 52, 0.13)` | Glassmorphism-style borders |

### 🧩 UI Helper Classes (CSS Utilities)
Reusable panel styles defined globally:
*   `.theme-card` and `.theme-card-hover`: Core interactive card component featuring color gradients and hover translate transformations.
*   `.theme-panel-solid`: Solid level-2 panels, ideal for background cards.
*   `.theme-nav-surface`: Sticky navigation bar container equipped with backdrop blurs and dropshadows.

---

## 📂 3. Folder Structure & Data Architecture

To facilitate clean development and straightforward updates, the project follows a **Data-Driven Architecture** that keeps UI structures decoupled from raw data values:

```
C:\D\cv\portfolio
├── 📂 app/                     # Next.js App Router (Layout & Client Page)
├── 📂 components/              # UI & Layout Sections (Modular Components)
├── 📂 data/                    # JSON-like TypeScript data files (Single Source of Truth)
│   ├── contact.ts
│   ├── experience.ts
│   ├── footer.ts
│   ├── hero.ts
│   ├── navigation.ts
│   ├── projects.ts
│   └── techStack.ts
├── 📂 types/                   # TypeScript global declarations
```

### 🌐 Localization Schema
Multi-language support (TH / EN) is declared globally:
```typescript
export type LocalizedText = {
    th: string
    en: string
}
```
Every section component accesses localized content dynamically based on the active language state (`lang: Lang`), such as `item.label[lang]`.

---

## ⚡ 4. Advanced Component Patterns

### 🔹 4.1. Navigation & Smart Active Anchor
*   **Sticky Navbar:** Transforms into a translucent, bordered bar when the page is scrolled (`window.scrollY > 10`).
*   **Scroll Observer:** Utilizes an `IntersectionObserver` in [navbar.tsx](file:///C:/D/cv/portfolio/components/navbar.tsx) to dynamically track which section occupies the viewport and update the active menu item.
*   **Desktop Active Indicator:** An animated bottom border (`bg-primary`) that transitions in scale from center outward (`origin-center scale-x-0` -> `scale-x-100`) when a menu item becomes active.
*   **Mobile Active Indicator:** On mobile, active items in the vertical drawer are emphasized using a left accent border (`border-l-2 border-primary`) and a subtle background tint (`bg-primary/5`) to prevent layout shifts (no shifting text).

### 🔹 4.2. Persistent Control Dock (Bottom-Right)
*   Contains the language (`LangToggle`) and theme (`ThemeToggle`) switchers. Settings are synchronized with `localStorage` and `document.cookie` to align browser preferences with server rendering, preventing hydration warnings.
*   **Show/Hide Toggle:** A compact, circular button (displaying either a Close `X` or Settings Sliders icon) allows users to collapse the dock to prevent visual clutter:
    *   Triggers smooth transitions to slide, fade, and collapse the widget horizontally (`max-w-0 opacity-0 scale-95 translate-x-10`).
    *   Persists the visibility state in `localStorage` under `portfolio-controls-visible`.

### 🔹 4.3. Timelines & Pagination Navigation
*   **Experience Timeline:** Rendered in a dual-column layout (Work and Education), featuring responsive hover indicators and vertical lines that expand and scale dynamically.
*   **Tech Stack Cards:** Skills categories utilize local pagination (8 items per view page) powered by [Navigation.tsx](file:///C:/D/cv/portfolio/components/Navigation.tsx) to keep section heights consistent across different viewports.
*   **Carousel Dot Indicators:** Custom slide indicators rendered by `CarouselDotsNav` in [Navigation.tsx](file:///C:/D/cv/portfolio/components/Navigation.tsx). The active dot dynamically expands (`w-4 bg-primary`) while inactive dots remain small (`w-1.5 bg-(--theme-text-muted)`). Inactive dots have a micro-interaction hover highlight (`hover:bg-primary/50`).
    *   *Project Cards:* Indicators are hidden on desktop screens until hovered (`sm:opacity-0 sm:group-hover:opacity-100`) to preserve clean aesthetics.
    *   *Project Details Modal:* Indicators remain fully visible (`opacity-100`) at all times to ensure accessible navigation.

---

© 2026 Developed by Narawit Soiaudom. All rights reserved.

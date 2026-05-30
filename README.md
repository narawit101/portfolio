# 🚀 Narawit's Personal Portfolio

A high-performance, single-page developer portfolio website built using **Next.js 16 (App Router)**, **React 19**, and **Tailwind CSS v4**. This portfolio showcases work experience, education history, capabilities (Tech Stack), and highlighted software projects in a modern, interactive, glassmorphic layout.

---

## ✨ Features

*   **🎨 Premium Glassmorphism UI/UX:** Sleek visual design with smooth hover actions, gradient ambient blurs, and animated slide overlays.
*   **🌐 Dual Localization (EN/TH):** Complete runtime translation toggle for both English and Thai scripts.
*   **🌗 Cookied Theme Swapping:** Smooth switching between Light Mode (warm cream) and Dark Mode (navy/slate). Synchronized with document cookies and `localStorage` to avoid flash-on-load (Hydration Mismatch) during SSR.
*   **📍 Active Section Navigation:** A sticky navbar powered by `IntersectionObserver` that dynamically underlines the menu items as you scroll through the page.
*   **🛠️ Collapsible Settings Dock:** A floating controls panel at the bottom-right for language and theme adjustments. It can be collapsed horizontally with smooth slide-and-fade CSS animations. The dock's visibility state is persisted in `localStorage`.
*   **💾 Data-Driven Architecture:** Layout files are decoupled from hardcoded text. All content variables are stored in easy-to-read TypeScript modules in the `data/` folder.

---

## 🛠️ Tech Stack

*   **Framework:** [Next.js 16+](https://nextjs.org/) (App Router, Turbopack)
*   **Library:** [React 19](https://reactjs.org/)
*   **Language:** [TypeScript](https://www.typescriptlang.org/) (Strict Mode)
*   **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
*   **Asset Hosting:** [Cloudinary](https://cloudinary.com/) (Background and project images)

---

## 📂 Documentation Playbooks

To maintain clean code standards and allow AI developer agents to work on this repository without confusion, three detailed markdown playbooks are provided:

1.  **[CONTEXT.md](file:///C:/D/cv/portfolio/CONTEXT.md) (System Context):** Contains system architecture diagrams, tech stack components, a detailed file-by-file directory explanation, and known gotchas.
2.  **[AGENTS.md](file:///C:/D/cv/portfolio/AGENTS.md) (Developer Guide):** Outlines coding rules, localization schemas, strict prohibitions, and step-by-step guides on adding new pages or API routes.
3.  **[DESIGN.md](file:///C:/D/cv/portfolio/DESIGN.md) (Design Tokens):** Explains design variables, theme colors (Dark and Light values), and custom layout utility classes.

---

## 🚀 Getting Started (Local Development)

### Prerequisites
Make sure you have Node.js (version 18 or higher recommended) installed.

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the portfolio live.

### 3. Run Checks (Pre-commit / Pre-merge)
Verify TypeScript type checks and ESLint lints are clean:
```bash
npm run lint
```

Ensure the production build succeeds:
```bash
npm run build
```

---
© 2026 Developed with ❤️ by **[Narawit Soiaudom]**. All rights reserved.

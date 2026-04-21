---
name: section-data-th-en
description: "Extract UI text into per-section data files with Thai+English content and wire language toggle. Use for แยกข้อความทุก section, TH EN data structure, i18n refactor, and lang switch implementation."
argument-hint: "Target scope (all sections or specific), default lang (th/en), and toggle placement"
---

# Section Data TH/EN + Lang Toggle Workflow

## What This Skill Produces

- A section-based content architecture in `data/`.
- Bilingual content for every section (`th` and `en`).
- Wired language toggle (`lang`) for rendering both languages.
- Reduced hardcoded strings inside component files.

## When to Use

- User asks to split text from components into data files.
- User needs both Thai and English content in the same project.
- User plans to add a language switch toggle.
- Existing UI has many inline strings that are hard to maintain.

## Inputs

- Scope: all sections or selected sections.
- Default language: `th` or `en`.
- Toggle location: navbar, hero, or global app state.
- Output style: full translation now or phased migration.

## Recommended Structure

```text
components/
  HeroSection.tsx
  TechStackSection.tsx
  ProjectsSection.tsx
  ContactSection.tsx
  FooterSection.tsx

data/
  hero.ts
  techStack.ts
  projects.ts
  contact.ts
  footer.ts

types/
  index.ts (or i18n types)
```

## Data Shape Standard

Use one consistent shape for all sections.

```ts
type Lang = 'th' | 'en'

type Localized<T> = {
  th: T
  en: T
}
```

Example:

```ts
export type HeroText = {
  title: string
  subtitle: string
  ctaPrimary: string
  ctaSecondary: string
}

export const heroText: Localized<HeroText> = {
  th: {
    title: '...',
    subtitle: '...',
    ctaPrimary: '...',
    ctaSecondary: '...',
  },
  en: {
    title: '...',
    subtitle: '...',
    ctaPrimary: '...',
    ctaSecondary: '...',
  },
}
```

## Procedure

1. Discover sections and text automatically.
- Scan section components in `components/`.
- Extract user-facing strings from headings, paragraphs, labels, buttons, and list items.
- Group strings by section file.

2. Create or extend data files per section.
- If data file exists, extend it with bilingual keys.
- If missing, create a new section data file in `data/`.
- Keep naming predictable (`hero.ts`, `contact.ts`, `footer.ts`).

3. Build Thai and English content together.
- Always generate both `th` and `en` in the same pass.
- Preserve product names and technical terms exactly when needed.
- Keep key parity between both languages.

4. Wire components to language-aware data.
- Replace hardcoded text with data references.
- Read section content by `lang`: `sectionData[lang]`.
- Keep rendering logic unchanged where possible.

5. Implement lang toggle.
- Add a `lang` state (`th` | `en`) in a shared level (page/layout/navbar).
- Pass `lang` down as props or via context.
- Add toggle UI and highlight active language.

6. Add fallback and persistence.
- If language is missing, fallback to default language.
- Optionally persist language in `localStorage`.

7. Validate and polish.
- Check type errors and missing keys.
- Confirm both languages render in every section.
- Confirm layout is stable for longer translated text.

## Decision Points

- Existing mixed file already has both data and logic:
- Extract text only first; keep behavior local to reduce risk.

- User requests only one language for now:
- Still create both `th` and `en` keys; allow placeholder text for unfinished copy.

- Section includes long rich text:
- Use array blocks or structured paragraphs rather than one giant string.

- Complex list data (projects, tech stack):
- Localize display text fields only; keep technical IDs/URLs unchanged.

- Toggle scope uncertain:
- Prefer one global toggle to avoid inconsistent language across sections.

## Completion Checks

- Every target section reads text from `data/` files.
- Every localized object has both `th` and `en` keys.
- No critical user-facing strings remain hardcoded in components.
- Toggle changes language for all migrated sections.
- No new TypeScript/compile errors.

## Example Prompts

- "Use section-data-th-en to migrate all sections to data files and add a global th/en toggle."
- "Refactor Hero, Contact, Footer to localized data shape with complete Thai+English copy."
- "แยกข้อความทุก section ไปไฟล์ data และทำ lang switch แบบ global พร้อม fallback"

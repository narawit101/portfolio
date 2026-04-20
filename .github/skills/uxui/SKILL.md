---
name: uxui
description: "Refine portfolio UX/UI in Next.js and Tailwind. Use for spacing, hierarchy, modal behavior, slider controls, hover interactions, and responsive polish with quick validation."
argument-hint: "Target section and desired UX outcome (example: project modal controls or hero spacing)"
---

# UX/UI Refinement Workflow

## When to Use

- User asks to polish an existing section visually.
- Spacing, alignment, or hierarchy looks off.
- Carousel or modal controls are hard to see or in the wrong place.
- Hover behavior is wrong across mobile and desktop.
- Similar UI patterns exist in more than one component.

## Inputs

- Target section or file.
- Desired behavior (always visible, hover-only, header vs media area).
- Visual constraint (do not block key content, preserve current style direction).

## Procedure

1. Confirm the live state before editing.
   - Read the current file because user or formatter edits may have changed it.
   - Find the exact classes controlling layout, visibility, and interaction.

2. Classify the issue.
   - Visibility issue: controls blend into the image.
   - Layout issue: spacing or sizing feels wrong.
   - Interaction issue: hover or click behavior is not as requested.
   - Consistency issue: repeated markup differs between sections.

3. Apply the smallest safe change first.
   - Prefer Tailwind class edits before structural rewrites.
   - Improve contrast with blur capsules, gradients, and border tuning.
   - Adjust spacing with responsive breakpoints only where needed.

4. Branch for reuse.
   - If the same pattern exists in 2 or more places, extract a shared component.
   - If it is one-off, keep it local to avoid unnecessary abstraction.

5. Validate immediately.
   - Run file error checks after edits.
   - Resolve Tailwind class hints and syntax issues.
   - For larger changes, run lint and build.

6. Final UX pass.
   - Confirm controls do not block important image content.
   - Confirm mobile and desktop behavior both match the request.
   - Confirm brand color usage stays consistent.

## Decision Points

- Show controls only on hover desktop:
  - Keep controls visible on mobile.
  - Use breakpoint-based hover reveal on desktop.

- Place page counter in header or near dots:
  - Header when bottom overlay should stay minimal.
  - Dot capsule when navigation information should be grouped.

- Keep or remove reusable component:
  - Keep when shared behavior is stable.
  - Revert to local markup when requirements diverge strongly.

## Completion Checks

- Visual outcome matches user request and screenshot intent.
- Interaction behavior matches requested placement and visibility.
- No new errors in changed files.
- Scope stayed minimal and focused.

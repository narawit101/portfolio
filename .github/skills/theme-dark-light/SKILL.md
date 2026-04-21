---
name: theme-dark-light
description: "Refine dark and light themes for a portfolio or web app. Use when keeping the dark theme as-is while redesigning the light theme, adjusting palette, contrast, surfaces, borders, shadows, and theme token mapping."
argument-hint: "Target sections, keep dark unchanged, redesign light, and specify brand color constraints"
---

# Dark / Light Theme Workflow

## What This Skill Produces

- A preserved dark theme that keeps the existing visual direction.
- A redesigned light theme that feels deliberate, readable, and on-brand.
- Consistent theme tokens for surfaces, borders, text, shadows, and accents.
- Theme decisions that work across sections without breaking layout.

## When to Use

- User asks for dark and light theme support.
- Dark mode should stay mostly unchanged.
- Light mode needs a new visual treatment.
- Brand color remains the same, but the overall tone must adapt for light backgrounds.
- The UI has multiple sections that should look coherent in both modes.

## Inputs

- Target area: page, section, component, or whole app.
- Theme rule: dark stays as-is, light is redesigned.
- Brand palette constraints: keep primary color or adjust secondary tones.
- Scope of change: colors only, or colors + spacing + shadows + borders.
- Implementation target: CSS variables, Tailwind tokens, or component classes.

## Procedure

1. Inspect the current theme baseline.
- Read the live files before editing.
- Identify where colors are hardcoded and where tokens already exist.
- Separate dark-mode patterns that should remain unchanged.

2. Freeze the dark theme.
- Preserve the existing dark palette, surface depth, and contrast behavior.
- Avoid altering dark-specific shadows, overlays, or ambient glows unless necessary.
- Treat the current dark style as the reference baseline.

3. Design the light theme from scratch.
- Choose a lighter background system with readable foreground text.
- Replace heavy dark surfaces with soft neutrals, warm grays, or subtle brand-tinted panels.
- Rebuild borders, shadows, and hover states for light contrast.

4. Map theme tokens.
- Use consistent tokens for background, card, border, text, muted text, accent, and hover state.
- Keep brand color recognizable in both themes.
- Ensure icon and illustration contrast works on light backgrounds.

5. Apply theme-aware classes or variables.
- Prefer CSS variables or semantic tokens over one-off utility swaps.
- Keep components theme-aware rather than duplicating markup.
- If the project already uses a theme flag, wire styles to that flag.

6. Check component-by-component consistency.
- Confirm cards, buttons, navbars, modals, and sections match the new light system.
- Make sure spacing and hierarchy still read well when light surfaces reduce visual weight.

7. Validate contrast and readability.
- Check heading, body, muted, and link contrast in light mode.
- Confirm hover and active states remain visible.
- Ensure borders are visible without becoming harsh.

8. Final pass.
- Verify dark mode remains visually consistent with the original look.
- Confirm light mode feels intentionally designed, not just inverted.
- Fix any section that becomes washed out, too flat, or too colorful.

## Decision Points

- Dark theme already looks good:
- Keep it unchanged unless a bug or contrast issue is found.

- Light theme looks too similar to dark:
- Rebuild surfaces and contrast rules, not just color values.

- Brand color is strong orange or another saturated accent:
- Reduce saturation in light mode where needed so the UI stays balanced.

- Theme implementation already exists:
- Extend the current token system instead of adding a second ad hoc one.

- No theme system exists:
- Introduce semantic variables first, then map components to them.

## Completion Checks

- Dark theme visually matches the original baseline.
- Light theme has a distinct, intentional design language.
- Brand color remains recognizable in both themes.
- Text contrast and surface hierarchy are readable in both modes.
- No new errors in changed files.

## Example Prompts

- "Use theme-dark-light for the whole portfolio. Keep dark unchanged and redesign light from scratch."
- "Refresh the light theme only, but preserve the current dark look and brand orange."
- "ทำธีมสี dark/light โดย dark เอาแบบเดิม ส่วน light ออกแบบใหม่ทั้งหมด"

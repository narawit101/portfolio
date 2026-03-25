# Next.js Production Rules

## Tech Stack Preferences
- Framework: Next.js 16+ (App Router)
- Language: TypeScript (strict mode)
- Styling: Tailwind CSS v4
- Components: Reusable UI in components/ui first, then feature components
- State management: Prefer local state; use Context or Zustand only when necessary

## Architecture Rules
- Default to Server Components. Add `use client` only for interactivity, browser APIs, or hooks.
- Keep route segments in kebab-case.
- Keep components small and single-purpose. Extract shared UI early.
- Prefer async/await and explicit error handling for data fetching.
- Use feature-focused folders when a section grows (component + types + helpers together).

## Next.js Best Practices
- Images: Use `next/image` for local and remote images.
- Links: Use `next/link` for internal navigation.
- SEO: Use Metadata API (`metadata` or `generateMetadata`) instead of `<Head>`.
- Segment UX: Add `loading.tsx` and `error.tsx` for async route segments.
- Fonts: Use `next/font` where practical for better performance.

## Type Safety And Validation
- Avoid `any`; prefer explicit types and utility types.
- Validate external data (APIs, params, form input) before use.
- If runtime validation is needed, use a schema library (for example Zod).
- Keep domain types in shared files when used across multiple components.

## Security Rules
- Never expose secrets in client code.
- Only variables prefixed with `NEXT_PUBLIC_` may be used in browser-executed code.
- Sanitize or validate all user input before processing.
- Do not log sensitive data in production.

## Performance Rules
- Avoid unnecessary client-side rendering and large client bundles.
- Use dynamic import for heavy client-only modules.
- Provide `sizes` for responsive `next/image` usage.
- Use caching/revalidation strategy intentionally for server data.

## Accessibility Rules
- Ensure interactive elements are keyboard accessible.
- Provide meaningful labels/aria attributes for controls.
- Maintain readable contrast and visible focus states.
- Use semantic HTML before ARIA when possible.

## Testing And Quality Gates
- Minimum gate before merge: lint + type check + build must pass.
- Current project commands:
	- `npm run lint`
	- `npm run build`
	- `npx tsc --noEmit` (until a `typecheck` script is added)
- Add tests for critical logic and user flows as the project grows.

## Copilot Workflow
- Before creating a new component, check for an existing reusable one in `components/ui`.
- When fixing a bug, inspect terminal errors and reproduce the issue first.
- After dependency changes, run `npm run dev` to verify startup.
- For any non-trivial change, also run lint and build before finalizing.
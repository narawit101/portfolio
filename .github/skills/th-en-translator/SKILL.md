---
name: th-en-translator
description: "Translate and rewrite content in both Thai and English. Use for แปลไทยอังกฤษ, bilingual copywriting, tone matching, and preserving technical terms in portfolio content and UI text."
argument-hint: "Source text/file, target tone, and output style (paired TH+EN or side-by-side)"
---

# Thai-English Translator Workflow

## What This Skill Produces

- Bilingual output with both Thai and English in one response.
- Natural, polished phrasing while preserving original meaning.
- Consistent terminology for product names, technical terms, and brand voice.

## When to Use

- The user asks to translate Thai to English, English to Thai, or mixed-language text.
- Portfolio copy needs polished Thai and English versions.
- UI labels, section descriptions, or project summaries must be bilingual.
- Text should be rewritten for clarity without losing intent.

## Inputs

- Source text or target file.
- Preferred tone: direct, professional, friendly, marketing.
- Output format: paired blocks, side-by-side table, or data-object format.
- Length constraints (for UI text, badges, buttons, headings).

## Procedure

1. Read and classify source content.
- Identify source language (`th`, `en`, or mixed).
- Detect text type: heading, body copy, CTA, bullet list, technical description.

2. Extract meaning before translating.
- Capture intent, audience, and level of formality.
- Mark non-translatable terms: product names, library names, APIs, file names, URLs.

3. Build a terminology map.
- Keep key terms consistent across Thai and English.
- Preserve technical keywords exactly where needed (e.g., Next.js, PostgreSQL, Socket.IO).

4. Generate both languages together.
- Produce Thai and English in the same pass to keep parity.
- Avoid literal wording when it sounds unnatural; preserve meaning first.

5. Apply style and length constraints.
- Shorten labels and CTA text for UI.
- Keep long-form text clear with readable sentence flow.

6. Validate bilingual parity.
- Ensure both versions carry the same meaning and scope.
- Check names, numbers, dates, links, and feature lists match.

7. Integrate safely into code/content files.
- Escape or adjust characters that can break templates.
- Keep formatting valid for markdown, TypeScript strings, or JSON-like structures.

8. Final quality pass.
- Verify grammar and readability in both languages.
- Confirm output is ready for direct use in UI/content files.

## Decision Points

- Source is Thai only:
- Create polished Thai plus aligned English translation.

- Source is English only:
- Create polished English plus aligned Thai translation.

- Source is mixed Thai/English:
- Normalize both outputs with consistent terminology and structure.

- Technical or brand-heavy text:
- Keep official terms untranslated unless the user asks for localization.

- Ambiguous intent:
- Provide one primary translation and one alternative phrasing for unclear parts.

## Completion Checks

- Thai and English outputs are both present.
- Meaning and tone are aligned across both languages.
- Terminology is consistent and technically accurate.
- UI-sized text respects requested length constraints.
- No formatting issues introduced in target files.

## Output Templates

### Paired Blocks

TH:
- ...

EN:
- ...

### Side-by-side Table

| Thai (TH) | English (EN) |
|---|---|
| ... | ... |

## Example Prompts

- "Use th-en-translator to rewrite this project summary in polished Thai and English."
- "Translate these UI labels to TH+EN with concise button-friendly wording."
- "แปลข้อความนี้เป็นไทยและอังกฤษ พร้อมปรับโทนให้มืออาชีพสำหรับพอร์ตโฟลิโอ"

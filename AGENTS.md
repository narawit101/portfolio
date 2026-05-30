# 🤖 Developer Guidelines (AGENTS.md)

This playbook establishes strict developer guidelines, coding patterns, and procedures for this codebase. Any AI agent or developer working on this project must follow these rules without exception.

---

## 🚦 1. Before Starting Any Task

Follow these verification checks before writing or editing any code:

1.  **Analyze Context:** Read [CONTEXT.md](file:///C:/D/cv/portfolio/CONTEXT.md)
2.  **Verify Existing UI:** Before building any interface widgets, check if a reusable component or sub-layout is already defined in `components/` or `components/Navigation.tsx`.
3.  **Run Pre-Flight Commands:** Verify the current code passes all checks:
    ```bash
    npm run lint
    npm run build
    ```

---

## 🎨 2. Code Conventions

To keep the codebase maintainable and type-safe, adhere to these coding patterns:

### 🧩 2.1. Strict TypeScript

- **No Implicit/Explicit `any`:** Specify precise types for parameters, components, and payloads.
- **Global Types:** Use types declared in [types/index.ts](file:///C:/D/cv/portfolio/types/index.ts) (e.g., `Lang`, `LocalizedText`, `Project`). If you define new data shapes, register them in `types/index.ts` first.

### 🌎 2.2. Translation & Localization

- **Never Hardcode User-Facing Text:** All visible text strings (buttons, tooltips, titles, paragraphs) must support both English and Thai.
- **Data Structure:** Texts must be structured as a `LocalizedText` dictionary:
  ```typescript
  const title: LocalizedText = {
    th: "ข้อความภาษาไทย",
    en: "English text content",
  };
  ```
- **Decoupled Store:** Store all values inside TypeScript modules under the `data/` directory (e.g., `data/projects.ts`), then import and resolve them reactively using the `lang` prop (e.g., `content.title[lang]`).

### 🎨 2.3. CSS & Design Tokens

- **Use CSS Variables:** Use the design tokens declared in `app/globals.css`.
- **Tailwind Styles:** Use Tailwind classes rather than inline styles. Refer directly to variables (e.g., `text-(--theme-text)`, `bg-(--theme-bg)`) or Tailwind theme classes (`text-primary`, `border-primary`).
- **Animations:** Use CSS transitions coupled with standard Tailwind utility classes (e.g., `transition-all duration-300 origin-center`).

---

## ❌ 3. Never Do

- **Do NOT** hardcode raw strings inside JSX/TSX elements.
- **Do NOT** use standard HTML anchor tags (`<a>`) for routing. Always use Next.js `Link` (`next/link`).
- **Do NOT** use inline styles (`style={{ ... }}`) unless dynamic calculation at runtime is required (such as background images or scrolling translate multipliers).
- **Do NOT** bypass linter errors or typescript checks with `@ts-ignore` comments.
- **Do NOT** write database connections, ORM scripts, or SQL. The portfolio is purely client-hydrated static HTML.

---

## 🛣️ 4. How to Add a New API Route

Although the site is static, if you need to add server-side API routes in the future, follow this standard Next.js Route Handler pattern:

1.  **Create Endpoint Folder:** Create a sub-folder under `app/api/` matching your endpoint name (e.g., `app/api/contact/route.ts`).
2.  **Write route.ts:** Implement your handler using Next.js Web Request/Response:

    ```typescript
    import { NextResponse } from "next/server";

    export async function POST(request: Request) {
      try {
        const body = await request.json();

        // Process payload (e.g., validations, sending emails)

        return NextResponse.json(
          { success: true, message: "Received" },
          { status: 200 },
        );
      } catch (error) {
        return NextResponse.json(
          { success: false, error: "Invalid payload" },
          { status: 400 },
        );
      }
    }
    ```

---

## 📄 5. How to Create a New Page

To add an entirely new page segment (e.g., `/resume`):

1.  **Add Route Directory:** Create a folder inside `app/` (e.g., `app/resume/`).
2.  **Create Server Entry:** Create a `page.tsx` file inside that folder:

    ```typescript
    import { cookies } from 'next/headers'
    import ResumeClientPage from './resume-client'
    import { Lang } from '@/types'

    export default async function ResumePage() {
      const cookieStore = await cookies()
      const savedLang = cookieStore.get('portfolio-lang')?.value
      const initialLang: Lang = savedLang === 'en' || savedLang === 'th' ? savedLang : 'th'

      return <ResumeClientPage initialLang={initialLang} />
    }
    ```

3.  **Create Client Interactivity (if needed):** Create a `resume-client.tsx` containing the client-side interactivity:

    ```typescript
    'use client'
    import { useState } from 'react'
    import { Lang } from '@/types'

    export default function ResumeClientPage({ initialLang }: { initialLang: Lang }) {
      const [lang] = useState<Lang>(initialLang)
      return (
        <main className="theme-page p-8">
          <h1>Resume Page</h1>
        </main>
      )
    }
    ```

---

## 💾 6. How to Update the "Database" (Static Data)

Since there is no relational SQL or NoSQL database, updating the application's data means updating the static data modules:

1.  **Locate Data File:** Find the relevant file in the `data/` directory:
    - `data/projects.ts` (For featured items)
    - `data/techStack.ts` (For technical capabilities)
    - `data/experience.ts` (For employment/education timeline)
2.  **Add/Modify Entry:** Insert your item conforming to its type schema.
    - _Example: Appending a project in `data/projects.ts` (showing full schema with demo credentials):_
    ```typescript
    {
      id: 5,
      head: {
        th: 'ระบบร้านค้าอัจฉริยะ',
        en: 'Smart Retail System'
      },
      description: {
        th: 'รายละเอียดโปรเจกต์...',
        en: 'Detailed project description...'
      },
      pictures: [
        'https://res.cloudinary.com/.../img1.png',
        'https://res.cloudinary.com/.../img2.png'
      ],
      tags: ['React', 'Node.js', 'PostgreSQL'],
      githubUrl: 'https://github.com/username/project',
      demoUrl: 'https://project-demo.vercel.app',
      demoInstruction: {
        th: 'คำแนะนำขั้นตอนการลองใช้งาน...',
        en: 'Instructions on how to test the demo...'
      },
      demoCredentials: [
        {
          name: { th: 'ผู้ใช้ทดสอบ', en: 'Test User' },
          username: 'demo_user',
          password: 'Password@123'
        }
      ]
    }
    ```
3.  **Validate Compilation:** Ensure typescript does not throw errors due to missing fields.

---

## 🏁 7. After Completing a Feature

Before submitting your pull request or concluding the task:

1.  **Format and Clean:** Delete temporary scratch scripts and remove unused variables or debug `console.log` statements.
2.  **Test Build:** Ensure compilation builds successfully:
    ```bash
    npm run lint
    npm run build
    ```
3.  **Update Documentation:** If you added files or introduced new structures, document the updates in [CONTEXT.md](file:///C:/D/cv/portfolio/CONTEXT.md).

"use client";

import { contacts, contactSectionText } from "@/data/contact";
import { Lang } from "@/types";

function ContactIcon({ type }: { type: string }) {
  if (type === "phone") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    );
  }

  if (type === "email") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
      >
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    );
  }

  if (type === "line") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M22 10.5C22 5.8 17.5 2 12 2S2 5.8 2 10.5c0 4.2 3.7 7.7 8.7 8.4.3.1.8.2.9.6.1.3.1.8 0 1.2-.1.5-.5 2.1-.6 2.5-.2.9.4.5.8.3 3.6-2.1 5.9-3.7 7.1-4.7 2-1.7 3.1-4.6 3.1-8.3z" />
      </svg>
    );
  }

  if (type === "instagram") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-5 w-5"
      >
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
        <circle cx="12" cy="12" r="4.2" />
        <circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  if (type === "facebook") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07c0 6.02 4.39 11.01 10.12 11.93v-8.44H7.08v-3.5h3.04V9.41c0-3.02 1.79-4.69 4.54-4.69 1.31 0 2.69.24 2.69.24v2.97h-1.52c-1.5 0-1.96.93-1.96 1.89v2.24h3.34l-.53 3.5h-2.81V24C19.61 23.08 24 18.09 24 12.07Z" />
      </svg>
    );
  }

  // GitHub Octocat
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M12 .5C5.65.5.5 5.65.5 12.01c0 5.09 3.3 9.41 7.88 10.94.58.11.79-.25.79-.56v-2.16c-3.2.7-3.88-1.36-3.88-1.36-.52-1.31-1.28-1.66-1.28-1.66-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.76 2.68 1.25 3.34.95.1-.74.4-1.25.72-1.54-2.56-.29-5.26-1.28-5.26-5.72 0-1.27.46-2.31 1.2-3.12-.12-.29-.52-1.47.11-3.07 0 0 .98-.31 3.2 1.19.93-.26 1.92-.39 2.91-.4.99 0 1.99.14 2.92.4 2.21-1.5 3.19-1.19 3.19-1.19.64 1.6.24 2.78.12 3.07.75.81 1.2 1.85 1.2 3.12 0 4.45-2.7 5.43-5.28 5.71.42.36.78 1.08.78 2.19v3.25c0 .31.21.67.8.56A11.52 11.52 0 0 0 23.5 12c0-6.35-5.15-11.5-11.5-11.5Z" />
    </svg>
  );
}

export default function ContactSection({ lang }: { lang: Lang }) {
  const sectionText = contactSectionText[lang];

  return (
    <section
      id="section-contact"
      className="scroll-mt-20 py-12 lg:py-16 px-6 sm:px-10 relative"
    >
      <div className="theme-divider-line absolute top-0 left-0 h-px w-full" />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl font-bold tracking-tight theme-text sm:text-4xl">
            {sectionText.title}
          </h2>
        </div>

        {/* Bento Contact Card */}
        <div
          className="theme-card overflow-hidden rounded-3xl p-6 sm:p-8 lg:p-10 transition-all duration-300"
          style={{ boxShadow: "var(--theme-shadow)" }}
        >
          {/* Top Banner */}
          <div className="space-y-1.5 pb-6 sm:pb-8 border-b border-(--theme-border)">
            <h3 className="text-lg sm:text-xl font-bold theme-text">
              {lang === "th" ? "เริ่มต้นพูดคุยกับผม" : "Let's Connect"}
            </h3>
            <p className="text-xs sm:text-sm theme-text-body max-w-xl leading-relaxed">
              {sectionText.description}
            </p>
          </div>

          {/* Contact Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4 pt-6 sm:pt-8">
            {contacts.map((item) => {
              const Content = (
                <div className="flex items-center gap-3.5 w-full">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-(--theme-border) bg-(--theme-surface-soft-strong) theme-text shadow-xs">
                    <ContactIcon type={item.key} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[11px] font-semibold uppercase tracking-wider theme-text-muted">
                      {item.label[lang]}
                    </p>
                    <p
                      className="truncate text-xs sm:text-[13px] xl:text-sm font-medium theme-text"
                      title={item.value}
                    >
                      {item.value}
                    </p>
                  </div>
                  {item.href && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-4 w-4 shrink-0 theme-text-muted opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:theme-text"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </div>
              );

              return item.href ? (
                <a
                  key={item.value}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="theme-panel-hover group flex items-center rounded-2xl border border-(--theme-border) bg-(--theme-surface-soft) p-4 transition-all duration-200 hover:bg-(--theme-surface-soft-strong) focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                >
                  {Content}
                </a>
              ) : (
                <div
                  key={item.value}
                  className="flex items-center rounded-2xl border border-(--theme-border) bg-(--theme-surface-soft) p-4"
                >
                  {Content}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

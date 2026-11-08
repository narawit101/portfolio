"use client";

import { Lang } from "@/types";
import { experienceContent } from "@/data/experience";

export default function ExperienceSection({ lang }: { lang: Lang }) {
  const copy = experienceContent[lang];

  return (
    <section
      id="section-experience"
      className="scroll-mt-20 py-12 lg:py-14 px-6 sm:px-10 relative"
    >
      <div className="theme-divider-line absolute top-0 left-0 h-px w-full" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-(--theme-text) sm:text-4xl">
            {copy.title}
          </h2>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          {/* Work Experience Column */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-(--theme-border) bg-(--theme-surface-soft) theme-text">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </span>
              <h3 className="text-xl font-bold text-(--theme-text)">
                {copy.experienceTitle}
              </h3>
            </div>

            <div className="max-h-[500px] overflow-y-auto scrollbar-none py-2 pr-2 pl-1">
              <div className="relative border-l border-(--theme-border) ml-5 pl-6 space-y-6">
                {copy.experiences.map((exp, idx) => (
                  <div key={idx} className="relative group">
                    {/* Timeline dot */}
                    <span className="absolute -left-[31px] top-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 border-(--theme-text-muted) bg-(--theme-surface-solid) transition-all duration-300 group-hover:border-(--theme-text) group-hover:scale-110">
                      <span className="h-1.5 w-1.5 rounded-full bg-(--theme-text-muted) transition-colors duration-300 group-hover:bg-(--theme-text)" />
                    </span>

                    {/* Card */}
                    <div className="theme-panel-solid rounded-2xl p-5 relative overflow-hidden transition-all duration-300 hover:border-(--theme-border-strong) hover:-translate-y-0.5">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 mb-3">
                        <div>
                          <h4 className="font-bold text-(--theme-text)">
                            {exp.role}
                          </h4>
                          <p className="text-sm font-medium theme-text-muted mt-0.5">
                            {exp.company}
                          </p>
                        </div>
                        <span className="shrink-0 text-xs font-semibold theme-text-muted sm:text-right">
                          {exp.period}
                        </span>
                      </div>

                      <ul className="list-disc pl-4 space-y-1.5 theme-text-body text-xs sm:text-sm leading-relaxed">
                        {exp.responsibilities.map((resp, respIdx) => (
                          <li key={respIdx}>{resp}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Education Column */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-(--theme-border) bg-(--theme-surface-soft) theme-text">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 14l9-5-9-5-9 5 9 5z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0v6"
                  />
                </svg>
              </span>
              <h3 className="text-xl font-bold text-(--theme-text)">
                {copy.educationTitle}
              </h3>
            </div>

            <div className="max-h-[500px] overflow-y-auto scrollbar-none py-2 pr-2 pl-1">
              <div className="relative border-l border-(--theme-border) ml-5 pl-6 space-y-6">
                {copy.educations.map((edu, idx) => (
                  <div key={idx} className="relative group">
                    {/* Timeline dot */}
                    <span className="absolute -left-[31px] top-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 border-(--theme-text-muted) bg-(--theme-surface-solid) transition-all duration-300 group-hover:border-(--theme-text) group-hover:scale-110">
                      <span className="h-1.5 w-1.5 rounded-full bg-(--theme-text-muted) transition-colors duration-300 group-hover:bg-(--theme-text)" />
                    </span>

                    {/* Card */}
                    <div className="theme-panel-solid rounded-2xl p-5 relative overflow-hidden transition-all duration-300 hover:border-(--theme-border-strong) hover:-translate-y-0.5">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 mb-2">
                        <div>
                          <h4 className="font-bold text-(--theme-text)">
                            {edu.school}
                          </h4>
                          <p className="text-sm font-medium theme-text-muted mt-0.5">
                            {edu.degree}
                          </p>
                        </div>
                        <span className="shrink-0 text-xs font-semibold theme-text-muted sm:text-right">
                          {edu.period}
                        </span>
                      </div>

                      {edu.gpa && (
                        <span className="inline-flex items-center rounded-md border border-(--theme-border) bg-(--theme-surface-soft) px-2.5 py-1 text-xs font-medium theme-text-body">
                          {copy.gpaLabel}:{" "}
                          <strong className="ml-1 theme-text font-semibold">
                            {edu.gpa}
                          </strong>
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

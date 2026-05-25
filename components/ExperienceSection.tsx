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
      <div className="absolute inset-0 opacity-100 pointer-events-none">
        <div className="theme-divider-line absolute top-0 left-0 h-px w-full" />
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/2 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="mt-3 text-3xl font-bold text-(--theme-text) sm:text-4xl">
            {copy.title}
          </h2>
          <p className="text-xs font-semibold tracking-[0.3em] text-primary uppercase">
            {copy.subtitle}
          </p>
          <div className="mt-4 h-[3px] w-12 bg-primary rounded-full mx-auto" />
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          {/* Work Experience Column */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
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
                    <span className="absolute -left-[31px] top-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full border border-primary bg-(--theme-bg) ring-4 ring-primary/10 transition-transform duration-300 group-hover:scale-115"></span>

                    {/* Card */}
                    <div className="theme-panel-solid rounded-2xl p-5 relative overflow-hidden transition-all duration-300 hover:border-primary/30 hover:-translate-y-1">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 mb-3">
                        <div>
                          <h4 className="font-bold text-(--theme-text) transition-colors group-hover:text-primary">
                            {exp.role}
                          </h4>
                          <p className="text-sm font-semibold text-primary-400 mt-0.5">
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
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
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
                    <span className="absolute -left-[31px] top-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full border border-primary bg-(--theme-bg) ring-4 ring-primary/10 transition-transform duration-300 group-hover:scale-115"></span>

                    {/* Card */}
                    <div className="theme-panel-solid rounded-2xl p-5 relative overflow-hidden transition-all duration-300 hover:border-primary/30 hover:-translate-y-1">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 mb-2">
                        <div>
                          <h4 className="font-bold text-(--theme-text) transition-colors group-hover:text-primary">
                            {edu.school}
                          </h4>
                          <p className="text-sm font-semibold text-primary-400 mt-0.5">
                            {edu.degree}
                          </p>
                        </div>
                        <span className="shrink-0 text-xs font-semibold theme-text-muted sm:text-right">
                          {edu.period}
                        </span>
                      </div>

                      {edu.gpa && (
                        <span className="inline-flex items-center rounded-md bg-primary/10 border border-primary/20 px-2 py-0.5 text-xs font-medium text-primary">
                          {copy.gpaLabel}: {edu.gpa}
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

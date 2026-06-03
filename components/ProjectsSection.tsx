"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { Lang, Project } from "@/types";
import { projects, demoModalCopy } from "@/data/projects";
import { CarouselDotsNav, CarouselNav, PaginationNav } from "./Navigation";

const sectionCopy: Record<
  Lang,
  {
    title: string;
    subtitle: string;
    tags: string;
    details: string;
    closeAria: string;
  }
> = {
  th: {
    title: "โปรเจกต์",
    subtitle: "ผลงานที่ผ่านมา",
    tags: "แท็ก",
    details: "รายละเอียด",
    closeAria: "ปิดหน้าต่างโปรเจกต์",
  },
  en: {
    title: "Projects",
    subtitle: "Case Studies",
    tags: "Tags",
    details: "Details",
    closeAria: "Close project modal",
  },
};

function ProjectCard({
  project,
  onClick,
  lang,
  onDemoClick,
}: {
  project: Project;
  onClick: () => void;
  lang: Lang;
  onDemoClick: (project: Project) => void;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const hasMultiple = project.pictures.length > 1;

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onClick();
    }
  };

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((i) => (i === 0 ? project.pictures.length - 1 : i - 1));
  };
  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((i) => (i === project.pictures.length - 1 ? 0 : i + 1));
  };

  return (
    <div
      onClick={onClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      className="theme-panel-solid theme-panel-hover project-card group flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl transition-all duration-500 hover:-translate-y-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
    >
      <div className="relative h-52 w-full shrink-0 overflow-hidden bg-(--theme-bg) sm:h-56">
        <div
          className="flex h-full transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {project.pictures.map((pic, i) => (
            <img
              key={i}
              src={pic}
              alt={`${project.head[lang]} - ${i + 1}`}
              className="w-full h-full object-contain shrink-0"
            />
          ))}
        </div>

        {hasMultiple && (
          <>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-linear-to-t from-black/55 via-black/20 to-transparent" />
            <CarouselNav onPrev={prev} onNext={next} />
            <CarouselDotsNav
              currentIndex={currentIndex}
              total={project.pictures.length}
              onSelect={setCurrentIndex}
              className="sm:opacity-0 sm:group-hover:opacity-100"
            />
          </>
        )}
      </div>

      <div className="p-5 flex flex-col flex-1">
        {project.tags && project.tags.length > 0 && (
          <div className="mb-3">
            <h3 className="mb-2 line-clamp-1 text-base font-semibold leading-snug text-(--theme-text) transition-colors group-hover:text-primary">
              {project.head[lang]}
            </h3>
            <div
              className="flex items-center gap-2 overflow-hidden whitespace-nowrap"
              style={{
                maskImage:
                  "linear-gradient(to right, black 85%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(to right, black 85%, transparent 100%)",
              }}
            >
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="shrink-0 rounded-md border border-(--theme-border) bg-(--theme-surface-soft) px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-(--theme-text-body) transition-colors group-hover:border-primary/30 group-hover:bg-primary/10 group-hover:text-primary-400 sm:text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        <p className="theme-text-muted mt-auto mb-4 line-clamp-2 whitespace-pre-wrap text-sm leading-relaxed">
          {project.description[lang]}
        </p>

        {(project.githubUrl || project.demoUrl) && (
          <div className="mt-auto pt-4 border-t border-(--theme-border)/50 flex items-center gap-3 w-full">
            {project.demoUrl && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onDemoClick(project);
                }}
                className="cursor-pointer btn-demo-primary flex-1 flex items-center justify-center gap-1.5 rounded-lg py-2 text-xs font-semibold shadow-sm transition-all duration-200 hover:-translate-y-0.5"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                  />
                </svg>

                {lang === "th" ? "ลองใช้งาน Demo" : "Demo"}
              </button>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex-1 flex items-center justify-center gap-1.5 rounded-lg border-2 border-primary/30 bg-(--theme-surface-soft) py-2 text-xs font-semibold text-(--theme-text) transition-all duration-200 hover:border-primary/60 hover:bg-primary/5"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
                {lang === "th" ? "ดูโค้ดบน GitHub" : "Code"}
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

interface DemoCredentialsModalProps {
  project: Project;
  onClose: () => void;
  lang: Lang;
}

function DemoCredentialsModal({
  project,
  onClose,
  lang,
}: DemoCredentialsModalProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTabIdx, setActiveTabIdx] = useState(0);
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [showPasswords, setShowPasswords] = useState<Record<number, boolean>>(
    {},
  );
  const hideTimeoutsRef = useRef<Record<number, ReturnType<typeof setTimeout>>>(
    {},
  );
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isClosingRef = useRef(false);

  const requestClose = useCallback(() => {
    if (isClosingRef.current) return;
    isClosingRef.current = true;
    setIsVisible(false);
    closeTimeoutRef.current = setTimeout(() => {
      onClose();
    }, 300);
  }, [onClose]);

  useEffect(() => {
    const raf = window.requestAnimationFrame(() => setIsVisible(true));
    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") requestClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    const hideTimeouts = hideTimeoutsRef.current;
    const closeTimeout = closeTimeoutRef.current;

    return () => {
      window.cancelAnimationFrame(raf);
      if (closeTimeout) {
        clearTimeout(closeTimeout);
      }
      // Clear all hide timeouts on unmount
      Object.values(hideTimeouts).forEach(clearTimeout);
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [requestClose]);

  const handleCopy = (text: string, fieldId: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedField(fieldId);
      setTimeout(() => {
        setCopiedField(null);
      }, 3000);
    });
  };

  const handleShowAndCopyPassword = (
    index: number,
    password?: string,
    fieldId?: string,
  ) => {
    // Clear existing timeout if any
    if (hideTimeoutsRef.current[index]) {
      clearTimeout(hideTimeoutsRef.current[index]);
    }

    setShowPasswords((prev) => ({ ...prev, [index]: true }));

    if (password && fieldId) {
      handleCopy(password, fieldId);
    }

    // Auto hide after 3 seconds
    hideTimeoutsRef.current[index] = setTimeout(() => {
      setShowPasswords((prev) => ({ ...prev, [index]: false }));
      delete hideTimeoutsRef.current[index];
    }, 3000);
  };

  const text = demoModalCopy[lang];
  const activeTab = project.demoTabs?.[activeTabIdx];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      onClick={requestClose}
    >
      <div
        className={`absolute inset-0 backdrop-blur-md transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0"}`}
        style={{ backgroundColor: "rgb(var(--theme-bg-rgb) / 0.9)" }}
      />
      <div
        className={`theme-panel-solid relative flex max-h-[90vh] w-full max-w-lg flex-col overflow-hidden rounded-2xl transition-all duration-300 ${isVisible ? "translate-y-0 scale-100 opacity-100" : "translate-y-3 scale-[0.98] opacity-0"}`}
        style={{ boxShadow: "var(--theme-shadow-strong)" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-(--theme-border) px-5 py-4">
          <h3 className="text-xl font-bold text-(--theme-text)">
            {project.head[lang]}
          </h3>
          <button
            type="button"
            onClick={requestClose}
            className="cursor-pointer flex h-8 w-8 items-center justify-center rounded-full border border-(--theme-border) bg-(--theme-surface-soft) text-(--theme-text) transition-colors hover:border-primary hover:bg-primary hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="p-5 overflow-y-auto space-y-4">
          <p className="text-sm text-(--theme-text-body) leading-relaxed whitespace-pre-wrap">
            {project.demoInstruction
              ? project.demoInstruction[lang]
              : text.description}
          </p>

          {project.demoTabs && project.demoTabs.length > 1 && (
            <div className="flex border-b border-(--theme-border)/50 mb-2 gap-2">
              {project.demoTabs.map((tab, index) => {
                const isActive = index === activeTabIdx;
                return (
                  <button
                    key={index}
                    onClick={() => setActiveTabIdx(index)}
                    className={`flex-1 pb-3 text-sm font-semibold border-b-2 text-center transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "border-primary text-primary"
                        : "border-transparent text-(--theme-text-muted) hover:text-(--theme-text)"
                    }`}
                  >
                    {tab.name[lang]}
                  </button>
                );
              })}
            </div>
          )}

          {activeTab && (
            <div className="space-y-4 pt-2">
              {/* Credentials type */}
              {(activeTab.username || activeTab.password) && (
                <div className="rounded-xl border border-(--theme-border) bg-(--theme-surface-soft) p-4 space-y-3">
                  {activeTab.username && (
                    <div className="space-y-1">
                      <span className="text-[11px] text-(--theme-text-faint) block uppercase tracking-wider">
                        {text.username}
                      </span>
                      <div className="flex items-center gap-2">
                        <input
                          type="text"
                          readOnly
                          value={activeTab.username}
                          className="w-full rounded-md border border-(--theme-border) bg-(--theme-bg) px-3 py-1.5 text-xs text-(--theme-text) focus:outline-none"
                        />
                        <button
                          onClick={() => handleCopy(activeTab.username!, `user-${activeTabIdx}`)}
                          className="cursor-pointer flex shrink-0 items-center gap-1.5 rounded-md bg-primary/10 hover:bg-primary/20 border border-primary/20 px-3 py-1.5 text-xs font-semibold text-primary transition-all duration-200"
                        >
                          {copiedField === `user-${activeTabIdx}` ? (
                            <>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-3.5 w-3.5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <span>{text.copied}</span>
                            </>
                          ) : (
                            <>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-3.5 w-3.5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                                />
                              </svg>
                              <span>{text.copy}</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  )}

                  {activeTab.password && (
                    <div className="space-y-1">
                      <span className="text-[11px] text-(--theme-text-faint) block uppercase tracking-wider">
                        {text.password}
                      </span>
                      <div className="flex items-center gap-2">
                        <input
                          type={showPasswords[activeTabIdx] ? "text" : "password"}
                          readOnly
                          value={activeTab.password}
                          className="w-full rounded-md border border-(--theme-border) bg-(--theme-bg) px-3 py-1.5 text-xs text-(--theme-text) focus:outline-none"
                        />
                        <button
                          onClick={() =>
                            handleShowAndCopyPassword(
                              activeTabIdx,
                              activeTab.password,
                              `pass-${activeTabIdx}`,
                            )
                          }
                          className="cursor-pointer flex shrink-0 items-center gap-1.5 rounded-md bg-primary/10 hover:bg-primary/20 border border-primary/20 px-3 py-1.5 text-xs font-semibold text-primary transition-all duration-200"
                          title={`${text.show} & ${text.copy}`}
                        >
                          {copiedField === `pass-${activeTabIdx}` ? (
                            <>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-3.5 w-3.5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <span>{text.copied}</span>
                            </>
                          ) : (
                            <>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-3.5 w-3.5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                />
                              </svg>
                              <span>{text.show}</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Steps/Flowchart type */}
              {activeTab.steps && activeTab.steps.length > 0 && (
                <div className="space-y-3.5">
                  {activeTab.steps.map((step, stepIdx) => (
                    <div
                      key={stepIdx}
                      className="flex gap-4 rounded-xl border border-(--theme-border) bg-(--theme-surface-soft) p-4 transition-all duration-300 hover:border-primary/30 hover:bg-primary/5 hover:translate-x-0.5"
                    >
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary border border-primary/20">
                        {stepIdx + 1}
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-sm font-bold text-(--theme-text)">
                          {step.title[lang]}
                        </h4>
                        <p className="text-xs text-(--theme-text-body) leading-relaxed">
                          {step.detail[lang]}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        <div className="flex flex-col gap-2 p-5 border-t border-(--theme-border)">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-demo-primary flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold shadow-md transition-all duration-300 hover:-translate-y-0.5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
              {text.visitSite}
            </a>
          )}
          {/* <button
            type="button"
            onClick={requestClose}
            className="cursor-pointer flex w-full items-center justify-center rounded-xl border border-(--theme-border) bg-(--theme-surface-soft) px-4 py-2.5 text-sm font-semibold text-(--theme-text) transition-colors hover:border-primary/50 hover:bg-primary/5"
          >
            {/* {text.close} */}
          {/* </button> */}
        </div>
      </div>
    </div>
  );
}

function ProjectModal({
  project,
  onClose,
  lang,
  onDemoClick,
}: {
  project: Project;
  onClose: () => void;
  lang: Lang;
  onDemoClick: (project: Project) => void;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const hasMultiple = project.pictures.length > 1;
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isClosingRef = useRef(false);

  const requestClose = useCallback(() => {
    if (isClosingRef.current) return;
    isClosingRef.current = true;
    setIsVisible(false);
    closeTimeoutRef.current = setTimeout(() => {
      onClose();
    }, 300);
  }, [onClose]);

  useEffect(() => {
    const raf = window.requestAnimationFrame(() => setIsVisible(true));
    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") requestClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.cancelAnimationFrame(raf);
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [requestClose]);

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((i) => (i === 0 ? project.pictures.length - 1 : i - 1));
  };
  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((i) => (i === project.pictures.length - 1 ? 0 : i + 1));
  };

  const copy = sectionCopy[lang];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      onClick={requestClose}
    >
      <div
        className={`absolute inset-0 backdrop-blur-md transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0"}`}
        style={{ backgroundColor: "rgb(var(--theme-bg-rgb) / 0.9)" }}
      />
      <div
        className={`theme-panel-solid relative flex max-h-[90vh] w-full max-w-5xl flex-col overflow-x-hidden overflow-y-auto rounded-2xl transition-all duration-300 ${isVisible ? "translate-y-0 scale-100 opacity-100" : "translate-y-3 scale-[0.98] opacity-0"}`}
        style={{ boxShadow: "var(--theme-shadow-strong)" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="sticky top-0 z-20 border-b border-(--theme-border) backdrop-blur-md"
          style={{ backgroundColor: "rgb(var(--theme-bg-rgb) / 0.84)" }}
        >
          <div className="flex items-center justify-between gap-3 px-4 sm:px-6 py-3">
            <div className="min-w-0">
              <p className="mt-1 truncate text-2xl font-semibold text-(--theme-text)">
                {project.head[lang]}
              </p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={requestClose}
                aria-label={copy.closeAria}
                className="cursor-pointer flex h-8 w-8 items-center justify-center rounded-full border border-(--theme-border) bg-(--theme-surface-soft) text-(--theme-text) transition-colors hover:border-primary hover:bg-primary hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="group relative h-64 w-full shrink-0 bg-(--theme-bg) sm:h-80 md:h-[400px]">
          <div
            className="flex h-full transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {project.pictures.map((pic, i) => (
              <img
                key={i}
                src={pic}
                alt={`${project.head[lang]} - ${i + 1}`}
                className="w-full h-full object-contain shrink-0"
              />
            ))}
          </div>

          {hasMultiple && (
            <>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-linear-to-t from-black/55 via-black/20 to-transparent" />
              <CarouselNav onPrev={prev} onNext={next} />
              <CarouselDotsNav
                currentIndex={currentIndex}
                total={project.pictures.length}
                onSelect={setCurrentIndex}
                showCounter={true}
              />
            </>
          )}
        </div>

        <div className="p-6 sm:p-8 flex flex-col">
          {project.tags && project.tags.length > 0 && (
            <div className="mb-4">
              <p className="mb-2 font-semibold tracking-[0.15em] uppercase text-primary">
                {copy.tags}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-xs font-semibold uppercase tracking-wider rounded-md border border-primary/30 bg-primary/10 text-primary-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
          <p className="mb-2 text-2xl font-semibold uppercase text-(--theme-text)">
            {copy.details}
          </p>

          <div className="theme-text-body space-y-4 whitespace-pre-wrap text-sm leading-relaxed sm:text-base mb-6">
            <p>{project.description[lang]}</p>
          </div>

          {/* Action buttons (GitHub & Demo) */}
          {(project.githubUrl || project.demoUrl) && (
            <div className="mt-4 flex flex-col sm:flex-row gap-4 border-t border-(--theme-border) pt-6">
              {project.demoUrl && (
                <button
                  onClick={() => onDemoClick(project)}
                  className="cursor-pointer btn-demo-primary flex items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-semibold shadow-md transition-all duration-300 hover:-translate-y-0.5 flex-1"
                >
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
                      d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                    />
                  </svg>
                  {lang === "th" ? "ลองใช้งาน Demo" : "Demo"}
                </button>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl border-2 border-primary/30 bg-(--theme-surface-soft) px-5 py-3.5 text-sm font-semibold text-(--theme-text) transition-all duration-300 hover:border-primary/60 hover:bg-primary/5 hover:-translate-y-0.5 flex-1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                  {lang === "th" ? "ดูโค้ดบน GitHub" : " Code"}
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const ITEMS_PER_PAGE = 6;

export default function ProjectsSection({ lang }: { lang: Lang }) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [demoProject, setDemoProject] = useState<Project | null>(null);
  const [page, setPage] = useState(0);

  const copy = sectionCopy[lang];

  const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE);
  const lastPage = Math.max(totalPages - 1, 0);
  const clampPage = (value: number) => Math.max(0, Math.min(lastPage, value));
  const currentPage = clampPage(page);
  const visibleProjects = projects.slice(
    currentPage * ITEMS_PER_PAGE,
    (currentPage + 1) * ITEMS_PER_PAGE,
  );
  const hasPagination = totalPages > 1;

  const handleDemoClick = (project: Project) => {
    const hasTabs =
      project.demoTabs && project.demoTabs.length > 0;
    const hasInstructions = !!project.demoInstruction;
    if (hasTabs || hasInstructions) {
      setDemoProject(project);
    } else if (project.demoUrl) {
      window.open(project.demoUrl, "_blank");
    }
  };

  return (
    <section
      id="section-project"
      className="scroll-mt-20 py-10 sm:py-12 px-6 sm:px-10 relative"
    >
      <div className="theme-divider-line absolute top-0 left-0 h-px w-full" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/3 rounded-full blur-[100px]" />
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="mt-3 text-3xl font-bold text-(--theme-text) sm:text-4xl">
            {copy.title}
          </h2>
          <p className="text-xs font-semibold tracking-[0.3em] text-primary uppercase">
            {copy.subtitle}
          </p>
          <div className="mt-4 h-[3px] w-12 bg-primary rounded-full mx-auto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {visibleProjects.map((project, index) => (
            <ProjectCard
              key={project.id || index}
              project={project}
              onClick={() => setSelectedProject(project)}
              lang={lang}
              onDemoClick={handleDemoClick}
            />
          ))}
        </div>

        {hasPagination && (
          <PaginationNav
            currentPage={currentPage}
            totalPages={totalPages}
            onPrev={() => setPage((prev) => clampPage(prev - 1))}
            onNext={() => setPage((prev) => clampPage(prev + 1))}
            layout="center"
          />
        )}
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          lang={lang}
          onDemoClick={handleDemoClick}
        />
      )}

      {demoProject && (
        <DemoCredentialsModal
          project={demoProject}
          onClose={() => setDemoProject(null)}
          lang={lang}
        />
      )}
    </section>
  );
}

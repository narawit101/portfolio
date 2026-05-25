"use client";

import { useState } from "react";
import { techStackCategories } from "@/data/techStack";
import { Lang, TechStackCategory } from "@/types";
import { TechStackItem } from "@/types";

import { PaginationNav } from "./Navigation";

const sectionCopy: Record<Lang, { title: string; subtitle: string }> = {
  th: {
    title: "ทักษะ",
    subtitle: "ความสามารถ",
  },
  en: {
    title: "Tech Stack",
    subtitle: "Capabilities",
  },
};

const TechStackTile = ({ item }: { item: TechStackItem }) => (
  <div className="theme-panel theme-panel-hover flex flex-col items-center gap-2 rounded-2xl px-3 py-4 text-center transition-all">
    <div className="theme-soft flex h-12 w-12 items-center justify-center rounded-full">
      <img src={item.img} alt={item.name} className="w-8 h-8 object-contain" />
    </div>
    <span className="text-[11px] font-semibold tracking-wide text-(--theme-text)">
      {item.name}
    </span>
  </div>
);

const ITEMS_PER_PAGE = 8;

const TechStackCategoryCard = ({
  category,
  lang,
}: {
  category: TechStackCategory;
  lang: Lang;
}) => {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(category.items.length / ITEMS_PER_PAGE);
  const lastPage = Math.max(totalPages - 1, 0);
  const clampPage = (value: number) => Math.max(0, Math.min(lastPage, value));
  const currentPage = clampPage(page);
  const visibleItems = category.items.slice(
    currentPage * ITEMS_PER_PAGE,
    (currentPage + 1) * ITEMS_PER_PAGE,
  );
  const hasPagination = totalPages > 1;

  return (
    <article className="theme-card theme-card-hover relative overflow-hidden rounded-3xl transition-transform duration-500 hover:-translate-y-2">
      <div
        className={`pointer-events-none absolute inset-0 bg-linear-to-br ${category.accent} opacity-20 blur-[100px]`}
      />
      <div className="relative p-6 sm:p-8 space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-(--theme-text) text-lg uppercase tracking-[0.15em] font-bold">
            {category.title[lang]}
          </span>
        </div>
        <p className="theme-text-body text-sm leading-relaxed">
          {category.description[lang]}
        </p>
        <div className="grid grid-cols-3 gap-3 sm:grid-cols-4">
          {visibleItems.map((item) => (
            <TechStackTile
              key={`${category.title.en}-${item.name}-${currentPage}`}
              item={item}
            />
          ))}
        </div>
        {hasPagination && (
          <PaginationNav
            currentPage={currentPage}
            totalPages={totalPages}
            onPrev={() => setPage((prev) => clampPage(prev - 1))}
            onNext={() => setPage((prev) => clampPage(prev + 1))}
            layout="end"
          />
        )}
      </div>
    </article>
  );
};

export default function TechStackSection({ lang }: { lang: Lang }) {
  const copy = sectionCopy[lang];

  return (
    <section
      id="section-stack"
      className="scroll-mt-20 py-12 lg:py-14 px-6 sm:px-10 relative"
    >
      <div className="absolute inset-0 opacity-100">
        <div className="theme-divider-line absolute top-0 left-0 h-px w-full" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/3 rounded-full blur-[100px]" />
      </div>

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

        <div className="grid gap-6 md:grid-cols-2">
          {techStackCategories.map((category) => (
            <TechStackCategoryCard
              key={category.title.en}
              category={category}
              lang={lang}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

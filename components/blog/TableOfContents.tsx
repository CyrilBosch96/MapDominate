"use client";

import { useEffect, useRef, useState } from "react";
import type { Heading } from "@/lib/posts";

interface TableOfContentsProps {
  headings: Heading[];
}

export default function TableOfContents({ headings }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (headings.length === 0) return;

    const ids = headings.map((h) => h.id);

    observerRef.current = new IntersectionObserver(
      (entries) => {
        // Find the topmost visible heading
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "0px 0px -60% 0px", threshold: 0 }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  const tocContent = (
    <ol className="toc-list">
      {headings.map((h) => (
        <li
          key={h.id}
          className={`toc-item toc-level-${h.level}${activeId === h.id ? " toc-active" : ""}`}
        >
          <a href={`#${h.id}`} className="toc-link">
            {h.text}
          </a>
        </li>
      ))}
    </ol>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="toc-sidebar" aria-label="Table of contents">
        <p className="toc-heading">On this page</p>
        {tocContent}
      </aside>

      {/* Mobile accordion */}
      <details className="toc-mobile">
        <summary className="toc-mobile-summary">On this page</summary>
        <nav aria-label="Table of contents">{tocContent}</nav>
      </details>
    </>
  );
}

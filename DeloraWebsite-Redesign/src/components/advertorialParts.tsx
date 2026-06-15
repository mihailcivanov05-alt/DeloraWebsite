"use client";

import React from "react";
import Link from "next/link";
import Button from "./Button";

/**
 * Shared building blocks for the cold-traffic advertorial landing pages
 * (`/ipl-vs-salon`, `/ipl-vs-traditional`, `/ipl-vs-devices`).
 *
 * All advertorials share one stylesheet (`Advertorial.css`) and the Delora
 * brand DNA (amethyst/lavender, Cormorant headings, soft lavender-gradient
 * placeholders). Keep visual scaffolding here so the family can't drift.
 *
 * Isolated-build link targets (the spec's `/products/delora` + Shopify
 * `/pages/...` don't exist here):
 *   device → /#product-hero (PDP buy box)
 *   quiz   → /#consultation (SkinMatchQuiz)
 */

export const DEVICE_HREF = "/#product-hero";
export const QUIZ_HREF = "/#consultation";

/** Styled, labelled empty placeholder for a not-yet-existing visual asset. */
export function Placeholder({
  id,
  label,
  minH,
  maxW,
  className = "",
}: {
  id: string;
  label: string;
  minH: number;
  maxW?: number;
  className?: string;
}) {
  const style: React.CSSProperties = { ["--ph-h" as string]: `${minH}px` } as React.CSSProperties;
  if (maxW) {
    style.maxWidth = maxW;
    style.marginLeft = "auto";
    style.marginRight = "auto";
  }
  return (
    <div id={id} className={`visual-placeholder ${className}`} style={style}>
      <span className="label">{label}</span>
    </div>
  );
}

/** Minimal sticky header with a persistent device CTA (no main nav on landing pages). */
export function AdvHeader() {
  return (
    <header className="adv-header">
      <div className="adv-headerInner">
        <Link href="/" className="adv-logo">
          <img src="/logo.png" alt="Delora" className="adv-logoImg" />
        </Link>
        <Button href={DEVICE_HREF} variant="primary" size="sm">
          Виж устройството
        </Button>
      </div>
    </header>
  );
}

/** Standard trust-badge strip (text labels, empty icon slots). */
export const TRUST_BADGES = [
  "Плащане при доставка",
  "Безплатна доставка",
  "90 дни гаранция",
  "CE маркирано",
];

export function TrustStrip() {
  return (
    <ul id="visual-trust" className="adv-trust">
      {TRUST_BADGES.map((b, i) => (
        <li key={i} className="adv-trustBadge">
          <span className="adv-trustIcon" aria-hidden="true" />
          <span>{b}</span>
        </li>
      ))}
    </ul>
  );
}

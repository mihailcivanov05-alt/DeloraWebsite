# SOP: Dynamic Social Proof & UGC Engine

## Goal
To build a high-trust environment for Delora by dynamically injecting social proof, verified reviews, and real-time trust markers into the user's path.

## Core Principles
1.  **Authenticity First**: Prioritize User Generated Content (UGC) over polished stock photography.
2.  **Strategic Placement**: Inject social proof at high-friction points (near CTAs, checkout redirects).
3.  **Visual Consistency**: Ensure trust markers match the Amethyst Luxury aesthetic.

## Component Features
- **UGC Reel**: A horizontally scrolling carousel of "real life" photos and short video clips.
- **Trust Badges**: Clean, minimalist icons for "FDA Cleared," "90-Day Money Back," and "Free Shipping."
- **Review Summary**: A high-level aggregate of verified 5-star reviews.

## Technical Structure
- **Component**: `SocialProof.tsx` and `SocialProof.css`.
- **Data Shape**: An array of objects containing `source`, `type`, `username`, and `content`.
- **Animation**: Subtle entry reveals to catch the eye without being intrusive.

## Implementation Steps
1.  Create `SocialProof.tsx` and `SocialProof.css`.
2.  Define the `UGC_DATA` set.
3.  Implement a marquee or carousel for the UGC photos.
4.  Integrate into the main page above the footer and below the quiz.

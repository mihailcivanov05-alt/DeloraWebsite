# SOP: Shopify Headless Integration

## Goal
To establish a robust, high-performance communication loop between the Next.js frontend and the Shopify Storefront API.

## Core Principles
1.  **Server-First Fetching**: Use Next.js Server Components for initial product data fetching to ensure maximum SEO and LCP performance.
2.  **Stateful Cart**: Use a client-side hook (`useCart`) to manage the cart state, persisting to `localStorage` and syncing with the Shopify Cart API.
3.  **Secure Communication**: All API calls must go through the `shopifyFetch` utility using the `SHOPIFY_STOREFRONT_ACCESS_TOKEN`.

## Data Schema (Review)
Refer to `gemini.md` for the Product and Cart JSON schemas.

## Components
- `src/lib/shopify.ts`: The core fetch utility.
- `src/hooks/useCart.ts`: Manages adding/removing items and checkout URL generation.
- `src/components/ProductCard.tsx`: Displays live product data (Title, Price, Images).
- `src/components/CartDrawer.tsx`: The sliding UI for cart management.

## Implementation Steps
1.  Verify the `shopifyFetch` utility.
2.  Create the `useCart` hook for client-side state.
3.  Build the `ProductCard` and `ProductGrid` components.
4.  Integrate live data into the homepage "Radiance Reveal" flow.

# Delora Website - Project Context & Next Steps

Welcome back! If you are starting a new AI session on this laptop, you can provide this file to the AI to instantly bring it up to speed on the project state.

## Current State of the Project
- **Framework:** Next.js 14+ (App Router), React 19.
- **Styling:** Vanilla CSS modules and `globals.css` with a high-end, premium aesthetic. Mobile-first design including safe-area insets for iPhone 17 (Dynamic Island).
- **Deployment:** Live on Vercel at `https://delora-website-nejx.vercel.app/` (synced to the `main` branch).
- **Architecture:** We have successfully transitioned from a single landing page to a multi-page e-commerce architecture.
- **Completed Pages:** 
  - `/` (Home)
  - `/science` (The Science)
  - `/about` (Our Story)
  - `/faq` (Support)
  - `/shipping`, `/privacy`, `/terms` (Policies)
- **Navigation:** Fully refactored `Navbar` and `Footer` components that use absolute routing to ensure seamless cross-page navigation. Both support multi-language toggles (English/Bulgarian).

## Immediate Next Steps
When you are ready to continue, ask your AI assistant to start with one of the following:

1. **Before & After Gallery (Social Proof):** 
   - *Goal:* Build a high-trust comparison matrix/gallery on the homepage to drive conversions.
   - *Component:* `SocialProof.tsx` (already drafted but needs expansion and real logic).
2. **Shopify API Integration:**
   - *Goal:* Connect the existing `CartProvider` and `useCart` hooks to the real Shopify Storefront API.
   - *Prerequisites:* Ensure `SHOPIFY_STORE_DOMAIN` and `SHOPIFY_STOREFRONT_ACCESS_TOKEN` are configured.
3. **Product Catalog Mapping:**
   - *Goal:* Replace static product data with live inventory pulled from Shopify.

## Notes for the AI
- **Strict ESLint:** Vercel is configured with strict Next.js rules. All text node quotes (like `'` and `"`) MUST be escaped (e.g., `&apos;`, `&quot;`) to prevent build failures.
- **Branching:** Work directly on the `main` branch. 
- **Start Command:** Run `npm run dev` to start the local environment.

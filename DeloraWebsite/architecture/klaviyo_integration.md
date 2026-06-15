# SOP: Klaviyo Integration

## Goal
To capture emails for leads and track transactional events for retargeting and automated flows.

## Inputs
- `KLAVIYO_PUBLIC_API_KEY`
- `KLAVIYO_PRIVATE_API_KEY`

## Implementation Layers

### 1. Client-Side (Behavioral)
- Inject the Klaviyo script using `next/script` in `RootLayout`.
- Track "Active on Site" automatically.
- Identify users after they submit an email.

### 2. Server-Side (Transactional/Secure)
- Create a Next.js API route `/api/subscribe`.
- Use the Klaviyo API to add emails to a specific List ID.
- Trigger "Started Checkout" and "Placed Order" events from the server to ensure 100% capture.

## Data Schema
- **Payload**: `{ "email": "string", "properties": { "firstName": "string" } }`

## Success Criteria
1. User enters email in footer/popup.
2. User is added to Klaviyo list.
3. User receives "Welcome" flow email (configured in Klaviyo).

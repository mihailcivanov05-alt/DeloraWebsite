# SOP: Immersive Scrollytelling (Radiance Reveal)

## Goal
To build a high-impact, visual storytelling flow that guides the user through the key benefits of the Delora IPL device as they scroll.

## Core Principles
1.  **Narrative Arc**: Start with the "Problem" (traditional hair removal) and move towards the "Solution" (Delora Radiance).
2.  **Smooth Transitions**: Use `framer-motion` for physics-based, smooth entrance and exit animations.
3.  **Visual Anchors**: Use fixed product visuals on one side with scrolling text/feature cards on the other.

## Technical Structure
- **Container**: A large scroll-height section (e.g., `300vh`).
- **Visuals**: A sticky container that holds the product imagery.
- **Narrative**: Scrolling text blocks that trigger visual changes in the sticky container.

## Key Scenes
1.  **The Cooling Core**: Highlight the Sapphire Ice-cooling technology with a "cool" visual glow.
2.  **The Precision Flash**: Show the speed and intensity of the flash.
3.  **The Skin Sensor**: Demonstrate the device's intelligence in adapting to skin tones.

## Implementation Steps
1.  Create `Scrollytelling.tsx` and `Scrollytelling.css`.
2.  Use `useScroll` and `useTransform` from `framer-motion` to link scroll position to visual state.
3.  Integrate into the main page between the Hero and the Quiz.

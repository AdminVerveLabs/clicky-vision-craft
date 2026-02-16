

# Move "Meet the Chef" Section Above "Choose Your Experience"

## Overview
Reorder the sections on the homepage so "Meet the Chef" appears directly after the Hero, before "Choose Your Experience."

## Current order
1. Hero
2. Choose Your Experience (lines 75-110)
3. Meet the Chef (lines 112-137)
4. Testimonials
5. How It Works
6. Newsletter + Footer

## New order
1. Hero
2. **Meet the Chef** (moved up)
3. **Choose Your Experience** (moved down)
4. Testimonials
5. How It Works
6. Newsletter + Footer

## Technical Detail

### File: `src/pages/HomePage.tsx`
- Cut the "About Joey Quick" section (lines 112-137) and paste it between the Hero section (ends at line 73) and the "Two-path section" (starts at line 75)
- No content changes -- just reordering the two `<section>` blocks


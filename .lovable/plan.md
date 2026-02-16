

# Move and Compact "How It Works" Section

## Overview
Move the "Three steps to a great time" section from its current position (after Testimonials) to sit between "Meet the Chef" and "Choose Your Experience", and reduce its vertical height by roughly two-thirds.

## New Section Order
1. Hero
2. Meet the Chef
3. **How It Works (moved here, compacted)**
4. Choose Your Experience
5. Testimonials
6. Newsletter + Footer

## Changes (File: `src/pages/HomePage.tsx`)

### 1. Remove the "How it Works" section from its current location (lines 154-178)

### 2. Insert a compacted version between "Meet the Chef" (ends line 100) and "Choose Your Experience" (starts line 102)

### 3. Reduce height
- Change section padding from `py-24` to `py-12`
- Reduce heading margin-bottom from `mb-16` to `mb-8`
- Shrink the icon circles from `w-20 h-20` to `w-14 h-14` with smaller emoji text (`text-2xl` instead of `text-4xl`)
- Shrink step badges from `w-7 h-7` to `w-6 h-6`
- Reduce heading size from `text-[38px]` to `text-[28px]`
- Reduce step title size from `text-[22px]` to `text-[18px]`
- Tighten gap between columns from `gap-10` to `gap-8`

These sizing reductions will bring the section height down to roughly one-third of its original size while keeping all content intact.


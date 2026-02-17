

# Add Image Collage to Classes & Events Hero

## Overview
Add a scattered arrangement of small food/class photos behind and around the centered hero text, creating visual interest without overwhelming the copy.

## Approach
Place 4-6 small circular or rounded-rectangle images at various positions around the hero text using absolute positioning. Images will have slight rotations, soft shadows, and reduced opacity so the text remains the focal point.

## Technical Details (File: `src/pages/ClassesPage.tsx`)

### 1. Import existing images
Use the available assets: `public-classes.png`, `private-classes.jpg`, `chef-joey-kitchen.jpg`, `team-building.png`.

### 2. Add positioned image elements
Inside the hero `<section>`, add 5-6 absolutely positioned `<img>` elements scattered around the text:
- Top-left area: one image, rotated -6deg
- Top-right area: one image, rotated 4deg  
- Bottom-left: one image, rotated 3deg
- Bottom-right: one image, rotated -5deg
- Far left/right edges: smaller accent images

Each image will be:
- `w-[140px] h-[140px]` to `w-[180px] h-[180px]` (varying sizes)
- `rounded-2xl` with `object-cover`
- `opacity-80` with `shadow-lg`
- Slight rotation via inline `transform: rotate()`
- `hidden md:block` so they hide on mobile where space is tight

### 3. Adjust hero padding
Increase the hero section's minimum height slightly to give room for the collage without crowding the text. Change `pb-20` to `pb-24`.

### 4. Z-index layering
- Collage images: `z-0`
- Text content: `z-10` (add `relative z-10` to the text wrapper)

This keeps all existing text and buttons fully readable on top of the decorative images.


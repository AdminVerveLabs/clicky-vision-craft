

# Replace Collage with Vertical Split Hero

## Overview
Remove the scattered collage images and replace them with a clean split layout -- text on the left, a large hero image on the right -- matching the pattern used on the homepage.

## Changes (File: `src/pages/ClassesPage.tsx`)

### 1. Remove collage images
Delete all 6 absolutely positioned collage `<img>` elements (lines 153-159).

### 2. Restructure hero layout to a two-column grid
Replace the single centered text block with a `grid grid-cols-1 md:grid-cols-2` layout:
- **Left column**: SectionTag, heading, paragraph, and CTA buttons (left-aligned instead of centered)
- **Right column**: A large rounded image (using one of the existing imports, e.g. `publicClassesImg` or `chefKitchenImg`) with `rounded-2xl object-cover shadow-xl`

### 3. Responsive behavior
- On mobile: single column, text first, image below
- On desktop (md+): side-by-side split with `items-center` vertical alignment and a `gap-12` between columns

### 4. Clean up unused imports
Remove imports for images no longer used (keep only the one chosen for the hero). The remaining imports (`privateClassesImg`, `teamBuildingImg`, etc.) may still be used elsewhere in the file, so only remove those that are truly unused.

### 5. Adjust text alignment
Change the text wrapper from `text-center` to `text-left` (on md+) so it reads naturally in a split layout, keeping `text-center` on mobile.


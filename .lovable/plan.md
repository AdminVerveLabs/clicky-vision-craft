

# Add Photos to "Choose Your Experience" Cards on Homepage

## Overview
Replace the placeholder camera emoji icons in the three experience cards with the uploaded photos.

## Image Assignments
- **Public Classes** card: `image-4.png` (girl with hands up in kitchen)
- **Team Building** card: `image-5.png` (people seated at table)
- **Private Classes** card: `Kim_Stubbs_with_Chef_Joey-116.jpg` (large group photo)

## Steps

1. **Copy the 3 uploaded images** into `src/assets/` with descriptive filenames:
   - `user-uploads://image-4.png` -> `src/assets/public-classes.png`
   - `user-uploads://image-5.png` -> `src/assets/team-building.png`
   - `user-uploads://Kim_Stubbs_with_Chef_Joey-116.jpg` -> `src/assets/private-classes.jpg`

2. **Update `src/pages/HomePage.tsx`**:
   - Add 3 image imports at the top of the file
   - Add an `image` property to each card object in the array (lines 84-86)
   - Replace the placeholder `<span>` camera emoji (line 90) with an `<img>` tag using `object-cover` to fill the 280px container

### Technical Detail
The card image area (line 89) currently shows a gray background with a camera emoji. It will be replaced with:
```tsx
<img src={card.image} alt={card.title} className="w-full h-full object-cover" />
```
The tag badge overlay stays positioned absolutely on top of the image.


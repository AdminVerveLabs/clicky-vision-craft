

# Add Chef Joey Photo to "Meet the Chef" Section

## Overview
Replace the emoji placeholder in the "Meet the Chef" section on the homepage with the uploaded photo of Chef Joey cooking in the kitchen.

## Steps

1. **Copy the uploaded image** into `src/assets/`:
   - `user-uploads://YWCA_-_KITCHEN_-_006.jpg` -> `src/assets/chef-joey-kitchen.jpg`

2. **Update `src/pages/HomePage.tsx`**:
   - Import the new image
   - Replace the current placeholder div (emoji + gradient background, around line 106) with an `<img>` tag using `object-cover`

### Current placeholder code being replaced:
```tsx
<div className="aspect-square rounded-3xl bg-gradient-to-br from-purple-pale to-orange-pale flex items-center justify-center relative overflow-hidden">
  <span className="text-[80px]">👨‍🍳</span>
  <p className="absolute bottom-5 font-sans text-[13px] text-gray">[Photo: Joey in his element]</p>
</div>
```

### Replaced with:
```tsx
<div className="aspect-square rounded-3xl relative overflow-hidden">
  <img src={chefJoeyKitchen} alt="Chef Joey cooking in kitchen" className="w-full h-full object-cover" />
</div>
```


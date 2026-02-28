

## Update "Choose Your Experience" Cards

### File: `src/pages/HomePage.tsx`

**1. Rename "Private Classes" card to "Private Events" (line 157)**
- Title: "Private Classes" → "Private Events"
- Tag: "PRIVATE" (keep)
- Category: "CUSTOM" (keep)
- Description: Update to focus on events/celebrations rather than classes
- Link: update to `/classes/private-events`

**2. Add format badges to each card (lines 158-174)**
- Add a `formats` array to each card data object: `["In-Person", "Virtual"]`
- Render as small pills/badges between the description and "View Details" link
- Style: small rounded pills with subtle background (e.g., `bg-gray-light text-dark text-[11px] font-semibold px-2.5 py-1 rounded-full`)

### Card data changes:
```
Public Classes → formats: ["In-Person", "Virtual"]
Team Building → formats: ["In-Person", "Virtual"]  
Private Events → title change, desc: "Birthdays, anniversaries, celebrations—we customize the menu, the vibe, and the whole experience. You show up ready to celebrate.", formats: ["In-Person", "Virtual"]
```


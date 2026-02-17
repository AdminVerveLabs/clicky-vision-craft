

# Replace Emoji Placeholders with Real Photos on All Sub-Segment Pages

## Overview
All 14 sub-segment pages currently show emoji placeholders in their hero sections. Each will get a real photograph from the existing asset library, using the same `aspect-[4/3] rounded-3xl overflow-hidden` pattern already established on the About and main landing pages.

## Photo Assignments

### Classes & Events (6 pages)
| Page | File | Photo |
|------|------|-------|
| Open Classes | `OpenClassesPage.tsx` | `chef-joey-38.jpg` |
| Private Events | `PrivateEventsPage.tsx` | `private-classes.jpg` |
| Special Occasions | `SpecialOccasionsPage.tsx` | `chef-joey-101.jpg` |
| Friends | `FriendsPage.tsx` | `chef-joey-61.jpg` |
| Kids Party | `KidsPartyPage.tsx` | `chef-joey-83.jpg` |
| Catering | `CateringPage.tsx` | `chef-joey-106.jpg` |

### Teams & Corporate (7 pages)
| Page | File | Photo |
|------|------|-------|
| Team Events | `TeamEventsPage.tsx` | `team-building.png` |
| All Hands | `AllHandsPage.tsx` | `ywca-kitchen-074.jpg` |
| Onboarding | `OnboardingPage.tsx` | `chef-joey-79.jpg` |
| Client Entertainment | `ClientEntertainmentPage.tsx` | `chef-joey-113.jpg` |
| Holiday | `HolidayPage.tsx` | `chef-joey-114.jpg` |
| Custom Experiences | `CustomExperiencesPage.tsx` | `chef-joey-85.jpg` |
| Catering (Teams) | `CateringTeamsPage.tsx` | `ywca-kitchen-056.jpg` |

### Other
| Page | File | Photo |
|------|------|-------|
| Team Building | `TeamBuildingPage.tsx` | `chef-joey-66.jpg` |

## Change per File (identical pattern, repeated 14 times)

For each page:
1. Add an import for the assigned photo at the top
2. Replace the gradient placeholder div:

**Before:**
```tsx
<div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-purple-pale to-orange/10 flex items-center justify-center">
  <span className="text-7xl">EMOJI</span>
</div>
```

**After:**
```tsx
<div className="aspect-[4/3] rounded-3xl overflow-hidden">
  <img src={heroImg} alt="Page title" className="w-full h-full object-cover" />
</div>
```

## Files Modified
- `src/pages/classes/OpenClassesPage.tsx`
- `src/pages/classes/PrivateEventsPage.tsx`
- `src/pages/classes/SpecialOccasionsPage.tsx`
- `src/pages/classes/FriendsPage.tsx`
- `src/pages/classes/KidsPartyPage.tsx`
- `src/pages/classes/CateringPage.tsx`
- `src/pages/teams/TeamEventsPage.tsx`
- `src/pages/teams/AllHandsPage.tsx`
- `src/pages/teams/OnboardingPage.tsx`
- `src/pages/teams/ClientEntertainmentPage.tsx`
- `src/pages/teams/HolidayPage.tsx`
- `src/pages/teams/CustomExperiencesPage.tsx`
- `src/pages/teams/CateringTeamsPage.tsx`
- `src/pages/TeamBuildingPage.tsx`

No new files created. No dependencies added.

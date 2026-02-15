

# Create Sub-Segment Pages and Update Routing

## Overview
Create individual pages for each dropdown sub-item under "Classes & Events" and "For Teams", then update the nav links and landing pages to route to them.

## New Pages to Create (13 total)

### Classes & Events sub-pages (6)
Each page follows the pattern of the existing `TeamBuildingPage` -- breadcrumb, hero with title/description/CTAs, details section, and footer.

| Page | Route | File |
|------|-------|------|
| Open Classes | `/classes/open-classes` | `src/pages/classes/OpenClassesPage.tsx` |
| Private Events | `/classes/private-events` | `src/pages/classes/PrivateEventsPage.tsx` |
| Special Occasions | `/classes/special-occasions` | `src/pages/classes/SpecialOccasionsPage.tsx` |
| Friends | `/classes/friends` | `src/pages/classes/FriendsPage.tsx` |
| Kids Party | `/classes/kids-party` | `src/pages/classes/KidsPartyPage.tsx` |
| Catering | `/classes/catering` | `src/pages/classes/CateringPage.tsx` |

### For Teams sub-pages (7)
| Page | Route | File |
|------|-------|------|
| Team Events | `/teams/team-events` | `src/pages/teams/TeamEventsPage.tsx` |
| All Hands & Townhalls | `/teams/all-hands` | `src/pages/teams/AllHandsPage.tsx` |
| Onboarding & Culture | `/teams/onboarding` | `src/pages/teams/OnboardingPage.tsx` |
| Client Entertainment | `/teams/client-entertainment` | `src/pages/teams/ClientEntertainmentPage.tsx` |
| Holiday & Celebrations | `/teams/holiday` | `src/pages/teams/HolidayPage.tsx` |
| Custom Experiences | `/teams/custom` | `src/pages/teams/CustomExperiencesPage.tsx` |
| Catering | `/teams/catering` | `src/pages/teams/CateringTeamsPage.tsx` |

## Files Modified

### 1. `src/components/chef/Nav.tsx`
Update the `children` paths in `navSegments` to point to the new routes instead of the parent pages.

### 2. `src/App.tsx`
Add all 13 new routes.

### 3. `src/pages/TeamsPage.tsx`
Update the `ServiceCard` `onClick` handlers to link to the correct sub-page routes (e.g., `/teams/team-events`, `/teams/all-hands`, etc.) instead of `/team-building` or empty functions.

### 4. `src/pages/ClassesPage.tsx`
Update the `ServiceCard` and other clickable elements to link to the correct sub-page routes (e.g., `/classes/open-classes`, `/classes/kids-party`, etc.) instead of `/public-classes`.

## Page Template
Each sub-page follows the existing `TeamBuildingPage` pattern:
- Breadcrumb linking back to parent (Classes & Events or For Teams)
- Hero section with relevant title, subtitle, description, and CTA buttons
- Details/features section with relevant content
- Bottom CTA section
- Footer

## Existing Page Cleanup
The existing `/team-building` and `/public-classes` routes can be kept as-is or redirected, since they still work. The new sub-pages will be the primary destinations.


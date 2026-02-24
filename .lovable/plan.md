

# Replace All Serif Fonts with Sans-Serif

## Scope

574 occurrences of `font-serif` across 30 `.tsx` files, plus the font configuration in CSS and Tailwind.

## Changes

### 1. `src/index.css` (line 1)
Remove `Playfair Display` from the Google Fonts import. Keep only `DM Sans`.

### 2. `tailwind.config.ts` (line ~23)
Remove or repurpose the `serif` font family entry. Optionally point `serif` to `DM Sans` as well (so any missed references still render sans-serif), or remove it entirely.

### 3. All 30 component/page files
Global find-and-replace: `font-serif` → `font-sans` across every `.tsx` file. The affected files are:

- `src/pages/ClassesPage.tsx`
- `src/pages/HomePage.tsx`
- `src/pages/AboutPage.tsx`
- `src/pages/BlogPage.tsx`
- `src/pages/PublicClassesPage.tsx`
- `src/pages/TeamBuildingPage.tsx`
- `src/pages/TeamsPage.tsx`
- `src/pages/teams/AllHandsPage.tsx`
- `src/pages/teams/CateringTeamsPage.tsx`
- `src/pages/teams/ClientEntertainmentPage.tsx`
- `src/pages/teams/CustomExperiencesPage.tsx`
- `src/pages/teams/HolidayPage.tsx`
- `src/pages/teams/OnboardingPage.tsx`
- `src/pages/teams/TeamEventsPage.tsx`
- `src/pages/classes/CateringPage.tsx`
- `src/pages/classes/FriendsPage.tsx`
- `src/pages/classes/KidsPartyPage.tsx`
- `src/pages/classes/OpenClassesPage.tsx`
- `src/pages/classes/PrivateEventsPage.tsx`
- `src/pages/classes/SpecialOccasionsPage.tsx`
- `src/components/chef/Nav.tsx`
- `src/components/chef/Footer.tsx`
- `src/components/chef/ServiceCard.tsx`
- `src/components/chef/TestimonialCard.tsx`
- `src/components/chef/ClassModal.tsx`
- `src/components/chef/NewsletterBanner.tsx`
- `src/components/chef/TeamPackagesModal.tsx`
- `src/components/chef/TeamBookingFormModal.tsx`
- `src/components/chef/PrivateEventPackagesModal.tsx`
- `src/components/chef/PrivateEventBookingFormModal.tsx`

Every `font-serif` class becomes `font-sans`. No other styling changes.

### 4. Safety net
Update `tailwind.config.ts` to map `serif` → `DM Sans` so any overlooked references still render correctly:
```ts
fontFamily: {
  serif: ["'DM Sans'", "sans-serif"],  // redirected to sans
  sans: ["'DM Sans'", "sans-serif"],
},
```

## Result
All headings and body text across the entire site will render in DM Sans (sans-serif). No visual layout changes beyond the typeface swap.


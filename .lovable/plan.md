

# Wire Booking Form Modal to All Teams Sub-Pages

## Overview
The multi-step booking form modal (`TeamBookingFormModal`) currently only lives on the main Teams page. Every teams sub-page has "Book a Call" / "Book a Free Call" / equivalent CTAs in two places (hero section and bottom CTA section) that do nothing. We'll wire all of them to open the booking form modal.

## Pages to Update (8 total)

### Main Teams page: `src/pages/TeamsPage.tsx`
- Already has the modal imported and state wired
- Wire the 3 remaining unconnected "Book a Call" CTAs (hero button on line 163, occasion panel button on line 295, bottom CTA on line 340) to `setShowBookingForm(true)`

### 7 Sub-pages (same pattern for each):
Each sub-page needs:
1. Import `TeamBookingFormModal` and add `useState`
2. Add `showBookingForm` state
3. Wire the hero CTA and bottom CTA `onClick` handlers
4. Render `<TeamBookingFormModal>` at the bottom

| File | Hero CTA Text | Bottom CTA Text |
|------|--------------|-----------------|
| `TeamEventsPage.tsx` | "Book a Call" | "Book a Free Call" |
| `AllHandsPage.tsx` | "Book a Call" | "Book a Free Call" |
| `OnboardingPage.tsx` | "Book a Call" | "Book a Free Call" |
| `ClientEntertainmentPage.tsx` | "Book a Call" | "Book a Free Call" |
| `HolidayPage.tsx` | "Plan Our Party" | "Start Planning" |
| `CustomExperiencesPage.tsx` | "Share Your Vision" | "Start the Conversation" |
| `CateringTeamsPage.tsx` | "Get a Quote" | "Request a Quote" |

Also: `src/pages/TeamBuildingPage.tsx` -- "Book a Call" + "Book a Free Call"

## Technical Pattern (same for every sub-page)

```tsx
// Add imports
import { useState } from "react";
import TeamBookingFormModal from "@/components/chef/TeamBookingFormModal";

// Add state inside component
const [showBookingForm, setShowBookingForm] = useState(false);

// Wire onClick on hero + bottom CTAs
<CTAButton variant="primary" size="lg" onClick={() => setShowBookingForm(true)}>Book a Call</CTAButton>
// ...
<CTAButton variant="orange" size="lg" onClick={() => setShowBookingForm(true)}>Book a Free Call →</CTAButton>

// Render modal before closing </div>
<TeamBookingFormModal
  isOpen={showBookingForm}
  onClose={() => setShowBookingForm(false)}
/>
```

## Files Modified
- `src/pages/TeamsPage.tsx` (wire 3 existing CTAs)
- `src/pages/teams/TeamEventsPage.tsx`
- `src/pages/teams/AllHandsPage.tsx`
- `src/pages/teams/OnboardingPage.tsx`
- `src/pages/teams/ClientEntertainmentPage.tsx`
- `src/pages/teams/HolidayPage.tsx`
- `src/pages/teams/CustomExperiencesPage.tsx`
- `src/pages/teams/CateringTeamsPage.tsx`
- `src/pages/TeamBuildingPage.tsx`

No new files or dependencies needed -- just importing and using the existing `TeamBookingFormModal` component across all teams pages.

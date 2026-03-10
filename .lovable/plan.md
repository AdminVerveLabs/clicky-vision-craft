

## Apply accent color rules site-wide

This is a large audit touching ~25 files. The two rules:

1. **Purple backgrounds** → green is the accent (buttons, tags, checkmarks, icons)
2. **White/light backgrounds** → purple primary, green secondary, orange/gold tertiary (italic emphasis text only)

### Summary of changes by file

**Shared Components:**
- `CTAButton.tsx` — no changes (variants already support all colors)
- `SectionTag.tsx` — add a `"green"` variant for use on purple backgrounds
- `NewsletterBanner.tsx` — purple bg: change subscribe button to green, input focus to green
- `TestimonialCard.tsx` — light bg: keep purple quote mark (correct)
- `ServiceCard.tsx` — no changes needed (already uses accent prop)
- `Footer.tsx` — dark bg: keep as-is (hover orange is fine as tertiary)
- `Nav.tsx` — light bg: keep purple active states, green CTA (already correct)

**Modals:**
- `TeamPackagesModal.tsx` — light bg: keep purple checks/borders (correct), CTA button stays orange→green on the "Get in Touch" since it's a primary action → actually keep purple as primary, change CTA to purple
- `TeamBookingFormModal.tsx` — purple left panel: change step icons from purple to green when done/active. Right panel (light): keep purple progress bar, change final submit from orange to purple
- `PrivateEventPackagesModal.tsx` — light bg: change orange checks/icons/badges to purple primary, keep CTA as purple
- `PrivateEventBookingFormModal.tsx` — orange left panel: fine as-is. Right panel: change progress bar and nav buttons from orange to purple

**Pages — HomePage.tsx:**
- Hero (purple bg): "Good times." `text-green-light` ✓ already correct. Green CTA ✓ correct
- "Be brave" italic → keep as `text-orange` (tertiary italic emphasis) ✓
- "How it Works" (light bg): step badges `bg-purple` ✓ correct
- Choose Your Experience (light bg): tags `bg-purple` ✓, category labels `text-purple` ✓, format badges `bg-green/10 text-green` ✓, "View Details" `text-purple` ✓ — all correct

**Pages — ClassesPage.tsx:**
- Hero (light bg): "here" italic `text-orange` ✓ tertiary emphasis. Orange CTA → change to purple primary. SectionTag orange → keep (tertiary for Classes section identity? Actually per rules: primary=purple). Change `SectionTag variant="orange"` to default purple
- Catalogue sidebar: `border-orange text-orange` → `border-purple text-purple`
- Mobile pills: `bg-orange` → `bg-purple`, hover orange → hover purple
- Content panel tag overlay: `bg-orange/80` → `bg-purple/80` (already is for teams, should be for classes too... wait it IS orange). Change to purple
- Highlight checks: `bg-orange-pale text-orange` → `bg-green/10 text-green` (secondary accent)
- "Learn More" link: `text-orange` → `text-purple`
- Calendar: keep existing colors (they represent class types, not accent)
- Social credibility: stars `text-orange fill-orange` → keep (they're Google review stars, semantic). Trophy `text-orange` → `text-purple`. Award `text-purple` ✓
- "How to Join" SectionTag: orange → purple
- CTA button in content: `variant="orange"` → `variant="primary"` (purple)

**Pages — TeamsPage.tsx:**
- Hero (light bg): "lunch plans" italic `text-purple` ✓ correct. Purple CTA ✓
- Meet Chef Joey (cream bg): "pizza in the boardroom" italic `text-orange` → keep as tertiary ✓
- Format cards: hover border-purple ✓, detail badge `text-purple bg-purple-pale` ✓
- Catalogue: already uses purple sidebar/pills ✓
- Content tag overlay: `bg-purple/80` ✓
- Highlights checks: `bg-purple-pale text-purple` → change to `bg-green/10 text-green` (secondary)
- "Learn More" link: `text-orange` → `text-purple`
- CTA section (purple bg): orange CTA → green CTA. Ghost button fine

**Pages — Sub-pages (classes/**):**
All follow same pattern — light bg pages:
- `PrivateEventsPage.tsx`: breadcrumb orange→purple, SectionTag orange→purple, italic text-orange ✓ tertiary, CTAs orange→purple, detail icon colors keep alternating purple/sage, "Perfect For" icons orange→green
- `FriendsPage.tsx`: same pattern — breadcrumb/SectionTag/CTAs orange→purple, italic orange ✓ keep, detail icons keep mixed, list icons orange→green
- `OpenClassesPage.tsx`: similar changes
- `KidsPartyPage.tsx`, `SpecialOccasionsPage.tsx`, `CateringPage.tsx`: same pattern
- CTA sections at bottom with orange/gradient bg → change to purple bg with green CTA

**Pages — Sub-pages (teams/**):**
- `TeamEventsPage.tsx`, `AllHandsPage.tsx`, `OnboardingPage.tsx`, `ClientEntertainmentPage.tsx`, `HolidayPage.tsx`, `CustomExperiencesPage.tsx`, `CateringTeamsPage.tsx`: already use purple as primary mostly ✓. Check highlight icons use green, CTA sections on purple bg use green buttons

**ClassModal.tsx:**
- Tag badge: `bg-orange` → `bg-purple` for non-sold-out
- Detail icon colors: keep alternating
- CTA: likely needs purple primary

### Implementation approach

Due to the massive scope (~25 files), I'll batch by category:
1. Shared components (SectionTag, NewsletterBanner, modals)
2. HomePage
3. ClassesPage + classes sub-pages
4. TeamsPage + teams sub-pages

This is a styling-only change — no layout, typography, or image changes.


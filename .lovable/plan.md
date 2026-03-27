

## Plan: Add "BYOB welcome at every event" callout

### Summary
Add a BYOB callout badge/banner to three areas: the Classes & Events catalogue page (all categories except Gift Certificates), each individual class subpage, and the class detail modal.

### Files to modify

**1. `src/pages/ClassesPage.tsx`** — Catalogue cards (4 of 5 categories)
- Add a BYOB callout inside each catalogue card's body section (after the "What to Expect" highlights box or after the description), for all categories except `gift-certificates`
- Style: a small inline callout with a 🍷 icon, similar to the existing green "What's Included" pattern — light purple or amber background, rounded, compact text like "BYOB welcome at every event"

**2. `src/pages/classes/OpenClassesPage.tsx`** — Open Classes subpage
- Add the BYOB callout in the "Class Details" section (left column), either as an additional detail row or as a standalone callout banner below the details list

**3. `src/pages/classes/PrivateEventsPage.tsx`** — Private Events subpage
- Same pattern: add BYOB callout in the details section

**4. `src/pages/classes/KidsPartyPage.tsx`** — Kids Party subpage
- Same pattern: add BYOB callout in the details section

**5. `src/pages/classes/SpecialOccasionsPage.tsx`** — Signature Sessions subpage
- Same pattern: add BYOB callout in the details section

**6. `src/components/chef/ClassModal.tsx`** — Class detail modal
- Add a BYOB callout row between the "What's Included" callout and the CTA buttons
- Style: similar to the existing green included callout but with a wine/amber accent — e.g., light purple or warm background, 🍷 icon, text "BYOB welcome at every event"
- Keep it compact (single row, ~12px 14px padding) to not break the no-scroll constraint

### Visual style (consistent across all placements)
- Background: `bg-purple/10` or similar light accent
- Icon: 🍷 in a small rounded square
- Text: "BYOB welcome at every event" — 13-14px, medium weight, purple text
- Border radius: 12px, padding: 12px 14px
- Compact single-row flex layout matching the existing "What's Included" callout pattern


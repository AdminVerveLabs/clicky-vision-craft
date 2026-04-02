

## Plan: Add Gift Card category and sub-pages for both Classes & Teams

### Summary
Create dedicated Gift Card sub-pages for both "Classes & Events" and "Teams & Corporate", update the catalogue data on both pages, add routes in App.tsx, and add nav links.

### Current state
- ClassesPage already has a "Gift Certificates" catalogue entry but it links to `/classes/open-classes` (no dedicated page)
- TeamsPage has no gift card category at all

### Files to create

**`src/pages/classes/GiftCardsPage.tsx`**
- Standard sub-page layout matching PrivateEventsPage pattern (breadcrumb, hero with SectionTag, details grid, CTA)
- Title: "Gift Cards" / tagline: "Give the gift of a great time"
- Hero text about gifting any class or experience, never expires
- Details section: Options (any class/amount), Delivery (digital or printed), Validity (never expires), Flexible (recipient chooses), Personal (custom message), Includes (full experience)
- Popular occasions list: birthdays, holidays, thank-yous, corporate gifts, last-minute presents
- CTA: "Buy a Gift Card" + "Chat with Joey"
- Footer included

**`src/pages/teams/GiftCardsPage.tsx`**
- Same pattern but for corporate context (breadcrumb → "Teams & Corporate")
- Title: "Team Gift Cards" / tagline: "Reward your team with an experience"
- Details: bulk ordering, corporate branding options, any team experience
- Popular uses: employee appreciation, client gifts, holiday rewards, milestone celebrations, welcome gifts
- CTA: "Order Gift Cards" + "Chat with Joey"

### Files to modify

**`src/pages/ClassesPage.tsx`**
- Update the existing "gift-certificates" category entry: change `path` from `/classes/open-classes` to `/classes/gift-cards`

**`src/pages/TeamsPage.tsx`**
- Add a new "gift-cards" category entry at the end of the `occasions` array with icon 🎁, tag "PERFECT GIFT", title "Gift Cards", path `/teams/gift-cards`, matching the data structure (details array + highlights)

**`src/App.tsx`**
- Add import + route for `GiftCardsPage` at `/classes/gift-cards`
- Add import + route for teams `GiftCardsPage` at `/teams/gift-cards`

**`src/components/chef/Nav.tsx`**
- Add `{ label: "Gift Cards", path: "/classes/gift-cards" }` to "Classes & Events" children
- Add `{ label: "Gift Cards", path: "/teams/gift-cards" }` to "Teams & Corporate" children

### Total: 2 files created, 4 files modified


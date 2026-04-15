

## Plan: Private/Corporate Event Detail Page Template

### Overview
Create a new standalone page at `/events/:eventSlug` that displays all practical event info for booked customers. Includes the site's existing Nav and Footer, using project design tokens (DM Sans, purple/green/dark palette).

### Files to Create

**1. `src/data/eventData.ts`** — TypeScript interfaces and sample event data
- Define `RecipeCard`, `WinePairing`, `Cocktail`, `EventPageData` interfaces matching the spec
- Export one sample event (e.g., `enbridge-team-cooking`) with all sections populated (including wine pairing and cocktail) so the template is fully demonstrable
- Export a `getEventBySlug(slug)` lookup function

**2. `src/pages/EventPage.tsx`** — The full page component
- Uses `useParams` to get `eventSlug`, looks up data via `getEventBySlug`
- Returns `NotFound` if no match
- Renders inside `<main>` with semantic `<article>` and `<section>` tags
- Includes Footer at bottom (Nav is already global in App.tsx)
- All 10 sections per the spec:
  1. **Hero** — full-width div with background image, dark overlay, badge pill, date, title, tagline. `pt-[80px]` to clear fixed nav.
  2. **Content wrapper** — `max-w-[900px] mx-auto`
  3. **Location & Duration** — 2-col grid (1-col mobile), gray cards with emoji icons
  4. **Get Ready** — section label, description, 2-col dark download cards
  5. **Divider** — `border-t` with `my-14`
  6. **What We're Cooking** — section label, menu title, 2-col recipe card grid with image areas
  7. **Divider**
  8. **Wine Pairing** (conditional) — purple gradient container, avatar + wine list + order button
  9. **Cocktail** (conditional) — split layout, image left / colored content right
  10. **Questions/Contact** — gray rounded box, centered CTA

- Responsive: all grids switch to single column below `md:` breakpoint, hero height reduces, padding scales down

### Files to Modify

**3. `src/App.tsx`**
- Import `EventPage`
- Add route: `<Route path="/events/:eventSlug" element={<EventPage />} />`

### Technical Notes
- Uses existing design tokens: `hsl(var(--purple))`, `hsl(var(--dark))`, `font-sans` (DM Sans)
- CTA button in contact section uses the project's CTAButton component
- Wine order button uses inline purple styling per spec (#6B5B95)
- All links open in new tab with `rel="noopener noreferrer"`
- Font sizes respect 50+ audience minimum (15px+ body text)




## Add Social Credibility Banner to Classes & Events Page

Insert a new section between the experience catalogue (line ~316) and the calendar section (line ~318) in `src/pages/ClassesPage.tsx`.

### Design

A full-width ribbon/banner with a subtle cream or light background containing three columns:

1. **Google Reviews** — Star rating display (e.g., 4.9/5), review count, Google logo text
2. **Testimonials** — 1-2 short rotating quotes from past attendees
3. **Awards** — Consumer Choice Award badge + any other recognition

### Layout

```text
┌──────────────────────────────────────────────────────────┐
│  ⭐ 4.9/5 Google     │  "Best date night..."  │  🏆     │
│  120+ Reviews        │  — Sarah K.            │  Consumer│
│                      │                        │  Choice  │
│                      │                        │  Award   │
└──────────────────────────────────────────────────────────┘
```

- `bg-cream` background, `py-16`, centered `max-w-[1200px]`
- 3-column grid on desktop, stacked on mobile
- Each column centered with icon/visual on top, stats/quote below
- Google section: large star icons + rating number + "Google Reviews" label
- Testimonial section: italic quote with attribution
- Awards section: trophy icon with "Consumer Choice Award" + year text

### Implementation

**File: `src/pages/ClassesPage.tsx`**
- Add the social credibility section JSX between the closing `</section>` of the experience catalogue and the opening `<section id="class-calendar">` of the calendar
- All content is hardcoded (no new data files needed)
- Uses existing design tokens (colors, fonts, spacing) consistent with the rest of the site


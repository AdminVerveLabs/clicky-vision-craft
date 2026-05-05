## About page additions

Two new sections appended below the existing hero on `src/pages/AboutPage.tsx`. Existing top section stays untouched.

### Section 2 — How Chef Joey Came to Be

Two-column layout, alternating from the hero (image on the right side this time for rhythm — happy to flip).

```text
+----------------------------+--------------------------+
|  ABOUT CHEF JOEY (tag)     |                          |
|  H2: How Chef Joey         |     [supporting image]   |
|      Came to Be            |                          |
|                            |                          |
|  5 paragraphs of body copy |                          |
|                            |                          |
|  [press logo strip]        |                          |
+----------------------------+--------------------------+
```

- Background: `bg-cream` (subtle separation from the white hero above).
- Section tag: "About Chef Joey".
- H2: "How Chef Joey Came to Be" — same display treatment as hero H1, slightly smaller.
- Body: all five paragraphs verbatim from your copy, gray text, 1.8 line-height, max ~65ch for readability.
- Press strip: placeholder row at the end of the body column with greyed-out logo blocks for Avenue Magazine, Food Network Canada, The Best Calgary, Calgary Inc. Best Place to Work. Real logos can be swapped in later — please send when ready.
- Image: needs an asset. Options below.

### Section 3 — Three Things That Set Chef Joey Apart

Mirrors the reference exactly: centered eyebrow tag, H2, subhead, then a 3-column grid of numbered circles with title + body.

```text
            [WHAT MAKES US DIFFERENT]
       Three Things That Set Chef Joey Apart
   Hundreds of places claim to teach cooking. Here's
            what Chef Joey does differently.

       (01)              (02)              (03)
   Hands-On from    Real Food, Zero    Built for Groups,
   Minute One       Gatekeeping        Any Size
   <body copy>      <body copy>        <body copy>
```

- Background: white.
- Numbered badges: 48px purple circles, white "01/02/03" inside, DM Sans semibold.
- Item titles: dark, serif weight, ~22–24px.
- Body copy: gray, centered, ~16px, 1.7 line-height.
- Copy used verbatim from your message (subhead updated to your new wording).
- Stacks to single column on mobile.

### Technical notes

- Edit only `src/pages/AboutPage.tsx`. No new components needed — these are page-level sections consistent with how the rest of the site is structured.
- Reuse `SectionTag` for both eyebrows.
- No new CTAs added (existing ones in the hero already cover the page).
- Press logos and the Section 2 image will be placeholders until you supply assets.

### Open items I need from you before/after build

1. **Section 2 image** — pick one:
   - (a) Reuse `chef-joey-kitchen.jpg` (already in assets) — fastest, but it's already on the page.
   - (b) You upload a new photo (recommended — a different shot keeps the page visually fresh).
   - (c) I generate a stylized supporting image.
2. **Press logos** — when you have them, drop them in and I'll wire them into the strip. Placeholder grey blocks until then.
3. **Image side preference for Section 2** — image-right (my default) or image-left?

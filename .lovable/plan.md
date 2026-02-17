

# Fix "Pick your occasion" / "Find your flavor" Header Alignment

## The Problem
The section header (tag + title + description) sits with `pl-[230px]`, floating awkwardly between the sidebar and content. It doesn't feel anchored to anything.

## Three Options

### Option 1 -- Inline Header Inside the Content Panel (Recommended)
Move the header text (SectionTag, h2, description) inside the content panel itself -- place it at the top of the white rounded card, above the photo header. This way the header is visually part of the content it describes, and the sidebar + content start at the same vertical position.

**Layout:**
- Remove the separate header div entirely
- The sidebar ("Categories" list) and content panel start at the same top edge
- The content panel begins with the SectionTag, title, and description inside a padded area above the photo
- Then the current card content (photo, details, highlights) follows below

**Result:** Clean two-column layout with no orphaned header. The sidebar and content are peers.

### Option 2 -- Full-Width Header Spanning the Entire Section
Make the header span the full width of the 1200px container (no left padding). Place it as a standard full-width section intro, centered or left-aligned to the page edge -- the same alignment as the hero section above.

**Layout:**
- Remove `pl-[230px]`
- Left-align the header to the container edge (matching the hero text alignment above)
- Add a clear visual separator (extra spacing or a subtle divider) between the header and the sidebar+content below

**Result:** The header reads as a standalone section intro. The sidebar+content below it feels like a separate interactive area.

### Option 3 -- Merge Header into the Sidebar
Move the SectionTag and title into the top of the sidebar column itself, making it the sidebar's "header". The description moves below the title in the sidebar.

**Layout:**
- The sidebar starts with the SectionTag ("Perfect For"), then the h2 ("Pick your occasion"), then the description paragraph, then "CATEGORIES" label and the nav items
- The content panel sits to the right, starting at the same top edge
- Remove the separate header div

**Result:** Everything is in two columns from the start. The sidebar owns the context-setting text, and the content panel is purely the interactive card.

## Recommendation
**Option 1** is the cleanest solution. It eliminates the alignment problem entirely by removing the separate header row. The title becomes contextually connected to the content it describes.

## Files Modified
- `src/pages/TeamsPage.tsx` -- restructure the "Pick your occasion" section
- `src/pages/ClassesPage.tsx` -- same restructure for the "Find your flavor" section

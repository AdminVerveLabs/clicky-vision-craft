
# Push Sidebar Down to Align with Photo Header

## Problem
Now that the section header (tag, title, description) lives inside the content card, the sidebar starts at the same vertical position as the card's top — meaning it sits next to the text header area. It should visually align closer to the photo/interactive content below.

## Solution
Add top padding to the sidebar nav so it starts roughly at the same vertical position as the photo header inside the card. The card header (padding + tag + title + description + spacing) takes approximately 180px of vertical space.

## Changes

### `src/pages/TeamsPage.tsx`
- Add `pt-[180px]` to the sidebar `<nav>` element (line 204)

### `src/pages/ClassesPage.tsx`
- Same change to the equivalent sidebar nav element

## Result
The "Categories" label and navigation items will sit beside the photo and details area of the card, rather than beside the text header — creating a much more natural visual alignment.

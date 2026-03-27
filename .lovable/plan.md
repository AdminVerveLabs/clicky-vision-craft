

## Update ClassModal for public course modals

Three changes to `src/components/chef/ClassModal.tsx`:

### 1. Remove "Only X spots left" badge
Delete lines 34-38 — the conditional `spots` badge in the header.

### 2. Add a photo to the header
Instead of overlaying text on an image (readability issue), add a **rounded photo strip below the purple header** — a full-width image band (~180px tall) with rounded bottom corners, sitting between the purple header and the body content. This uses one of the existing kitchen/cooking assets (e.g., `ywca-kitchen-074.jpg`) as a default class image. The `ClassData` interface doesn't have per-class images, so we'll use a mapping from `cls.id` to specific kitchen photos to give visual variety. This approach keeps text legible on the purple background while adding visual warmth.

**Image mapping** (in the modal component):
- Map class IDs to different existing assets (`ywca-kitchen-006.jpg`, `ywca-kitchen-014.jpg`, `ywca-kitchen-056.jpg`, `ywca-kitchen-074.jpg`, `ywca-kitchen-080.jpg`, plus some chef-joey photos) to rotate images across classes.

### 3. Increase date/time font size
Line 42: Change `text-[15px]` to `text-lg` (18px) for the date/time paragraph.

### 4. Rename CTA button
Line 115: Change "Chat with Joey" to "Get Cooking".

### Files modified
- `src/components/chef/ClassModal.tsx` — all changes in this single file


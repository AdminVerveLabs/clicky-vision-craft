

# Hide Scrollbars on Class Modal

## What Changes
Hide the visible scrollbar on the `ClassModal` component while keeping scroll functionality intact. This is a single-line CSS class change.

## File Changed

**`src/components/chef/ClassModal.tsx`** (line 16)

Change `overflow-auto` to `overflow-auto scrollbar-hide` and add a small CSS utility.

Since Tailwind does not include a `scrollbar-hide` utility by default, the cleanest approach is to add the hiding styles directly via a Tailwind arbitrary property or add a small global CSS rule.

**Approach:** Add `[scrollbar-width:none]` (Firefox) and a `[&::-webkit-scrollbar]:hidden` class (Chrome/Safari) to the modal's inner container on line 16:

```
overflow-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
```

This keeps the modal scrollable but hides the scrollbar across all browsers. Only one file needs updating since `ClassModal` is the shared component used on both the homepage and the calendar page.


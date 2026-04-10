

## Plan: Fix Experience Content Width to Match Category Cards

### Problem
The embedded `ExperienceContent` card extends wider than the category cards because flex items default to `min-width: auto`, allowing the horizontal-scrolling gallery inside `ExperienceContent` to push the content panel beyond its allocated space.

### Fix

**`src/pages/ClassesPage.tsx`** — one line change

Add `min-w-0` to the content panel div (line 275) so it respects the flex layout bounds:

```
// Before
<div className="flex-1">

// After  
<div className="flex-1 min-w-0">
```

**`src/pages/TeamsPage.tsx`** — same fix applied to its content panel div for consistency.

### Total: 2 files modified, ~1 line each


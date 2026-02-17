

# Add Overview Page Links to Nav Dropdowns

## Problem
- **Mobile:** Tapping "Classes & Events" or "Teams" only toggles the dropdown -- there's no way to reach the overview pages (`/classes`, `/teams`).
- **Desktop:** Users may not realize the parent label is clickable to navigate to the overview page.

## Solution
Add a "View All" link as the first item in each dropdown (both desktop and mobile), styled slightly differently to stand out.

## File Changed

**`src/components/chef/Nav.tsx`**

### Desktop dropdown (lines ~131-140)
Inside the dropdown `<div>` that renders `segment.children`, prepend a "View All" item before mapping the children:

```tsx
<div
  onClick={() => go(segment.path)}
  className="px-4 py-2.5 text-sm font-semibold cursor-pointer transition-colors duration-150 hover:bg-purple-pale border-b border-border"
  style={{ color: "hsl(var(--purple))" }}
>
  View All {segment.label}
</div>
{segment.children!.map((child) => ( ... ))}
```

### Mobile drawer (lines ~174-185)
Inside the expanded children section, prepend the same "View All" link before mapping children:

```tsx
<button
  onClick={() => go(segment.path)}
  className="block w-full text-left px-3 py-2.5 font-sans text-[14px] font-semibold rounded-lg hover:bg-gray-light transition-colors"
  style={{ color: "hsl(var(--purple))" }}
>
  View All {segment.label}
</button>
{segment.children!.map((child) => ( ... ))}
```

## Result
- Both desktop hover dropdowns and mobile expandable sections will show "View All Classes & Events" / "View All Teams" as the first option, clearly linking to the overview pages.
- Existing behavior (hover to open on desktop, tap to expand on mobile) remains unchanged.
- The "View All" items are visually distinct with purple text and semibold weight.

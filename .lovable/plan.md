

## Plan: Add In-Person / Virtual Tab Switcher to Class Detail Pages

### Summary
Create a reusable `FormatTabs` component that conditionally renders "In-Person" and "Virtual" tabs above the Experience Details / What to Expect content on class detail sub-pages. Tabs only appear when both formats are available. Content is duplicated for now (virtual copy to be updated later).

### New file

**`src/components/chef/FormatTabs.tsx`**
- Props: `{ hasInPerson: boolean; hasVirtual: boolean; inPersonContent: ExperienceContent; virtualContent: ExperienceContent }`
- `ExperienceContent` type: `{ details: DetailItem[]; rightTitle: string; rightItems: RightItem[] }` where `DetailItem = { icon, label, value, color }` and `RightItem = { icon, text }`
- If only one format available, render content directly without tabs
- If both available, render tab row + content area
- Tab styling per spec: `font-sans text-[15px]`, `py-3 px-6`, bottom border row `border-b border-border`, active tab `border-b-2 border-purple text-purple font-medium`, inactive `text-gray hover:text-dark`, no background
- Content renders the same two-column grid layout currently used inline (details list left, steps/occasions card right)
- `useState` defaults to `"in-person"`
- Optional fade transition via `transition-opacity duration-200`

### Files to modify (8 class detail pages)

Each page's `<section className="... bg-cream">` details section gets replaced with `<FormatTabs>`, passing the existing inline data as `inPersonContent` and duplicating it as `virtualContent`.

1. **`src/pages/classes/OpenClassesPage.tsx`** — `hasInPerson: true, hasVirtual: true` (classes mention virtual format). Extract "Class Details" items + "What to Expect" steps into props.

2. **`src/pages/classes/PrivateEventsPage.tsx`** — `hasInPerson: true, hasVirtual: true` (private events can be virtual). Extract "Event Details" + "Popular Occasions".

3. **`src/pages/classes/CateringPage.tsx`** — `hasInPerson: true, hasVirtual: false` (catering is in-person only). No tabs shown, just wraps content.

4. **`src/pages/classes/FriendsPage.tsx`** — `hasInPerson: true, hasVirtual: true`. Extract "Experience Details" + "Perfect For".

5. **`src/pages/classes/SpecialOccasionsPage.tsx`** — `hasInPerson: true, hasVirtual: true`.

6. **`src/pages/classes/KidsPartyPage.tsx`** — `hasInPerson: true, hasVirtual: false` (kids in-person only). No tabs.

7. **`src/pages/classes/KidsBakePage.tsx`** — `hasInPerson: true, hasVirtual: false`. No tabs.

8. **`src/pages/classes/SignatureCreolePage.tsx`** — `hasInPerson: true, hasVirtual: true`.

9. **`src/pages/classes/ValentinesDayPage.tsx`** — `hasInPerson: true, hasVirtual: true`.

### Design tokens used
- Purple: `text-purple`, `border-purple` (#430073)
- Gray text: `text-gray`
- Border: `border-border`
- Font: `font-sans` (DM Sans)
- Section bg: `bg-cream` (unchanged)

### Technical notes
- The component handles the conditional rendering internally — pages just pass `hasInPerson`/`hasVirtual` booleans
- When only one format exists, the tabs row is hidden entirely and content renders directly
- Both `inPersonContent` and `virtualContent` receive identical data initially; virtual content will be differentiated in a future update
- Tab state is local to each page via the component's internal `useState`

### Total: 1 file created, up to 9 files modified


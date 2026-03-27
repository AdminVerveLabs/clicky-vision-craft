

## Plan: Calendar legend & in-person/virtual indicators

### Changes

**1. `src/data/classData.ts`** — Add `virtual` field to `ClassData`
- Add `virtual?: boolean` to the interface
- Mark most classes as in-person (default). Mark 1-2 as virtual for demo (e.g., Knife Skills + Quick Meals)

**2. `src/pages/ClassesPage.tsx`** — Calendar section
- Move the legend from below the calendar grid to directly below the month nav (between month nav and grid)
- Remove "Signature / Skills" from legend
- Add "In-Person 📍" and "Virtual 💻" entries to legend
- Add 📍 or 💻 emoji next to each class entry in the calendar cells

**3. `src/pages/classes/OpenClassesPage.tsx`** — Same three changes
- Move legend below month nav
- Remove "Signature / Skills", add in-person/virtual entries
- Add 📍/💻 indicators on calendar event tiles


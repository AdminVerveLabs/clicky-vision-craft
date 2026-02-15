
# Add Calendar Section to Open Classes Page

## Change
Copy the "What's cooking this month" calendar section (including month navigation, interactive calendar grid, class modal, and legend) from `ClassesPage.tsx` into `OpenClassesPage.tsx`. Insert it between the "Class Details / What to Expect" section and the bottom CTA section.

## What Gets Added
- Month navigation (January/February/March 2026 with arrow buttons)
- Full interactive calendar grid showing classes on specific days
- Clickable class entries that open the ClassModal with menu details and booking
- Calendar legend (Public Class, Couples/Date Night, Kids, Signature/Skills, Sold Out)

## Technical Details

### File Modified: `src/pages/classes/OpenClassesPage.tsx`

1. **Add imports**: `useState` from React, `ClassModal` component, and `CLASS_DATA`, `FOOD_IMAGES`, `ClassData` from `@/data/classData`
2. **Add state and calendar logic** (copied from ClassesPage): `selectedClass`, `calMonth`, month names, calendar day computation (`firstDay`, `daysInMonth`, `today`, `calDays` array), `getClassesForDay()`, and `getDayImage()` helper functions
3. **Add ClassModal** at the top of the JSX return (conditionally rendered when a class is selected)
4. **Insert the calendar section** (lines 81-163 from ClassesPage) as a new `<section>` between the cream-colored details section and the orange CTA section

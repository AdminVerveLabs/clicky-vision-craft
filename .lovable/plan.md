

## Plan: Remove all BYOB references site-wide

### Summary
Delete the `BYOBCallout` component and remove every BYOB reference across 9 files.

### File to delete
- `src/components/chef/BYOBCallout.tsx`

### Files to modify (remove BYOBCallout import + usage)

1. **`src/components/chef/ClassModal.tsx`** — Remove import (line 3) and the BYOB callout block (lines 151-152)

2. **`src/pages/ClassesPage.tsx`** — Remove import (line 8), remove "BYOB welcome at all evening classes" from the highlights array (line 40), and remove the BYOB callout rendering block (lines 348-353)

3. **`src/pages/classes/OpenClassesPage.tsx`** — Remove import (line 8) and usage (line 95)

4. **`src/pages/classes/PrivateEventsPage.tsx`** — Remove import (line 5) and usage (line 64)

5. **`src/pages/classes/CateringPage.tsx`** — Remove import (line 5) and usage (line 64)

6. **`src/pages/classes/SpecialOccasionsPage.tsx`** — Remove import (line 5) and usage (line 64)

7. **`src/pages/classes/KidsPartyPage.tsx`** — Remove import (line 5) and usage (line 64)

8. **`src/pages/classes/FriendsPage.tsx`** — Remove import (line 5), usage (line 64), and change the "Add-Ons" detail item text from "BYOB welcome, wine pairings available" to "Wine pairings available" (line 54)

### Total: 1 file deleted, 8 files edited


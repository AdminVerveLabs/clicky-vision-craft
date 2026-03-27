

## Fix remaining orange accent violations site-wide

Many pages still use orange as accent color on light backgrounds where it should be purple (primary) or green (secondary). Orange should only appear as tertiary for italic emphasis text.

### Files and specific changes:

**`src/pages/ClassesPage.tsx`**
- Line 159: `from-orange-pale` → `from-purple-pale` (hero gradient bg)
- Line 166: `text-orange italic` on "here" — KEEP (tertiary italic emphasis ✓)
- Lines 274-280: detail icon `bg-orange/10` → `bg-purple/10`, label `text-orange` → `text-purple`
- Lines 20-31 data: change `color: "orange"` to `color: "purple"` in classExperiences details
- Line 437: calendar legend "Public Class" `bg-orange` → `bg-purple`

**`src/pages/TeamsPage.tsx`**
- Lines 308-314: detail icon/label color mappings — change `orange` references to `purple`
- Team experiences data: change `color: "orange"` entries to `color: "purple"`

**`src/pages/TeamBuildingPage.tsx`**
- Lines 54,57: `color: "orange"` → `color: "purple"` in details data
- Lines 62,66: `bg-orange/10` → `bg-purple/10`, `text-orange` → `text-purple`
- Line 113: CTA on purple bg `variant="orange"` → `variant="green"`

**`src/pages/PublicClassesPage.tsx`**
- Line 26: breadcrumb `text-orange` → `text-purple`
- Line 29: `SectionTag variant="orange"` → remove variant (default purple)
- Line 31: `text-orange italic` on "Eat well." — KEEP (tertiary italic ✓)
- Line 46: card gradient `from-orange/[0.06]` → `from-purple/[0.06]`
- Line 49: "Almost Full" badge `bg-orange` → `bg-purple`
- Line 53: date text `text-orange` → `text-purple`
- Line 58: button `bg-orange` → `bg-purple`

**`src/pages/BlogPage.tsx`**
- Line 59: "Featured" badge `bg-orange` → `bg-purple`

**`src/pages/classes/OpenClassesPage.tsx`**
- Line 54: `text-orange italic` on "flavors" — KEEP (tertiary italic ✓)
- Line 196: calendar legend "Public Class" `bg-orange` → `bg-purple`

**`src/pages/classes/PrivateEventsPage.tsx`**
- Line 24: `text-orange italic` on "menu" — KEEP (tertiary italic ✓)

**`src/pages/classes/SpecialOccasionsPage.tsx`**
- Line 24: `text-orange italic` on "unforgettable" — KEEP (tertiary italic ✓)

**`src/pages/classes/CateringPage.tsx`**
- Line 24: `text-orange italic` on "delivered" — KEEP (tertiary italic ✓)

**`src/pages/classes/KidsPartyPage.tsx`**
- Line 24: `text-orange italic` on "ever" — KEEP (tertiary italic ✓)

**`src/pages/classes/FriendsPage.tsx`**
- Line 24: `text-orange italic` on "kitchen" — KEEP (tertiary italic ✓)

**`src/components/chef/ServiceCard.tsx`**
- Line 14: orange accent variant — change to use purple colors instead

### Summary
~8 files need edits. All italic emphasis text stays orange (tertiary). All non-italic orange accents (badges, buttons, labels, icons, breadcrumbs, gradients) become purple on light backgrounds, or green on purple backgrounds.


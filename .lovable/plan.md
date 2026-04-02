

## Plan: Add In-Person / Virtual Tab Switcher to ClassesPage Catalogue Cards

### Summary
Add the `FormatTabs` component to the category content panel on the `/classes` page, placing it between the description text and the "Experience Details" grid -- matching the treatment already applied to the sub-pages (picture 1).

### What changes

**`src/pages/ClassesPage.tsx`**

1. Import `FormatTabs` from `@/components/chef/FormatTabs`
2. Add `hasInPerson` and `hasVirtual` boolean flags to each entry in the `classExperiences` array:
   - Private Parties: `hasInPerson: true, hasVirtual: true`
   - Public Classes: `hasInPerson: true, hasVirtual: true`
   - Kids Cooking: `hasInPerson: true, hasVirtual: false`
   - Signature Sessions: `hasInPerson: true, hasVirtual: true`
   - Gift Certificates: `hasInPerson: false, hasVirtual: false` (no tabs, no format concept)
3. Replace the inline "Experience Details" + "What to Expect" grid (lines 315-346) with `<FormatTabs>`, passing:
   - `hasInPerson` / `hasVirtual` from the active experience
   - `inPersonContent` built from the existing `details` and `highlights` arrays
   - `virtualContent` duplicated from in-person for now (same as sub-pages)
   - `leftTitle="Experience Details"`
4. For Gift Certificates (no format applies), keep the current inline rendering as-is via a conditional check

### No other files change
The `FormatTabs` component already supports all needed props and conditional tab rendering.

### Total: 1 file modified




## Plan: Unified PackagesModal component

### Summary
Replace the two separate modal components (`PrivateEventPackagesModal` and `TeamPackagesModal`) with a single reusable `PackagesModal` component driven by an `eventType` prop. The new design follows the exact layout spec provided (3 cards, chip-style add-ons, callout box, disclaimers).

### Files to create

**`src/components/chef/PackagesModal.tsx`** — New unified component
- Props: `isOpen`, `eventType: 'private' | 'corporate'`, `onClose`, `onSubmit`
- Shared package data: Classic ($135, 4 courses), Signature ($160, 6 courses, "Most Popular"), Chef's Table ($180, 6 courses + 2 drinks)
- Shared add-ons as emoji chips: 📹 Video $250/event, 👔 Apron $50/person, 🍷 Beer & Wine $20/person
- Conditional content driven by `eventType`:
  - Title: "Private Event Packages" / "Team Experience Packages"
  - Callout: "Ask about special pricing for couples..." / "Ask about custom experiences for your team"
  - CTA: "Plan My Event" / "Get in Touch"
- Layout: max-w-[680px], rounded-2xl, p-7, centered text throughout
- Cards: 3-column grid, centered text, course info in gray pill, no feature bullet lists
- Add-ons: horizontal flex-wrap chips (emoji + name + bold price)
- Callout: purple-pale background box
- Disclaimers: 11px muted text at bottom

### Files to modify

**`src/pages/ClassesPage.tsx`**
- Replace `PrivateEventPackagesModal` import with `PackagesModal`
- Update usage: `<PackagesModal isOpen={showPackages} eventType="private" onClose={...} onSubmit={...} />`

**`src/pages/TeamsPage.tsx`**
- Replace `TeamPackagesModal` import with `PackagesModal`
- Update usage: `<PackagesModal isOpen={showPackages} eventType="corporate" onClose={...} onSubmit={...} />`

### Files to delete
- `src/components/chef/PrivateEventPackagesModal.tsx`
- `src/components/chef/TeamPackagesModal.tsx`


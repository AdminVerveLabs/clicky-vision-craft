

# Make Packages Modal Fit Without Scrolling on Desktop

## Problem
The modal currently uses `max-h-[90vh] overflow-y-auto` with generous padding and spacing, causing it to overflow and scroll on many desktop screens.

## Solution
Tighten spacing, reduce font sizes slightly, and shrink padding so everything fits within the viewport. Remove `overflow-y-auto` and `max-h-[90vh]` on desktop (keep scroll fallback for mobile).

## Changes to `src/components/chef/TeamPackagesModal.tsx`

### Container
- Change `max-h-[90vh] overflow-y-auto` to `md:max-h-none md:overflow-visible max-h-[90vh] overflow-y-auto` (scroll only on mobile)

### Inner padding
- Reduce `p-8 md:p-12` to `p-6 md:p-8`

### Header section
- Reduce `mb-10` to `mb-6`
- Reduce title from `text-[32px] md:text-[38px]` to `text-[26px] md:text-[30px]`
- Reduce `mb-4` on tag to `mb-2`
- Reduce description `mt-2` stays, keep it tight

### Pricing cards grid
- Reduce `mb-12` to `mb-6`
- Reduce card padding from `p-6` to `p-5`
- Reduce price font from `text-[36px]` to `text-[28px]`
- Reduce `mb-5` (below price) to `mb-3`
- Reduce feature list `space-y-3` to `space-y-2`
- Reduce feature text from `text-[13px]` to `text-[12px]`
- Reduce check icon container from `w-5 h-5` to `w-4 h-4` and icon from `w-3 h-3` to `w-2.5 h-2.5`

### Add-Ons section
- Reduce `mb-10` to `mb-6`
- Reduce `mb-5` (below "Optional Add-Ons" heading) to `mb-3`
- Reduce add-on card padding from `p-5` to `p-4`
- Reduce icon container from `w-11 h-11` to `w-9 h-9`

### CTA section
- Reduce button padding from `px-10 py-4` to `px-8 py-3`
- Reduce `mt-3` to `mt-2`

These reductions collectively save ~150-200px of vertical space, fitting comfortably in a 768px+ tall viewport without any scrolling.

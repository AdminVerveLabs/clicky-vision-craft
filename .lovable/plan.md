
# "View Packages" Modal + Multi-Step Booking Form on Teams Page

## Overview
Wire the "View Packages" CTA button in the Teams hero to open a packages modal. That modal contains a "Get in Touch!" CTA that opens a second, multi-step booking form modal. Both are styled to match the site's purple/orange/cream brand palette.

## Flow
1. User clicks **"View Packages"** in the Teams hero
2. **Packages Modal** opens -- shows 4 pricing tiers (Essentials, Classic, Premium, VIP), optional add-ons, and a "Get in Touch!" CTA
3. User clicks **"Get in Touch!"**
4. **Booking Form Modal** opens (packages modal stays behind the overlay) -- 4-step wizard with left sidebar showing a chef photo + step progress, and right side with form fields
5. Steps: Basics -> Details -> Package -> Confirm
6. On final step, user clicks "Book My Chat" which shows a toast confirmation and closes both modals

## New Files

### `src/components/chef/TeamPackagesModal.tsx`
A full-screen overlay modal containing:
- **Header**: "Team Experience Packages" + subtitle
- **4 pricing cards** in a row:
  - Essentials ($50/person) -- Hands-on cooking, all ingredients, chef-led, shared meal
  - Classic ($95/person) -- "Most Popular" badge with purple border highlight. Everything in Essentials + welcome drinks, recipe cards, team photo
  - Premium ($150/person) -- Everything in Classic + wine pairing, premium ingredients, custom menu consultation
  - VIP ($225/person) -- Everything in Premium + dedicated private chef, branded experience, post-event highlight reel
- **Optional Add-Ons** section: 3 cards (Event Videography $350 flat, Extended Catering $25/pp, Custom Aprons and Swag $18/pp)
- **"Get in Touch!" CTA** button (orange, rounded-full) that opens the booking form
- **Subtitle**: "Tell us about your event and we'll send a tailored proposal."
- Close (X) button top-right

**Styling**: White background, rounded-3xl, purple accents for "Most Popular" badge/border, checkmarks in purple, card borders in border color, cream background for add-on cards.

### `src/components/chef/TeamBookingFormModal.tsx`
A full-screen overlay modal with a two-panel layout:

**Left Panel (~40% width)**:
- Purple gradient overlay on top of `chef-joey-kitchen.jpg`
- Vertical step indicator with 4 steps: Basics, Details, Package, Confirm
- Each step shows an icon circle + label; active step shows sub-label; completed steps get a filled style
- Bottom: "Chef Joey" name + "Crafting unforgettable culinary experiences" tagline

**Right Panel (~60% width)**:
- Header: "Book a Chat with Chef Joey" + "Step X of 4 -- [step subtitle]"
- **Step 1 (Basics)**: Name*, Email*, Company, Phone fields
- **Step 2 (Details)**: Occasion* (select dropdown with occasion options), Estimated Group Size*, Preferred Date (date input), Location Preference* (select: Our Kitchen, Your Office, Your Venue, Virtual)
- **Step 3 (Package)**: Package Tier* (select: Essentials/Classic/Premium/VIP), Add-Ons (checkboxes for the 3 add-ons), Special Requests (textarea)
- **Step 4 (Confirm)**: "Review Your Inquiry" -- summary table showing all entered data; CTA changes to "Book My Chat" with a chat icon
- Navigation: Back/Next buttons; progress bar at bottom showing 25/50/75/100% complete
- Close (X) button top-right

**Styling**: Form inputs use existing Input component styles with rounded-lg borders. Select dropdowns use native HTML selects styled with the site's font and purple focus ring. Progress bar uses purple fill. Next/Book My Chat buttons are purple rounded-full. Back button is outlined.

## Modified Files

### `src/pages/TeamsPage.tsx`
- Import both new modal components
- Add state: `showPackages` (boolean), `showBookingForm` (boolean)
- Wire "View Packages" button `onClick` to set `showPackages(true)`
- Render `TeamPackagesModal` when `showPackages` is true, passing `onClose` and `onGetInTouch` (which sets `showBookingForm(true)`)
- Render `TeamBookingFormModal` when `showBookingForm` is true, passing `onClose` (which closes both modals)

## Technical Details

- Both modals use `fixed inset-0 z-[9999]` overlay pattern (matching existing ClassModal)
- Form state managed with useState (no react-hook-form needed for this simple wizard)
- Basic client-side validation: required fields checked before allowing "Next"
- No backend integration -- the "Book My Chat" button shows a sonner toast ("We'll be in touch within 24 hours!") and closes
- Occasion dropdown populated from the existing `occasions` array labels
- The booking form modal renders on top of the packages modal (higher z-index or packages modal stays visible behind the dark overlay)

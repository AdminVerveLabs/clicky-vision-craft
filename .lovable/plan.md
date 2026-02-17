

# Add Private Event Packages Modal to Classes & Events Page

## What Changes

1. **Rename the hero CTA** from "Chat with Joey" to "Private Event" on the Classes & Events page.
2. **Create a new `PrivateEventPackagesModal`** component, modeled after `TeamPackagesModal`, with private-event-specific packages and add-ons, using orange accent colors (instead of purple).
3. **Create a new `PrivateEventBookingFormModal`** component, modeled after `TeamBookingFormModal`, as a 4-step inquiry wizard tailored for private events (occasion types like birthdays, anniversaries, etc.).
4. **Wire up the flow** on `ClassesPage.tsx`: clicking "Private Event" opens the packages modal; clicking the CTA inside that modal opens the multi-step booking form.

## New Files

### `src/components/chef/PrivateEventPackagesModal.tsx`
- Same structure as `TeamPackagesModal` but with private-event pricing:
  - **Intimate** ($125/person): Up to 10 guests, custom menu, chef-led experience, shared dining
  - **Celebration** ($165/person, "Most Popular"): Up to 20 guests, welcome cocktails, recipe cards, event photos
  - **Grand** ($200/person): Up to 30 guests, wine pairing, premium ingredients, custom decor
- Add-ons: Custom cake ($150 flat), Wine upgrade ($20/person), Decor package ($250 flat)
- Orange accent color scheme instead of purple
- CTA button "Plan My Event" triggers `onGetInTouch` callback

### `src/components/chef/PrivateEventBookingFormModal.tsx`
- 4-step wizard matching the `TeamBookingFormModal` pattern:
  1. **Basics**: Name, email, phone
  2. **Details**: Occasion type (Birthday, Anniversary, Bachelorette, Girls' Night, Retirement, Other), guest count, preferred date, location
  3. **Package**: Select tier + add-ons
  4. **Confirm**: Review & submit
- Orange accent colors to match the Classes & Events branding
- Uses same UI components (Input, Textarea, Checkbox, Progress)

## File Modified

### `src/pages/ClassesPage.tsx`
- Import `useState`, both new modals
- Add state: `showPackages`, `showBookingForm`
- Change line 168 button text from "Chat with Joey" to "Private Event", wire `onClick` to open packages modal
- Render both modals at the bottom, with the packages modal's CTA transitioning to the booking form (same pattern as TeamsPage)

## Flow

```
"Private Event" button (hero)
  --> PrivateEventPackagesModal (pricing tiers + add-ons)
    --> "Plan My Event" CTA
      --> PrivateEventBookingFormModal (4-step wizard)
        --> Submit --> toast confirmation
```


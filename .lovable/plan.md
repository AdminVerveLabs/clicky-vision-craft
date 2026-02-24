

# Move "Calgary's Creole Cooking Experience" Pill Below Google Reviews

## Single file change: `src/pages/HomePage.tsx`

### Current order (lines 31-59):
1. Pill badge ("Calgary's Creole Cooking Experience") — lines 32-35
2. H1 headline — lines 36-40
3. CTA buttons — lines 41-44
4. Social proof / Google Reviews — lines 47-59

### New order:
1. H1 headline
2. CTA buttons
3. Social proof / Google Reviews
4. Pill badge (moved here, with adjusted spacing: remove `mb-7`, add `mt-6`)

The pill's `mb-7` margin-bottom gets replaced with `mt-6` margin-top since it now sits below the reviews block instead of above the headline. All other styling stays identical.


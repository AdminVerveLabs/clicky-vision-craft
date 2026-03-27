

## Fix all orange accent text to purple on light backgrounds

The italic emphasis words in headlines are still orange but should be purple per the accent rules. Orange should only remain for truly semantic uses (Google review stars, "spots left" urgency indicators).

### Changes (9 files, ~1 line each)

**Headline emphasis text — change `text-orange` to `text-purple`:**

1. `src/pages/ClassesPage.tsx` line 166: "here"
2. `src/pages/PublicClassesPage.tsx` line 31: "Eat well."
3. `src/pages/TeamsPage.tsx` line 197: "pizza in the boardroom"
4. `src/pages/classes/OpenClassesPage.tsx` line 54: "flavors"
5. `src/pages/classes/SpecialOccasionsPage.tsx` line 24: "unforgettable"
6. `src/pages/classes/KidsPartyPage.tsx` line 24: "ever"
7. `src/pages/classes/CateringPage.tsx` line 24: "delivered"
8. `src/pages/classes/FriendsPage.tsx` line 24: "kitchen"
9. `src/pages/classes/PrivateEventsPage.tsx` line 24: "menu"

**Keep orange (semantic):**
- Google review stars (`fill-orange text-orange`) in ClassesPage — these represent star ratings
- "🔥 X spots left" urgency text in calendar cells
- Footer hover color (`hover:text-orange-light`) — dark bg, not light
- CTAButton orange variant definition — kept for potential future use
- ServiceCard orange decorative circle — already mapped to purple in prior update

**No other changes needed.** All other orange references are either in dark/purple backgrounds or semantic indicators.


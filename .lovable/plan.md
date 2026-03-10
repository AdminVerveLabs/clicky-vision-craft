

## Add fake private/corporate events to the calendar

**File: `src/data/classData.ts`**

1. Add an optional `private?: boolean` field to the `ClassData` interface
2. Add ~4-5 private/corporate entries to `CLASS_DATA` on days that don't already have classes (e.g., days 3, 10, 16, 20, 25), with types like "Private Event" and "Corporate Team Building", `private: true`

**File: `src/pages/ClassesPage.tsx`** (calendar rendering, ~lines 401-415)

3. When rendering a class card, check `cls.private` — if true:
   - Use a distinct muted style (e.g., `bg-sage/10 border border-sage/20`, italic text)
   - Show label like "Private Event" or "Corporate Booking" instead of time
   - No `onClick`, no cursor-pointer, no hover effects
   - No spots/sold-out logic

**File: `src/pages/classes/OpenClassesPage.tsx`** (same calendar pattern, ~lines 130-145)

4. Same rendering treatment for private events

**File: `src/pages/ClassesPage.tsx`** (legend, ~line 428)

5. Add a "Private / Corporate" entry to the legend

**Example private events:**
- Day 3: "Private Birthday Dinner" (Private Event)
- Day 10: "Acme Corp Team Building" (Corporate)  
- Day 16: "Private Cooking Party" (Private Event)
- Day 20: "EnergyCo Client Dinner" (Corporate)
- Day 25: "Anniversary Celebration" (Private Event)


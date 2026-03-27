

## Redesign ClassModal — Banner Image Layout

Replace the current compact layout with an Airbnb/ClassPass-style banner image modal.

### Layout

```text
┌──────────────────────────────────┐
│  [Banner image - 16:9 ratio]   ✕ │  ~130px tall, rounded top only
├──────────────────────────────────┤
│  PUBLIC 🔥3 spots     $89/person │  header row
│  Creole Comfort Classics         │  title 18px medium
│  Feb 1 · 10AM · 2.5hrs · All    │  single meta line, muted
│                                  │
│  Description text in muted...    │  13px, relaxed line-height
│──────────────────────────────────│  subtle divider
│  ON THE MENU                     │
│  Gumbo · Rice · Cornbread · ...  │
│                                  │
│  ✅ All ingredients, equipment…  │  green bg callout, single line
│                                  │
│  [ Gift This Class ] [ Get Cooking ] │
└──────────────────────────────────┘
```

### Changes to `src/components/chef/ClassModal.tsx`

**Modal container**: Change to `max-w-[440px]`, `rounded-xl`, `bg-white`, no top padding (image bleeds to edges). Content area gets `px-5 pb-5 pt-4`.

**Banner image**: Full-width `img` with `rounded-t-xl`, aspect ratio ~2:1 (`h-[140px]`), `object-cover`. Close button overlaid on image top-right with `bg-black/40 backdrop-blur-sm text-white` circle.

**Header row**: Flex with justify-between. Left: green pill badge + spots indicator. Right: price (`text-lg font-extrabold`) with `/person` in smaller muted text.

**Title + meta**: Title as `text-lg font-medium`. Single meta line combining date, time, duration, and level separated by `·` in muted text.

**Description**: `text-[13px] text-dark/70 leading-relaxed`, compact paragraph.

**On the Menu**: `border-t border-dark/10` divider, uppercase label in `text-[10px] text-dark/30`, items joined with ` · `.

**What's Included**: Compact single-line callout — `bg-green/10 rounded-lg px-3 py-2.5` with inline flex: green checkmark icon + text. Keep to one line.

**CTA buttons**: "Gift This Class" secondary ~40%, "Get Cooking" green ~60%, using existing `CTAButton`. Sold-out state: single disabled button.

### Single file modified
- `src/components/chef/ClassModal.tsx`


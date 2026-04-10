

## Plan: Add YouTube Video Between "Meet Your Host" and "Flexible Formats"

### What changes
In `src/pages/TeamsPage.tsx`, insert a video section between the "Meet Your Host" content (line 230) and the "Flexible Formats" divider (line 232).

### Implementation
Add this block after the closing `</div>` of the Meet Your Host grid (line 230):

```tsx
{/* Video Section */}
<div className="mt-10 pt-8 border-t border-border/50">
  <SectionTag>Enbridge Team with Chef Joey</SectionTag>
  <div className="mt-4 rounded-2xl overflow-hidden shadow-lg">
    <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
      <iframe
        className="absolute inset-0 w-full h-full"
        src="https://www.youtube.com/embed/Q9RCypt9kuQ"
        title="Enbridge Team with Chef Joey"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  </div>
</div>
```

This uses a 16:9 aspect ratio container with rounded corners and shadow to match the page's design language, placed with the same divider style used before "Flexible Formats."


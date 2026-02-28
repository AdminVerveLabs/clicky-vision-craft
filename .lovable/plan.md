

## Update Navbar Logo

### File: `src/components/chef/Nav.tsx`

1. Copy uploaded image to project: `user-uploads://image-24.png` → `src/assets/chef-joey-wordmark.png`
2. Replace the logo import from `chef-joey-logo.png` to `chef-joey-wordmark.png`
3. Remove the circular `img` + "Chef Joey" `span` combo and replace with a single `img` tag showing the new wordmark logo
4. Style the new logo: ~120px wide, auto height, with appropriate sizing for the navbar
5. Apply the same approach in the mobile sheet header (around line 155)
6. Adjust color handling: since the logo appears to be a light/cream color, it will be visible on the transparent hero nav but may need a dark version or CSS filter for the scrolled (white background) state — will use `filter: brightness(0)` or similar when `scrolled` is true and page is not home


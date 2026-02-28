

## Replace Logo in Footer

### File: `src/components/chef/Footer.tsx`

1. Change import from `chef-joey-logo.png` to `chef-joey-wordmark.png`
2. Replace the circular logo `img` + "Chef Joey" `span` combo with a single wordmark `img` tag (~120px wide, auto height)
3. Apply `filter: brightness(0) invert(1)` so the wordmark appears white on the dark footer background


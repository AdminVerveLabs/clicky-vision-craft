

# Replace "CJ" Logo with Uploaded Image

## What Changes
Replace the circular purple "CJ" text placeholder with the uploaded logo image in all three locations where it appears.

## Steps

1. **Copy the uploaded image** into `src/assets/chef-joey-logo.png`
2. **Update `src/components/chef/Nav.tsx`** (2 locations):
   - Line 86-88 (desktop nav): Replace the `<div>CJ</div>` with an `<img>` tag importing the logo
   - Line 175-177 (mobile drawer): Same replacement
3. **Update `src/components/chef/Footer.tsx`** (1 location):
   - Line 42-44: Replace the `<div>CJ</div>` with the same `<img>` tag

## Technical Details

- Import the image as an ES6 module: `import chefJoeyLogo from "@/assets/chef-joey-logo.png"`
- Replace each `<div className="w-10 h-10 rounded-full bg-purple ...">CJ</div>` with:
  ```tsx
  <img src={chefJoeyLogo} alt="Chef Joey" className="w-10 h-10 rounded-full object-cover" />
  ```
- The image is already circular with a purple background, so the `rounded-full` class will match seamlessly.

## Files Changed (2 files + 1 asset copy)
- `src/assets/chef-joey-logo.png` (new -- copied from upload)
- `src/components/chef/Nav.tsx` (lines 86-88, 175-177)
- `src/components/chef/Footer.tsx` (lines 42-44)


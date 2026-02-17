

# Add Blog Page to Chef Joey's Website

## Overview
Create a new Blog page that follows the layout structure shown in the reference screenshots, rebranded to match Chef Joey's purple/orange visual identity with Playfair Display headings and DM Sans body text.

## Page Structure

The blog page will have four sections:

### 1. Blog Header
- "FROM THE KITCHEN" section tag (purple, using existing SectionTag component)
- "Chef Joey's *Blog*" as the main heading (Playfair Display, with "Blog" in italic)
- Subtitle: "Recipes, tips, and stories from behind the apron."

### 2. Category Navigation
- Horizontal tab bar with categories: Recipes, Tips, Stories, Events
- Each with a subtitle (e.g., "Mains & Sides", "Techniques & Hacks")
- Purple underline on active/hover, matching brand style

### 3. Featured Post Section (two-column layout)
- Left: Large featured image (using chef-joey-116.jpg) with "FEATURED" badge and date overlay
- Right: "Cooking Tips" sidebar card with 3 tips (Mise en Place, Seasoning Layers, Rest Your Meat) and a "More Tips" link in purple
- Below the image: Post title (Playfair Display serif heading) and excerpt text

### 4. Recent Posts List
- "RECENT POSTS" section tag
- List of posts as minimal cards with:
  - Category badge (purple pill), read time
  - Post title (Playfair Display bold)
  - One-line excerpt (DM Sans, gray)
  - Divider between posts

## Technical Details

### New Files
1. **`src/pages/BlogPage.tsx`** -- Main blog page component with static/hardcoded blog content (no backend needed)
2. **`src/data/blogData.ts`** -- Blog post data and cooking tips data extracted into a data file for clean separation

### Modified Files
3. **`src/App.tsx`** -- Add route: `/blog` pointing to BlogPage
4. **`src/components/chef/Nav.tsx`** -- Add "Blog" as a new top-level nav item (no dropdown children), positioned before "About Joey"

### Styling Approach
- Reuse existing brand tokens: purple for accents, orange for featured badge, cream background
- Use SectionTag component for labels
- Playfair Display for headings, DM Sans for body
- Featured image uses existing uploaded photo (chef-joey-116.jpg)
- Rounded corners, subtle shadows, and spacing consistent with other pages
- Footer and NewsletterBanner included at the bottom

### Blog Post Data (Static)
Four sample posts will be hardcoded:
1. **Featured**: "The Art of Cooking Together: Why Shared Meals Build Stronger Bonds" (Story)
2. "Creole Shrimp & Grits: A Southern Classic Elevated" (Recipe, 8 min read)
3. "Inside Our Holiday Team-Building Cook-Off" (Event Recap, 4 min read)
4. "Why I Left Fine Dining to Cook With People" (Story, 8 min read)


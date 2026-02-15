

# Chef Joey Website — Visual Prototype Replication

## Overview
Replicate the complete Chef Joey creole cooking experience website as a clickable visual prototype. This is a front-end only build — no backend needed.

## Pages to Build

### 1. Homepage
- Full-screen purple gradient hero with "Soul food. Good times. Real skills." headline
- Social proof bar (5-star rating, 200+ reviews, avatar stack)
- Two-path chooser: "Corporate & Teams" vs "Classes & Events"
- Meet the Chef section with bio excerpt
- Testimonials grid (3 cards)
- "How It Works" 3-step section
- Newsletter signup banner
- Full footer with navigation links

### 2. For Teams (B2B) Page
- Hero with "Build culture, not just lunch plans" heading
- Stats bar (200+ events, 50+ companies, 5.0 rating)
- 6 use-case service cards (Team Building, All-Hands, Onboarding, Client Entertainment, Holiday, Custom)
- Format options: At Our Kitchen / At Your Location / Virtual
- Purple gradient CTA section

### 3. Classes & Events (B2C) Page
- Hero with "Your next great meal starts here"
- Experience type cards (Public Classes, Private Parties, Kids Cooking, Signature Sessions, Gift Certificates)
- **Interactive calendar** with month navigation (Jan/Feb/Mar 2026), class events on days, food emoji decorations on empty days
- **Class detail modal** — clicking a class opens a full modal with menu items, pricing, location, duration, and Book Now / Gift This Class buttons
- 9 pre-populated class entries with details (Creole Comfort Classics, Date Night Pasta, Kids Pizza Party, Vietnamese Lunar New Year, etc.)

### 4. Team Building Sub-Page
- Detailed team building experience page with hero, experience details list, "What to Expect" timeline, and location card

### 5. Public Classes Sub-Page
- Breadcrumb navigation
- Grid of 6 upcoming class cards with dates, prices, spot counts, and "Almost Full" badges
- "What every class includes" feature bar

### 6. About Joey Page
- Portrait placeholder with gradient background
- Bio text with personality and warmth
- CTA buttons for booking and contact

## Shared Components
- **Sticky navigation** — transparent on hero, white on scroll, with "Book a Class" CTA button
- **Footer** — dark background with organized link columns, contact info
- **Newsletter banner** — purple gradient with email input
- **Reusable cards** — ServiceCard, TestimonialCard, CTAButton, SectionTag

## Design System
- **Colors**: Purple (#6B21A8) as primary, Orange (#E8590C) as accent, Cream (#FFFBF5), Sage green
- **Fonts**: Playfair Display (serif headings), DM Sans (body text) via Google Fonts
- **Style**: Rounded corners (20-24px), hover lift animations, gradient backgrounds, emoji placeholders for images

## Navigation
All pages connected via in-app state-based routing with smooth scroll-to-top on page change. Every nav link, card, and CTA is clickable and navigates to the appropriate page.


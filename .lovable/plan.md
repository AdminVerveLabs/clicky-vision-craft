

# Rename Booking CTAs to "Chat with Joey"

## What Changes
Replace all "Book a Class", "Book Now", "Book a Call", "Book a Free Call", "Book for Friends", "Book a Kids Party", "Book a Party", "Plan My Event", and "Start Planning" CTA button labels with "Chat with Joey" across the entire site.

## Files Changed (14 files)

### Navigation
- **`src/components/chef/Nav.tsx`** (line 150): "Book a Class" -> "Chat with Joey"

### Main Pages
- **`src/pages/AboutPage.tsx`** (line 38): "Book a Class" -> "Chat with Joey"
- **`src/pages/ClassesPage.tsx`** (line 168): "Book a Private Event" -> "Chat with Joey" | (line 286): "Book Now" -> "Chat with Joey"
- **`src/pages/TeamsPage.tsx`** (lines 163, 295, 340): all "Book a Call" -> "Chat with Joey"
- **`src/pages/TeamBuildingPage.tsx`** (line 35): "Book a Call" -> "Chat with Joey" | (line 113): "Book a Free Call" -> "Chat with Joey"
- **`src/pages/PublicClassesPage.tsx`** (line 58): "Book Now" -> "Chat with Joey"

### Class Sub-pages
- **`src/pages/classes/FriendsPage.tsx`** (line 31): "Book for Friends" -> "Chat with Joey" | (line 83): "Book Now" -> "Chat with Joey"
- **`src/pages/classes/PrivateEventsPage.tsx`** (line 31): "Plan My Event" -> "Chat with Joey" | (line 83): "Start Planning" -> "Chat with Joey"
- **`src/pages/classes/KidsPartyPage.tsx`** (line 31): "Book a Kids Party" -> "Chat with Joey" | (line 83): "Book a Party" -> "Chat with Joey"

### Team Sub-pages
- **`src/pages/teams/TeamEventsPage.tsx`** (line 34): "Book a Call" -> "Chat with Joey" | (line 86): "Book a Free Call" -> "Chat with Joey"
- **`src/pages/teams/AllHandsPage.tsx`** (line 34): "Book a Call" -> "Chat with Joey" | (line 86): "Book a Free Call" -> "Chat with Joey"
- **`src/pages/teams/ClientEntertainmentPage.tsx`** (line 34): "Book a Call" -> "Chat with Joey" | (line 86): "Book a Free Call" -> "Chat with Joey"
- **`src/pages/teams/OnboardingPage.tsx`** (line 34): "Book a Call" -> "Chat with Joey" | (line 86): "Book a Free Call" -> "Chat with Joey"

### Modal
- **`src/components/chef/ClassModal.tsx`** (line 115): "Book Now" -> "Chat with Joey"

### Not Changed (intentionally)
- Buttons with different intent like "Get a Quote", "Request a Quote", "Share Your Vision", "Start the Conversation", "View Schedule", "Browse Upcoming Classes" -- these are not booking CTAs per the request. Let me know if you want those changed too.


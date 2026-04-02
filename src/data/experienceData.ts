// === Experience Data Types & Content ===

import heroValentines from "@/assets/example-valentines.jpg";
import galleryValentines2 from "@/assets/example-valentines-2.jpg";
import galleryValentines3 from "@/assets/chef-joey-106.jpg";
import galleryValentines4 from "@/assets/chef-joey-85.jpg";

import heroCreole from "@/assets/example-creole.jpg";
import galleryCreole2 from "@/assets/example-creole-2.jpg";
import galleryCreole3 from "@/assets/chef-joey-116.jpg";
import galleryCreole4 from "@/assets/chef-joey-58.jpg";
import galleryCreole5 from "@/assets/chef-joey-83.jpg";

import heroKidsBake from "@/assets/example-kids-bake.jpg";
import galleryKidsBake2 from "@/assets/example-kids-bake-2.jpg";
import galleryKidsBake3 from "@/assets/chef-joey-58.jpg";
import galleryKidsBake4 from "@/assets/chef-joey-79.jpg";

import heroTeamCreole from "@/assets/example-team-creole.jpg";
import galleryTeamCreole1 from "@/assets/chef-joey-41.jpg";
import galleryTeamCreole2 from "@/assets/chef-joey-114.jpg";
import galleryTeamCreole3 from "@/assets/example-creole-2.jpg";
import galleryTeamCreole4 from "@/assets/chef-joey-113.jpg";

import heroMealPrep from "@/assets/example-meal-prep.jpg";
import galleryMealPrep1 from "@/assets/ywca-kitchen-056.jpg";
import galleryMealPrep2 from "@/assets/chef-joey-61.jpg";
import galleryMealPrep3 from "@/assets/ywca-kitchen-074.jpg";

export interface MenuItem {
  courseType: string;
  dishName: string;
  description: string;
  icon: string;
  iconBgColor: string;
}

export interface VideoData {
  thumbnailUrl: string;
  videoUrl: string;
  duration?: string;
}

export interface GalleryImage {
  url: string;
  alt: string;
  width?: "small" | "medium" | "large";
}

export interface ChefNotes {
  text: string;
  attribution?: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface CTAConfig {
  headline: string;
  subheadline: string;
  primaryButton: { label: string; href: string };
  secondaryButton: { label: string; href: string };
}

export interface ExperienceData {
  slug: string;
  segment: "classes" | "teams";
  metaTitle: string;
  metaDescription: string;
  ogImage: string;

  heroImage: string;
  badge?: string;
  date: string;
  title: string;
  tagline: string;
  statBarColor?: string;

  menuItems: MenuItem[];
  menuSectionTitle?: string;

  introParagraph: string;
  bodyParagraph: string;
  quote: {
    text: string;
    attribution: string;
  };

  video?: VideoData;
  chefNotes?: ChefNotes;

  galleryImages: GalleryImage[];
  gallerySectionTitle?: string;

  stats: Stat[];

  cta: CTAConfig;
}

export const experiences: ExperienceData[] = [
  {
    slug: "valentines-day",
    segment: "classes",
    metaTitle: "Valentine's Day Couples Cooking Class | Chef Joey",
    metaDescription: "A romantic evening of cooking, wine, and candle-lit dining. 12 couples joined Chef Joey for an unforgettable Valentine's Day.",
    ogImage: heroValentines,
    heroImage: heroValentines,
    date: "Valentine's Day 2024",
    title: "A Night of Love, Lobster & Laughter",
    tagline: "12 couples. 4 courses. One unforgettable evening.",
    menuItems: [
      { courseType: "Appetizer", dishName: "Seared Scallops", description: "with citrus beurre blanc", icon: "🍽️", iconBgColor: "hsl(340 80% 94%)" },
      { courseType: "Main", dishName: "Lobster Risotto", description: "with truffle oil", icon: "🦞", iconBgColor: "hsl(20 90% 93%)" },
      { courseType: "Side", dishName: "Roasted Asparagus", description: "with parmesan crisps", icon: "🌿", iconBgColor: "hsl(120 40% 92%)" },
      { courseType: "Dessert", dishName: "Tiramisu for Two", description: "with espresso cream", icon: "🍰", iconBgColor: "hsl(30 80% 93%)" },
    ],
    introParagraph: "What started as a cooking class became a full-on romantic experience. Couples arrived to a kitchen filled with roses, soft music, and the aroma of butter hitting hot pans.",
    bodyParagraph: "Chef Joey walked everyone through a four-course menu — from perfectly seared scallops to a decadent tiramisu. Partners worked side by side, laughing through pasta mishaps and celebrating every perfectly plated dish.",
    quote: {
      text: "\"The best date night we've ever had — and we've been married 20 years.\"",
      attribution: "— Sarah & Mike, Calgary",
    },
    chefNotes: {
      text: "\"This was one of those magical nights where everything just clicked. Watching couples who'd never cooked together suddenly become a team — that's why I do this.\"",
      attribution: "— Chef Joey",
    },
    galleryImages: [
      { url: heroValentines, alt: "Couples cooking together", width: "large" },
      { url: galleryValentines2, alt: "Heart-shaped chocolate desserts", width: "medium" },
      { url: galleryValentines3, alt: "Hands-on cooking instruction", width: "small" },
      { url: galleryValentines4, alt: "Plated dishes from the evening", width: "large" },
    ],
    gallerySectionTitle: "Moments from the night",
    stats: [
      { value: "12", label: "Couples attended" },
      { value: "4", label: "Courses prepared" },
      { value: "3 hrs", label: "Of cooking & dining" },
      { value: "100%", label: "Would come again" },
    ],
    cta: {
      headline: "Want an evening like this?",
      subheadline: "Book a couples class or plan your own private event.",
      primaryButton: { label: "Browse Classes", href: "/classes" },
      secondaryButton: { label: "Private Events", href: "/classes/private-events" },
    },
  },
  {
    slug: "signature-creole",
    segment: "classes",
    metaTitle: "Signature Creole Cooking Experience | Chef Joey",
    metaDescription: "The heart and soul of Chef Joey's kitchen — a deep dive into authentic southern creole cooking with 16 adventurous home cooks.",
    ogImage: heroCreole,
    heroImage: heroCreole,
    date: "Signature Series",
    title: "Southern Soul in Every Bite",
    tagline: "16 guests. 5 dishes. Pure creole magic.",
    menuItems: [
      { courseType: "Starter", dishName: "Chicken & Andouille Gumbo", description: "slow-simmered perfection", icon: "🍲", iconBgColor: "hsl(20 90% 93%)" },
      { courseType: "Main", dishName: "Blackened Catfish", description: "with Cajun butter", icon: "🐟", iconBgColor: "hsl(200 60% 92%)" },
      { courseType: "Side", dishName: "Dirty Rice", description: "with trinity vegetables", icon: "🍚", iconBgColor: "hsl(40 80% 93%)" },
      { courseType: "Dessert", dishName: "Bananas Foster Flambé", description: "tableside drama", icon: "🍌", iconBgColor: "hsl(50 90% 92%)" },
    ],
    introParagraph: "This is the class that started it all. Chef Joey's signature creole experience brings the flavors of Louisiana to Calgary — from a slow-simmered gumbo to a dramatic tableside bananas foster flambé.",
    bodyParagraph: "Guests learned to build a roux from scratch, season cast iron like a pro, and master the \"holy trinity\" of creole cooking. The kitchen was loud, the laughs were big, and the food was absolutely incredible.",
    quote: {
      text: "\"I've taken cooking classes in New York and Paris — this one in Calgary was hands down the most fun. Chef Joey's energy is unmatched.\"",
      attribution: "— Sarah M., Class Attendee",
    },
    chefNotes: {
      text: "\"Creole cooking isn't just about recipes — it's about soul. When I see a room full of strangers become a family over a pot of gumbo, that's the real magic.\"",
      attribution: "— Chef Joey",
    },
    galleryImages: [
      { url: heroCreole, alt: "Creole cooking spread", width: "large" },
      { url: galleryCreole2, alt: "Shrimp and grits close-up", width: "medium" },
      { url: galleryCreole3, alt: "Chef Joey teaching technique", width: "small" },
      { url: galleryCreole4, alt: "Guests cooking together", width: "medium" },
      { url: galleryCreole5, alt: "Plating the final dish", width: "small" },
    ],
    gallerySectionTitle: "From the kitchen",
    stats: [
      { value: "16", label: "Guests" },
      { value: "5", label: "Dishes prepared" },
      { value: "2.5 hrs", label: "Hands-on cooking" },
      { value: "4.9★", label: "Average rating" },
    ],
    cta: {
      headline: "Ready to get cooking?",
      subheadline: "Join an upcoming creole class or book a private session.",
      primaryButton: { label: "Browse Classes", href: "/classes" },
      secondaryButton: { label: "Private Events", href: "/classes/private-events" },
    },
  },
  {
    slug: "kids-bake",
    segment: "classes",
    metaTitle: "Kids Learn to Bake | Chef Joey",
    metaDescription: "Flour-covered aprons, rainbow frosting, and the proudest little bakers you've ever seen.",
    ogImage: heroKidsBake,
    heroImage: heroKidsBake,
    date: "Kids Series",
    title: "Tiny Chefs, Big Smiles",
    tagline: "14 kids. 4 bakes. Unlimited sprinkles.",
    statBarColor: "sage",
    menuSectionTitle: "The Bakes",
    menuItems: [
      { courseType: "Bake", dishName: "Chocolate Chip Cookies", description: "from-scratch dough", icon: "🍪", iconBgColor: "hsl(30 80% 93%)" },
      { courseType: "Bake", dishName: "Rainbow Cupcakes", description: "layered batter & buttercream", icon: "🧁", iconBgColor: "hsl(340 80% 94%)" },
      { courseType: "Bake", dishName: "Mini Cinnamon Rolls", description: "rolled, twisted & glazed", icon: "🥐", iconBgColor: "hsl(40 80% 93%)" },
      { courseType: "Bake", dishName: "Decorated Sugar Cookies", description: "royal icing & total freedom", icon: "🎨", iconBgColor: "hsl(270 60% 93%)" },
    ],
    introParagraph: "Fourteen kids took over the kitchen for two hours of pure baking joy. They cracked eggs (mostly into the bowl), measured flour (some made it to the counter), and learned that patience is a real ingredient.",
    bodyParagraph: "Chef Joey kept it fun, safe, and hands-on the whole time. Every kid got their own station, their own apron and chef hat, and total creative freedom when it came to decorating. Every child went home with a box of their own creations.",
    quote: {
      text: "\"My daughter hasn't stopped baking since. She made cookies for the entire neighborhood.\"",
      attribution: "— Jennifer L., Parent",
    },
    galleryImages: [
      { url: heroKidsBake, alt: "Kids showing off cupcakes", width: "large" },
      { url: galleryKidsBake2, alt: "Colorful decorated cookies", width: "large" },
      { url: galleryKidsBake3, alt: "Hands-on baking instruction", width: "small" },
      { url: galleryKidsBake4, alt: "Kids having fun in the kitchen", width: "medium" },
    ],
    gallerySectionTitle: "The best kind of mess",
    stats: [
      { value: "14", label: "Kids attended" },
      { value: "Ages 6–12", label: "Age range" },
      { value: "2 hrs", label: "Of baking fun" },
      { value: "∞", label: "Sprinkles used" },
    ],
    cta: {
      headline: "Book a kids baking class",
      subheadline: "Perfect for birthdays, school breaks, or just a Saturday adventure.",
      primaryButton: { label: "Kids Classes", href: "/classes/kids-party" },
      secondaryButton: { label: "All Classes", href: "/classes" },
    },
  },
  {
    slug: "team-creole",
    segment: "teams",
    metaTitle: "Signature Creole Team Experience | Chef Joey",
    metaDescription: "When a tech company wanted to break down silos, we put their team in aprons and let the gumbo do the talking.",
    ogImage: heroTeamCreole,
    heroImage: heroTeamCreole,
    date: "Team Building Series",
    title: "Signature Creole Team Experience",
    tagline: "24 team members. 4 cooking stations. One legendary cook-off.",
    menuSectionTitle: "The Activities",
    menuItems: [
      { courseType: "Team Challenge", dishName: "Gumbo Cook-Off", description: "each team made their own version", icon: "🏆", iconBgColor: "hsl(45 90% 92%)" },
      { courseType: "Collaborative", dishName: "Jambalaya", description: "each station contributing a component", icon: "🍲", iconBgColor: "hsl(20 90% 93%)" },
      { courseType: "Skills Station", dishName: "Cornbread Bake-Off", description: "creative mix-ins", icon: "🌽", iconBgColor: "hsl(50 90% 92%)" },
      { courseType: "Finale", dishName: "Beignets & Chicory Coffee", description: "made together, eaten together", icon: "☕", iconBgColor: "hsl(30 80% 93%)" },
    ],
    introParagraph: "A 24-person engineering team arrived expecting a cooking class. They left with inside jokes, shared playlists, and a genuine sense of connection that their manager said \"no escape room ever achieved.\"",
    bodyParagraph: "We split them into four teams, each with their own cooking station. The challenge? Build the best gumbo from scratch. Chef Joey taught them the fundamentals — roux technique, seasoning by taste, the art of the slow simmer — then let them compete.",
    quote: {
      text: "\"Our team is still talking about this three months later. The gumbo cook-off has become legendary in our Slack channels.\"",
      attribution: "— Marcus T., Engineering Manager",
    },
    galleryImages: [
      { url: heroTeamCreole, alt: "Team cooking together", width: "large" },
      { url: galleryTeamCreole1, alt: "Teams at their stations", width: "small" },
      { url: galleryTeamCreole2, alt: "Plating competition", width: "medium" },
      { url: galleryTeamCreole3, alt: "The finished spread", width: "small" },
      { url: galleryTeamCreole4, alt: "Team celebration", width: "medium" },
    ],
    gallerySectionTitle: "Team in action",
    stats: [
      { value: "24", label: "Team members" },
      { value: "4", label: "Cooking stations" },
      { value: "2.5 hrs", label: "Of collaboration" },
      { value: "5.0★", label: "Team rating" },
    ],
    cta: {
      headline: "Book your team experience",
      subheadline: "Get your team out of the boardroom and into the kitchen.",
      primaryButton: { label: "Team Packages", href: "/teams" },
      secondaryButton: { label: "Learn More", href: "/teams/team-events" },
    },
  },
  {
    slug: "healthy-meal-prep",
    segment: "teams",
    metaTitle: "Healthy Meal Prep Team Session | Chef Joey",
    metaDescription: "A wellness-focused team experience where everyone went home with five prepped meals and a new appreciation for their coworkers.",
    ogImage: heroMealPrep,
    heroImage: heroMealPrep,
    date: "Wellness Series",
    title: "Healthy Meal Prep Team Session",
    tagline: "18 participants. 5 meals prepped. Zero cooking experience needed.",
    statBarColor: "sage",
    menuSectionTitle: "The Meals",
    menuItems: [
      { courseType: "Meal 1", dishName: "Mediterranean Quinoa Bowl", description: "grilled chicken, roasted veg, lemon tahini", icon: "🥗", iconBgColor: "hsl(120 40% 92%)" },
      { courseType: "Meal 2", dishName: "Teriyaki Salmon", description: "with sesame greens & brown rice", icon: "🐟", iconBgColor: "hsl(200 60% 92%)" },
      { courseType: "Meal 3", dishName: "Turkey & Black Bean Bowls", description: "cilantro lime rice, fresh pico", icon: "🌯", iconBgColor: "hsl(20 90% 93%)" },
      { courseType: "Meal 4", dishName: "Thai Peanut Noodle Jars", description: "mason jar lunches with crunchy veg", icon: "🥜", iconBgColor: "hsl(30 80% 93%)" },
    ],
    introParagraph: "When a local wellness company wanted a team activity that actually aligned with their values, the answer was obvious: get in the kitchen and cook real, healthy food together.",
    bodyParagraph: "Chef Joey designed a meal prep session where teams worked in pairs to prepare five different meals — enough for each person to take home a full week of lunches. The focus was on practical skills: batch cooking, smart portioning, flavor-building without relying on processed shortcuts.",
    quote: {
      text: "\"Everyone came back to the office on Monday eating their prepped meals. It started a whole healthy lunch movement on our team.\"",
      attribution: "— Lisa K., People & Culture Lead",
    },
    galleryImages: [
      { url: heroMealPrep, alt: "Healthy meal prep spread", width: "large" },
      { url: galleryMealPrep1, alt: "Kitchen workspace", width: "small" },
      { url: galleryMealPrep2, alt: "Team prepping ingredients", width: "medium" },
      { url: galleryMealPrep3, alt: "Portioned meals ready to go", width: "large" },
    ],
    gallerySectionTitle: "Fresh, colorful, collaborative",
    stats: [
      { value: "18", label: "Participants" },
      { value: "5", label: "Meals prepped" },
      { value: "2 hrs", label: "Session length" },
      { value: "Zero", label: "Experience needed" },
    ],
    cta: {
      headline: "Fuel your team",
      subheadline: "Book a healthy meal prep session for your next team wellness day.",
      primaryButton: { label: "Team Packages", href: "/teams" },
      secondaryButton: { label: "Custom Experience", href: "/teams/custom" },
    },
  },
];

export const getExperienceBySlug = (slug: string): ExperienceData | undefined =>
  experiences.find((e) => e.slug === slug);

export const getExperiencesBySegment = (segment: "classes" | "teams"): ExperienceData[] =>
  experiences.filter((e) => e.segment === segment);

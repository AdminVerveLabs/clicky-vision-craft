export interface RecipeCard {
  courseType: string;
  dishName: string;
  image?: string;
  emoji?: string;
  gradientFrom?: string;
  gradientTo?: string;
  recipeUrl: string;
}

export interface WinePairing {
  curatorName: string;
  curatorQuote: string;
  wines: Array<{
    name: string;
    description: string;
  }>;
  orderUrl: string;
  orderButtonText: string;
}

export interface Cocktail {
  name: string;
  image?: string;
  backgroundColor: string;
  ingredients: string[];
  instructions: string;
  attribution?: string;
}

export interface EventPageData {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  ogImage?: string;

  heroImage?: string;
  eventType: "private" | "corporate";
  dateTime: string;
  title: string;
  tagline: string;

  location: {
    type: "virtual" | "in-person";
    zoomLink?: string;
    meetingId?: string;
    passcode?: string;
    address?: string;
    mapsUrl?: string;
  };

  duration: string;
  arrivalNote?: string;

  prepDescription: string;
  downloads: Array<{
    title: string;
    subtitle: string;
    icon: string;
    pdfUrl: string;
  }>;

  menuTitle: string;
  menuSubtitle?: string;
  recipes: RecipeCard[];

  winePairing?: WinePairing;
  cocktail?: Cocktail;

  contactHeadline: string;
  contactSubheadline: string;
  contactButtonText: string;
  contactButtonUrl: string;
}

// Sample event for demonstration
const sampleEvent: EventPageData = {
  slug: "norlins-here-we-come",
  metaTitle: "\"N'Orlins\" Here We Come! — Chef Joey",
  metaDescription: "Get your beads ready — it's time for some Creole magic. A private cooking experience with Chef Joey.",
  eventType: "private",
  dateTime: "Saturday, March 15, 2025 · 5:30 PM",
  title: "\"N'Orlins\" Here We Come!",
  tagline: "Get your beads ready — it's time for some Creole magic.",
  location: {
    type: "virtual",
    zoomLink: "https://zoom.us/j/example",
  },
  duration: "2.5 hours",
  arrivalNote: "Sign on at 5:20pm, cooking starts 5:30pm sharp!",
  prepDescription: "Download everything you'll need for the class. Pre-prep is key — roughly 40 minutes of prep will make your cooking time smooth and fun!",
  downloads: [
    {
      title: "Class Agenda & Prep List",
      subtitle: "PDF · What to do before class",
      icon: "📋",
      pdfUrl: "#",
    },
    {
      title: "Shopping List",
      subtitle: "PDF · Everything you'll need",
      icon: "🛒",
      pdfUrl: "#",
    },
  ],
  menuTitle: "Ann kwit!",
  menuSubtitle: "(Let's go!)",
  recipes: [
    {
      courseType: "Main",
      dishName: "Shrimp & Grits",
      emoji: "🍤",
      gradientFrom: "#FFF3E0",
      gradientTo: "#FFE0B2",
      recipeUrl: "/blog",
    },
    {
      courseType: "Side",
      dishName: "Collard Greens",
      emoji: "🥬",
      gradientFrom: "#E8F5E9",
      gradientTo: "#C8E6C9",
      recipeUrl: "/blog",
    },
  ],
  winePairing: {
    curatorName: "Bernadette Bagshaw",
    curatorQuote: "\"I love to match wine and food together. Individually each item may be delicious, but a great food and wine pairing creates an experience that can be magical.\"",
    wines: [
      {
        name: "Pierre Sparr Pinot Grigio",
        description: "Aromas of fruit, apricots, peach — softly minerally with delicate sweetness",
      },
      {
        name: "Viña Real Crianza",
        description: "Deep cherry colour with ripe fruit aromas and subtle hints of oak",
      },
    ],
    orderUrl: "#",
    orderButtonText: "Order Wine (15% off at Northmount Liquor)",
  },
  cocktail: {
    name: "Death in the Afternoon",
    backgroundColor: "#4CAF50",
    ingredients: ["1½ oz absinthe", "4½ oz chilled Champagne"],
    instructions: "\"Pour one jigger absinthe into a Champagne glass. Add iced Champagne until it attains the proper opalescent milkiness.\"",
    attribution: "Ernest Hemingway",
  },
  contactHeadline: "Questions about your event?",
  contactSubheadline: "Chef Joey is here to help make your experience perfect.",
  contactButtonText: "💬 Chat with Joey",
  contactButtonUrl: "#",
};

const allEvents: EventPageData[] = [sampleEvent];

export function getEventBySlug(slug: string): EventPageData | undefined {
  return allEvents.find((e) => e.slug === slug);
}

export default allEvents;

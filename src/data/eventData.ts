export interface RecipeCard {
  courseType: string;
  dishName: string;
  image?: string;
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
  ogImage: string;

  heroImage: string;
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

  welcomeHeading?: string;
  welcomeMessage?: string;
}

const events: EventPageData[] = [
  {
    slug: "enbridge-team-cooking",
    metaTitle: "Enbridge Team Cooking Experience — Chef Joey",
    metaDescription:
      "Everything you need to prepare for your upcoming Enbridge team cooking experience with Chef Joey.",
    ogImage: "",
    heroImage:
      "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1400&q=80",
    eventType: "corporate",
    dateTime: "Saturday, March 15, 2025 · 5:30 PM",
    title: "Creole Classics with the Enbridge Team",
    tagline:
      "A hands-on cooking experience packed with bold flavors and good vibes.",

    location: {
      type: "virtual",
      zoomLink: "https://zoom.us/j/1234567890",
      meetingId: "123 456 7890",
      passcode: "chef2025",
    },

    duration: "2.5 hours",
    arrivalNote: "Sign on at 5:20pm, cooking starts 5:30pm sharp!",

    prepDescription:
      "Before the big day, grab your ingredients and review the agenda below. Everything you need is in these two downloads — print them out or keep them handy on your phone.",
    downloads: [
      {
        title: "Class Agenda & Prep List",
        subtitle: "PDF · What to do before class",
        icon: "📋",
        pdfUrl: "#",
      },
      {
        title: "Shopping List",
        subtitle: "PDF · Ingredients & quantities",
        icon: "🛒",
        pdfUrl: "#",
      },
    ],

    menuTitle: "Ann kwit!",
    menuSubtitle: "(Let's go!)",
    recipes: [
      {
        courseType: "Main",
        dishName: "Creole Shrimp & Grits",
        recipeUrl: "/blog",
      },
      {
        courseType: "Side",
        dishName: "Southern Cornbread Muffins",
        recipeUrl: "/blog",
      },
      {
        courseType: "Appetizer",
        dishName: "Cajun Deviled Eggs",
        recipeUrl: "/blog",
      },
      {
        courseType: "Dessert",
        dishName: "Bananas Foster",
        recipeUrl: "/blog",
      },
    ],

    winePairing: {
      curatorName: "Curated by Bernadette Bagshaw",
      curatorQuote:
        "I've paired wines that complement the bold, smoky flavors of creole cooking — a crisp Sauvignon Blanc to cut through the richness, and a Pinot Noir with enough fruit to stand up to the spice.",
      wines: [
        {
          name: "2022 Cloudy Bay Sauvignon Blanc",
          description:
            "Crisp citrus and tropical notes that pair beautifully with the shrimp and grits. A palate cleanser between bites.",
        },
        {
          name: "2021 Meiomi Pinot Noir",
          description:
            "Soft tannins with ripe cherry and vanilla. Holds its own against the cajun spice without overpowering the dish.",
        },
      ],
      orderUrl: "#",
      orderButtonText: "Order Wine (15% off at Northmount Liquor)",
    },

    cocktail: {
      name: "The Hemingway Daiquiri",
      backgroundColor: "#4CAF50",
      ingredients: [
        "2 oz white rum",
        "1 oz fresh lime juice",
        "½ oz maraschino liqueur",
        "½ oz fresh grapefruit juice",
        "¼ oz simple syrup",
      ],
      instructions:
        "Shake all ingredients with ice and strain into a chilled coupe. Garnish with a grapefruit wheel. As Hemingway himself might say — 'Don't bother with a recipe, just make it strong.'",
      attribution: "Ernest Hemingway",
    },

    contactHeadline: "Questions about your event?",
    contactSubheadline:
      "We're here to help — reach out anytime and we'll get back to you within 24 hours.",
    contactButtonText: "Send Us a Message",
    contactButtonUrl: "mailto:joinchefjoey@gmail.com",
  },
];

export function getEventBySlug(slug: string): EventPageData | undefined {
  return events.find((e) => e.slug === slug);
}

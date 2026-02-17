export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  featured?: boolean;
  image?: string;
}

export interface CookingTip {
  title: string;
  description: string;
}

export const categories = [
  { label: "Recipes", subtitle: "Mains & Sides" },
  { label: "Tips", subtitle: "Techniques & Hacks" },
  { label: "Stories", subtitle: "Behind the Apron" },
  { label: "Events", subtitle: "Recaps & Previews" },
];

export const cookingTips: CookingTip[] = [
  {
    title: "Mise en Place",
    description: "Prep all your ingredients before you start cooking. It keeps you calm and in control.",
  },
  {
    title: "Seasoning Layers",
    description: "Season at every stage — not just at the end. Build flavor from the bottom up.",
  },
  {
    title: "Rest Your Meat",
    description: "Let proteins rest after cooking so juices redistribute evenly. Patience pays off.",
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: "shared-meals",
    title: "The Art of Cooking Together: Why Shared Meals Build Stronger Bonds",
    excerpt:
      "There's something magical about standing side by side in a kitchen, chopping, stirring, and laughing together. In this post, I explore why cooking as a group creates deeper connections than any team meeting ever could.",
    category: "Stories",
    readTime: "6 min read",
    date: "February 10, 2026",
    featured: true,
  },
  {
    id: "shrimp-grits",
    title: "Creole Shrimp & Grits: A Southern Classic Elevated",
    excerpt:
      "My take on the ultimate comfort dish — with a creole twist that'll make your taste buds sing.",
    category: "Recipes",
    readTime: "8 min read",
    date: "February 3, 2026",
  },
  {
    id: "holiday-cook-off",
    title: "Inside Our Holiday Team-Building Cook-Off",
    excerpt:
      "A behind-the-scenes look at one of our most memorable corporate events of the season.",
    category: "Events",
    readTime: "4 min read",
    date: "January 28, 2026",
  },
  {
    id: "why-i-left",
    title: "Why I Left Fine Dining to Cook With People",
    excerpt:
      "The moment I realized the best meals aren't served — they're shared.",
    category: "Stories",
    readTime: "8 min read",
    date: "January 15, 2026",
  },
];

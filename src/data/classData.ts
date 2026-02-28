export interface ClassData {
  id: number;
  day: number;
  time: string;
  title: string;
  type: string;
  price: string;
  spots: number;
  soldOut: boolean;
  emoji: string;
  description: string;
  menu: string[];
  duration: string;
  level: string;
  included: string;
  location: string;
  private?: boolean;
}

export const CLASS_DATA: ClassData[] = [
  {
    id: 1, day: 1, time: "10:00 AM", title: "Creole Comfort Classics", type: "Public",
    price: "$89", spots: 3, soldOut: false, emoji: "🍲",
    description: "Dive into the heart of southern cooking with a hands-on creole session. You'll learn to make a proper roux-based gumbo, dirty rice with andouille sausage, and golden skillet cornbread.",
    menu: ["Chicken & Sausage Gumbo", "Dirty Rice", "Cast-Iron Cornbread", "Bananas Foster"],
    duration: "2.5 hours", level: "All Levels", included: "All ingredients, equipment, aprons, and recipe cards to take home",
    location: "YW Calgary Community Kitchen, Inglewood",
  },
  {
    id: 2, day: 7, time: "6:30 PM", title: "Date Night: Pasta from Scratch", type: "Couples",
    price: "$99", spots: 0, soldOut: true, emoji: "🍝",
    description: "Hand-rolled fettuccine, a creamy cajun alfredo, and a dessert worth fighting over. Perfect for couples, but bring whoever you want to impress.",
    menu: ["Hand-Rolled Fettuccine", "Cajun Alfredo Sauce", "Caesar Salad", "Chocolate Lava Cake"],
    duration: "3 hours", level: "All Levels", included: "All ingredients, wine pairings, equipment, aprons, recipe cards",
    location: "YW Calgary Community Kitchen, Inglewood",
  },
  {
    id: 3, day: 8, time: "10:00 AM", title: "Kids: Pizza Party", type: "Kids",
    price: "$65", spots: 8, soldOut: false, emoji: "🍕",
    description: "Kids learn to make dough from scratch, stretch it, sauce it, and load it with their favorite toppings. Fun, messy, and delicious. Ages 6–14.",
    menu: ["Handmade Pizza Dough", "Fresh Tomato Sauce", "Custom Pizzas", "Mini Cannoli"],
    duration: "2 hours", level: "Ages 6–14", included: "All ingredients, chef hat, apron, and recipe card",
    location: "YW Calgary Community Kitchen, Inglewood",
  },
  {
    id: 4, day: 14, time: "10:00 AM", title: "Vietnamese Menu for Lunar New Year", type: "Public",
    price: "$95", spots: 2, soldOut: false, emoji: "🥢",
    description: "Celebrate Lunar New Year with an authentic Vietnamese feast. Learn to roll perfect spring rolls, simmer a fragrant pho, and make bánh mì that rivals the street carts.",
    menu: ["Fresh Spring Rolls", "Beef Pho", "Bánh Mì Sandwiches", "Chè Ba Màu (Dessert)"],
    duration: "3 hours", level: "All Levels", included: "All ingredients, equipment, aprons, recipe cards",
    location: "YW Calgary Community Kitchen, Inglewood",
  },
  {
    id: 5, day: 14, time: "6:30 PM", title: "Valentine's Night Out: Couples Class", type: "Couples",
    price: "$109", spots: 0, soldOut: true, emoji: "❤️",
    description: "Cook up something special with your someone special. A romantic menu designed for two, with wine pairings and candle-lit dining after you cook.",
    menu: ["Seared Scallops", "Lobster Risotto", "Roasted Asparagus", "Tiramisu for Two"],
    duration: "3 hours", level: "All Levels", included: "All ingredients, wine pairings, candle-lit dining, recipe cards",
    location: "YW Calgary Community Kitchen, Inglewood",
  },
  {
    id: 6, day: 15, time: "10:00 AM", title: "Brunch Like You Mean It", type: "Public",
    price: "$89", spots: 10, soldOut: false, emoji: "🧇",
    description: "Shrimp & grits, beignets, and chicory coffee. Weekend brunch will never be the same. Learn the southern brunch classics that'll make you everyone's favorite host.",
    menu: ["Shrimp & Grits", "Beignets with Powdered Sugar", "Chicory Coffee", "Pecan Praline French Toast"],
    duration: "2.5 hours", level: "All Levels", included: "All ingredients, equipment, aprons, recipe cards, mimosa bar",
    location: "YW Calgary Community Kitchen, Inglewood",
  },
  {
    id: 7, day: 21, time: "6:30 PM", title: "The Crawfish Boil Experience", type: "Signature",
    price: "$109", spots: 4, soldOut: false, emoji: "🦞",
    description: "A full southern crawfish boil. Community-style cooking at its absolute finest. Newspapers on the table, bibs on, cold drinks in hand. This is how we eat.",
    menu: ["Crawfish Boil with Corn & Potatoes", "Hush Puppies", "Coleslaw", "Key Lime Pie"],
    duration: "3 hours", level: "All Levels", included: "All ingredients, bibs, equipment, recipe cards",
    location: "YW Calgary Community Kitchen, Inglewood",
  },
  {
    id: 8, day: 22, time: "10:00 AM", title: "Knife Skills + Quick Meals", type: "Skills",
    price: "$79", spots: 12, soldOut: false, emoji: "🔪",
    description: "Master the fundamentals. Proper grip, knife technique, and speed. Then put those skills to work with three 30-minute meals you'll cook forever.",
    menu: ["Knife Technique Workshop", "15-Min Stir Fry", "Quick Pasta Aglio e Olio", "Sheet Pan Chicken"],
    duration: "2.5 hours", level: "Beginner-Friendly", included: "All ingredients, equipment, aprons, recipe cards",
    location: "YW Calgary Community Kitchen, Inglewood",
  },
  {
    id: 9, day: 28, time: "6:30 PM", title: "Taco Night: Creole Edition", type: "Public",
    price: "$89", spots: 6, soldOut: false, emoji: "🌮",
    description: "Blackened fish tacos, creole slaw, chipotle crema, and fried plantains. Taco Tuesday, seriously upgraded. Big flavors, zero pretension.",
    menu: ["Blackened Fish Tacos", "Creole Slaw", "Chipotle Crema", "Fried Plantains"],
    duration: "2.5 hours", level: "All Levels", included: "All ingredients, equipment, aprons, recipe cards, margarita bar",
    location: "YW Calgary Community Kitchen, Inglewood",
  },
  {
    id: 10, day: 3, time: "", title: "Private Birthday Dinner", type: "Private Event",
    price: "", spots: 0, soldOut: false, emoji: "🎂",
    description: "", menu: [], duration: "", level: "", included: "",
    location: "YW Calgary Community Kitchen, Inglewood", private: true,
  },
  {
    id: 11, day: 10, time: "", title: "Acme Corp Team Building", type: "Corporate",
    price: "", spots: 0, soldOut: false, emoji: "🏢",
    description: "", menu: [], duration: "", level: "", included: "",
    location: "YW Calgary Community Kitchen, Inglewood", private: true,
  },
  {
    id: 12, day: 16, time: "", title: "Private Cooking Party", type: "Private Event",
    price: "", spots: 0, soldOut: false, emoji: "🎉",
    description: "", menu: [], duration: "", level: "", included: "",
    location: "YW Calgary Community Kitchen, Inglewood", private: true,
  },
  {
    id: 13, day: 20, time: "", title: "EnergyCo Client Dinner", type: "Corporate",
    price: "", spots: 0, soldOut: false, emoji: "💼",
    description: "", menu: [], duration: "", level: "", included: "",
    location: "YW Calgary Community Kitchen, Inglewood", private: true,
  },
  {
    id: 14, day: 25, time: "", title: "Anniversary Celebration", type: "Private Event",
    price: "", spots: 0, soldOut: false, emoji: "💍",
    description: "", menu: [], duration: "", level: "", included: "",
    location: "YW Calgary Community Kitchen, Inglewood", private: true,
  },
];

export const FOOD_IMAGES = [
  "🍛", "🥘", "🍜", "🫕", "🥗", "🍣", "🥩", "🧆",
  "🍤", "🥟", "🌶️", "🫒", "🍅", "🧄", "🌿", "🍋",
];

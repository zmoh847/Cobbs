const BREAKFAST_FILLINGS = [
  "Bacon",
  "Link sausage",
  "Square sausage",
  "Egg (fried)",
  "Egg (scrambled)",
  "Potato scone",
  "Hash brown"
];

const SANDWICH_FILLINGS = [
  "Tuna, cheese & red onion",
  "Bacon, brie & cranberry",
  "Cheese, tomato & onion chutney",
  "Coronation chicken",
  "Chicken, pesto & cheese",
  "Prawn Marie Rose",
  "Chicken tikka",
  "Cajun chicken, cheese & jalapenos",
  "Coleslaw",
  "Egg mayo"
];

const BREADS = ["Panini", "Toastie", "Wrap"];

const MENU = {

  breakfast: {
    title: "Breakfast",
    items: [
      { name: "Hot Filled Roll", price: 3.00, choose: { label: "Choose your filling", options: BREAKFAST_FILLINGS, max: 1 } },
      { name: "Doubler Roll", price: 4.00, choose: { label: "Choose two fillings", options: BREAKFAST_FILLINGS, max: 2 } },
      { name: "Ham & Cheese Croissant", price: 3.20 },
      { name: "Scrambled Eggs & Toast", price: 4.95 },
      { name: "Beans on Toast", price: 4.50 },
      { name: "French Toast", price: 5.95 },
      { name: "Toast", price: 2.50 },
      { name: "Pancakes", price: 3.85 }
    ]
  },

  lunch: {
    title: "Lunch",
    items: [
      { name: "Soup of the Day", price: 5.25 },
      { name: "Baked Potato", price: 7.95, choose: { label: "Choose your filling", options: SANDWICH_FILLINGS, max: 1 } },
      { name: "Panini / Toastie / Wrap", price: 7.95,
        bread: { label: "Choose your bread", options: BREADS },
        choose: { label: "Choose your filling", options: SANDWICH_FILLINGS, max: 1 } },
      { name: "Cheese Burger & Chips", price: 8.25 },
      { name: "Mac Cheese, Chips & Salad", price: 8.25 },
      { name: "Chips with Cheese", price: 5.95 },
      { name: "Spicy Chicken Strip Wrap", price: 8.25 },
      { name: "Chicken Burger & Chips", price: 8.25 },
      { name: "Chips", price: 3.95 },
      { name: "Dips", price: 1.25 }
    ]
  },

  kids: {
    title: "Kids Menu",
    items: [
      { name: "Soup", price: 3.50 },
      { name: "Sausage & Beans", price: 4.00 },
      { name: "Toastie / Sandwich", price: 3.50, choose: { label: "Choose your filling", options: SANDWICH_FILLINGS, max: 1 } },
      { name: "Mac & Cheese", price: 4.00 },
      { name: "Nuggets & Chips", price: 4.50 },
      { name: "Beans on Toast", price: 4.00 }
    ]
  },

  drinks: {
    title: "Drinks",
    items: [
      { name: "Breakfast Tea", price: 2.95 },
      { name: "Herbal Teas", price: 2.95 },
      { name: "Flat White", price: 3.50 },
      { name: "Cappuccino", price: 3.50 },
      { name: "Americano", price: 3.20 },
      { name: "Mocha", price: 3.75 },
      { name: "Latte", price: 3.50 },
      { name: "Iced Latte", price: 3.50 },
      { name: "Hot Chocolate", price: 3.50 },
      { name: "Still Water", price: 2.00 },
      { name: "Carton Juice", price: 1.75 },
      { name: "Cans", price: 2.00 },
      { name: "Bottles", price: 2.50 }
    ]
  }
};

const NOTES = [
  "Baked potato, paninis and toasties are served with salad & crisps.",
  "Gluten free bread available.",
  "If you have a food allergy or special dietary requirement, please tell a member of staff before ordering."
];

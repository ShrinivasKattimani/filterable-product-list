import { Product } from "../types/product";

export const PRODUCTS: Array<Product> = [
  // Fruits
  { category: "Fruits", price: 1, stocked: true, name: "Apple" },
  { category: "Fruits", price: 1, stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: 2, stocked: false, name: "Passionfruit" },
  { category: "Fruits", price: 2, stocked: true, name: "Banana" },
  { category: "Fruits", price: 3, stocked: false, name: "Mango" },
  { category: "Fruits", price: 4, stocked: true, name: "Blueberries" },
  { category: "Fruits", price: 2, stocked: true, name: "Kiwi" },

  // Vegetables
  { category: "Vegetables", price: 2, stocked: true, name: "Spinach" },
  { category: "Vegetables", price: 4, stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: 1, stocked: true, name: "Peas" },
  { category: "Vegetables", price: 2, stocked: false, name: "Onion" },
  { category: "Vegetables", price: 3, stocked: true, name: "Carrot" },
  { category: "Vegetables", price: 5, stocked: true, name: "Broccoli" },

  // Dairy
  { category: "Dairy", price: 6, stocked: true, name: "Milk" },
  { category: "Dairy", price: 7, stocked: false, name: "Cheese" },
  { category: "Dairy", price: 5, stocked: true, name: "Yogurt" },

  // Beverages
  { category: "Beverages", price: 2, stocked: true, name: "Water" },
  { category: "Beverages", price: 5, stocked: true, name: "Orange Juice" },
  { category: "Beverages", price: 4, stocked: false, name: "Soda" },

  // Snacks
  { category: "Snacks", price: 3, stocked: true, name: "Chips" },
  { category: "Snacks", price: 6, stocked: false, name: "Cookies" },
  { category: "Snacks", price: 2, stocked: true, name: "Popcorn" },
];

export interface Place {
  id: string;
  image: string;
  name: string;
  address: string;
  rating: number;
  stars: number;
  type: "Hotel" | "Apartment" | "Hostel" | "Room";
  reviews: number;
  benefits: string[];
  price: number;
  imageUrl: string;
  availability: boolean;
  facilities: string[];
}

interface Food {
  name: string; // Name of the food item or restaurant
  address: string; // The full address of the restaurant
  isOpen: boolean; // Indicates whether the restaurant is currently open
  openingHours: string; // The restaurant's opening hours
  phone: string; // Contact phone number
  menuUrl?: string; // URL to the menu (if available)
  currency: string; // Currency symbol used for pricing
  priceRange: string; // Price range, e.g., "DZD 1,465 - DZD 7,912"
  rating: number; // Rating out of 5
  reviewCount: number; // Number of reviews
  imageUrl: string; // URL to the image of the restaurant or food
}

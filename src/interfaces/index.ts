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

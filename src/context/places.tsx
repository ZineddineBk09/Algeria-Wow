"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { Place } from "~/interfaces";

export const PlacesContext = createContext({});

export const usePlacesContext: {
  (): {
    places: Place[];
    setPlaces: React.Dispatch<React.SetStateAction<Place[]>>;
    fetchPlaces: () => Promise<void>;
    deletePlaces: (ids: string[]) => Promise<void>;
    budget: number[];
    setBudget: React.Dispatch<React.SetStateAction<number[]>>;
    deals: {
      "Free cancellation": boolean;
      "Reserve now, pay at stay": boolean;
    };
    setDeals: React.Dispatch<
      React.SetStateAction<{
        "Free cancellation": boolean;
        "Reserve now, pay at stay": boolean;
      }>
    >;
    rating: {
      stars: 1;
      "5 stars": boolean;
      "4 stars": boolean;
      "3 stars": boolean;
    };
    setRating: React.Dispatch<
      React.SetStateAction<{
        "5 stars": boolean;
        "4 stars": boolean;
        "3 stars": boolean;
      }>
    >;
    stars: {
      "5 stars": boolean;
      "4 stars": boolean;
      "3 stars": boolean;
      "2 stars": boolean;
    };
    setStars: React.Dispatch<
      React.SetStateAction<{
        "5 stars": boolean;
        "4 stars": boolean;
        "3 stars": boolean;
        "2 stars": boolean;
      }>
    >;
    type: {
      Hotel: boolean;
      Apartment: boolean;
      Hostel: boolean;
      Room: boolean;
    };
    setType: React.Dispatch<
      React.SetStateAction<{
        Hotel: boolean;
        Apartment: boolean;
        Hostel: boolean;
        Room: boolean;
      }>
    >;
    facilities: {
      Parking: boolean;
      Restaurant: boolean;
      "Pet Friendly": boolean;
      "Fitness Center": boolean;
      "Non-smoking Room": boolean;
      Spa: boolean;
      "Free WiFi": boolean;
      "Swimming Pool": boolean;
    };
    setFacilities: React.Dispatch<
      React.SetStateAction<{
        Parking: boolean;
        Restaurant: boolean;
        "Pet Friendly": boolean;
        "Fitness Center": boolean;
        "Non-smoking Room": boolean;
        Spa: boolean;
        "Free WiFi": boolean;
        "Swimming Pool": boolean;
      }>
    >;
    activeFilters: string[];
    setActiveFilters: React.Dispatch<React.SetStateAction<string[]>>;
    filteredPlaces: Place[];
    handleSelectFilter: (filter: string) => void;
    handleClearFilters: () => void;
  };
} = () => useContext(PlacesContext as React.Context<any>);

export const PlacesContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [places, setPlaces] = useState<Place[]>([
    {
      id: "1",
      image: "https://example.com/rodina-hotel.jpg",
      name: "Rodina Hotel Spa & Conferences",
      address: "3, rue Franklin Roosevelt, Algiers 16100 Algeria",
      rating: 4.5,
      stars: 3,
      type: "Apartment",
      reviews: 13983,
      benefits: ["Free cancellation", "Reserve now, pay at stay"],
      price: 1345,
      imageUrl: "https://example.com/rodina-hotel.jpg",
      availability: true,
      facilities: ["Free Wi-Fi", "Gym", "Pool"],
    },
    {
      id: "2",
      image: "https://example.com/algiers-grand-hotel.jpg",
      name: "Algiers Grand Hotel",
      address: "10, rue de l'Indépendance, Algiers 16000 Algeria",
      rating: 4.3,
      stars: 4,
      type: "Hotel",
      reviews: 10456,
      benefits: ["Free breakfast", "Free Wi-Fi"],
      price: 1200,
      imageUrl: "https://example.com/algiers-grand-hotel.jpg",
      availability: true,
      facilities: ["Free parking", "Restaurant", "Bar"],
    },
    {
      id: "3",
      image: "https://example.com/oasis-hotel.jpg",
      name: "Oasis Hotel",
      address: "7, rue des Oasis, Algiers 16002 Algeria",
      rating: 4.7,
      stars: 5,
      type: "Hostel",
      reviews: 8793,
      benefits: ["Spa access", "Airport shuttle"],
      price: 1500,
      imageUrl: "https://example.com/oasis-hotel.jpg",
      availability: false,
      facilities: ["Spa", "Pool", "Conference rooms"],
    },
    {
      id: "4",
      image: "https://example.com/comfort-inn.jpg",
      name: "Comfort Inn Algiers",
      address: "2, avenue de la Liberté, Algiers 16005 Algeria",
      rating: 4.2,
      stars: 2,
      type: "Hotel",
      reviews: 7623,
      benefits: ["Pet-friendly", "Free parking"],
      price: 1100,
      imageUrl: "https://example.com/comfort-inn.jpg",
      availability: true,
      facilities: ["Pet-friendly", "Gym", "Restaurant"],
    },
    {
      id: "5",
      image: "https://example.com/city-center-hotel.jpg",
      name: "City Center Hotel",
      address: "1, boulevard des Martyrs, Algiers 16010 Algeria",
      rating: 4.0,
      stars: 5,
      type: "Hotel",
      reviews: 5432,
      benefits: ["Gym access", "Business center"],
      price: 900,
      imageUrl: "https://example.com/city-center-hotel.jpg",
      availability: false,
      facilities: ["Business center", "Gym", "Free Wi-Fi"],
    },
    {
      id: "6",
      image: "https://example.com/mediterranean-resort.jpg",
      name: "Mediterranean Resort",
      address: "5, rue du Port, Algiers 16011 Algeria",
      rating: 4.8,
      stars: 4,
      type: "Hotel",
      reviews: 15983,
      benefits: ["Beach access", "All-inclusive"],
      price: 2000,
      imageUrl: "https://example.com/mediterranean-resort.jpg",
      availability: true,
      facilities: ["Beach access", "All-inclusive", "Pool"],
    },
    {
      id: "7",
      image: "https://example.com/sunset-motel.jpg",
      name: "Sunset Motel",
      address: "12, rue de la Paix, Algiers 16012 Algeria",
      rating: 3.9,
      stars: 4,
      type: "Hostel",
      reviews: 2983,
      benefits: ["24-hour reception", "Free breakfast"],
      price: 750,
      imageUrl: "https://example.com/sunset-motel.jpg",
      availability: true,
      facilities: ["Free breakfast", "24-hour reception", "Free parking"],
    },
    {
      id: "8",
      image: "https://example.com/algiers-boutique-hotel.jpg",
      name: "Algiers Boutique Hotel",
      address: "9, rue du Commerce, Algiers 16015 Algeria",
      rating: 4.6,
      stars: 3,
      type: "Room",
      reviews: 13456,
      benefits: ["Free minibar", "Room service"],
      price: 1400,
      imageUrl: "https://example.com/algiers-boutique-hotel.jpg",
      availability: false,
      facilities: ["Room service", "Free minibar", "Gym"],
    },
    {
      id: "9",
      image: "https://example.com/harbor-view-hotel.jpg",
      name: "Harbor View Hotel",
      address: "15, rue des Pêcheurs, Algiers 16020 Algeria",
      rating: 4.1,
      stars: 2,
      type: "Room",
      reviews: 8567,
      benefits: ["Sea view", "Free Wi-Fi"],
      price: 1300,
      imageUrl: "https://example.com/harbor-view-hotel.jpg",
      availability: true,
      facilities: ["Sea view", "Free Wi-Fi", "Restaurant"],
    },
    {
      id: "10",
      image: "https://example.com/green-park-inn.jpg",
      name: "Green Park Inn",
      address: "8, rue des Jardins, Algiers 16025 Algeria",
      rating: 4.4,
      stars: 5,
      type: "Hostel",
      reviews: 6743,
      benefits: ["Garden access", "Organic breakfast"],
      price: 1250,
      imageUrl: "https://example.com/green-park-inn.jpg",
      availability: true,
      facilities: ["Garden access", "Organic breakfast", "Free parking"],
    },
  ] as Place[]);

  //   const fetchPlaces = async () => {};

  const [budget, setBudget] = useState([0, 4000]);

  const [deals, setDeals] = useState({
    "Free cancellation": false,
    "Reserve now, pay at stay": false,
  });

  const [rating, setRating] = useState({
    "5 stars": false,
    "4 stars": false,
    "3 stars": false,
  });

  const [stars, setStars] = useState({
    "5 stars": false,
    "4 stars": false,
    "3 stars": false,
    "2 stars": false,
  });

  const [type, setType] = useState({
    Hotel: false,
    Apartment: false,
    Hostel: false,
    Room: false,
  });

  const [facilities, setFacilities] = useState({
    Parking: false,
    Restaurant: false,
    "Pet Friendly": false,
    "Fitness Center": false,
    "Non-smoking Room": false,
    Spa: false,
    "Free WiFi": false,
    "Swimming Pool": false,
  });

  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const filteredPlaces = useMemo(() => {
    console.log("places", places);
    return places.filter((place) => {
      const inBudget = place.price >= budget[0]! && place.price <= budget[1]!;

      const hasDeal =
        (!deals["Free cancellation"] ||
          place.facilities.includes("Free cancellation")) &&
        (!deals["Reserve now, pay at stay"] ||
          place.facilities.includes("Reserve now, pay at stay"));
      const hasRating =
        (!rating["5 stars"] || place.rating === 5) &&
        (!rating["4 stars"] || place.rating === 4) &&
        (!rating["3 stars"] || place.rating === 3);
      const hasStars =
        (!stars["5 stars"] || place.stars === 5) &&
        (!stars["4 stars"] || place.stars === 4) &&
        (!stars["3 stars"] || place.stars === 3) &&
        (!stars["2 stars"] || place.stars === 2);
      const hasType =
        (!type.Hotel || place.type === "Hotel") &&
        (!type.Apartment || place.type === "Apartment") &&
        (!type.Hostel || place.type === "Hostel") &&
        (!type.Room || place.type === "Room");
      const hasFacility =
        (!facilities.Parking || place.facilities.includes("Parking")) &&
        (!facilities.Restaurant || place.facilities.includes("Restaurant")) &&
        (!facilities["Pet Friendly"] ||
          place.facilities.includes("Pet Friendly")) &&
        (!facilities["Fitness Center"] ||
          place.facilities.includes("Fitness Center")) &&
        (!facilities["Non-smoking Room"] ||
          place.facilities.includes("Non-smoking Room")) &&
        (!facilities.Spa || place.facilities.includes("Spa")) &&
        (!facilities["Free WiFi"] || place.facilities.includes("Free WiFi")) &&
        (!facilities["Swimming Pool"] ||
          place.facilities.includes("Swimming Pool"));
      return (
        inBudget && hasDeal && hasRating && hasStars && hasType && hasFacility
      );
    });
  }, [activeFilters, budget, deals, rating, stars, type, facilities]);

  const handleSelectFilter = (filter: string) => {
    setActiveFilters((prev) => {
      if (prev.includes(filter)) {
        return prev.filter((f) => f !== filter);
      }
      return [...prev, filter];
    });

    // Apply filter
    switch (filter) {
      case "price-asc":
        // Remove 'price-desc' from activeFilters
        setActiveFilters((prev) => prev.filter((f) => f !== "price-desc"));
        // Sort by price ascending
        setPlaces(
          places.sort((a, b) => {
            return a.price - b.price;
          }),
        );
        break;
      case "price-desc":
        // Remove 'price-asc' from activeFilters
        setActiveFilters((prev) => prev.filter((f) => f !== "price-asc"));
        // Sort by price descending
        setPlaces(
          places.sort((a, b) => {
            return b.price - a.price;
          }),
        );
        break;
      case "rating-asc":
        // Remove 'rating-desc' from activeFilters
        setActiveFilters((prev) => prev.filter((f) => f !== "rating-desc"));
        // Sort by rating ascending
        setPlaces(
          places.sort((a, b) => {
            return a.rating - b.rating;
          }),
        );
        break;
      case "rating-desc":
        // Remove 'rating-asc' from activeFilters
        setActiveFilters((prev) => prev.filter((f) => f !== "rating-asc"));
        // Sort by rating descending
        setPlaces(
          places.sort((a, b) => {
            return b.rating - a.rating;
          }),
        );
        break;
      case "high-rate-reviews":
        setPlaces(
          places.sort((a, b) => {
            return b.reviews * b.rating - a.reviews * a.rating;
          }),
        );
        break;
      case "high-rate-low-price":
        setPlaces(
          places.sort((a, b) => {
            return b.reviews / b.rating - a.reviews / a.rating;
          }),
        );
        break;
      default:
        break;
    }
  };

  const handleClearFilters = () => {
    setBudget([0, 4000]);
    setDeals({
      "Free cancellation": false,
      "Reserve now, pay at stay": false,
    });
    setRating({
      "5 stars": false,
      "4 stars": false,
      "3 stars": false,
    });
    setStars({
      "5 stars": false,
      "4 stars": false,
      "3 stars": false,
      "2 stars": false,
    });
    setType({
      Hotel: false,
      Apartment: false,
      Hostel: false,
      Room: false,
    });
    setFacilities({
      Parking: false,
      Restaurant: false,
      "Pet Friendly": false,
      "Fitness Center": false,
      "Non-smoking Room": false,
      Spa: false,
      "Free WiFi": false,
      "Swimming Pool": false,
    });
    setActiveFilters([]);
  };

  useEffect(() => {
    // fetchPlaces().catch((e) => {});
  }, []);

  return (
    <PlacesContext.Provider
      value={{
        places,
        setPlaces,
        // fetchPlaces,
        budget,
        setBudget,
        deals,
        setDeals,
        rating,
        setRating,
        stars,
        setStars,
        type,
        setType,
        facilities,
        setFacilities,
        activeFilters,
        setActiveFilters,
        filteredPlaces,
        handleSelectFilter,
        handleClearFilters,
      }}
    >
      {children}
    </PlacesContext.Provider>
  );
};

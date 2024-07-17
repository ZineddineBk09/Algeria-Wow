"use client";

import { useState, useMemo } from "react";
import { Slider } from "~/components/ui/slider";
import { Label } from "~/components/ui/label";
import { Checkbox } from "~/components/ui/checkbox";
import { Button } from "~/components/ui/button";
import { CheckIcon, MapPinIcon, Minus, StarIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Separator } from "~/components/ui/separator";
import Rating from "~/components/shared/rating";

const MiniTitle = ({ text }: { text: string }) => (
  <h3 className="mb-2 text-base font-semibold text-primary-blue">{text}</h3>
);

export default function WhereToStayPage() {
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
    Apartments: false,
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

  const products = [
    {
      id: 1,
      image: "/placeholder.svg",
      name: "Hotel Algiers",
      rating: 5,
      stars: 5,
      type: "Hotel",
      facilities: ["Parking", "Restaurant", "Free WiFi", "Swimming Pool"],
      price: 2500,
    },
    {
      id: 2,
      image: "/placeholder.svg",
      name: "Apartment Oran",
      rating: 4,
      stars: 4,
      type: "Apartments",
      facilities: ["Parking", "Free WiFi"],
      price: 2000,
    },
    {
      id: 3,
      image: "/placeholder.svg",
      name: "Hostel Constantine",
      rating: 3.5,
      stars: 3,
      type: "Hostel",
      facilities: ["Parking", "Free WiFi"],
      price: 1500,
    },
    {
      id: 4,
      image: "/placeholder.svg",
      name: "Room Annaba",
      rating: 4,
      stars: 4,
      type: "Room",
      facilities: ["Parking", "Free WiFi", "Non-smoking Room"],
      price: 1800,
    },
  ];

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const inBudget =
        product.price >= budget[0]! && product.price <= budget[1]!;

      const hasDeal =
        (!deals["Free cancellation"] ||
          product.facilities.includes("Free cancellation")) &&
        (!deals["Reserve now, pay at stay"] ||
          product.facilities.includes("Reserve now, pay at stay"));
      const hasRating =
        (!rating["5 stars"] || product.rating === 5) &&
        (!rating["4 stars"] || product.rating === 4) &&
        (!rating["3 stars"] || product.rating === 3);
      const hasStar =
        (!stars["5 stars"] || product.stars === 5) &&
        (!stars["4 stars"] || product.stars === 4) &&
        (!stars["3 stars"] || product.stars === 3) &&
        (!stars["2 stars"] || product.stars === 2);
      const hasType =
        (!type.Hotel || product.type === "Hotel") &&
        (!type.Apartments || product.type === "Apartments") &&
        (!type.Hostel || product.type === "Hostel") &&
        (!type.Room || product.type === "Room");
      const hasFacility =
        (!facilities.Parking || product.facilities.includes("Parking")) &&
        (!facilities.Restaurant || product.facilities.includes("Restaurant")) &&
        (!facilities["Pet Friendly"] ||
          product.facilities.includes("Pet Friendly")) &&
        (!facilities["Fitness Center"] ||
          product.facilities.includes("Fitness Center")) &&
        (!facilities["Non-smoking Room"] ||
          product.facilities.includes("Non-smoking Room")) &&
        (!facilities.Spa || product.facilities.includes("Spa")) &&
        (!facilities["Free WiFi"] ||
          product.facilities.includes("Free WiFi")) &&
        (!facilities["Swimming Pool"] ||
          product.facilities.includes("Swimming Pool"));
      return (
        inBudget && hasDeal && hasRating && hasStar && hasType && hasFacility
      );
    });
  }, [budget, deals, rating, stars, type, facilities]);

  return (
    <div className="grid w-full grid-cols-1 gap-8 p-4 md:grid-cols-[350px_1fr] md:p-8">
      <div className="max-h-[100vh] overflow-y-auto rounded-lg bg-background p-4 text-text-gray-dark shadow-sm md:p-6">
        <div className="flex w-full items-center justify-between">
          <h2 className="mb-4 text-lg">Filters</h2>
          <Button
            className="bg-transparent text-primary-yellow hover:bg-transparent"
            onClick={() => {
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
                Apartments: false,
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
            }}
          >
            Clear all
          </Button>
        </div>
        <div className="grid gap-10 pl-4">
          <div>
            <MiniTitle text="Overnight Budget" />
            <div className="mb-6 mt-4 flex items-center justify-between text-sm text-muted-foreground">
              <span className="flex h-12 w-28 items-center justify-center rounded-lg bg-white font-semibold text-primary-blue shadow-xl drop-shadow-xl">
                {budget[0]} DZD
              </span>
              <Minus />
              <span className="flex h-12 w-28 items-center justify-center rounded-lg bg-white font-semibold text-primary-blue shadow-xl drop-shadow-xl">
                {budget[1]} DZD
              </span>
            </div>
            <Slider
              value={budget}
              onValueChange={setBudget}
              min={0}
              max={4000}
              step={1}
              className="w-full"
            />
          </div>
          <div>
            <MiniTitle text="Deals" />
            <div className="grid gap-3">
              <Label className="flex items-center gap-2 font-normal">
                <Checkbox
                  checked={deals["Free cancellation"]}
                  onCheckedChange={(checked) =>
                    setDeals((prev) => ({
                      ...prev,
                      "Free cancellation": Boolean(checked),
                    }))
                  }
                  className="h-5 w-5"
                />
                Free cancellation (65 options)
              </Label>
              <Label className="flex items-center gap-2 font-normal">
                <Checkbox
                  checked={deals["Reserve now, pay at stay"]}
                  onCheckedChange={(checked) =>
                    setDeals((prev) => ({
                      ...prev,
                      "Reserve now, pay at stay": Boolean(checked),
                    }))
                  }
                  className="h-5 w-5"
                />
                Reserve now, pay at stay (68 options)
              </Label>
            </div>
          </div>
          <div>
            <MiniTitle text="Rating" />
            <div className="grid gap-3">
              <Label className="flex items-center gap-2 font-normal">
                <Checkbox
                  checked={rating["5 stars"]}
                  onCheckedChange={(checked) =>
                    setRating((prev) => ({
                      ...prev,
                      "5 stars": Boolean(checked),
                    }))
                  }
                  className="h-5 w-5"
                />
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i: number) => (
                    <StarIcon
                      key={i}
                      className="h-5 w-5 fill-primary-green text-primary-green"
                    />
                  ))}
                </div>
                (15 options)
              </Label>
              <Label className="flex items-center gap-2 font-normal">
                <Checkbox
                  checked={rating["4 stars"]}
                  onCheckedChange={(checked) =>
                    setRating((prev) => ({
                      ...prev,
                      "4 stars": Boolean(checked),
                    }))
                  }
                  className="h-5 w-5"
                />
                <div className="flex items-center gap-1">
                  {Array.from({ length: 4 }).map((_, i: number) => (
                    <StarIcon
                      key={i}
                      className="h-5 w-5 fill-primary-green text-primary-green"
                    />
                  ))}
                  {Array.from({ length: 1 }).map((_, i: number) => (
                    <StarIcon
                      key={i}
                      className="h-5 w-5 fill-muted stroke-muted-foreground"
                    />
                  ))}
                </div>
                (23 options)
              </Label>
              <Label className="flex items-center gap-2 font-normal">
                <Checkbox
                  checked={rating["3 stars"]}
                  onCheckedChange={(checked) =>
                    setRating((prev) => ({
                      ...prev,
                      "3 stars": Boolean(checked),
                    }))
                  }
                  className="h-5 w-5"
                />
                <div className="flex items-center gap-1">
                  {Array.from({ length: 3 }).map((_, i: number) => (
                    <StarIcon
                      key={i}
                      className="h-5 w-5 fill-primary-green text-primary-green"
                    />
                  ))}
                  {Array.from({ length: 2 }).map((_, i: number) => (
                    <StarIcon
                      key={i}
                      className="h-5 w-5 fill-muted stroke-muted-foreground"
                    />
                  ))}
                </div>
                (6 options)
              </Label>
            </div>
          </div>
          <div>
            <MiniTitle text="Stars" />
            <div className="grid gap-3">
              <Label className="flex items-center gap-2 font-normal">
                <Checkbox
                  checked={stars["5 stars"]}
                  onCheckedChange={(checked) =>
                    setStars((prev) => ({
                      ...prev,
                      "5 stars": Boolean(checked),
                    }))
                  }
                  className="h-5 w-5"
                />
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i: number) => (
                    <StarIcon
                      key={i}
                      className="h-5 w-5 fill-primary-green text-primary-green"
                    />
                  ))}
                </div>
                (4 options)
              </Label>
              <Label className="flex items-center gap-2 font-normal">
                <Checkbox
                  checked={stars["4 stars"]}
                  onCheckedChange={(checked) =>
                    setStars((prev) => ({
                      ...prev,
                      "4 stars": Boolean(checked),
                    }))
                  }
                  className="h-5 w-5"
                />
                <div className="flex items-center gap-1">
                  {Array.from({ length: 4 }).map((_, i: number) => (
                    <StarIcon
                      key={i}
                      className="h-5 w-5 fill-primary-green text-primary-green"
                    />
                  ))}
                  {Array.from({ length: 1 }).map((_, i: number) => (
                    <StarIcon
                      key={i}
                      className="h-5 w-5 fill-muted stroke-muted-foreground"
                    />
                  ))}
                </div>
                (23 options)
              </Label>
              <Label className="flex items-center gap-2 font-normal">
                <Checkbox
                  checked={stars["3 stars"]}
                  onCheckedChange={(checked) =>
                    setStars((prev) => ({
                      ...prev,
                      "3 stars": Boolean(checked),
                    }))
                  }
                  className="h-5 w-5"
                />
                <div className="flex items-center gap-1">
                  {Array.from({ length: 3 }).map((_, i: number) => (
                    <StarIcon
                      key={i}
                      className="h-5 w-5 fill-primary-green text-primary-green"
                    />
                  ))}
                  {Array.from({ length: 2 }).map((_, i: number) => (
                    <StarIcon
                      key={i}
                      className="h-5 w-5 fill-muted stroke-muted-foreground"
                    />
                  ))}
                </div>
                (23 options)
              </Label>
              <Label className="flex items-center gap-2 font-normal">
                <Checkbox
                  checked={stars["2 stars"]}
                  onCheckedChange={(checked) =>
                    setStars((prev) => ({
                      ...prev,
                      "2 stars": Boolean(checked),
                    }))
                  }
                  className="h-5 w-5"
                />
                <div className="flex items-center gap-1">
                  {Array.from({ length: 2 }).map((_, i: number) => (
                    <StarIcon
                      key={i}
                      className="h-5 w-5 fill-primary-green text-primary-green"
                    />
                  ))}
                  {Array.from({ length: 3 }).map((_, i: number) => (
                    <StarIcon
                      key={i}
                      className="h-5 w-5 fill-muted stroke-muted-foreground"
                    />
                  ))}
                </div>
                (20 options)
              </Label>
            </div>
          </div>
          <div>
            <MiniTitle text="Type" />
            <div className="grid gap-3">
              <Label className="flex items-center gap-2 font-normal">
                <Checkbox
                  checked={type.Hotel}
                  onCheckedChange={(checked) =>
                    setType((prev) => ({ ...prev, Hotel: Boolean(checked) }))
                  }
                  className="h-5 w-5"
                />
                Hotel (40 options)
              </Label>
              <Label className="flex items-center gap-2 font-normal">
                <Checkbox
                  checked={type.Apartments}
                  onCheckedChange={(checked) =>
                    setType((prev) => ({
                      ...prev,
                      Apartments: Boolean(checked),
                    }))
                  }
                  className="h-5 w-5"
                />
                Apartments (15 options)
              </Label>
              <Label className="flex items-center gap-2 font-normal">
                <Checkbox
                  checked={type.Hostel}
                  onCheckedChange={(checked) =>
                    setType((prev) => ({ ...prev, Hostel: Boolean(checked) }))
                  }
                  className="h-5 w-5"
                />
                Hostel (23 options)
              </Label>
              <Label className="flex items-center gap-2 font-normal">
                <Checkbox
                  checked={type.Room}
                  onCheckedChange={(checked) =>
                    setType((prev) => ({ ...prev, Room: Boolean(checked) }))
                  }
                  className="h-5 w-5"
                />
                Room (23 options)
              </Label>
            </div>
          </div>
          <div>
            <MiniTitle text="Facilities" />
            <div className="grid gap-3">
              <Label className="flex items-center gap-2 font-normal">
                <Checkbox
                  checked={facilities.Parking}
                  onCheckedChange={(checked) =>
                    setFacilities((prev) => ({
                      ...prev,
                      Parking: Boolean(checked),
                    }))
                  }
                  className="h-5 w-5"
                />
                Parking (41 options)
              </Label>
              <Label className="flex items-center gap-2 font-normal">
                <Checkbox
                  checked={facilities.Restaurant}
                  onCheckedChange={(checked) =>
                    setFacilities((prev) => ({
                      ...prev,
                      Restaurant: Boolean(checked),
                    }))
                  }
                  className="h-5 w-5"
                />
                Restaurant (15 options)
              </Label>
              <Label className="flex items-center gap-2 font-normal">
                <Checkbox
                  checked={facilities["Pet Friendly"]}
                  onCheckedChange={(checked) =>
                    setFacilities((prev) => ({
                      ...prev,
                      "Pet Friendly": Boolean(checked),
                    }))
                  }
                  className="h-5 w-5"
                />
                Pet Friendly (23 options)
              </Label>
              <Label className="flex items-center gap-2 font-normal">
                <Checkbox
                  checked={facilities["Fitness Center"]}
                  onCheckedChange={(checked) =>
                    setFacilities((prev) => ({
                      ...prev,
                      "Fitness Center": Boolean(checked),
                    }))
                  }
                  className="h-5 w-5"
                />
                Fitness Center (11 options)
              </Label>
              <Label className="flex items-center gap-2 font-normal">
                <Checkbox
                  checked={facilities["Non-smoking Room"]}
                  onCheckedChange={(checked) =>
                    setFacilities((prev) => ({
                      ...prev,
                      "Non-smoking Room": Boolean(checked),
                    }))
                  }
                  className="h-5 w-5"
                />
                Non-smoking Room (34 options)
              </Label>
              <Label className="flex items-center gap-2 font-normal">
                <Checkbox checked={facilities.Spa} className="h-5 w-5" />
                Spa (15 options)
              </Label>
            </div>
          </div>
        </div>
      </div>

      {/* Places */}
      <div className="grid overflow-y-auto">
        {filteredProducts.map((product, index: number) => (
          <div
            key={index}
            className="flex w-full items-center gap-3 rounded-lg bg-background"
          >
            <img
              src="/images/place-img-1.png"
              alt=""
              className="h-64 w-[60%] rounded-lg"
            />
            <div className="flex w-full flex-col gap-4">
              <div>
                <div className="flex w-full items-center justify-between">
                  <h3 className="text-xl font-bold text-primary-blue">
                    Rodina Hotel Spa & Conferences
                  </h3>

                  {/* Rating */}
                  {
                    <div className="flex items-center gap-1">
                      <Rating rating={product.rating} size="sm" />
                      <span className="ml-3 text-sm font-semibold text-text-gray-light">
                        {`${product.rating} / 5`}
                      </span>
                    </div>
                  }
                </div>
                <div className="flex w-full items-center justify-between my-2">
                  <div className="flex items-center gap-2 text-sm text-text-gray-light">
                    <MapPinIcon className="h-4 w-4" />
                    <Link href="#" className="underline" prefetch={false}>
                      3, rue Franklin Roosevelt, Algiers 16100 Algeria
                    </Link>
                  </div>

                  {/* Reviews */}
                  <span className="text-primary-blue underline text-sm">1,345 reviews</span>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-green-500" />
                  <span className="text-primary-blue">Free cancellation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-green-500" />
                  <span className="text-primary-blue">
                    Reserve now, pay at stay
                  </span>
                </div>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="text-primary-yellow">
                  From 1 345 DZD{" "}
                  <span className="text-primary-blue">/ night</span>
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-11 w-fit items-center justify-center rounded-xl border-2 border-primary-yellow bg-white px-8 py-1 text-sm font-medium text-primary text-primary-yellow hover:bg-gray-100  hover:text-primary-yellow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-300 disabled:pointer-events-none disabled:opacity-50"
                >
                  Check availability
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import React from "react";
import { Slider } from "~/components/ui/slider";
import { Label } from "~/components/ui/label";
import { Checkbox } from "~/components/ui/checkbox";
import { Button } from "~/components/ui/button";
import {
  MoveUp,
  Minus,
  StarIcon,
  MoveDown,
  Dot,
  MapPinIcon,
  CheckIcon,
  Clock,
  ScrollIcon,
  Phone,
  ScrollText,
} from "lucide-react";
import { usePlacesContext } from "~/context/places";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "~/components/ui/pagination";
import Rating from "~/components/shared/rating";
import { diplayLargeNumber } from "~/utils";
import { Separator } from "~/components/ui/separator";

const MiniTitle = ({ text }: { text: string }) => (
  <h3 className="mb-2 text-base font-semibold text-primary-blue">{text}</h3>
);

const FiltersLayout = ({ children }: { children: React.ReactNode }) => {
  const {
    places,
    budget,
    setBudget,
    deals,
    setDeals,
    stars,
    setStars,
    rating,
    setRating,
    facilities,
    setFacilities,
    type,
    setType,
    activeFilters,
    handleSelectFilter,
    handleClearFilters,
  } = usePlacesContext();

  const checkActiveFilter = (filter: string) => activeFilters.includes(filter);

  const calculateRateOptions = (rating: number) => {
    return places.filter((place) => Math.round(place.rating) === Number(rating))
      .length;
  };

  return (
    <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-[350px_1fr]">
      <div className="h-fit overflow-y-auto rounded-lg bg-background pl-4 text-text-gray-dark shadow-sm md:pl-6">
        <div className="flex w-full items-center justify-between">
          <h2 className="mb-4 text-lg">Filters</h2>
          <Button
            className="bg-transparent text-primary-yellow hover:bg-transparent"
            onClick={handleClearFilters}
          >
            Clear all
          </Button>
        </div>
        <div className="grid max-h-[100vh] gap-10 overflow-y-auto px-4">
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
              {Array.from({ length: 5 }).map((_, i: number) => (
                <Label key={i} className="flex items-center gap-2 font-normal">
                  <Checkbox
                    //@ts-expect-error - I don't know how to fix this
                    checked={!!rating[`${i + 1} stars`]}
                    onCheckedChange={(checked) =>
                      setRating((prev) => ({
                        ...prev,
                        [`${i + 1} stars`]: Boolean(checked),
                      }))
                    }
                    className="h-5 w-5"
                  />
                  <div className="flex items-center gap-1">
                    {Array.from({ length: i + 1 }).map((_, j: number) => (
                      <StarIcon
                        key={j}
                        className="h-5 w-5 fill-primary-green text-primary-green"
                      />
                    ))}
                    {Array.from({ length: 5 - i - 1 }).map((_, j: number) => (
                      <StarIcon
                        key={j}
                        className="h-5 w-5 fill-muted stroke-muted-foreground"
                      />
                    ))}
                  </div>
                  ({calculateRateOptions(i + 1)} options)
                </Label>
              ))}
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
                  checked={type.Apartment}
                  onCheckedChange={(checked) =>
                    setType((prev) => ({
                      ...prev,
                      Apartment: Boolean(checked),
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
      <div className="grid h-fit w-full items-start overflow-y-auto">
        <div className="mb-4 flex items-center gap-x-2">
          <span className="font-semibold text-text-gray-light">
            {places.length} properties
          </span>
          <Dot />
          <Button
            variant="outline"
            className={`rounded-full border-primary-blue text-primary-blue`}
          >
            Recommended
          </Button>
          <Button
            variant="outline"
            className={`rounded-full ${checkActiveFilter("price-asc") || checkActiveFilter("price-desc") ? "border-primary-yellow text-primary-yellow" : "border-primary-blue text-primary-blue"}`}
            onClick={() =>
              checkActiveFilter("price-asc")
                ? handleSelectFilter("price-desc")
                : handleSelectFilter("price-asc")
            }
          >
            Price
            <MoveUp
              className={`h-4 w-4 ${checkActiveFilter("price-asc") ? "text-primary-yellow" : "text-gray-400"}`}
            />
            <MoveDown
              className={`h-4 w-4 ${checkActiveFilter("price-desc") ? "text-primary-yellow" : "text-gray-400"}`}
            />
          </Button>
          <Button
            variant="outline"
            className={`rounded-full ${checkActiveFilter("rating-asc") || checkActiveFilter("rating-desc") ? "border-primary-yellow text-primary-yellow" : "border-primary-blue text-primary-blue"}`}
            onClick={() =>
              checkActiveFilter("rating-asc")
                ? handleSelectFilter("rating-desc")
                : handleSelectFilter("rating-asc")
            }
          >
            Rate
            <MoveUp
              className={`h-4 w-4 ${checkActiveFilter("rating-asc") ? "text-primary-yellow" : "text-gray-400"}`}
            />
            <MoveDown
              className={`h-4 w-4 ${checkActiveFilter("rating-desc") ? "text-primary-yellow" : "text-gray-400"}`}
            />
          </Button>
          <Button
            variant="outline"
            className={`rounded-full ${checkActiveFilter("high-rate-reviews") ? "border-primary-yellow text-primary-yellow" : "border-primary-blue text-primary-blue"}`}
            onClick={() => handleSelectFilter("high-rate-reviews")}
          >
            High rate + Most reviews
          </Button>
          <Button
            variant="outline"
            className={`rounded-full ${checkActiveFilter("high-rate-low-pricehigh-rate-low-price") ? "border-primary-yellow text-primary-yellow" : "border-primary-blue text-primary-blue"}`}
            onClick={() => handleSelectFilter("high-rate-low-price")}
          >
            High rate + Low price
          </Button>
        </div>

        {/* Children */}
        {children}

        <Separator />

        {/* Cards */}
        {/* Movie */}
        <div className="flex w-full items-center gap-3 rounded-lg bg-background">
          <img
            src="/images/place-img-1.png"
            alt=""
            className="h-64 w-[60%] rounded-lg"
          />
          <div className="flex w-full flex-col gap-4">
            <div>
              <div className="flex w-full items-center justify-between">
                <h3 className="text-xl font-bold text-primary-blue">
                  FRIDA En Projection
                </h3>

                {/* Rating */}
                {
                  <div className="flex items-center gap-1">
                    <Rating rating={3.5} size="sm" />
                    <span className="ml-3 text-sm font-medium text-text-gray-light">
                      {`${3.5} / 5`}
                    </span>
                  </div>
                }
              </div>
              <div className="my-3 flex w-full items-start justify-between">
                <div className="flex max-w-[80%] flex-col gap-y-3">
                  <div className="flex w-full items-center gap-2 text-sm text-text-gray-light">
                    <span>
                      Héliopolis est un film dramatique algérien réalisé par
                      Djaffar Gacem et sorti en 2020. Le film représentera
                      l&apos;Algérie...
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-text-gray-light">
                    <MapPinIcon className="h-4 w-4" />
                    <span className="underline">
                      Cinéma Cosmos de Riadh El Fath.
                    </span>
                  </div>
                </div>

                {/* Reviews */}
                <span className="!w-fit text-sm text-primary-blue underline">
                  {diplayLargeNumber(2300)} reviews
                </span>
              </div>
            </div>

            {/* Date */}
            <div className="-mt-2 flex items-center gap-2 text-primary-blue">
              <Clock className="h-4 w-4" />
              <span>
                <b className="font-medium">Open:</b> May 20, 2021
              </span>
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="font-medium text-primary-yellow">
                DZD {diplayLargeNumber(1350)} {" - "}DZD{" "}
                {diplayLargeNumber(1750)}
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
        {/* Restaurant */}
        <div className="flex w-full items-center gap-3 rounded-lg bg-background">
          <img
            src="/images/place-img-1.png"
            alt=""
            className="h-64 w-[60%] rounded-lg"
          />
          <div className="flex w-full flex-col gap-4">
            <div>
              <div className="flex w-full items-center justify-between">
                <h3 className="text-xl font-bold text-primary-blue">
                  Restaurant Eldjazair
                </h3>

                {/* Rating */}
                {
                  <div className="flex items-center gap-1">
                    <Rating rating={3.5} size="sm" />
                    <span className="ml-3 text-sm font-medium text-text-gray-light">
                      {`${3.5} / 5`}
                    </span>
                  </div>
                }
              </div>
              <div className="my-3 flex w-full items-start justify-between">
                <div className="flex max-w-[80%] flex-col gap-y-3">
                  <div className="flex items-center gap-2 text-sm text-text-gray-light">
                    <MapPinIcon className="h-4 w-4" />
                    <span className="underline">
                      7 Rue Idir Toumi Ben Aknoun, Algiers 16000 Algeria
                    </span>
                  </div>
                </div>

                {/* Reviews */}
                <span className="!w-fit text-sm text-primary-blue underline">
                  {diplayLargeNumber(2300)} reviews
                </span>
              </div>
            </div>

            {/* Date */}
            <div className="-mt-2 flex flex-col gap-y-2 items-start text-primary-blue">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>
                  <b className="font-medium">Open now:</b> 11:00 AM - 11:30 PM
                </span>
              </div>
              <div className="flex items-center gap-2">
                <ScrollText className="h-4 w-4" />
                <span>
                  <b className="font-medium">Menu</b>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>
                  <b className="font-medium">+213 23 38 49 82</b>
                </span>
              </div>
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="font-medium text-primary-yellow">
                DZD {diplayLargeNumber(1350)} {" - "}DZD{" "}
                {diplayLargeNumber(1750)}
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

        {/* Pagination */}
        <Pagination className="my-10">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href={``} />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">11</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};

export default FiltersLayout;

import { StarIcon, StarHalf } from "lucide-react";
import React from "react";

const Rating = ({
  rating,
  size,
}: {
  rating: number;
  size: "sm" | "md" | "lg";
}) => {
  const hw = size === "sm" ? "h-4 w-4" : size === "md" ? "h-6 w-6" : "h-8 w-8";
  const ratingInt = Math.floor(rating);
  const ratingDecimal = rating - ratingInt;
  
  return (
    <>
      {Array.from({ length: ratingInt }).map((_, i: number) => (
        <StarIcon
          key={i}
          className={`${hw} fill-primary-green text-primary-green`}
        />
      ))}
      {ratingDecimal > 0 && (
        <StarHalf className={`${hw} fill-primary-green text-primary-green`} />
      )}
      {Array.from({ length: 5 - ratingInt - (ratingDecimal > 0 ? 1 : 0) }).map(
        (_, i: number) => (
          <StarIcon
            key={i}
            className="h-4 w-4 fill-muted stroke-muted-foreground"
          />
        ),
      )}
    </>
  );
};
export default Rating;

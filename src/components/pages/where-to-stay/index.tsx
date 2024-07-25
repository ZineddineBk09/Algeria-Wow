"use client";

import PlacesList from "./places/list";
import FiltersLayout from "./filters/layout";

export default function WhereToStayPage() {
  return (
    <FiltersLayout>
      <PlacesList />
    </FiltersLayout>
  );
}

"use client";

import ActivitiesList from "./activities/list";
import FiltersLayout from "./filters/layout";

export default function WhatToDo() {
  return (
    <FiltersLayout>
      <ActivitiesList />
    </FiltersLayout>
  );
}

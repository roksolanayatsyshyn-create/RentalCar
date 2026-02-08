"use client";

import { useEffect } from "react";
import { useCarsStore } from "@/lib/store/carStore";
import { CarsList } from "@/components/CarsList/CarsList";
import { Pagination } from "@/components/Pagination/Pagination";
import { Filters } from "@/components/Filters/Filters";
import css from "./LayoutCatalog.module.css";

export default function CatalogPage() {
  const {
    cars,
    page,
    totalPages,
    fetchFilteredCars,
    resetCars,
    loadFavorites,
    isLoading,
  } = useCarsStore();

  useEffect(() => {
    loadFavorites();
    resetCars();
    fetchFilteredCars();
  }, [loadFavorites, resetCars, fetchFilteredCars]);

  const handleLoadMore = () => {
    fetchFilteredCars();
  };

  return (
    <main>
      <Filters />

      <div className={css.carsWrapper}>
        <CarsList cars={cars} />

        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onLoadMore={handleLoadMore}
        />

        {isLoading && <p>Loading...</p>}
      </div>
    </main>
  );
}

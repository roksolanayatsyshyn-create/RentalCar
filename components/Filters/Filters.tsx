"use client";

import { useState, useEffect } from "react";
import { useCarsStore } from "@/lib/store/carStore";
import { fetchCars } from "@/lib/api";
import { CustomSelect } from "@/components/Selects/Selects";
import css from "./Filters.module.css";

export function Filters() {
  const { setFilters, resetCars, fetchFilteredCars } = useCarsStore();

  const [brand, setBrand] = useState("");
  const [rentalPrice, setRentalPrice] = useState("");
  const [minMileage, setMinMileage] = useState("");
  const [maxMileage, setMaxMileage] = useState("");

  const [brands, setBrands] = useState<string[]>([]);
  const [prices, setPrices] = useState<string[]>([]);

  useEffect(() => {
    let mounted = true;

    async function loadFilters() {
      const data = await fetchCars(
        undefined,
        undefined,
        undefined,
        undefined,
        1,
        1000,
      );

      if (!mounted) return;

      const uniqueBrands = Array.from(
        new Set(data.cars.map((car) => car.brand)),
      );
      const uniquePrices = Array.from(
        new Set(data.cars.map((car) => Number(car.rentalPrice))),
      ).sort((a, b) => a - b);

      setBrands(uniqueBrands);
      setPrices(uniquePrices.map(String));
    }

    loadFilters();

    return () => {
      mounted = false;
    };
  }, []);

  const onApplyFilters = () => {
    const filters = {
      brand: brand || undefined,
      rentalPrice: rentalPrice || undefined,
      minMileage: minMileage || undefined,
      maxMileage: maxMileage || undefined,
    };

    setFilters(filters);
    resetCars();
    fetchFilteredCars();
  };

  return (
    <div className={css.filters}>
      <div className={css.filtersWrapper}>
        <CustomSelect
          label="Car Brand"
          placeholder="Choose a brand"
          options={brands}
          value={brand}
          onChange={setBrand}
          width={204}
        />

        <CustomSelect
          label="Price/1 hour"
          placeholder="Choose a price"
          options={prices}
          value={rentalPrice}
          onChange={setRentalPrice}
          width={196}
        />

        <div className={css.mileage}>
          <label htmlFor="mileage">Car mileage / km</label>
          <div className={css.mileageWrapper}>
            <input
              className={css.mileageFrom}
              id="mileageFrom"
              type="number"
              placeholder="From"
              min={0}
              value={minMileage}
              onChange={(e) => setMinMileage(e.target.value)}
            />
            <input
              className={css.mileageTo}
              id="mileageTo"
              type="number"
              placeholder="To"
              min={0}
              value={maxMileage}
              onChange={(e) => setMaxMileage(e.target.value)}
            />
          </div>
        </div>

        <button className={css.button} type="button" onClick={onApplyFilters}>
          Search
        </button>
      </div>
    </div>
  );
}

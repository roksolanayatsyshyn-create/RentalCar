import { create } from "zustand";
import { fetchCars } from "@/lib/api";
import type { Car } from "@/types/car";

export interface Filters {
  brand?: string;
  rentalPrice?: string;
  minMileage?: string;
  maxMileage?: string;
}

interface CarsState {
  cars: Car[];
  favorites: Car[];
  filters: Filters;
  page: number;
  totalPages: number;
  isLoading: boolean;

  setFilters: (filters: Filters) => void;
  resetCars: () => void;
  fetchFilteredCars: () => Promise<void>;

  toggleFavorite: (car: Car) => void;
  loadFavorites: () => void;
}

export const useCarsStore = create<CarsState>((set, get) => ({
  cars: [],
  favorites: [],
  filters: {},
  page: 1,
  totalPages: 1,
  isLoading: false,

  loadFavorites: () => {
    if (typeof window === "undefined") return;

    const stored = localStorage.getItem("favorites");
    if (stored) {
      set({ favorites: JSON.parse(stored) });
    }
  },

  setFilters: (newFilters) =>
    set(() => ({
      filters: newFilters,
      page: 1,
      totalPages: 1,
    })),

  resetCars: () =>
    set(() => ({
      cars: [],
      page: 1,
      totalPages: 1,
    })),

  fetchFilteredCars: async () => {
    const { filters, page, totalPages, isLoading } = get();

    if (isLoading) return;
    if (page > totalPages) return;

    set({ isLoading: true });

    try {
      const data = await fetchCars(
        filters.brand,
        filters.rentalPrice,
        filters.minMileage,
        filters.maxMileage,
        page,
      );

      set((state) => ({
        cars: page === 1 ? data.cars : [...state.cars, ...data.cars],
        page: state.page + 1,
        totalPages: data.totalPage,
        isLoading: false,
      }));
    } catch (error) {
      console.error(error);
      set({ isLoading: false });
    }
  },

  toggleFavorite: (car) =>
    set((state) => {
      const exists = state.favorites.some((f) => f.id === car.id);

      const updatedFavorites = exists
        ? state.favorites.filter((f) => f.id !== car.id)
        : [...state.favorites, car];

      if (typeof window !== "undefined") {
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      }

      return { favorites: updatedFavorites };
    }),
}));

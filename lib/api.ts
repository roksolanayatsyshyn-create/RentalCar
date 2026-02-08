import axios from "axios";
import { Car } from "@/types/car";

export interface FetchCarsResponse {
  cars: Car[];
  totalCars: number;
  page: number;
  totalPage: number;
}

const BASE_URL = "https://car-rental-api.goit.global";
const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: process.env.NEXT_PUBLIC_RENTALCAR_TOKEN
    ? { Authorization: `Bearer ${process.env.NEXT_PUBLIC_RENTALCAR_TOKEN}` }
    : {},
});

interface FetchCarsParams {
  brand?: string;
  rentalPrice?: string;
  minMileage?: string;
  maxMileage?: string;
  page: number;
  perPage: number;
}

export async function fetchCars(
  brand?: string,
  rentalPrice?: string,
  minMileage?: string,
  maxMileage?: string,
  page = 1,
  perPage = 12,
): Promise<FetchCarsResponse> {
  const params: FetchCarsParams = {
    page,
    perPage,
  };
  if (brand) params.brand = brand;
  if (rentalPrice) params.rentalPrice = rentalPrice;
  if (minMileage) params.minMileage = minMileage;
  if (maxMileage) params.maxMileage = maxMileage;

  const res = await axiosInstance.get<FetchCarsResponse>("/cars", { params });
  return res.data;
}

export async function fetchCarById(id: string): Promise<Car | null> {
  try {
    const res = await axiosInstance.get<Car>(`/cars/${id}`);
    return res.data;
  } catch (error) {
    console.error("Car not found:", error);
    return null;
  }
}

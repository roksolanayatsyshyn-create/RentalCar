"use client";
import CarDetailsClient from "./carDetails.client";
import { useState, useEffect } from "react";
import { fetchCarById } from "@/lib/api";
import type { Car } from "@/types/car";
import { useParams } from "next/navigation";

export default function CarPage() {
  const params = useParams();
  const id = params?.id as string;

  const [car, setCar] = useState<Car | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function loadCar() {
      if (!id) return;

      try {
        const data = await fetchCarById(id);
        setCar(data);
      } catch (error) {
        console.error(error);
        setCar(null);
      } finally {
        setLoading(false);
      }
    }

    loadCar();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!car) return <p>Car not found</p>;

  return <CarDetailsClient car={car} />;
}

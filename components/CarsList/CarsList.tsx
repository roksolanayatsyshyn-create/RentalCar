"use client";
import type { Car } from "@/types/car";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useCarsStore } from "@/lib/store/carStore";
import css from "./CarsList.module.css";

export interface CarListProps {
  cars: Car[];
}

export function CarsList({ cars }: CarListProps) {
  const router = useRouter();
  const { favorites, toggleFavorite } = useCarsStore();

  const handleClick = (car: Car) => {
    router.push(`/catalog/${car.id}`);
  };

  return (
    <ul className={css.list}>
      {cars.map((car) => {
        const isFavorite = favorites.some((f) => f.id === car.id);

        return (
          <li key={car.id} className={css.carItem}>
            <div className={css.carImgWrapper}>
              <Image
                className={css.carImg}
                src={car.img}
                alt={`${car.brand} ${car.model}`}
                width={276}
                height={268}
                loading="eager"
              />

              <button
                className={`${css.buttonFav} ${isFavorite ? css.active : ""}`}
                onClick={() => toggleFavorite(car)}
              >
                <svg className={css.iconHeart}>
                  <use href="/sprite.svg#heart" />
                </svg>
              </button>
            </div>

            <div className={css.info}>
              <div className={css.titleRow}>
                <h3 className={css.title}>
                  {car.brand} <span className={css.model}>{car.model}</span>,{" "}
                  {car.year}
                </h3>

                <span className={css.price}>${car.rentalPrice}</span>
              </div>
              <div className={css.content}>
                <p>
                  {car.address} | {car.rentalCompany}
                </p>

                <p>
                  {car.type} | {car.mileage.toLocaleString()} km
                </p>
              </div>
            </div>

            <button className={css.button} onClick={() => handleClick(car)}>
              Read More
            </button>
          </li>
        );
      })}
    </ul>
  );
}

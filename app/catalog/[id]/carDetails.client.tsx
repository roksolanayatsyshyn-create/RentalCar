"use client";

import type { Car } from "@/types/car";
import { Form } from "@/components/Form/Form";
import Image from "next/image";
import css from "./carDetails.module.css";

interface CarDetailsClientProps {
  car: Car;
}

export default function CarDetailsClient({ car }: CarDetailsClientProps) {
  return (
    <div className={css.container}>
      <div className={css.imgForm}>
        <Image
          className={css.carImg}
          src={car.img}
          alt={`${car.brand} ${car.model}`}
          width={640}
          height={512}
          loading="eager"
        />
        <Form />
      </div>

      <div className={css.infoCar}>
        <div className={css.infoCarTitle}>
          <div className={css.carTitleWrapper}>
            <h3 className={css.carTitle}>
              {car.brand} {car.model}, {car.year}{" "}
              <span className={css.carId}>id: {car.id}</span>
            </h3>
            <p className={css.carAddressMileage}>
              {car.address} Mileage: {car.mileage.toLocaleString()} km
            </p>
            <p className={css.carPrice}>${car.rentalPrice}</p>
          </div>

          <p className={css.carDescription}>{car.description}</p>
        </div>

        <div className={css.detailsCar}>
          <div className={css.detailsRentalConditions}>
            <h4 className={css.detailsCarTitle}>Rental Conditions</h4>
            <ul className={css.detailsCarList}>
              {car.rentalConditions.map((item, index) => (
                <li className={css.detailsCarItem} key={index}>
                  <svg className={css.detailsCarIcon}>
                    <use href="/sprite.svg#agree" />
                  </svg>{" "}
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className={css.detailsSpecifications}>
            <h4 className={css.detailsCarTitle}>Car Specifications</h4>
            <ul className={css.detailsCarList}>
              <li className={css.detailsCarItem}>
                <svg className={css.detailsCarIcon}>
                  <use href="/sprite.svg#calendar" />
                </svg>{" "}
                Year: {car.year}
              </li>
              <li className={css.detailsCarItem}>
                <svg className={css.detailsCarIcon}>
                  <use href="/sprite.svg#car" />
                </svg>{" "}
                Type: {car.type}
              </li>
              <li className={css.detailsCarItem}>
                <svg className={css.detailsCarIcon}>
                  <use href="/sprite.svg#fuel-pump" />
                </svg>{" "}
                Fuel Consumption: {car.fuelConsumption}
              </li>
              <li className={css.detailsCarItem}>
                <svg className={css.detailsCarIcon}>
                  <use href="/sprite.svg#gear" />
                </svg>{" "}
                Engine Size: {car.engineSize}
              </li>
            </ul>
          </div>

          <div className={css.detailsAccessoriesFunctionalities}>
            <h4 className={css.detailsCarTitle}>
              Accessories and Functionalities
            </h4>
            <ul className={css.detailsCarList}>
              {car.accessories.map((item, index) => (
                <li className={css.detailsCarItem} key={index}>
                  <svg className={css.detailsCarIcon}>
                    <use href="/sprite.svg#agree" />
                  </svg>{" "}
                  {item}
                </li>
              ))}
            </ul>
            <ul className={css.detailsCarList}>
              {car.functionalities.map((item, index) => (
                <li className={css.detailsCarItem} key={index}>
                  <svg className={css.detailsCarIcon}>
                    <use href="/sprite.svg#agree" />
                  </svg>{" "}
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

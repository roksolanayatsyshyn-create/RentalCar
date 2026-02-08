"use client";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast from "react-hot-toast";
import css from "./Form.module.css";

export function Form() {
  const [date, setDate] = useState<Date | null>(null);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    toast.success(" Car successfully booked! We will contact you soon.");

    e.currentTarget.reset();
    setDate(null);
  };
  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <div className={css.formTitleWrapper}>
        <h4 className={css.formTitle}>Book your car now </h4>
        <p className={css.formDescription}>
          Stay connected! We are always ready to help you
        </p>
      </div>

      <div className={css.formInfo}>
        <input
          className={css.formInput}
          id="name"
          type="text"
          placeholder="Name*"
          required
        />

        <input
          className={css.formInput}
          id="email"
          type="text"
          placeholder="Email*"
          required
        />

        <div className={css.dateWrapper}>
          <DatePicker
            className={css.date}
            selected={date}
            onChange={setDate}
            placeholderText="Booking date*"
            dateFormat="dd/MM/yyyy"
          />
        </div>

        <textarea
          className={css.formComment}
          id="comment"
          placeholder="Comment"
        />
        <button className={css.formButton} type="submit">
          Send
        </button>
      </div>
    </form>
  );
}

"use client";
import { useRouter } from "next/navigation";
import css from "./page.module.css";

export default function Home() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/catalog");
  };
  return (
    <main className={css.main}>
      <section className={css.hero}>
        <div className={css.heroWrapper}>
          <div className={css.heroText}>
            <h1 className={css.heroTitle}>Find your perfect rental car</h1>
            <p className={css.heroDescription}>
              Reliable and budget-friendly rentals for any journey
            </p>
          </div>
          <button
            className={css.heroButton}
            type="button"
            onClick={handleClick}
          >
            View Catalog
          </button>
        </div>
      </section>
    </main>
  );
}

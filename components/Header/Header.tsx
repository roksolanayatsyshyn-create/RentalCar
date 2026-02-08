import css from "./Header.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <header className={css.header}>
      <div className={css.headerContainer}>
        <Link className={css.logoLink} href="/" aria-label="Home">
          <svg className={css.logoIcon}>
            <use href="/sprite.svg#logo"></use>
          </svg>
        </Link>
        <nav className={css.nav}>
          <ul className={css.navList}>
            <li className={css.navItem}>
              <Link href="/">Home</Link>{" "}
            </li>
            <li className={css.navItem}>
              <Link href="/catalog">Catalog</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

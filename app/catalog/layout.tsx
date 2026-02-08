import css from "./LayoutCatalog.module.css";

type Props = {
  children: React.ReactNode;
};

export default function CatalogLayout({ children }: Props) {
  return <section className={css.container}>{children}</section>;
}

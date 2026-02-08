import css from "./Pagination.module.css";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onLoadMore: () => void;
}
export function Pagination({
  totalPages,
  currentPage,
  onLoadMore,
}: PaginationProps) {
  if (currentPage >= totalPages) return null;
  return (
    <button className={css.buttonPagination} type="button" onClick={onLoadMore}>
      Load More
    </button>
  );
}

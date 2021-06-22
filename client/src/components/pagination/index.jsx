import style from "./pagination.module.css";
/* import BottomPagination from './bottom/bottomPagination'; */

export default function Pagination({
  videogamesPerPage,
  totalVideogames,
  paginate,
  goToNextPage,
  goToPreviousPage,
}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalVideogames / videogamesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className={style.nav}>
      <div className={style.ul}>
        <button
          onClick={goToPreviousPage}
          className={style.btn}
        >
          Prev
        </button>
        {pageNumbers.map((number) => (
          <button
            key={number}
            className={style.btnNumber}
            onClick={() => paginate(number)}
          >
            {number}
          </button>
        ))}

        <button
          onClick={goToNextPage}
          className={style.btn}
        >
          Next
        </button>
      </div>
    </nav>
  );
}


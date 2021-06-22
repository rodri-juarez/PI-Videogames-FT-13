import style from './pagination.module.css'

export default function Pagination ({ videogamesPerPage, totalVideogames, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalVideogames / videogamesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className={style.nav}>
      <ul className={style.ul}>
        {pageNumbers.map(number => (
          <li key={number} className={style.li}>
            <button onClick={() => paginate(number)}  >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};







/* export default function Pagination() {
  const dispatch = useDispatch();
  

  return (
    <>
      <div>
      <button
          onClick={() => {
            dispatch(getVideogames());
          }}
        >
          Previous
        </button>
        <button
          onClick={() => {
            dispatch(getVideogames());
          }}
        >
          Next
        </button>

      </div>
    </>
  );
} */

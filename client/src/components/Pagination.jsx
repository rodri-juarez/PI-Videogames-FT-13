import { nextPage } from "../actions";
import { useDispatch } from "react-redux";
export default function Pagination() {
  const dispatch = useDispatch();
  const pages = [1, 2, 3, 4, 5, 6, 7];
  console.log("adentro de paginacion");
  return (
    <>
      <ul>
        {pages.map((page) => {
          return (
            <li key={page}>
              {" "}
              <button
                onClick={() => {
                  dispatch(nextPage(page));
                }}
              >
                {" "}
                {page}{" "}
              </button>{" "}
            </li>
          );
        })}
      </ul>
    </>
  );
}

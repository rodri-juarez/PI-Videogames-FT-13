import { getVideogames } from "../../actions";
import { useDispatch } from "react-redux";


export default function Pagination() {
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
}

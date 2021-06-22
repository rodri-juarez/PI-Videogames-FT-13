import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideogameID } from "../../actions";
import style from "./videogameDetail.module.css";

export default function VideogameDetail(props) {
  const videogame = useSelector((store) => store.videogame);
  const dispatch = useDispatch();
  const id = props.id;
  const {
    name,
    rating,
    genres,
    plataforms,
    description,
    released,
    background_image,
  } = videogame;

  useEffect(() => {
    if (videogame.length === 0) dispatch(getVideogameID(id));
  }, [dispatch, videogame, id]);

  let text = "";
  if (description) text = description.replace(/(<([^>]+)>)/gi, "");

  return (
    <div className={style.div}>
      <div className={style.container}>
        <div className={style.divImg}>
          {" "}
          <img
            className={style.img}
            src={background_image}
            alt="Imagen"
          ></img>{" "}
        </div>
        <div className={style.border}>Name: {name}</div>
        <div className={style.border}>
          <label className={style.label}>Genres: </label>
          {genres &&
            genres.map((genre) => {
              return <div className={style.genres}>{genre.name}</div>;
            })}
        </div>
        <div className={style.border}>Released: {released}</div>
        <div className={style.border}>Rating: {rating}</div>
        {plataforms &&
          plataforms.map((plataform) => {
            return <div className={style.border}>{plataform.name}</div>;
          })}
        <div className={style.description}>{text}</div>
      </div>
    </div>
  );
}

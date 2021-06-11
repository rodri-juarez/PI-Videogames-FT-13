import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideogames } from "../actions";

export default function Home() {
  const videogames = useSelector((store) => store.videogames);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideogames());
  }, [dispatch]);
console.log(videogames[0])
  return (
    <>
      <h1> Home </h1>

      {videogames.map((videogame) => {
        return (
          <div key={videogame.id}>
            <div>{videogame.name}</div>
            <div>{videogame.genres[0].name}</div>
          </div>
        )
      })}
    </>
  );
}

import { useState } from "react";
import { addVideogame } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import { getGenres } from "../../actions";
import style from "./createVideogame.module.css";

export default function CreateVideogame() {
  const generos = useSelector((store) => store.genres);
  const dispatch = useDispatch();
  /* const imagenes=[]; */
  const [newVideogame, setNewVideogame] = useState({
    background_image:'https://media.rawg.io/media/screenshots/8ba/8ba023119cc83dff0d1d535f12e6b348.jpg',
    creator: "usuario",
    genres: [],
    plataforms: [],
  });
  const [newGenre, setNewGenre] = useState([]);
  const [newPlatform, setNewPlatform] = useState([]);

  const { name, released, plataforms, genres, rating, description, background_image,  creator } =
    newVideogame;

  if (generos.length === 0) dispatch(getGenres());

  function handleSubmit(e) {
    e.preventDefault();
    console.log(newVideogame);
    dispatch(
      addVideogame({
        name,
        released,
        plataforms,
        genres,
        rating,
        description,
        background_image,
        creator,
      })
    );
  }
  let key = 0;

  function deleteElement(arg) {
    if (arg === "genre") {
      var genres = newGenre;
      genres.pop();
      return setNewGenre([...genres]);
    }
    if (arg === "platform") {
      var plataforms = newPlatform;
      plataforms.pop();
      return setNewPlatform([...plataforms]);
    }
  }

  return (
    <div className={style.container}>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label className={style.label} for="Name">
            Name:{" "}
          </label>
          <input
            className={style.input}
            type="text"
            name="Name"
            placeholder="Name..."
            onChange={(e) =>
              setNewVideogame({ ...newVideogame, name: e.target.value })
            }
            required
          />
        </div>
        <div>
          <label className={style.label} for="Description">
            Description:{" "}
          </label>
          <input
            className={style.input}
            type="text"
            name="Description"
            placeholder="Description..."
            onChange={(e) =>
              setNewVideogame({ ...newVideogame, description: e.target.value })
            }
            required
          />
        </div>
        <div>
          <label className={style.label} for="Released">
            Released:{" "}
          </label>
          <input
            className={style.input}
            type="date"
            name="Released"
            placeholder="Released..."
            onChange={(e) =>
              setNewVideogame({ ...newVideogame, released: e.target.value })
            }
            required
          />
        </div>
        <div>
          <label className={style.label} for="Rating">
            Rating:{" "}
          </label>
          <input
            className={style.input}
            type="number"
            name="Rating"
            step="any"
            placeholder="Rating..."
            onChange={(e) =>
              setNewVideogame({ ...newVideogame, rating: e.target.value })
            }
            required
          />
        </div>
        <div>
          <div>
            <label className={style.label} for="Plataforms">
              Plataforms:{" "}
            </label>
            <select
              name="plataforms"
              onChange={(e) =>
                setNewVideogame({
                  ...newVideogame,
                  plataforms: [...newVideogame.plataforms, e.target.value],
                })
              }
              required
            >
              <option key={key++} defaultValue="" selected>
                Select a Platform---
              </option>
              <option>Playstation 5</option>
              <option>Xbox-One</option>
              <option>Playstation 4</option>
              <option>Xbox-360</option>
              <option>PC</option>
              <option>MacOs</option>
              <option>Android</option>
              <option>Linux</option>
            </select>
          </div>
        </div>
        <div className="genre">
          <label className={style.label} for="genres">
            Genre:{" "}
          </label>
        </div>
        <select
          name="genres"
          onChange={(e) =>
            setNewVideogame({
              ...newVideogame,
              genres: [...newVideogame.genres, e.target.value],
            })
          }
        >
          <option defaultValue="" selected>
            Select a Genre
          </option>
          {generos.map((genre) => {
            return <option key={genre.id}>{genre.name}</option>;
          })}
        </select>

        <button className="submit" type="submit">
          Create Videogame
        </button>

        <button
          className="addGenre"
          onClick={() => setNewGenre([...newGenre, "x"])}
        >
          Add Genre
        </button>
        <button
          className="addPlatform"
          onClick={() => setNewPlatform([...newPlatform, "x"])}
        >
          Add Platform
        </button>
      </form>
      {newGenre.map((e) => {
        return (
          <select
            name="genres"
            onChange={(e) =>
              setNewVideogame({
                ...newVideogame,
                genres: [...newVideogame.genres, e.target.value],
              })
            }
          >
            <option key={key++} defaultValue="" selected>
              Select a Genre---
            </option>
            {generos.map((e) => {
              return <option key={e.id}>{e.name}</option>;
            })}
          </select>
        );
      })}
      {newPlatform.map((e) => {
        return (
          <div>
            <select
              name="platforms"
              onChange={(e) =>
                setNewVideogame({
                  ...newVideogame,
                  platforms: [...newVideogame.platforms, e.target.value],
                })
              }
            >
              <option key={key++} value="" selected>
                Select a Platform---
              </option>
              <option>Playstation 5</option>
              <option>Xbox-One</option>
              <option>Playstation 4</option>
              <option>Xbox-360</option>
              <option>PC</option>
              <option>MacOs</option>
              <option>Android</option>
              <option>Linux</option>
            </select>
          </div>
        );
      })}

      {newGenre.length ? (
        <button className="removeGenre" onClick={() => deleteElement("genre")}>
          Remove genre
        </button>
      ) : null}
      {newPlatform.length ? (
        <button
          className="removePlatform"
          onClick={() => deleteElement("platform")}
        >
          Remove Platform
        </button>
      ) : null}
    </div>
  );
}

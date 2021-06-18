import { /* useEffect, */ useState } from "react";
import { addVideogame } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import { getGenres } from "../../actions";

export default function CreateVideogame() {
  const generos = useSelector((store) => store.genres);
  const dispatch = useDispatch();
  /* const [name, setName] = useState("");
  const [relesead, setRelesead] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState();
  const [plataforms, setPlataforms] = useState([]);
  const [genres] = useState([]);
  const [creator] = useState("usuario"); */
  const [newVideogame, setNewVideogame] = useState({
    creator: "usuario",
    genres: [],
    plataforms: [],
  });
  const [newGenre, setNewGenre] = useState([]);
  const [newPlatform, setNewPlatform] = useState([]);
  const { name, relesead, plataforms, genres, rating, description, creator } =
    newVideogame;

  /* useEffect( () => {
    console.log('adentro del effect')
   
     
  }, [dispatch, generos]); */
  if (generos.length === 0) dispatch(getGenres());

  function handleSubmit(e) {
    e.preventDefault();
    console.log(newVideogame);
    dispatch(
      addVideogame({
        name,
        relesead,
        plataforms,
        genres,
        rating,
        description,
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
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label for="Name">Name: </label>
        <input
          type="text"
          name="Name"
          placeholder="Name..."
          onChange={(e) =>
            setNewVideogame({ ...newVideogame, name: e.target.value })
          }
          required
        />
        <label for="Description">Description: </label>
        <input
          type="text"
          name="Description"
          placeholder="Description..."
          onChange={(e) =>
            setNewVideogame({ ...newVideogame, description: e.target.value })
          }
          required
        />
        <label for="Relesead">Relesead: </label>
        <input
          type="date"
          name="Relesead"
          placeholder="Relesead..."
          onChange={(e) =>
            setNewVideogame({ ...newVideogame, relesead: e.target.value })
          }
          required
        />
        <label for="Rating">Rating: </label>
        <input
          type="number"
          name="Rating"
          step="any"
          placeholder="Rating..."
          onChange={(e) =>
            setNewVideogame({ ...newVideogame, rating: e.target.value })
          }
          required
        />

        <div>
          <div>
            <label for="Plataforms">Plataforms: </label>
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
          <label for="genres">Genre: </label>
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
          <option  defaultValue="" selected>
            Select a Genre
          </option>
          {generos.map((genre) => {
            return (
              <option key={genre.id}>
                {genre.name}
              </option>
            );
          })}
        </select>
        <button className="submit" type="submit">
          Create!
        </button>

        <button
          className="addGenre"
          onClick={() => setNewGenre([...newGenre, "x"])}
        >
          Add genre
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
              return (
                <option key={e.id}>
                  {e.name}
                </option>
              );
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
    </>
  );
}

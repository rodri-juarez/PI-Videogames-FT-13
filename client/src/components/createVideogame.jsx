import { useState } from "react";
import { addVideogame } from "../actions";
import { useDispatch } from "react-redux";

export default function CreateVideogame() {
  const [name, setName] = useState("");
  const [relesead, setRelesead] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");
  const [plataforms, setPlataforms] = useState([]);
  const [genres] = useState([]);

  const dispatch = useDispatch();
    

  function handleSubmit(e) {
    e.preventDefault();
    
    dispatch(
      addVideogame({ name, relesead, plataforms, genres, rating, description })
    );
  }
  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Relesead: </label>
          <input
            type="date"
            name="released"
            onChange={(e) => setRelesead(e.target.value)}
          />
        </div>
        <div>
          <label>Description: </label>
          <input
            type="text"
            name="description"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="rating">Rating: </label>
          <input
            type="number"
            name="rating"
            onChange={(e) => setRating(e.target.value)}
          />
        </div>
        
        <div>
          <label htmlFor="select">
            Plataforms
          </label>
          <select name="select" defaultValue="---" onChange={(e) => setPlataforms([e.target.value])}>
            <option value="---">---</option>
            <option value="Playstation">Playstation</option>
            <option value="Xbox">Xbox</option>
            <option value="PC">PC</option>
          </select>
        </div>
        <div>
          <label htmlFor="genres" >
            Genres 
          </label>
          <select name="genres" defaultValue="---" onChange={(e) => genres.push([e.target.value])}>
            <option value="---">---</option>
            <option value="Action">Action</option>
            <option value="Indie">Indie</option>
            <option value="Adventure">Adventure</option>
          </select>
          <pre>
        <code>
          {genres}
        </code>
      </pre>
        </div>
        <button type="submit"> Crear Videogame</button>
      </form>
    </>   
  );
}

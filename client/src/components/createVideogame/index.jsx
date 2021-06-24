import { useState } from "react";
import { addVideogame } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import { getGenres } from "../../actions";
import style from "./createVideogame.module.css";
import Tooltip from "../tooltip";
import Icon from "../Icon";
import Name from './inputName'
import Description from "./inputDescription";
import Released from "./inputReleased";
import Rating from "./inputRating";
import Plataforms from "./inputPlataforms";
import Genres from './inputGenres';
import AddButtom from "./addButtom";

export default function CreateVideogame() {
  const generos = useSelector((store) => store.genres);
  const dispatch = useDispatch();
  
  const [newVideogame, setNewVideogame] = useState({
    background_image:
      "https://media.rawg.io/media/screenshots/8ba/8ba023119cc83dff0d1d535f12e6b348.jpg",
    creator: "usuario",
    genres: [],
    plataforms: [],
  });
  const [newGenre, setNewGenre] = useState([]);
  const [newPlatform, setNewPlatform] = useState([]);

  

  const {
    name,
    released,
    plataforms,
    genres,
    rating,
    description,
    background_image,
    creator,
  } = newVideogame;

  if (generos.length === 0) dispatch(getGenres());
  

  function handleSubmit(e) {
    e.preventDefault();
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
      <form className={style.form} onSubmit={(e) => handleSubmit(e)}>

        <Name setNewVideogame={setNewVideogame} newVideogame={newVideogame} />
        
        <Description setNewVideogame={setNewVideogame} newVideogame={newVideogame} />

        <Released setNewVideogame={setNewVideogame} newVideogame={newVideogame} />
     
        <Rating setNewVideogame={setNewVideogame} newVideogame={newVideogame} />

        <Plataforms setNewVideogame={setNewVideogame} newVideogame={newVideogame}/>
        
        <Genres setNewVideogame={setNewVideogame} newVideogame={newVideogame} generos={generos} />

        <AddButtom setNewPlatform={setNewPlatform} setNewGenre={setNewGenre} newGenre={newGenre} newPlatform={newPlatform} />

        <div className={style.containerButtom}>
          
          <div class={style.containNew}>
            <div>
              {" "}
              {newGenre.map((e) => {
                return (
                  <div >
                    {" "}
                    {newGenre.length ? (
                      <button
                        className={style.btn}
                        onClick={() => deleteElement("genre")}
                      >
                        Remove genre
                      </button>
                    ) : null}
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
                        Select a Genre
                      </option>
                      {generos.map((e) => {
                        return <option key={e.id}>{e.name}</option>;
                      })}
                    </select>
                  </div>
                );
              })}
            </div>
            <div>
              {newPlatform.map((e) => {
                return (
                  <div className={style.Gen}>
                    {newPlatform.length ? (
                      <button
                        className={style.btn}
                        onClick={() => deleteElement("platform")}
                      >
                        Remove Plataform
                      </button>
                    ) : null}
                    <select
                      name="platforms"
                      onChange={(e) =>
                        setNewVideogame({
                          ...newVideogame,
                          plataforms: [
                            ...newVideogame.plataforms,
                            e.target.value,
                          ],
                        })
                      }
                    >
                      <option key={key++} value="" selected>
                        Select a Plataform
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
            </div>
          </div>
        </div>

        <div className={style.border1}>
          <button className={style.btn} type="submit">
            Create Videogame
          </button>
        </div>
      </form>

      { newVideogame.name && <div key={newVideogame.id} className={style.a}>
        <div className={style.prueba}>
          
            <div
              style={{
                backgroundImage: `url(${newVideogame.background_image})`,
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
              }}
              className={style.img}
            ></div>
         

          <div className={style.texto}>
            <div className={style.link}> {newVideogame.name} </div>
            <div className={style.genres}>
              {newVideogame.genres.length > 0 &&
                newVideogame.genres.map((genre) => {
                  return (
                    <>
                      <div className={style.e}>
                        <Tooltip content={`${genre.name}`} direction="bottom">
                          <div className={style.margin}>
                            <Icon name={genre.name} />
                          </div>
                        </Tooltip>
                      </div>
                    </>
                  );
                })}
            </div>
          </div>
        </div>
      </div>}
    </div>
  );
}
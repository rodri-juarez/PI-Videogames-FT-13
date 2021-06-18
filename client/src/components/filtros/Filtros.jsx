


export default function Filtros({ filtroPorCreador, setByGenres, genres }) {
  
  return (
    <>
      <button
        onClick={() => {
          filtroPorCreador();
        }}
      >
        por creador
      </button>
      
      <select
            name="genres"
            defaultValue="---"
            onChange={(e) => setByGenres(e.target.value)}
          >
            {" "}
            
            {genres.length > 0 &&
              genres.map((genre) => <option key={genre.id} value={genre.name}>{genre.name}</option>)}
           
          </select>
    </>
  );
}

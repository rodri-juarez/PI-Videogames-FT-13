

export default function NotFound(){


   return (
      <><h1>La pagina que buscas no existe</h1>
      <button onClick={()=> {window.history.back()}}>
            {/* <Link to="/Home">Home</Link> */}
            REGRESAR
          </button>
  </>
   )
}


export default function VideogameDetail({videogame}){

     console.log('adentro de videogame detail')
     console.log(videogame)
    return (
    <>
    
    {/* <h3>{videogame.background_image}</h3> */}
    <div>{videogame.name}</div>
    <div>{videogame.genres}</div>
    <div>{videogame.relesead}</div>
    <div>{videogame.rating}</div>
    <div>{videogame.plataforms}</div>
    <div>{videogame.description}</div>
    </>
    )
}


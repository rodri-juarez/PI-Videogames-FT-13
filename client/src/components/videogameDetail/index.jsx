import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getVideogameID } from '../../actions'

export default function VideogameDetail(props){
    const videogame = useSelector((store) =>  store.videogame )
    const dispatch = useDispatch()
    const id = props.id;
    const {name, rating, genres, plataforms, description, relesead, background_image} = videogame
    useEffect(()=>{
      if(videogame.length === 0) dispatch(getVideogameID(id))
    }, [dispatch, videogame, id])
    
    let text='';
    if(description) text = description.replace(/(<([^>]+)>)/ig, '')

    return (
    <>
    <h1>{id}</h1>
    <img src={background_image} alt='Imagen'></img>
    <div>{name}</div>
    {genres && genres.map((genre) =>{ return <div>{genre.name}</div>})}
    <div>{relesead}</div>
    <div>{rating}</div>
    {plataforms && plataforms.map((plataform) =>{ return <div>{plataform.name}</div>})}
    <div>{text}</div>
    </>
    )  
}


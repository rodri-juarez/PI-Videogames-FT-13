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
     console.log('adentro de videogame detail')
     console.log(videogame)
     console.log(genres)
     
    return (
    <>
    <h1>{id}</h1>
    <img src={videogame.background_image} alt='Imagen'></img>
    <div>{name}</div>
    {/* <div>{genres[0].name}</div> */}
    <div>{relesead}</div>
    <div>{rating}</div>
    {/* <div>{plataforms[0].name}</div> */}
    <div>{description}</div>
    </>
    )  
}



import {Link} from 'react-router-dom'
import style from './paginaInicial.module.css'
export default function PaginaInicial () {
     
    return (
        
        <div className={style.div}>
            <div className={style.button}>
           <button className={style.btn}> <Link className={style.link} to='/Home'> HOME</Link></button>
           </div>
        </div>
        
    )
}
import { Link } from "react-router-dom";
import style from "./paginaInicial.module.css";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  h1Container: {
    marginLeft: '14%',
    position: 'absolute',
    width: '72%',
    height: '275px',
    marginTop: '7%',
    zIndex: '30',
  },

  h1: {
    fontSize: '2.5rem',
    color: 'rgb(255, 255, 255)',
    position: 'absolute',
    zIndex: '20',
    width: '100%',
    height: '180px',
    textAlign: 'center',
    [theme.breakpoints.between(500, 1000)]: {
      fontSize: '3rem',
      height: '200px',
    },
    [theme.breakpoints.up(1000)]: {
      fontSize: '4rem',
      height: '150px',
    }
  },
  link: {
    textDecoration: 'none',
    zIndex: '30',
    marginTop: '100%',
    width: '70%',
    position: 'absolute',
    marginLeft: '15%',
    [theme.breakpoints.between(500, 800)]: {
      width: '40%',
      marginTop: '300px',
      marginLeft: '30%',
      border: 'red solid 1px'
    },
    [theme.breakpoints.between(800, 1200)]: {
      width: '40%',
      marginTop: '35%',
      marginLeft: '30%',
    },
    [theme.breakpoints.up(1200)]: {
      width: '40%',
      marginTop: '30%',
      marginLeft: '30%',
    }
  },


  btn: {
    marginLeft: '30%',
    width: '35%',
    height: '50px',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '10px',
    background: 'rgb(255, 255, 255)',
    fontSize: '1.3rem',
    textDecoration: 'none',
    '&:hover': {
      transition: '600ms',
      background: 'rgb(252, 124, 65)',
  },
    [theme.breakpoints.between(500, 1000)]: {
      width: '40%',
      fontSize: '1.5rem',
    },
    [theme.breakpoints.up(1000)]: {
      width: '35%',
      fontSize: '1.8rem',
    },
  }
}));

export default function PaginaInicial() {
  const classes = useStyles();

  return (<>
    <div className={classes.h1Container}>
      <h1 className={classes.h1}>Welcome to Henry Videogames!</h1>
    </div>
    <Link className={classes.link} to="/Home">
      <button className={classes.btn}> HOME</button>
    </Link>
    <div className={style.div}>
      <div className={style.button}>


      </div>
    </div>
  </>
  );
}

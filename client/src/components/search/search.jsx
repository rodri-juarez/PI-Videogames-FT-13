import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';
import style from "./search.module.css";

const useStyles = makeStyles((theme) => ({
    root: {
        /* padding: '2px 4px', */
        display: 'flex',
        alignItems: 'center',
        width: '40%',
        height:'40%',
        marginTop: '2.5%',
        background: 'rgb(65, 65, 65)',
        borderRadius:'25px',

    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
        color: 'rgb(255, 255, 255)',
       
    },
    iconButton: {
        padding: 10,
        color: 'rgb(255, 255, 255)',
    },
    divider: {
        height: 28,
        margin: 4,
    },
}));


export default function Search({ busquedaPorNombre }) {
    const classes = useStyles();
    const [name, setName] = useState();

    function handleChange(e) {
        setName(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        busquedaPorNombre(name);
    }
    return (
        <Paper component="form" className={classes.root} onSubmit={(e) => handleSubmit(e)}>
            <IconButton className={classes.iconButton} aria-label="menu">
                <Link className={style.Link} to="/Home">Home</Link>
            </IconButton>
            <InputBase
                className={classes.input}
                placeholder="Search videogame"
                inputProps={{ 'aria-label': 'search videogame' }}
                onChange={(e) => handleChange(e)}
            />
            <IconButton type="submit" className={classes.iconButton} aria-label="search">
                <SearchIcon />
            </IconButton>
            <Divider className={classes.divider} orientation="vertical" />
            <IconButton color="primary" className={classes.iconButton} aria-label="directions">
                <Link className={style.Link} to="/CreateVideogame">Create Videogame</Link>
            </IconButton>
        </Paper>
    )
}
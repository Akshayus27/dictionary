import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import SearchIcon from '@material-ui/icons/Search'
import { useStyles } from './styles/SearchStyle'
import { TextField } from '@material-ui/core'

export const SearchBar = () => {
    const classes = useStyles()
    const search = useSelector(state => state.dictionary.search)
    const dispatch = useDispatch()

    //Handling the event on the search bar
    const handleChange = (e) => {
        dispatch({type: "SEARCH_WORD", payload: e.target.value.toLowerCase()})
    }

    return (
        <div className={classes.grow}>
            <AppBar className={classes.grow} position="fixed">
                <Toolbar>
                    <Typography className={classes.title} variant="h6" noWrap>
                        Dictionary
          </Typography>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <TextField
                            classes={classes.form}
                            value={search}
                            onChange={(e) => handleChange(e)}
                            placeholder="Search…"
                            id="outlined-size-small"
                            variant="outlined"
                        />
                    </div>
                    <div className={classes.grow} />
                </Toolbar>
            </AppBar>
        </div>
    )
}
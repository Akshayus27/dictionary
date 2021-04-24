import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useStyles } from './styles/SearchStyle'

export const SearchBar = () => {
    const classes = useStyles()
    const search = useSelector(state => state.dictionary.search)
    const dispatch = useDispatch()

    //Handling the event on the search bar
    const handleChange = (e) => {
        dispatch({ type: "SEARCH_WORD", payload: e.target.value.toLowerCase() })
    }

    return (
        <form className={classes.root} >
            <div className={classes.form}>
                <input
                    type='text'
                    className={classes.text}
                    value={search}
                    onChange={(e) => handleChange(e)}
                    label="search"
                    placeholder="VOCAB"
                    color="white"
                />
            </div>
        </form>
    )
}
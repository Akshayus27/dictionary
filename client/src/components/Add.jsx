import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {addWordToList} from '../store/actions'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete'
import {useStyles} from './styles/AddStyle'

export const Add = ({handleAddClose}) => {
  const classes = useStyles()
  const add_word = useSelector(state => state.dictionary.add_word)
  const dispatch = useDispatch()

  //Handling the new word event
  const handleChange = (e) => {
    dispatch({type: "ADD_WORD", payload: e.target.value.toLowerCase()})
  }

  //Saving the new word and getting the new updated list
  const handleSave = async() => {
    if(add_word !== undefined) {
      handleAddClose()
      const response = await addWordToList(add_word)
      dispatch({type: "ADD_WORD", payload: ''})
      dispatch({type: "GET_WORDS_LIST", payload: response})
    } 
  }

  return (
    <React.Fragment >
    <form  className={classes.root} noValidate autoComplete="off">
      <div className={classes.form}>
        <TextField
          className={classes.text}
          value={add_word}
          onChange={(e) => handleChange(e)}
          id="outlined-size-normal"
          placeholder="Word"
          variant="outlined"
        />
        <Button
        variant="contained"
        size="large"
        onClick={handleSave}
        className={classes.buttonSave}
        startIcon={<SaveIcon />}
      >
        Save
      </Button>
        <Button
        variant="contained"
        size="large"
        onClick={handleAddClose}
        className={classes.buttonCancel}
        startIcon={<DeleteIcon />}
      >
        Cancel
      </Button>
      </div>
    </form>
    </React.Fragment>
  )
}

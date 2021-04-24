import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {addWordToList} from '../store/actions'
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
    <form  className={classes.root} >
      Add to Dictionary
      <div className={classes.form}>
        <input
          type='text'
          className={classes.text}
          value={add_word}
          onChange={(e) => handleChange(e)}
          label="word"
          placeholder="word"
        />
        <div className={classes.buttonAlign}>
        <button
        onClick={handleAddClose}
        className={classes.buttonCancel}
      >
        CANCEL
      </button>
        <button
        onClick={handleSave}
        className={classes.buttonSave}
      >
        ADD
      </button>
        </div>
      </div>
    </form>
  )
}

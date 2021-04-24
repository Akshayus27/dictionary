import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getWordsList } from '../store/actions'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Divider from '@material-ui/core/Divider'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'
import { useStyles } from './styles/WordListStyle'
import AddIcon from '@material-ui/icons/Add'
import LaunchIcon from '@material-ui/icons/Launch';
import Fab from '@material-ui/core/Fab'
import Modal from '@material-ui/core/Modal'
import { Add } from './Add'
import { Cards } from './Cards'
import {SearchBar} from './SearchBar'


export const WordList = () => {
  const classes = useStyles()
  const wordsList = useSelector(state => state.dictionary.wordsList)
  const search = useSelector(state => state.dictionary.search)
  const add_gate = useSelector(state => state.dictionary.add_gate)
  const card_id = useSelector(state => state.dictionary.card_id)
  const dispatch = useDispatch()

  //Getting the list of words from the backend when the component mounts and updates
  useEffect(async () => {
    const fetchData = async () => {
      return await getWordsList()
    }
    const data = await fetchData()
    dispatch({ type: 'GET_WORDS_LIST', payload: data })
  }, [])

  //Handling the closing and opening of the add modal that is used to add new words
  const handleAddClose = () => {
    dispatch({ type: "CLOSE_ADD", payload: false })
  }

  const handleAddOpen = () => {
    dispatch({ type: "OPEN_ADD", payload: true })
  }

  //Handling the closing and opening of the card modal that displays the details of the specific word

  //Instead of using true or false, which would lead to the opening of all modals at once as it all shares the same props,
  //assign the id to each lsit items as it is unique and check if the id that is clicked on the click event is the same as the 
  // word's id.
  const handleCardClose = () => {
    dispatch({ type: "SET_CARD_ID", payload: '' })
  }

  const handleCardOpen = (e, id) => {
    dispatch({ type: "SET_CARD_ID", payload: id })
  }

  return (
    <React.Fragment>
      <SearchBar />
      <List className={classes.root}>
      {wordsList &&
        wordsList.map((word, index) => {
          // Searching for the specific string that is typed in the search bar. To avoid confusion convert everything to
          //lowercase for comparison.
          let pattern = new RegExp(search)
          if(!pattern.test(word.word.toLowerCase())) return null 
          return (
            <section  key={index}>
              <ListItem  className={classes.item} alignItems="flex-start">
                {/* Assign the unique id to list item */}
                <LaunchIcon id={word._id} onClick={(e) => handleCardOpen(e, word._id)} size="small" className={classes.modal}/>
                <ListItemText
                  primary={`${word.word}`}
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                      >
                        {`(${word.entries[0].lexicalId}) - `}
                      </Typography>
                      {word.entries[0].senses[0].definitions}
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Modal
              // Check if the id in the event is same as the word's id
                open={card_id === word._id}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
              >
                <Cards handleCardClose={handleCardClose} word={word} />
              </Modal>
              <Divider variant="middle" component="li" />
            </section>
          )
        })
      }
      <React.Fragment>
        <Fab className={classes.icon} onClick={handleAddOpen} >
          <AddIcon />
        </Fab>
        <Modal
          open={add_gate}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <Add handleAddClose={handleAddClose} />
        </Modal>
      </React.Fragment>
    </List>
    </React.Fragment>
  )
}


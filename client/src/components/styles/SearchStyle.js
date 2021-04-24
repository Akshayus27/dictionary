import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#bf7c7c',
    borderRadius: '5px',
    border: 'none',
    outline: 'none'
  },
  text: {
    padding: '1vh',
    margin: '3vh',
    border: 'none',
    borderBottom: '1px solid black',
    outline: 'none',
    backgroundColor: '#bf7c7c',
    color: 'white',
    fontWeight: 'bold',

  },
  form: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexFlow: 'column'
  }
  }))
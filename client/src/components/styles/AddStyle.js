import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '30vh'
      },
      boxShadow: '0px 5px 10px 0px #888888',
      marginLeft: 'auto',
      marginRight: 'auto',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexFlow: 'column',
      maxWidth: '30vh',
      minHeight: '2vh',
      marginTop: '25vh',
      padding: '2vh',
      backgroundColor: 'white',
      borderRadius: '5px',
      border: 'none',
      outline: 'none'
    },
    text: {
      padding: '2vh',
      margin: '3vh',
      border: 'none',
      borderBottom: '1px solid black',
      outline: 'none'

    },
    form: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexFlow: 'column'
    },
    buttonSave: {
      margin: '2vh',
      color: '#9c1d14',
      outline: 'none',
      border: 'none',
      backgroundColor: 'white',
      cursor: 'pointer',
      fontWeight: 'bold',
      '&:hover': {
        boxShadow: 'none',
      },
    },
    buttonCancel: {
      margin: '2vh',
      color: '#9c1d14',
      outline: 'none',
      border: 'none',
      backgroundColor: 'white',
      cursor: 'pointer',
      fontWeight: 'bold',
      '&:hover': {
        boxShadow: 'none',
      },
    }
  }))
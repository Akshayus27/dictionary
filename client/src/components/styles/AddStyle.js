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
      maxWidth: '30vh',
      minHeight: '2vh',
      marginTop: '25vh',
      padding: '2vh',
      backgroundColor: 'white',
      borderRadius: '5px',
      border: 'none',
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
      backgroundColor: '#69d184',
      color: 'white',
      '&:hover': {
        backgroundColor: '#49b365',
        borderColor: '#0062cc',
        boxShadow: 'none',
      },
    },
    buttonCancel: {
      margin: '2vh',
      backgroundColor: '#c25353',
      color: 'white',
      '&:hover': {
        backgroundColor: '#b83b3b',
        borderColor: '#0062cc',
        boxShadow: 'none',
      },
    }
  }))
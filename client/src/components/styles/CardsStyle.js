import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles({
    root: {
      minWidth: '40vh',
      maxWidth: '60vh',
      maxHeight: '70vh',
      marginTop: '2vh',
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto',
      padding: '2vh',
      justifyContent: 'center',
      alignItems: 'center',
      boxShadow: '0px 5px 10px 0px #888888',
      border: 'none',
      outline: 'none',
      overflowX: 'hidden',
      overflowY: 'auto',
      flexFlow: 'column',
      position: 'relative'
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: '2vh',
    },
    buttonPos: {
        position: 'relative',
        marginLeft: '50vh',
        fontWeight: 'light',
        backgroundColor: '#c25353',
        color: 'white',
        '&:hover':{
          backgroundColor: '#b83b3b',
          boxShadow: 'none'
        }
    }
  })
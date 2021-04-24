import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles({
    root: {
      minWidth: '20vh',
      maxWidth: '50vh',
      maxHeight: '80vh',
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
      overflowY: 'auto',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: '2vh',
    },
    buttonPos: {
        position: 'static',
        marginLeft: '45vh',
        fontWeight: 'bold',
        cursor: 'pointer',
        color: 'grey',
        '&:hover':{
          boxShadow: 'none'
        }
    }
  })
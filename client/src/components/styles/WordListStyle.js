import { makeStyles} from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: '60vh',
      backgroundColor: theme.palette.background.paper,
      display: 'block',
      marginLeft: 'auto',
      margin: '1px',
      marginRight: 'auto',
      border: 'none',
      outline: 'none',
      fontWeight: 'light'
    },
    item: {
      boxShadow: '1px 1px 1px px #888888',
      display: 'flex',
      justifyContents: 'center',
      alignItems: 'right',
      flexDirection: 'column',
      cursor: 'pointer'
    },
    inline: {
      display: 'inline',
    },
    fab: {
      margin: theme.spacing(2),
    },
    icon: {
      position: 'fixed',
      backgroundColor: '#bf7c7c',
      '&:hover': {
        backgroundColor: '#bf7c7c'
      },
      color: 'white',
      bottom: '2vh',
      top: '87vh',
      marginLeft: '40vh',
      marginRight: '60vh'
    },
    modal: {
      position: 'relative',
      marginRight: '1vh',
      color:"black",
      fontSize: 24,
      fontWeight: 'bolder'
    },
  }))
import { makeStyles, rgbToHex } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: '60vh',
      backgroundColor: theme.palette.background.paper,
      display: 'block',
      marginLeft: 'auto',
      marginTop: '8vh',
      marginRight: 'auto',
      border: 'none',
      outline: 'none'
    },
    item: {
      boxShadow: '0px 2px 5px 0px #888888'
    },
    inline: {
      display: 'inline',
    },
    fab: {
      margin: theme.spacing(2),
    },
    icon: {
      position: 'absolute',
      bottom: theme.spacing(-4),
      right: theme.spacing(3),
      backgroundColor: '#b03f2f',
      '&:hover': {
        backgroundColor: '#b02828'
      },
      color: 'white',
    },
    modal: {
      position: 'relative',
      marginRight: '1vh',
      cursor: 'pointer',
      color:"grey"
    },
  }))
import { fade, makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
    grow: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexFlow: 'column',
      backgroundColor: '#b02828'
    },
    title: {
      marginRight: '2vh',
      fontWeight: 'lighter'
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      border: 'none',
      outline: 'none',
      backgroundColor: fade(theme.palette.common.white, 0.45),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.45),
      },
      width: '23vh',
      textDecoration: 'none'
    },
    form: {
        border: 'none',
        outline: 'none',
        textDecoration: 'none',
        color: 'white'
    },
    searchIcon: {
      paddingLeft: '18vh',
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }
  }))
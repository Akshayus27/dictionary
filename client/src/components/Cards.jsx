import React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { useStyles } from './styles/CardsStyle'
import CloseIcon from '@material-ui/icons/Close'

//Updating the card component for every word that is been passed as props
export const Cards = ({ word, handleCardClose }) => {
    const classes = useStyles()

    return (
        <React.Fragment>
            <Card className={classes.root}>
                <CardActions>
                    <Button
                        variant="contained"
                        size="medium"
                        onClick={handleCardClose}
                        className={classes.buttonPos}
                    >
                        <CloseIcon />
                    </Button>
                </CardActions>
                <CardContent>
                    <Typography className={classes.pos} variant="h3" component="h2">
                        {word.word}
                    </Typography>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        {word.etymologies}
                    </Typography>
                    <br />
                    {/* Each an every word has two entries, one is the verb/adverb and it's definitions and examples and the other
                    is the noun/adjective and it's definitions and exapmles */}
                    {word.entries.map(entry => {
                        return (
                            <React.Fragment>
                                <Typography color="textSecondary">
                                    {entry.lexicalId}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    {entry.senses.map((sense => {
                                        return (
                                            <React.Fragment>
                                                <Typography variant="h6" component="h4">
                                                    {sense.definitions}
                                                </Typography>
                                                <ul>
                                                    {sense.examples.map(example => {
                                                        return (
                                                            <li>{example.text}</li>
                                                        )
                                                    })}
                                                </ul>
                                            </React.Fragment>
                                        )
                                    }))}
                                </Typography>
                                <br />
                                <br />
                            </React.Fragment>
                        )
                    })}
                </CardContent>
            </Card>
        </React.Fragment>
    )
}

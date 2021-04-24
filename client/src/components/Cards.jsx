import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import { useStyles } from './styles/CardsStyle'
import CloseIcon from '@material-ui/icons/Close'

//Updating the card component for every word that is been passed as props
export const Cards = ({ word, handleCardClose }) => {
    const classes = useStyles()

    return (
        <React.Fragment>
            <Card className={classes.root}>
                <CloseIcon onClick={handleCardClose} className={classes.buttonPos}/>
                <CardContent>
                    <h1 className={classes.pos}>
                        {word.word}
                    </h1>
                    <p className={classes.title}>
                        {word.etymologies}
                    </p>
                    <br />
                    {/* Each an every word has two entries, one is the verb/adverb and it's definitions and examples and the other
                    is the noun/adjective and it's definitions and exapmles */}
                    {word.entries.map(entry => {
                        return (
                            <React.Fragment>
                                <i>
                                    {entry.lexicalId}
                                </i>
                                <div variant="body2" component="p">
                                    {entry.senses.map((sense => {
                                        return (
                                            <React.Fragment>
                                                <h4>
                                                    {sense.definitions}
                                                </h4>
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
                                </div>
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

const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()
const route = require('./routes/router')

const PORT = process.env.PORT || 8080

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/dictionary', route)

const uri = "mongodb+srv://akshayus27:EYoz8dKKld8iC6hR@cluster0.lhyiq.mongodb.net/dictionary?retryWrites=true&w=majority"

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true }, (err) => {
    if (!err) console.log('Connected to the database...')
    else console.log(err)
})

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('./client/build'))
}

app.listen(PORT, () => { console.log(`Server running on port: ${PORT}`) })
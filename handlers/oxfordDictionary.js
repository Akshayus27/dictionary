const Word = require('../models/word')
const axios = require('axios')

//This function is to save your new in the db(mongodb)
exports.wordSave = async function (req, res, next) {
    const authentication = {
        headers: {
            app_id: 'd03375fb',
            app_key: '8bd30569ec878227be4fcf9ff1282fad'
        }
    }

    const wordList = await Word.find({})

    //This is to fetch the singular form the word, say if the user types swimming, this would fetch the singular form of the
    //word i.e., swim.
    const singularWord = await axios.get(`https://od-api.oxforddictionaries.com/api/v2/lemmas/en/${req.params.word}`, authentication)
        .then(res => res.data.results[0].lexicalEntries[0].inflectionOf[0].text)
        .catch(err => 400)
    //If the word entered doesn't exist in the function will return with existing list of words
    if (singularWord === 400) return res.send(wordList)
    
    const wordExists = await Word.findOne({ word: singularWord })
    //If the word entered already exist in the db(mongodb), the function will return with existing list of words
    if (wordExists !== null) return res.send(wordList)
    
    const wordDetails = await axios.get(`https://od-api.oxforddictionaries.com/api/v2/entries/en/${singularWord}`, authentication)
        .then(res => res.data.results[0])
        .catch(err => { return 400 })

    //Extracting the required fields of the word based on our model design of the document
    let word = new Word({
        word: wordDetails.id,
        etymologies: wordDetails.lexicalEntries[0].entries[0].etymologies ? wordDetails.lexicalEntries[0].entries[0].etymologies[0] : '',
        entries: []
    })
    word.entries = [...wordDetails.lexicalEntries.map(entry => ({
        lexicalId: entry.lexicalCategory.id,
        senses: [...entry.entries[0].senses.map(sense => ({
            definitions: sense.definitions[0],
            examples: sense.examples ? [...sense.examples.map(ex => { return { text: ex.text } })] : []
        }))]
    }))]
    word.entries = word.entries.reverse()
    //This will store the word in the db(mongodb)
    await word.save()

    //This is to direct the middleware to the next function that returns the list of all words
    next()
}
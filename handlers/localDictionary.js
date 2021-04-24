const Word = require('../models/word')

//Fetches the list of all the words inside the db(mongodb)
exports.wordList = async function (req, res) {
    const words = await Word.find({})

    res.send(words.reverse())
}
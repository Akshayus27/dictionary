const router = require('express').Router()
const oxford = require('../handlers/oxfordDictionary')
const local = require('../handlers/localDictionary')

//This route/ api call is to add/save your new word to mongodb
router.post('/:word', oxford.wordSave, local.wordList)

//This fetches the list of all the words in local db(mongodb)
router.get('/', local.wordList)

module.exports = router
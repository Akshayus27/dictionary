const mongoose = require('mongoose')

//Model of the word with basic information, definitions and examples 
const Word = new mongoose.Schema({
    word: {
        type: String
    },
    etymologies: {
        type: String
    },
    entries: {
        type: Array,
        senses: {
            type: Array,
            definitions: {
                type: String
            },
            examples: {
                type: String
            }
        },
        lexicalId: {
            type: String
        }
    }
})

module.exports = mongoose.model('Word', Word)
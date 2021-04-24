import axios from 'axios'

//Call the backend to get the list of words
export const getWordsList = async () => {
    const response = await axios.get('/dictionary/')
        .then(res => res.data)
        .catch(err => err.status)

    return response
}

//Post the new word that you want to add
export const addWordToList = async (word) => {
    const response = await axios.post(`/dictionary/${word}`)
        .then(res => res.data)
        .catch(err => err.status)

    return response
}

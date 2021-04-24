const initialState = {
    wordsList: [],
    wordCard: {},
    search: '',
    add_word: '',
    add_gate: false,
    card_id: ''
}

//Reducers for state management
export const dictionaryReducer = (state = initialState, action) => {
    switch(action.type) {
        case "GET_WORDS_LIST":
            return {
                wordsList: action.payload
            }
        case "GET_WORD":
            let word = state.wordsList.filter(word => word._id === action.id)
            return {
                ...state,
                wordCard: word[0]
            }
        case "ADD_WORD":
            return {
                ...state,
                add_word: action.payload
            }
        case "SEARCH_WORD":
            return {
                ...state,
                search: action.payload
            }
        case "OPEN_ADD":
            return {
                ...state,
                add_gate: action.payload
            }
        case "CLOSE_ADD":
            return {
                ...state,
                add_gate: action.payload
            }
        case "SET_CARD_ID":
            return {
                ...state,
                card_id: action.payload
            }
        default:
            return state
    }
}
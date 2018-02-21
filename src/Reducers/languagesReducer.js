export default function reducer(state = {
    fetching_languages: false,
    fetched_languages: false,
    error_languages: null,
    Tx: false
    }, action) {

    switch (action.type) {
        case "FETCH_LANGUAGES_PENDING": {
            return {
                ...state,
                fetching_languages: true
            }
        }
        case "FETCH_LANGUAGES_FULFILLED": {
            return {
                ...state,
                fetching_languages: false,
                fetched_languages: true,
                languages: action.payload
            }
        }
        case "FETCH_LANGUAGES_REJECTED": {
            return {
                ...state,
                fetching_languages: false,
                error_languages: action.payload
            }
        }
        case "SET_LANGUAGE_PENDING": {
            return {
                ...state,
                seting_language: true,
            }
        }
        case "SET_LANGUAGE_FULFILLED": {
            return {
                ...state,
                seting_language: false,
                set_language: true,
                Tx: action.payload
            }
        }
        case "SET_LANGUAGE_REJECTED": {
            return {
                ...state,
                seting_language: false,
                error_language: action.payload
            }
        }
        default:
            return state
    }
}
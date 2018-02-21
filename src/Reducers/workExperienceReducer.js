export default function reducer(state = {
    fetching_work: false,
    fetched_work: false,
    error_work: null,
    Tx: false
    }, action) {

    switch (action.type) {
        case "FETCH_WORK_PENDING": {
            return {
                ...state,
                fetching_work: true,
            }
        }
        case "FETCH_WORK_FULFILLED": {
            return {
                ...state,
                fetching_work: false,
                fetched_work: true,
                workExperience: action.payload
            }
        }
        case "FETCH_WORK_REJECTED": {
            return {
                ...state,
                fetching_work: false,
                error_work: action.payload
            }
        }
        case "SET_WORK_PENDING": {
            return {
                ...state,
                seting_work: true,
            }
        }
        case "SET_WORK_FULFILLED": {
            return {
                ...state,
                seting_work: false,
                set_work: true,
                Tx: action.payload
            }
        }
        case "SET_WORK_REJECTED": {
            return {
                ...state,
                seting_work: false,
                error_work: action.payload
            }
        }
        default:
            return state
    }
}
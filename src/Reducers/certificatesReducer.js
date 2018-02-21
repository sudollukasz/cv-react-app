export default function reducer(state = {
    fetching_certificates: false,
    fetched_certificates: false,
    error_certificates: null,
    Tx: false
    }, action) {

    switch (action.type) {
        case "FETCH_CERTIFICATES_PENDING": {
            return {
                ...state,
                fetching_certificates: true
            }
        }
        case "FETCH_CERTIFICATES_FULFILLED": {
            return {
                ...state,
                fetching_certificates: false,
                fetched_certificates: true,
                certificates: action.payload
            }
        }
        case "FETCH_CERTIFICATES_REJECTED": {
            return {
                ...state,
                fetching_certificates: false,
                error_certificates: action.payload
            }
        }
        case "SET_CERTIFICATE_PENDING": {
            return {
                ...state,
                seting_certificate: true,
            }
        }
        case "SET_CERTIFICATE_FULFILLED": {
            return {
                ...state,
                seting_certificate: false,
                set_certificate: true,
                Tx: action.payload
            }
        }
        case "SET_CERTIFICATE_REJECTED": {
            return {
                ...state,
                seting_certificate: false,
                error_certificate: action.payload
            }
        }
        default:
            return state
    }
}
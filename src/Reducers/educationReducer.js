export default function reducer(
  state = {
    fetching_education: false,
    fetched_education: false,
    error_education: null,
    Tx: false
  },
  action
) {
  switch (action.type) {
    case "FETCH_EDUCATION_PENDING": {
      return {
        ...state,
        fetching_education: true
      };
    }
    case "FETCH_EDUCATION_FULFILLED": {
      return {
        ...state,
        fetching_education: false,
        fetched_education: true,
        education: action.payload
      };
    }
    case "FETCH_EDUCATION_REJECTED": {
      return {
        ...state,
        fetching_education: false,
        error_education: action.payload
      };
    }
    case "SET_EDUCATION_PENDING": {
      return {
        ...state,
        seting_education: true
      };
    }
    case "SET_EDUCATION_FULFILLED": {
      return {
        ...state,
        seting_education: false,
        set_education: true,
        Tx: action.payload
      };
    }
    case "SET_EDUCATION_REJECTED": {
      return {
        ...state,
        seting_education: false,
        error_education: action.payload
      };
    }
    default:
      return state;
  }
}

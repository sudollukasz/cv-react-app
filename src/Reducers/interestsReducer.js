export default function reducer(
  state = {
    fetching_interests: false,
    fetched_interests: false,
    error_interests: null,
    Tx: false
  },
  action
) {
  switch (action.type) {
    case "FETCH_INTERESTS_PENDING": {
      return {
        ...state,
        fetching_interests: true
      };
    }
    case "FETCH_INTERESTS_FULFILLED": {
      return {
        ...state,
        fetching_interests: false,
        fetched_interests: true,
        interests: action.payload
      };
    }
    case "FETCH_INTERESTS_REJECTED": {
      return {
        ...state,
        fetching_interests: false,
        error_interests: action.payload
      };
    }
    case "SET_INTEREST_PENDING": {
      return {
        ...state,
        seting_interest: true
      };
    }
    case "SET_INTEREST_FULFILLED": {
      return {
        ...state,
        seting_interest: false,
        set_interest: true,
        Tx: action.payload
      };
    }
    case "SET_INTEREST_REJECTED": {
      return {
        ...state,
        seting_interest: false,
        error_interest: action.payload
      };
    }
    default:
      return state;
  }
}

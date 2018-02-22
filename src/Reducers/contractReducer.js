export default function reducer(
  state = {
    fetching_owner: false,
    fetched_owner: false,
    error_owner: null
  },
  action
) {
  switch (action.type) {
    case "FETCH_OWNER_PENDING": {
      return {
        ...state,
        fetching_owner: true
      };
    }
    case "FETCH_OWNER_FULFILLED": {
      return {
        ...state,
        fetching_owner: false,
        fetched_owner: true,
        owner: action.payload
      };
    }
    case "FETCH_OWNER_REJECTED": {
      return {
        ...state,
        fetching_owner: false,
        error_owner: action.payload
      };
    }
    default:
      return state;
  }
}

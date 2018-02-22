export default function reducer(
  state = {
    fetching_personal: false,
    fetched_personal: false,
    error_personal: null,
    Tx: false
  },
  action
) {
  switch (action.type) {
    case "FETCH_PERSONAL_PENDING": {
      return {
        ...state,
        fetching_personal: true
      };
    }
    case "FETCH_PERSONAL_FULFILLED": {
      return {
        ...state,
        fetching_personal: false,
        fetched_personal: true,
        personalInfo: action.payload
      };
    }
    case "FETCH_PERSONAL_REJECTED": {
      return {
        ...state,
        fetching_personal: false,
        error_personal: action.payload
      };
    }
    case "SET_PERSONAL_PENDING": {
      return {
        ...state,
        seting_personal: true
      };
    }
    case "SET_PERSONAL_FULFILLED": {
      return {
        ...state,
        seting_personal: false,
        set_personal: true,
        Tx: action.payload,
        new: null
      };
    }
    case "SET_PERSONAL_REJECTED": {
      return {
        ...state,
        seting_personal: false,
        error_personal: action.payload
      };
    }
    default:
      return state;
  }
}

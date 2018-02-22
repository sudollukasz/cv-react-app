import { combineReducers } from "redux";

import certificates from "./certificatesReducer";
import education from "./educationReducer";
import interests from "./interestsReducer";
import languages from "./languagesReducer";
import personal from "./personalInfoReducer";
import work from "./workExperienceReducer";
import contract from "./contractReducer";

export default combineReducers({
  certificates,
  education,
  interests,
  languages,
  personal,
  work,
  contract
});

import { combineReducers } from "redux";

import confessions from './confessions'
import modal from './modal'
import facultyReviews from './facultyReviews'

export default combineReducers({
    confessions,
    facultyReviews,
    modal
})
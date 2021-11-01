import { combineReducers } from "redux";

import confessions from './confessions'
import modal from './modal'
import facultyReviews from './facultyReviews'
import questionBank from "./questionBank";
import eachCourse from './eachCourse';

export default combineReducers({
    confessions,
    facultyReviews,
    questionBank,
    eachCourse,
    modal
})
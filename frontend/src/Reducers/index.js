import { combineReducers } from "redux";

import confessions from './confessions'
import modal from './modal'
import facultyReviews from './facultyReviews'
import questionBank from "./questionBank";
import eachCourse from './eachCourse';
import auth from './auth';
import ideas from "./ideasBlock";

export default combineReducers({
    confessions,
    facultyReviews,
    questionBank,
    eachCourse,
    ideas,
    modal,
    auth
})
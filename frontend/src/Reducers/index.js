import { combineReducers } from "redux";

import confessions from './confessions'
import modal from './modal'
import facultyReviews from './facultyReviews'
import questionBank from "./questionBank";
import eachCourse from './eachCourse';
import auth from './auth';

export default combineReducers({
    confessions,
    facultyReviews,
    questionBank,
    eachCourse,
    modal,
    auth
})
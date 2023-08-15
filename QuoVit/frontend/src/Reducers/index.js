import { combineReducers } from "redux";

import posts from './posts'
import confessions from './confessions'
import modal from './modal'
import facultyReviews from './facultyReviews'
import questionBank from "./questionBank";
import eachCourse from './eachCourse';
import auth from './auth';
import ideas from "./ideasBlock";
import users from "./users";

export default combineReducers({
    posts,
    confessions,
    facultyReviews,
    questionBank,
    eachCourse,
    ideas,
    modal,
    users,
    auth
})
import { combineReducers } from "redux";

import confessions from './confessions'
import modal from './modal'

export default combineReducers({
    confessions,
    modal
})
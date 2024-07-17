import { combineReducers } from "redux";

import postReducer from "./post.reducer";

import userReducer from "./UserSlice";
import UserSlice from "./UserSlice";

export default combineReducers({
    postReducer,

    UserSlice
})
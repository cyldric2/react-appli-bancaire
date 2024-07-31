import { combineReducers } from "redux";

import postReducer from "./post.reducer";
import UserSlice from "./UserSlice";

export default combineReducers({
    postReducer,
    UserSlice
})
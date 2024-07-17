import { EDIT_POST, GET_POSTS } from "../actions/post.action";


const iniialState = {};
export default function postReducer(state = iniialState, action) {
    switch (action.type) {
        case GET_POSTS:
            return action.payload
        case EDIT_POST:
            return action.payload



        default:
            return state


    }
}


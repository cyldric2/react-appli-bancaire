import { GET_POSTS } from "../actions/post.action";


const iniialState = {};
export default function postReducer(state = iniialState, action) {
    switch (action.type) {
        case GET_POSTS:
            return action.payload

        default:
            return state
    }
}


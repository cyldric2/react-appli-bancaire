
import axios from "axios";

export const GET_POSTS = "GET_POSTS"

const token = localStorage.getItem('user')



export const getPosts = () => {

    return (dispatch) => {
        return axios.post("http://localhost:3001/api/v1/user/profile ", {}, {
            headers: { 'Authorization': 'Bearer' + token }
        }).then((res) => {
            dispatch({ type: GET_POSTS, payload: res.data })
        })
    }

}
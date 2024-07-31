
import axios from "axios";


export const EDIT_POST = "EDIT_POST"

const token = localStorage.getItem('user')



export const editPost = (postData) => {
    return (dispatch) => {
        return axios.put(`http://localhost:3001/api/v1/user/profile`, postData, {
            headers: { 'Authorization': 'Bearer' + token }
        }).then((res) => {
            console.log(res.data);
            dispatch({ type: EDIT_POST, payload: res.data })
        })
    }

}
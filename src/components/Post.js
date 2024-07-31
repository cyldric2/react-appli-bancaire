import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { getUserInfos } from "../reducers/post.reducer";
import { editPost } from "../actions/post.action";

const Post = ({ posts }) => {
    const [isOpen, setIsOpen] = useState(true)


    //récupéré le nouveau user
    const userNameNew = useRef()
    const dispatch = useDispatch()
    const token = localStorage.getItem('user')


    const handleform = async (e) => {
        e.preventDefault()
        const postData = {

            userName: userNameNew.current[0].value,

        };

        await dispatch(editPost(postData));
        dispatch(getUserInfos(token));
        userNameNew.current.reset();

    }

    return isOpen ? (
        <div className="header">
            <h1>Welcome back<br />{posts.firstName} {posts.lastName}!</h1>
            <button className="edit-button" onClick={() => setIsOpen(false)}>Edit Name</button>
        </div>
    ) : (
        <div className='edit-user'  >
            <h1>Edit user info</h1>
            <form ref={userNameNew} onSubmit={e => handleform(e)}>
                <h4 className="edit-user-info" > User name :
                    <input className="edit-user-box-white" type=" text" placeholder={posts.userName} />
                </h4>
                <h4 className="edit-user-info">First name :
                    <p className="edit-user-box">{posts.firstName}</p>
                </h4>
                <h4 className="edit-user-info">User name :
                    <p className="edit-user-box">{posts.lastName}</p>
                </h4>
                <input className="edit-button" type="submit" value="save" />
                <button className="edit-button" onClick={() => setIsOpen(true)}>Cancel</button>
            </form>
        </div>
    )
}
export default Post;
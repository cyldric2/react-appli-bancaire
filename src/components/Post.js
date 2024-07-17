import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { editPost } from "../actions/post.action";

const Post = (props) => {
    const [isOpen, setIsOpen] = useState(true)


    //récupéré le nouveau user
    const firstNameNew = useRef()
    const dispatch = useDispatch()



    const handleform = async (e) => {
        e.preventDefault()


        const postData = {

            firstName: firstNameNew.current[0].value,

        };
        dispatch(editPost(postData));
        console.log(firstNameNew);




    }

    return isOpen ? (
        <div className="header">
            <h1>Welcome back<br />{props.firstName} {props.lastName}!</h1>
            <button className="edit-button" onClick={() => setIsOpen(false)}>Edit Name</button>
        </div>
    ) : (
        <div className='edit-user'  >
            <h1>Edit user info</h1>
            <form ref={firstNameNew} onSubmit={e => handleform(e)}>
                <h4 className="edit-user-info" > First name :
                    <input className="edit-user-box-white" type=" text" placeholder={props.firstName} />
                </h4>
                <h4 className="edit-user-info">Last name :
                    <p className="edit-user-box">{props.lastName}</p>
                </h4>
                <h4 className="edit-user-info">User name :
                    <p className="edit-user-box">{props.userName}</p>
                </h4>
                <input className="edit-button" type="submit" value="save" />
                <button className="edit-button" onClick={() => setIsOpen(true)}>Cancel</button>
            </form>
        </div>
    )
}
export default Post;
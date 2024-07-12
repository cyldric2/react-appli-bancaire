import React, { useState } from "react";

const Post = (props) => {
    const [isOpen, setIsOpen] = useState(true)

    return isOpen ? (
        <div className="header">
            <h1>Welcome back<br />{props.firstName} {props.lastName}!</h1>
            <button className="edit-button" onClick={() => setIsOpen(false)}>Edit Name</button>
        </div>
    ) : (
        <div className='edit-user'  >
            <h1>Edit user info</h1>
            <div >
                <h2>{props.email}</h2>
                <h2>{props.firstName}</h2>
                <h2>{props.lastName}</h2>
                <h2>{props.userName}</h2>
                <button className="edit-button" >Save</button>
                <button className="edit-button" onClick={() => setIsOpen(true)}>Cancel</button>
            </div>
        </div>
    )
}
export default Post;
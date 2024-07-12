import React, { useState } from "react";
import Footer from "./components/footer";
import Nav from "./components/nav";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "./reducers/UserSlice";
import { getPosts } from "./actions/post.action";
import store from "./store";



const ModifyUser = () => {

    //redux state
    const { loading, error } = useSelector((state) => state.User)

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleLoginEvent = (e) => {
        e.preventDefault();
        let userCredentials = { email, password }
        dispatch(loginUser(userCredentials)).then((result) => {
            if (result.payload) {
                setEmail('');
                setPassword('');
                navigate('user');
                store.dispatch(getPosts())

            }
        })
    }


    // mémorisation email et mot de passe 
    const [email, setEmail] = useState(() => (localStorage.checkbox ? localStorage.username : ""));
    const [password, setPassword] = useState(() => (localStorage.checkbox ? localStorage.password : ""));


    const loginSubmit = () => {
        if (email !== "") {
            localStorage.username = email;
            localStorage.password = password;

        }
    };

    return (

        <section >
            <FontAwesomeIcon icon={faCircleUser} />
            <h1>Edit user info</h1>
            <form onSubmit={handleLoginEvent}>
                <div className="input-wrapper">
                    <label htmlFor="email">email</label>
                    <input type="text" id="email"
                        value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password"
                        value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div class="input-wrapper">
                    <label for="username">Username</label>
                    <input type="text" id="username" />
                </div>
                <div class="input-wrapper">
                    <label for="password">Password</label>
                    <input type="password" id="password" />
                </div>

                <button className="sign-in-button" onClick={loginSubmit}>
                    {loading ? 'loading ...' : 'login'}
                </button>

                {error && (
                    <div role="alert">{error}</div>
                )}

            </form>
        </section>
    )
}

export default ModifyUser;
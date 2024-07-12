import React, { useState } from "react";
import Footer from "./components/footer";
import Nav from "./components/nav";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "./reducers/UserSlice";




const SignIN = () => {

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


            }
        })
    }


    // mémorisation email et mot de passe 
    const [email, setEmail] = useState(() => (localStorage.checkbox ? localStorage.username : ""));
    const [password, setPassword] = useState(() => (localStorage.checkbox ? localStorage.password : ""));
    const [isChecked, setIsChecked] = useState(() => !!localStorage.checkbox);

    const loginSubmit = () => {
        if (isChecked && email !== "") {
            localStorage.username = email;
            localStorage.password = password;
            localStorage.checkbox = isChecked ? "1" : "";
        }
    };

    return (
        <div className="bg-dark">
            <Nav sign="Sign In" to="/" />
            <main >
                <section className="sign-in-content">
                    <FontAwesomeIcon icon={faCircleUser} />
                    <h1>Sign In</h1>
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
                        <div className="input-remember">
                            <input
                                type="checkbox"
                                checked={isChecked}
                                name="lsRememberMe"
                                onChange={(e) => setIsChecked(e.target.checked)}
                            />
                            <label>Remember me</label>
                        </div>
                        <button className="sign-in-button" onClick={loginSubmit}>
                            {loading ? 'loading ...' : 'login'}
                        </button>

                        {error && (
                            <div role="alert">{error}</div>
                        )}

                    </form>
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default SignIN;
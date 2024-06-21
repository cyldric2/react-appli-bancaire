import React from "react";
import Footer from "./components/footer";
import Nav from "./components/nav";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";

const SignIN = () => {

    return (
        <div >
            <Nav sign="Sign In" />
            <main class="main bg-dark">
                <section class="sign-in-content">
                    <FontAwesomeIcon icon="fa-solid fa-circle-user" />
                    <h1>Sign In</h1>
                    <form>
                        <div class="input-wrapper">
                            <label for="username">Username</label>
                            <input type="text" id="username" />
                        </div>
                        <div class="input-wrapper">
                            <label for="password">Password</label>
                            <input type="password" id="password" />
                        </div>
                        <div class="input-remember">
                            <input type="checkbox" id="remember-me" />
                            <label for="remember-me">Remember me</label>
                        </div>
                        <Link to="user" class="sign-in-button">Sign In</Link>
                    </form>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default SignIN;
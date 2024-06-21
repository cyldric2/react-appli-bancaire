import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import bancLogo from '../img/argentBankLogo.png';
import { Link } from "react-router-dom";



const Nav = (props) => {
    console.log(props);

    return (

        <nav class="main-nav">

            <Link to="/" class="main-nav-logo" >

                <img
                    class="main-nav-logo-image"
                    src={bancLogo}
                    alt="Argent Bank Logo"
                />
                <h1 class="sr-only">Argent Bank</h1>
            </Link>
            <div>
                <a>
                    <FontAwesomeIcon icon="fa-solid fa-circle-user" />
                    {props.name}
                </a>
                <Link to="signIn" class="main-nav-item"   >
                    {props.sign}
                </Link>
            </div>

        </nav >

    );
};

export default Nav;
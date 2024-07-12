import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import bancLogo from '../img/argentBankLogo.png';
import { Link } from "react-router-dom";



const Nav = (props) => {


    return (

        <nav className="main-nav">

            <Link to="/" className="main-nav-logo" >

                <img
                    className="main-nav-logo-image"
                    src={bancLogo}
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
            <div>
                <FontAwesomeIcon icon={faCircleUser} />
                <a>
                    {props.name}
                </a>
                {props.icone && <FontAwesomeIcon icon={props.icone} />}
                <Link to={props.to} className="main-nav-item"   >
                    {props.sign}
                </Link>
            </div>

        </nav >

    );
};

export default Nav;
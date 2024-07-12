import React from "react";




const Feature = (props) => {

    return (
        <div className="feature-item">
            <img src={props.src} alt="Chat Icon" className="feature-icon" />
            <h3 className="feature-item-title">{props.title}</h3>
            {props.children}
        </div>
    );
};

export default Feature;
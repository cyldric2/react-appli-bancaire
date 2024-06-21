import React from "react";




const Feature = (props) => {

    return (
        <div class="feature-item">
            <img src={props.src} alt="Chat Icon" class="feature-icon" />
            <h3 class="feature-item-title">{props.title}</h3>
            {props.children}
        </div>
    );
};

export default Feature;
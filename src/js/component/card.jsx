import React from "react";

const Card = ({ image, text, titulo, buttonText, link }) => {
    return (

        <div className="card col-sm-12 col-md-6 col-lg-3 p-2">
            <img className="cart-imge" src={image} />
            <div className="cart-body ">
                <h4 className="titulos">{titulo}</h4>
                <p className="cart-text ">{text}</p>
                <a href={link} className="mb-4 btn ">{buttonText}</a>

            </div>
        </div>
    );
}

export default Card; 